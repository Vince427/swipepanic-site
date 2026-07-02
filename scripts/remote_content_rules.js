'use strict';

const fs = require('fs');
const path = require('path');

const LOCALES = ['fr', 'en', 'es', 'de', 'nl', 'pt'];
const MODES = new Set(['classic', 'quiz', 'social']);
const CARD_TYPES = new Set(['red_flag', 'green_flag']);
// Content-sensitivity tiers, mirrors LiveTier (app: lib/domain/model/live_tier.dart).
// Only safe/debate may appear in a PUBLIC live pack; risky/forbidden are filtered out.
const LIVE_TIERS = new Set(['safe', 'debate', 'risky', 'forbidden']);
const LIVE_TIERS_EXCLUDED = new Set(['risky', 'forbidden']);

const SIZE_LIMITS = {
  'manifest.json': 16 * 1024,
  'daily.json': 32 * 1024,
  'cards_patch.json': 512 * 1024,
  'blacklist.txt': 64 * 1024,
  'blacklist.json': 128 * 1024,
  'daily_pool.json': 256 * 1024,
  'official_card_catalog.json': 128 * 1024
};

function repoRoot() {
  return path.resolve(__dirname, '..');
}

function readText(relativePath) {
  const absolutePath = path.join(repoRoot(), relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${relativePath}: missing`);
  }
  const bytes = fs.statSync(absolutePath).size;
  const limit = SIZE_LIMITS[relativePath] || 512 * 1024;
  if (bytes > limit) {
    throw new Error(`${relativePath}: too_large (${bytes} > ${limit})`);
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function readJson(relativePath) {
  try {
    return JSON.parse(readText(relativePath));
  } catch (error) {
    throw new Error(`${relativePath}: invalid_json (${error.message})`);
  }
}

function writeJson(relativePath, value) {
  const absolutePath = path.join(repoRoot(), relativePath);
  fs.writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`);
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertPositiveInt(value, label) {
  assert(Number.isInteger(value) && value > 0, `${label}: expected_positive_int`);
}

function assertLocalizedStrings(value, label, maxLength = 180) {
  assert(isPlainObject(value), `${label}: expected_object`);
  for (const locale of LOCALES) {
    const text = value[locale];
    assert(typeof text === 'string', `${label}.${locale}: expected_string`);
    const trimmed = text.trim();
    assert(trimmed.length > 0, `${label}.${locale}: empty`);
    assert(trimmed.length <= maxLength, `${label}.${locale}: too_long`);
  }
}

function assertStringList(value, label, options = {}) {
  assert(Array.isArray(value), `${label}: expected_array`);
  if (options.nonEmpty) {
    assert(value.length > 0, `${label}: empty`);
  }
  if (options.maxItems) {
    assert(value.length <= options.maxItems, `${label}: too_many_items`);
  }
  const seen = new Set();
  for (const item of value) {
    assert(typeof item === 'string', `${label}: item_not_string`);
    const trimmed = item.trim();
    assert(trimmed.length > 0, `${label}: empty_item`);
    assert(trimmed === item, `${label}.${item}: surrounding_whitespace`);
    assert(trimmed.length <= (options.maxLength || 160), `${label}.${item}: too_long`);
    assert(!seen.has(trimmed), `${label}.${item}: duplicate`);
    seen.add(trimmed);
  }
}

function assertSafeReviewed(value, label) {
  assert(isPlainObject(value), `${label}: expected_locale_map`);
  for (const locale of LOCALES) {
    assert(value[locale] === true, `${label}.${locale}: not_true`);
  }
}

function validateOfficialCardCatalog(catalog, errors = []) {
  try {
    assert(isPlainObject(catalog), 'official_card_catalog.json: expected_object');
    if (catalog.version !== undefined) {
      assertPositiveInt(catalog.version, 'official_card_catalog.version');
    }
    assert(Array.isArray(catalog.cards), 'official_card_catalog.cards: expected_array');
    assert(catalog.cards.length <= 1000, 'official_card_catalog.cards: too_many_items');
    const ids = new Set();
    for (const [index, card] of catalog.cards.entries()) {
      const label = `official_card_catalog.cards[${index}]`;
      assert(isPlainObject(card), `${label}: expected_object`);
      assert(typeof card.id === 'string' && card.id.trim() === card.id && card.id, `${label}.id: invalid`);
      assert(!ids.has(card.id), `${label}.id: duplicate`);
      ids.add(card.id);
      assert(MODES.has(card.mode), `${label}.mode: invalid`);
      if (card.live_tier !== undefined) {
        assert(
          card.live_tier === 'safe' ||
            card.live_tier === 'debate' ||
            card.live_tier === 'risky' ||
            card.live_tier === 'forbidden',
          `${label}.live_tier: invalid_live_tier`
        );
      }
    }
    catalog.__byId = new Map(catalog.cards.map((card) => [card.id, card]));
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function isRelativeContentPath(value, extensions) {
  if (typeof value !== 'string' || value.trim() !== value || value.length === 0) {
    return false;
  }
  if (value.startsWith('/') || value.startsWith('\\') || value.includes('\\')) {
    return false;
  }
  if (value.includes('?') || value.includes('#')) {
    return false;
  }
  let url;
  try {
    url = new URL(value, 'https://swipepanic.app/');
  } catch (_) {
    return false;
  }
  if (url.origin !== 'https://swipepanic.app') {
    return false;
  }
  if (value.includes('://') || value.startsWith('//')) {
    return false;
  }
  const segments = value.split(/[?#]/)[0].split('/');
  if (segments.includes('..')) {
    return false;
  }
  return extensions.some((extension) => url.pathname.endsWith(extension));
}

function dateParts(dateText) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText);
  assert(match, `date: invalid_date (${dateText})`);
  const date = new Date(`${dateText}T00:00:00Z`);
  assert(!Number.isNaN(date.getTime()), `date: invalid_date (${dateText})`);
  assert(date.toISOString().slice(0, 10) === dateText, `date: invalid_date (${dateText})`);
  return {
    date,
    slug: `${match[1]}_${match[2]}_${match[3]}`
  };
}

function stableDayNumber(dateText) {
  return Math.floor(dateParts(dateText).date.getTime() / 86400000);
}

function isoWeekParts(dateText) {
  const { date } = dateParts(dateText);
  const target = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - day);
  const weekYear = target.getUTCFullYear();
  const yearStart = new Date(Date.UTC(weekYear, 0, 1));
  const week = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

  const monday = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  monday.setUTCDate(monday.getUTCDate() - day + 1);
  const mondayText = monday.toISOString().slice(0, 10);
  const weekSlug = `${weekYear}_${String(week).padStart(2, '0')}`;
  const weekIndex = Math.floor(monday.getTime() / 604800000);
  return { mondayText, weekSlug, weekIndex };
}

function rotate(values, offset) {
  if (values.length === 0) {
    return [];
  }
  const normalized = ((offset % values.length) + values.length) % values.length;
  return values.slice(normalized).concat(values.slice(0, normalized));
}

function validateManifest(manifest, errors = []) {
  try {
    assert(isPlainObject(manifest), 'manifest.json: expected_object');
    assertPositiveInt(manifest.version, 'manifest.version');
    if (manifest.min_app_version !== undefined) {
      assert(
        typeof manifest.min_app_version === 'string' &&
          /^\d+\.\d+\.\d+([+-][0-9A-Za-z.-]+)?$/.test(manifest.min_app_version),
        'manifest.min_app_version: invalid_semver'
      );
    }
    const paths = {
      daily_url: ['.json'],
      cards_patch_url: ['.json'],
      blacklist_url: ['.txt'],
      blacklist_json_url: ['.json']
    };
    for (const [key, extensions] of Object.entries(paths)) {
      if (manifest[key] === undefined) {
        continue;
      }
      assert(
        isRelativeContentPath(manifest[key], extensions),
        `manifest.${key}: must_be_relative_${extensions.join('_or_')}`
      );
      assert(fs.existsSync(path.join(repoRoot(), manifest[key])), `manifest.${key}: target_missing`);
    }
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function validateCardsPatch(patch, errors = []) {
  try {
    assert(isPlainObject(patch), 'cards_patch.json: expected_object');
    assertPositiveInt(patch.version, 'cards_patch.version');
    if (patch.updated_at !== undefined) {
      assert(typeof patch.updated_at === 'string', 'cards_patch.updated_at: expected_string');
    }
    assert(Array.isArray(patch.cards), 'cards_patch.cards: expected_array');
    assert(patch.cards.length <= 200, 'cards_patch.cards: too_many_items');
    const ids = new Set();
    for (const [index, card] of patch.cards.entries()) {
      const label = `cards_patch.cards[${index}]`;
      assert(isPlainObject(card), `${label}: expected_object`);
      assert(typeof card.id === 'string' && card.id.trim() === card.id && card.id, `${label}.id: invalid`);
      assert(!ids.has(card.id), `${label}.id: duplicate`);
      ids.add(card.id);
      assert(typeof card.pack_id === 'string' && card.pack_id.trim() === card.pack_id && card.pack_id, `${label}.pack_id: invalid`);
      if (card.mode !== undefined) {
        assert(MODES.has(card.mode), `${label}.mode: invalid`);
      }
      assert(typeof card.theme === 'string' && card.theme.trim() === card.theme && card.theme, `${label}.theme: invalid`);
      assert(CARD_TYPES.has(card.type), `${label}.type: invalid`);
      assert(Number.isInteger(card.difficulty) && card.difficulty >= 1 && card.difficulty <= 5, `${label}.difficulty: invalid`);
      assert(card.enabled === true, `${label}.enabled: must_be_true`);
      if (card.live_tier !== undefined) {
        assert(LIVE_TIERS.has(card.live_tier), `${label}.live_tier: invalid`);
      }
      assertSafeReviewed(card.safe_reviewed, `${label}.safe_reviewed`);
      assertLocalizedStrings(card.texts, `${label}.texts`, 180);
    }
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function validateBlacklistJson(blacklist, errors = []) {
  try {
    assert(isPlainObject(blacklist), 'blacklist.json: expected_object');
    if (blacklist.version !== undefined) {
      assertPositiveInt(blacklist.version, 'blacklist.version');
    }
    const consumedKeys = ['entries', 'cards', 'packs', 'devices', 'keywords'];
    let hasList = false;
    for (const key of consumedKeys) {
      if (blacklist[key] === undefined) {
        continue;
      }
      assertStringList(blacklist[key], `blacklist.${key}`, {
        maxItems: 500,
        maxLength: 120
      });
      hasList = true;
    }
    assert(hasList, 'blacklist.json: missing_consumed_list');
    const allowed = new Set(['version', 'updated_at', ...consumedKeys]);
    for (const key of Object.keys(blacklist)) {
      assert(allowed.has(key), `blacklist.json.${key}: unconsumed_key`);
    }
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function validateDailyPool(poolFile, catalog, patch, errors = []) {
  try {
    assert(isPlainObject(poolFile), 'daily_pool.json: expected_object');
    assertPositiveInt(poolFile.version, 'daily_pool.version');
    assert(Array.isArray(poolFile.pools), 'daily_pool.pools: expected_array');
    assert(poolFile.pools.length > 0, 'daily_pool.pools: empty');
    assert(poolFile.pools.length <= 30, 'daily_pool.pools: too_many_items');
    const ids = new Set();
    const allCardIds = new Set();
    for (const [index, pool] of poolFile.pools.entries()) {
      const label = `daily_pool.pools[${index}]`;
      assert(isPlainObject(pool), `${label}: expected_object`);
      assert(typeof pool.id === 'string' && pool.id.trim() === pool.id && pool.id, `${label}.id: invalid`);
      assert(!ids.has(pool.id), `${label}.id: duplicate`);
      ids.add(pool.id);
      assert(MODES.has(pool.mode), `${label}.mode: invalid`);
      assert(Number.isInteger(pool.maxCards) && pool.maxCards > 0 && pool.maxCards <= 50, `${label}.maxCards: invalid`);
      assertSafeReviewed(pool.safe_reviewed, `${label}.safe_reviewed`);
      assertLocalizedStrings(pool.title, `${label}.title`, 80);
      assertLocalizedStrings(pool.subtitle, `${label}.subtitle`, 180);
      assertStringList(pool.cardIds, `${label}.cardIds`, {
        nonEmpty: true,
        maxItems: 100,
        maxLength: 120
      });
      assert(pool.cardIds.length >= pool.maxCards, `${label}.cardIds: fewer_than_maxCards`);
      for (const cardId of pool.cardIds) {
        if (catalog || patch) {
          const catalogCard = catalog && catalog.__byId ? catalog.__byId.get(cardId) : null;
          const patchCard = patch && Array.isArray(patch.cards)
            ? patch.cards.find((card) => card && card.id === cardId)
            : null;
          const mode = catalogCard ? catalogCard.mode : patchCard ? patchCard.mode : null;
          assert(catalogCard || patchCard, `${label}.cardIds.${cardId}: unknown_official_card`);
          assert(!mode || mode === pool.mode, `${label}.cardIds.${cardId}: mode_mismatch`);
        }
        allCardIds.add(cardId);
      }
    }
    poolFile.__allDailyPoolCardIds = allCardIds;
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function validateDaily(daily, poolFile, patch, errors = []) {
  try {
    assert(isPlainObject(daily), 'daily.json: expected_object');
    if (daily.version !== undefined) {
      assertPositiveInt(daily.version, 'daily.version');
    }
    assert(typeof daily.id === 'string' && daily.id.trim() === daily.id && daily.id, 'daily.id: invalid');
    assert(typeof daily.date === 'string', 'daily.date: expected_string');
    dateParts(daily.date);
    assert(MODES.has(daily.mode), 'daily.mode: invalid');
    assert(Number.isInteger(daily.maxCards) && daily.maxCards > 0 && daily.maxCards <= 50, 'daily.maxCards: invalid');
    assertLocalizedStrings(daily.title, 'daily.title', 80);
    assertLocalizedStrings(daily.subtitle, 'daily.subtitle', 180);
    assertStringList(daily.cardIds, 'daily.cardIds', {
      nonEmpty: true,
      maxItems: 100,
      maxLength: 120
    });
    assert(daily.cardIds.length >= daily.maxCards, 'daily.cardIds: fewer_than_maxCards');

    const publicIds = new Set(poolFile && poolFile.__allDailyPoolCardIds ? poolFile.__allDailyPoolCardIds : []);
    if (patch && Array.isArray(patch.cards)) {
      for (const card of patch.cards) {
        if (card && typeof card.id === 'string') {
          publicIds.add(card.id);
        }
      }
    }
    for (const cardId of daily.cardIds) {
      assert(publicIds.has(cardId), `daily.cardIds.${cardId}: not_in_public_pool`);
    }

    if (daily.liveStartDate !== undefined) {
      assert(typeof daily.liveStartDate === 'string', 'daily.liveStartDate: expected_string');
      assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(daily.liveStartDate), 'daily.liveStartDate: invalid_iso_date');
      assert(!Number.isNaN(new Date(daily.liveStartDate).getTime()), 'daily.liveStartDate: invalid_date');
    }
    if (daily.liveEndDate !== undefined) {
      assert(typeof daily.liveEndDate === 'string', 'daily.liveEndDate: expected_string');
      assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(daily.liveEndDate), 'daily.liveEndDate: invalid_iso_date');
      assert(!Number.isNaN(new Date(daily.liveEndDate).getTime()), 'daily.liveEndDate: invalid_date');
    }
    if (daily.liveTime !== undefined) {
      assert(typeof daily.liveTime === 'string', 'daily.liveTime: expected_string');
      assert(daily.liveTime.trim().length > 0, 'daily.liveTime: empty');
      assert(daily.liveTime.length <= 40, 'daily.liveTime: too_long');
    }
    if (daily.streamerVotes !== undefined) {
      assert(isPlainObject(daily.streamerVotes), 'daily.streamerVotes: expected_object');
      for (const [cardId, vote] of Object.entries(daily.streamerVotes)) {
        assert(daily.cardIds.includes(cardId), `daily.streamerVotes.${cardId}: not_in_cardIds`);
        assert(vote === 'accept' || vote === 'reject', `daily.streamerVotes.${cardId}: invalid_vote_value`);
      }
    }
  } catch (error) {
    errors.push(error.message);
  }
  return errors;
}

function buildDailyForDate(poolFile, dateText, catalog = null, patch = null, liveEvent = null, liveConsensus = null) {
  const errors = validateDailyPool(poolFile, catalog, patch, []);
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
  const { mondayText, weekSlug, weekIndex } = isoWeekParts(dateText);
  const pools = poolFile.pools;
  const pool = pools[weekIndex % pools.length];
  // Step by a full window (weekIndex * maxCards) so consecutive picks of the
  // same pool are non-overlapping instead of drifting one card per week.
  const baseCardIds = rotate(pool.cardIds, weekIndex * pool.maxCards).slice(0, pool.maxCards);
  
  // Filter by live_tier safety: exclude risky and forbidden cards
  const cardIds = baseCardIds.filter((cardId) => {
    const catalogCard = catalog && catalog.__byId ? catalog.__byId.get(cardId) : null;
    if (catalogCard && catalogCard.live_tier) {
      return catalogCard.live_tier === 'safe' || catalogCard.live_tier === 'debate';
    }
    return true;
  });
  const maxCards = cardIds.length;

  const result = {
    version: 1,
    id: `weekly_${weekSlug}_${pool.mode}`,
    date: mondayText,
    cadence: 'weekly',
    mode: pool.mode,
    maxCards: maxCards,
    title: pool.title,
    subtitle: pool.subtitle,
    cardIds
  };

  if (liveEvent) {
    if (typeof liveEvent.liveStartDate === 'string' && liveEvent.liveStartDate.trim()) {
      result.liveStartDate = liveEvent.liveStartDate.trim();
    }
    if (typeof liveEvent.liveEndDate === 'string' && liveEvent.liveEndDate.trim()) {
      result.liveEndDate = liveEvent.liveEndDate.trim();
    }
    if (typeof liveEvent.liveTime === 'string' && liveEvent.liveTime.trim()) {
      result.liveTime = liveEvent.liveTime.trim();
    }
  }

  if (liveConsensus) {
    const streamerVotes = {};
    let hasVotes = false;
    for (const cardId of cardIds) {
      const votes = liveConsensus[cardId];
      if (votes && typeof votes.accept === 'number' && typeof votes.reject === 'number') {
        if (votes.accept > votes.reject) {
          streamerVotes[cardId] = 'accept';
          hasVotes = true;
        } else if (votes.reject > votes.accept) {
          streamerVotes[cardId] = 'reject';
          hasVotes = true;
        } else {
          streamerVotes[cardId] = 'reject';
          hasVotes = true;
        }
      }
    }
    if (hasVotes) {
      result.streamerVotes = streamerVotes;
    }
  }

  return result;
}

module.exports = {
  LOCALES,
  buildDailyForDate,
  readJson,
  readText,
  validateBlacklistJson,
  validateCardsPatch,
  validateDaily,
  validateDailyPool,
  validateOfficialCardCatalog,
  validateManifest,
  writeJson
};
