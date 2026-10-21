'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

test('daily dilemma translation keys exist in all six supported languages', () => {
  const siteJs = fs.readFileSync(path.join(ROOT, 'site.js'), 'utf8');
  const requiredKeys = [
    'navDailyDilemma',
    'dailyDilemmaBadge',
    'dilemmaAccept',
    'dilemmaReject',
    'dailyYourVote',
    'dailyConsensusAccept',
    'dailyConsensusReject',
    'dailyConsensusSample',
    'dailyDilemmaCtaSubtitle',
    'dailyDilemmaStoreCta',
    'almanacTitle',
    'almanacSubtitle',
    'almanacLegendGreen',
    'almanacLegendRed',
    'almanacLegendMissed',
    'almanacMoodBenevolent',
    'almanacMoodUncompromising',
    'almanacMoodBalanced',
    'almanacMoodUnknown',
    'almanacStreakCount',
    'cl184changes',
  ];
  const languages = ['fr', 'en', 'es', 'de', 'nl', 'pt'];

  for (const lang of languages) {
    for (const key of requiredKeys) {
      assert.match(
        siteJs,
        new RegExp(`"${key}":\\s*"`),
        `Missing key ${key} in site.js`
      );
    }
  }
});

test('index.html contains the daily dilemma section and accessibility attributes', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  assert.ok(html.includes('id="daily-dilemma"'), 'Missing #daily-dilemma section');
  assert.ok(html.includes('id="daily-dilemma-text"'), 'Missing #daily-dilemma-text');
  assert.ok(html.includes('id="daily-vote-accept"'), 'Missing #daily-vote-accept button');
  assert.ok(html.includes('id="daily-vote-reject"'), 'Missing #daily-vote-reject button');
  assert.ok(html.includes('id="daily-dilemma-verdict"'), 'Missing #daily-dilemma-verdict');
  assert.ok(html.includes('id="daily-bar-accept"'), 'Missing #daily-bar-accept');
  assert.ok(html.includes('id="daily-bar-reject"'), 'Missing #daily-bar-reject');
  assert.ok(html.includes('id="daily-country-breakdown"'), 'Missing #daily-country-breakdown');
  assert.ok(html.includes('id="daily-almanac-container"'), 'Missing #daily-almanac-container');
  assert.ok(html.includes('id="daily-almanac-grid"'), 'Missing #daily-almanac-grid');
  assert.ok(html.includes('id="daily-almanac-mood"'), 'Missing #daily-almanac-mood');
  assert.ok(html.includes('id="daily-almanac-streak"'), 'Missing #daily-almanac-streak');
  assert.ok(html.includes('data-i18n="navDailyDilemma"'), 'Missing navDailyDilemma link');
});

test('almanac never fabricates a streak and walks calendar days across DST', () => {
  const source = fs.readFileSync(path.join(ROOT, 'site.js'), 'utf8');
  assert.ok(source.includes(".replace('{count}', streak)"));
  assert.ok(!source.includes('Math.max(1, streak)'));
  assert.ok(source.includes('new Date(now.getFullYear(), now.getMonth(), now.getDate() - i)'));
});

