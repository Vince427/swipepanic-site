#!/usr/bin/env node
/**
 * Aggregates raw web votes into the consensus file.
 *
 * There is no database anywhere in this pipeline. Votes land in a Google Form
 * response sheet - a public, token-free inbox - this script reads the published
 * CSV, aggregates, and the result is committed. Git stays the record.
 *
 * Because that inbox is anonymous and unauthenticated, the raw feed is treated
 * as hostile: anything absent from the catalog is dropped, and volume is capped
 * before it can move a percentage. Everything dropped is REPORTED, never
 * silently swallowed - a filter you cannot see is a filter you cannot trust.
 *
 * Contract: swipepanic/.agent/specs/CONSENSUS_CONTRACT.md
 */

'use strict';

const MIN_SAMPLE_GLOBAL = 30;
const MIN_SAMPLE_COUNTRY = 15;

/** Beyond this, one card in one day stopped being organic. */
const MAX_VOTES_PER_CARD_PER_DAY = 500;
/** Same card, same country, same second: a script, not a crowd. */
const MAX_VOTES_PER_SECOND = 5;

const PUBLISHABLE_SOURCES = ['live_votes', 'web_votes'];

/**
 * Minimal RFC-4180 CSV parser: quoted fields, escaped quotes, embedded commas
 * and newlines. Card text can contain any of those.
 */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((cells) => cells.some((cell) => cell.trim().length > 0));
}

function toRecords(csvText) {
  const rows = parseCsv(csvText);
  if (rows.length === 0) return [];

  const header = rows[0].map((name) => name.trim().toLowerCase());
  return rows.slice(1).map((cells) => {
    const record = {};
    header.forEach((key, index) => {
      record[key] = (cells[index] || '').trim();
    });
    return record;
  });
}

function dayOf(timestamp) {
  const parsed = Date.parse(timestamp);
  if (Number.isNaN(parsed)) return 'unknown';
  return new Date(parsed).toISOString().slice(0, 10);
}

function secondOf(timestamp) {
  const parsed = Date.parse(timestamp);
  if (Number.isNaN(parsed)) return 'unknown';
  return new Date(parsed).toISOString().slice(0, 19);
}

const FLAG_PATTERN = /^[\u{1F1E6}-\u{1F1FF}]{2}$/u;

/**
 * @param {Array<Object>} records raw rows: card_id, choice, country, timestamp
 * @param {Set<string>} knownCardIds ids the public catalog actually serves
 */
function aggregateWebVotes(records, knownCardIds, options = {}) {
  const maxPerDay = options.maxVotesPerCardPerDay ?? MAX_VOTES_PER_CARD_PER_DAY;
  const maxPerSecond = options.maxVotesPerSecond ?? MAX_VOTES_PER_SECOND;
  const now = options.now || new Date().toISOString();

  const dropped = {
    unknownCard: 0,
    invalidChoice: 0,
    invalidCountry: 0,
    dailyCap: 0,
    burst: 0,
  };

  const perDay = new Map();
  const perSecond = new Map();
  const tally = new Map();

  for (const record of records) {
    const cardId = record.card_id;
    const choice = record.choice;
    const country = record.country || '';
    const timestamp = record.timestamp || record.horodateur || '';

    if (!cardId || !knownCardIds.has(cardId)) {
      dropped.unknownCard++;
      continue;
    }
    if (choice !== 'accept' && choice !== 'reject') {
      dropped.invalidChoice++;
      continue;
    }
    // A flag emoji is exactly two regional indicator symbols. Anything else is
    // noise, and noise must never become a country.
    if (country && !FLAG_PATTERN.test(country)) {
      dropped.invalidCountry++;
      continue;
    }

    const dayKey = `${cardId}|${dayOf(timestamp)}`;
    const dayCount = (perDay.get(dayKey) || 0) + 1;
    perDay.set(dayKey, dayCount);
    if (dayCount > maxPerDay) {
      dropped.dailyCap++;
      continue;
    }

    const secondKey = `${cardId}|${country}|${secondOf(timestamp)}`;
    const secondCount = (perSecond.get(secondKey) || 0) + 1;
    perSecond.set(secondKey, secondCount);
    if (secondCount > maxPerSecond) {
      dropped.burst++;
      continue;
    }

    if (!tally.has(cardId)) {
      tally.set(cardId, { accept: 0, reject: 0, countries: new Map(), last: '' });
    }
    const entry = tally.get(cardId);
    entry[choice]++;
    if (timestamp > entry.last) entry.last = timestamp;

    if (country) {
      if (!entry.countries.has(country)) {
        entry.countries.set(country, { accept: 0, reject: 0 });
      }
      entry.countries.get(country)[choice]++;
    }
  }

  const consensus = {};
  let belowThreshold = 0;

  for (const [cardId, entry] of tally.entries()) {
    const total = entry.accept + entry.reject;
    if (total < MIN_SAMPLE_GLOBAL) {
      belowThreshold++;
      continue;
    }

    const acceptPercent = Math.round((entry.accept / total) * 100);
    const countries = {};
    for (const [flag, counts] of entry.countries.entries()) {
      const countryTotal = counts.accept + counts.reject;
      // Below the threshold the country is OMITTED, never given the world
      // figure. An absence of data is not a result.
      if (countryTotal < MIN_SAMPLE_COUNTRY) continue;
      const countryAccept = Math.round((counts.accept / countryTotal) * 100);
      countries[flag] = {
        accept: countryAccept,
        reject: 100 - countryAccept,
        sample_size: countryTotal,
      };
    }

    const lastSeen = Date.parse(entry.last);

    consensus[cardId] = {
      accept: acceptPercent,
      reject: 100 - acceptPercent,
      sample_size: total,
      measured_at: Number.isNaN(lastSeen) ? now : new Date(lastSeen).toISOString(),
      source: 'web_votes',
      ...(Object.keys(countries).length > 0 ? { countries } : {}),
    };
  }

  return { consensus, dropped, belowThreshold, measuredCards: Object.keys(consensus).length };
}

