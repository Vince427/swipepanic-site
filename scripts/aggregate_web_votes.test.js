'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  MIN_SAMPLE_GLOBAL,
  MIN_SAMPLE_COUNTRY,
  parseCsv,
  toRecords,
  aggregateWebVotes,
  mergeConsensus,
} = require('./aggregate_web_votes');

const KNOWN = new Set(['card_a', 'card_b']);

function votes(count, overrides = {}) {
  return Array.from({ length: count }, (_, index) => ({
    timestamp: `2026-08-24T10:${String(index % 60).padStart(2, '0')}:00Z`,
    card_id: 'card_a',
    choice: 'accept',
    country: '\u{1F1EB}\u{1F1F7}',
    ...overrides,
  }));
}

test('the CSV parser survives quotes, commas and newlines in a field', () => {
  const rows = parseCsv('a,b\n"x, y","line1\nline2"\n"say ""hi""",z');
  assert.deepEqual(rows[0], ['a', 'b']);
  assert.deepEqual(rows[1], ['x, y', 'line1\nline2']);
  assert.deepEqual(rows[2], ['say "hi"', 'z']);
});

test('records are keyed by lowercased header', () => {
  const records = toRecords('Timestamp,Card_Id,Choice\n2026-08-24T10:00:00Z,card_a,accept');
  assert.equal(records[0].card_id, 'card_a');
  assert.equal(records[0].choice, 'accept');
});

test('a card absent from the catalog is dropped and counted', () => {
  const result = aggregateWebVotes(votes(40, { card_id: 'ghost' }), KNOWN);
  assert.equal(result.dropped.unknownCard, 40);
  assert.deepEqual(result.consensus, {});
});

test('an invalid choice or country is dropped, never guessed', () => {
  const bad = [
    ...votes(5, { choice: 'maybe' }),
    ...votes(5, { country: 'FR' }),
    ...votes(5, { country: 'not-a-flag' }),
  ];
  const result = aggregateWebVotes(bad, KNOWN);
  assert.equal(result.dropped.invalidChoice, 5);
  assert.equal(result.dropped.invalidCountry, 10, 'a two-letter code is not a flag emoji');
});

test('a card below the global threshold is not published', () => {
  const result = aggregateWebVotes(votes(MIN_SAMPLE_GLOBAL - 1), KNOWN);
  assert.deepEqual(result.consensus, {});
  assert.equal(result.belowThreshold, 1);
});

test('a measured card carries its full provenance', () => {
  const result = aggregateWebVotes(votes(40), KNOWN);
  const entry = result.consensus.card_a;

  assert.equal(entry.accept, 100);
  assert.equal(entry.reject, 0);
  assert.equal(entry.sample_size, 40);
  assert.equal(entry.source, 'web_votes');
  assert.ok(entry.measured_at, 'a published figure is never undated');
});

test('a country below its own threshold is omitted, not folded onto the world', () => {
  const mixed = [
    ...votes(40),
    ...votes(MIN_SAMPLE_COUNTRY - 1, { country: '\u{1F1F3}\u{1F1F1}', choice: 'reject' }),
  ];
  const result = aggregateWebVotes(mixed, KNOWN);
  const countries = result.consensus.card_a.countries;

  assert.ok(countries['\u{1F1EB}\u{1F1F7}'], 'France has enough votes');
  assert.equal(
    countries['\u{1F1F3}\u{1F1F1}'],
    undefined,
    'an under-sampled country must not inherit the world percentage',
  );
});

test('a scripted burst is capped rather than counted', () => {
  // 200 votes on the same card, same country, same second.
  const burst = Array.from({ length: 200 }, () => ({
    timestamp: '2026-08-24T10:00:00Z',
    card_id: 'card_a',
    choice: 'accept',
    country: '\u{1F1EB}\u{1F1F7}',
  }));

  const result = aggregateWebVotes(burst, KNOWN);
  assert.ok(result.dropped.burst > 0, 'a burst must be visible in the report');
  assert.equal(result.consensus.card_a, undefined, 'what remains is below the threshold');
});

test('a flood over one day is capped', () => {
  const flood = Array.from({ length: 700 }, (_, index) => ({
    timestamp: `2026-08-24T${String(Math.floor(index / 60) % 24).padStart(2, '0')}:${String(index % 60).padStart(2, '0')}:0${index % 10}Z`,
    card_id: 'card_a',
    choice: 'accept',
    country: '\u{1F1EB}\u{1F1F7}',
  }));

  const result = aggregateWebVotes(flood, KNOWN, { maxVotesPerCardPerDay: 100 });
  assert.ok(result.dropped.dailyCap > 0);
  assert.ok(result.consensus.card_a.sample_size <= 100);
});

test('nothing is dropped silently', () => {
  const result = aggregateWebVotes(votes(3, { card_id: 'ghost' }), KNOWN);
  const total = Object.values(result.dropped).reduce((sum, count) => sum + count, 0);
  assert.equal(total, 3, 'every rejected row must be accounted for');
});

test('a legacy entry is replaced by a real measurement, never averaged with it', () => {
  const existing = { card_a: { accept: 35, reject: 65 } };
  const fresh = {
    card_a: {
      accept: 70,
      reject: 30,
      sample_size: 100,
      measured_at: '2026-08-24T10:00:00Z',
      source: 'web_votes',
    },
  };

  const merged = mergeConsensus(existing, fresh);
  assert.equal(merged.card_a.accept, 70, 'you cannot average with something never measured');
  assert.equal(merged.card_a.sample_size, 100);
});

test('live and web votes are summed with a visible per-source breakdown', () => {
  const existing = {
    card_a: {
      accept: 50,
      reject: 50,
      sample_size: 100,
      measured_at: '2026-08-20T10:00:00Z',
      source: 'live_votes',
    },
  };
  const fresh = {
    card_a: {
      accept: 100,
      reject: 0,
      sample_size: 100,
      measured_at: '2026-08-24T10:00:00Z',
      source: 'web_votes',
    },
  };

  const merged = mergeConsensus(existing, fresh).card_a;

  assert.equal(merged.sample_size, 200);
  assert.equal(merged.accept, 75, '50 accepts + 100 accepts over 200 votes');
  assert.deepEqual(merged.sources, { live_votes: 100, web_votes: 100 });
  assert.ok(
    ['live_votes', 'web_votes'].includes(merged.source),
    'source keeps the dominant origin for plain v2 readers',
  );
});

test('a card that received no web vote is left untouched', () => {
  const existing = {
    card_b: {
      accept: 42,
      reject: 58,
      sample_size: 80,
      measured_at: '2026-08-20T10:00:00Z',
      source: 'live_votes',
    },
  };

  const merged = mergeConsensus(existing, {});
  assert.deepEqual(merged, existing);
});
