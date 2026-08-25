'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { validateLiveConsensus } = require('./remote_content_rules');

const catalog = { cards_by_id: { card_a: {}, card_b: {} } };

function check(consensus, withCatalog = catalog) {
  const errors = [];
  validateLiveConsensus(consensus, withCatalog, errors);
  return errors;
}

const measured = {
  accept: 60,
  reject: 40,
  sample_size: 120,
  measured_at: '2026-08-21T18:30:00Z',
  source: 'live_votes',
};

test('an absent consensus file is legitimate', () => {
  assert.deepEqual(check(null), []);
  assert.deepEqual(check(undefined), []);
});

test('a fully measured entry passes', () => {
  assert.deepEqual(check({ card_a: measured }), []);
});

test('a legacy entry is readable, not an error', () => {
  // The 35 published entries. The app degrades to "not enough votes"; blocking
  // the whole file would take the site down over historical data.
  assert.deepEqual(check({ card_a: { accept: 35, reject: 65 } }), []);
});

test('a HALF-declared provenance is refused', () => {
  // The dangerous shape: looks measured, cannot be verified.
  const errors = check({ card_a: { accept: 60, reject: 40, source: 'live_votes' } });
  assert.ok(errors.some((e) => e.includes('sample_size')));
  assert.ok(errors.some((e) => e.includes('measured_at')));
});

test('a simulated source is refused', () => {
  const errors = check({ card_a: { ...measured, source: 'simulation' } });
  assert.ok(errors.some((e) => e.includes('not_publishable')));
});

test('percentages that do not sum to 100 are refused', () => {
  const errors = check({ card_a: { ...measured, accept: 60, reject: 50 } });
  assert.ok(errors.some((e) => e.includes('percentages_must_sum_to_100')));
});

test('a card absent from the catalog is refused', () => {
  // Exactly what a live played on fallback_* demo cards would produce.
  const errors = check({ fallback_social_1: measured });
  assert.ok(errors.some((e) => e.includes('unknown_official_card')));
});

test('an under-sampled entry is refused', () => {
  const errors = check({ card_a: { ...measured, sample_size: 5 } });
  assert.ok(errors.some((e) => e.includes('below_threshold')));
});

test('a country key that is not a flag emoji is refused', () => {
  const errors = check({
    card_a: { ...measured, countries: { FR: { accept: 60, reject: 40, sample_size: 40 } } },
  });
  assert.ok(errors.some((e) => e.includes('not_a_flag_emoji')));
});

test('an under-sampled country is refused rather than published', () => {
  const errors = check({
    card_a: {
      ...measured,
      countries: { '🇫🇷': { accept: 60, reject: 40, sample_size: 3 } },
    },
  });
  assert.ok(errors.some((e) => e.includes('below_threshold')));
});

test('a per-source breakdown must add up to the sample size', () => {
  // Otherwise an origin could be quietly inflated or hidden.
  const errors = check({
    card_a: { ...measured, sources: { live_votes: 50, web_votes: 10 } },
  });
  assert.ok(errors.some((e) => e.includes('breakdown_must_match_sample_size')));
});

test('a coherent breakdown passes', () => {
  assert.deepEqual(
    check({ card_a: { ...measured, sources: { live_votes: 100, web_votes: 20 } } }),
    [],
  );
});

test('a simulated origin inside the breakdown is refused', () => {
  const errors = check({
    card_a: { ...measured, sources: { live_votes: 100, simulation: 20 } },
  });
  assert.ok(errors.some((e) => e.includes('sources.simulation')));
});