/**
 * Merges freshly aggregated web votes into what is already published.
 *
 * When a card carries both live and web votes the samples are SUMMED and the
 * per-source breakdown is kept in `sources`, so no origin disappears behind a
 * single label. `source` keeps the dominant one for readers that only know the
 * plain v2 field.
 */
function mergeConsensus(existing, incoming) {
  const merged = { ...existing };

  for (const [cardId, fresh] of Object.entries(incoming)) {
    const current = existing[cardId];

    const currentIsMeasured =
      current &&
      Number.isInteger(current.sample_size) &&
      current.sample_size > 0 &&
      PUBLISHABLE_SOURCES.includes(current.source);

    // A legacy or unqualified entry is REPLACED by a real measurement rather
    // than averaged with it: you cannot average with something never measured.
    if (!currentIsMeasured) {
      merged[cardId] = fresh;
      continue;
    }

    const sources = { ...(current.sources || { [current.source]: current.sample_size }) };
    sources.web_votes = (sources.web_votes || 0) + fresh.sample_size;

    const totalSample = Object.values(sources).reduce((sum, count) => sum + count, 0);
    const currentAccepts = Math.round((current.accept / 100) * current.sample_size);
    const freshAccepts = Math.round((fresh.accept / 100) * fresh.sample_size);
    const accept = Math.round(((currentAccepts + freshAccepts) / totalSample) * 100);

    const dominant = Object.entries(sources).sort((a, b) => b[1] - a[1])[0][0];

    merged[cardId] = {
      ...current,
      accept,
      reject: 100 - accept,
      sample_size: totalSample,
      measured_at: fresh.measured_at,
      source: dominant,
      sources,
      ...(fresh.countries
        ? { countries: { ...(current.countries || {}), ...fresh.countries } }
        : {}),
    };
  }

  return merged;
}

function formatReport(result) {
  const lines = [
    `[web-votes] measured cards: ${result.measuredCards}`,
    `[web-votes] below threshold (kept out): ${result.belowThreshold}`,
  ];
  for (const [reason, count] of Object.entries(result.dropped)) {
    if (count > 0) lines.push(`[web-votes] dropped ${reason}: ${count}`);
  }
  return lines.join('\n');
}

module.exports = {
  MIN_SAMPLE_GLOBAL,
  MIN_SAMPLE_COUNTRY,
  MAX_VOTES_PER_CARD_PER_DAY,
  MAX_VOTES_PER_SECOND,
  parseCsv,
  toRecords,
  aggregateWebVotes,
  mergeConsensus,
  formatReport,
};

// ---------------------------------------------------------------------------
// CLI: node scripts/aggregate_web_votes.js
// Reads vote_config.json, fetches the published CSV, merges, writes the file.
// ---------------------------------------------------------------------------
if (require.main === module) {
  const fs = require('fs');
  const path = require('path');

  const root = path.join(__dirname, '..');
  const configPath = path.join(root, 'vote_config.json');

  if (!fs.existsSync(configPath)) {
    console.log('[web-votes] vote_config.json absent - nothing to aggregate.');
    process.exit(0);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!config.responsesCsvUrl || config.responsesCsvUrl.includes('REPLACE')) {
    console.log('[web-votes] responsesCsvUrl not configured - nothing to aggregate.');
    process.exit(0);
  }

  const catalog = JSON.parse(
    fs.readFileSync(path.join(root, 'official_card_catalog.json'), 'utf8'),
  );
  const knownCardIds = new Set(Object.keys(catalog.cards_by_id || {}));

  const consensusPath = path.join(root, 'data', 'live_consensus.json');
  const existing = fs.existsSync(consensusPath)
    ? JSON.parse(fs.readFileSync(consensusPath, 'utf8'))
    : {};

  fetch(config.responsesCsvUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    })
    .then((csv) => {
      const result = aggregateWebVotes(toRecords(csv), knownCardIds);
      console.log(formatReport(result));

      const merged = mergeConsensus(existing, result.consensus);
      fs.writeFileSync(consensusPath, `${JSON.stringify(merged, null, 2)}\n`, 'utf8');
      console.log(`[web-votes] wrote ${Object.keys(merged).length} entries.`);
    })
    .catch((error) => {
      // A collector outage must not fail the whole workflow: the previous
      // consensus stays published, untouched.
      console.error(`[web-votes] aggregation skipped: ${error.message}`);
      process.exit(0);
    });
}