test('daily dilemma deterministic rotation is consistent across dates', () => {
  function mixHash(hash, value) {
    return (Math.imul(hash, 31) + value) & 0x7fffffff;
  }
  function stableHash(ids) {
    let hash = 0x1fffffff;
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      hash = mixHash(hash, id.length);
      for (let j = 0; j < id.length; j++) {
        hash = mixHash(hash, id.charCodeAt(j));
      }
    }
    return hash;
  }
  function greatestCommonDivisor(left, right) {
    while (right !== 0) {
      const rem = left % right;
      left = right;
      right = rem;
    }
    return left;
  }
  function coprimeStep(length, seed) {
    let candidate = (seed % (length - 1)) + 1;
    while (greatestCommonDivisor(candidate, length) !== 1) {
      candidate = (candidate % (length - 1)) + 1;
    }
    return candidate;
  }
  function positiveModulo(value, modulus) {
    return ((value % modulus) + modulus) % modulus;
  }
  function selectCardForDate(entries, date) {
    const sorted = entries.slice().sort((a, b) => a.id.localeCompare(b.id));
    if (sorted.length === 0) return null;
    if (sorted.length === 1) return sorted[0];
    const ids = sorted.map((e) => e.id);
    const seed = stableHash(ids);
    const offset = seed % sorted.length;
    const step = coprimeStep(sorted.length, mixHash(seed, sorted.length));
    const epoch = Date.UTC(1970, 0, 1);
    const dayDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const dayNumber = Math.floor((dayDate - epoch) / 86400000);
    const cyclePosition = positiveModulo(dayNumber, sorted.length);
    const selectedIndex = (offset + (cyclePosition * step)) % sorted.length;
    return sorted[selectedIndex];
  }

  const entries = [{ id: 'card_a' }, { id: 'card_b' }, { id: 'card_c' }, { id: 'card_d' }];
  const date1 = new Date(2026, 7, 21); // Aug 21, 2026
  const date2 = new Date(2026, 7, 21);
  const selected1 = selectCardForDate(entries, date1);
  const selected2 = selectCardForDate(entries, date2);
  assert.equal(selected1.id, selected2.id);

  // Rotation cycles through all cards before repeating
  const seen = new Set();
  for (let i = 0; i < entries.length; i++) {
    const d = new Date(2026, 7, 21 + i);
    seen.add(selectCardForDate(entries, d).id);
  }
  assert.equal(seen.size, entries.length);
});


test('check_dilemma_inventory computes day index, year, remaining days and alerts accurately', () => {
  const { checkInventory } = require('./check_dilemma_inventory');

  // Day 1 (Epoch: Oct 21, 2026)
  const day1 = checkInventory(new Date(Date.UTC(2026, 9, 21)));
  assert.equal(day1.currentYear, 1);
  assert.equal(day1.currentDayInCycle, 1);
  assert.equal(day1.currentCardId, 'impossible_1');
  assert.equal(day1.daysRemaining, 364);
  assert.equal(day1.alertNeeded, false);

  // Day 2 (Oct 22, 2026)
  const day2 = checkInventory(new Date(Date.UTC(2026, 9, 22)));
  assert.equal(day2.currentYear, 1);
  assert.equal(day2.currentDayInCycle, 2);
  assert.equal(day2.currentCardId, 'impossible_2');
  assert.equal(day2.daysRemaining, 363);
  assert.equal(day2.alertNeeded, false);

  // Day 310 (August 26, 2027) -> 55 days remaining (< 60) -> alertNeeded should be true
  const day310 = checkInventory(new Date(Date.UTC(2026, 9, 21 + 309)));
  assert.equal(day310.currentDayInCycle, 310);
  assert.equal(day310.daysRemaining, 55);
  assert.equal(day310.alertNeeded, true);

  // Day 365 (Last day of cycle)
  const day365 = checkInventory(new Date(Date.UTC(2026, 9, 21 + 364)));
  assert.equal(day365.currentYear, 1);
  assert.equal(day365.currentDayInCycle, 365);
  assert.equal(day365.currentCardId, 'impossible_365');
  assert.equal(day365.daysRemaining, 0);
  assert.equal(day365.alertNeeded, true);

  // Year 2 Day 1 (Graceful wrap around)
  const year2Day1 = checkInventory(new Date(Date.UTC(2026, 9, 21 + 365)));
  assert.equal(year2Day1.currentYear, 2);
  assert.equal(year2Day1.currentDayInCycle, 1);
  assert.equal(year2Day1.currentCardId, 'impossible_1');
  assert.equal(year2Day1.daysRemaining, 364);
  assert.equal(year2Day1.alertNeeded, false);
});
