'use strict';

/**
 * Contract tests for play.html.
 *
 * The page has no build step and no module system, so the pure helpers are
 * extracted from the file and evaluated in isolation. What is guarded here is
 * the HONESTY of the country display, which has regressed before:
 * a country with no measurement used to be shown with the WORLD percentage,
 * which claims a measurement that was never taken.
 *
 * Canonical rules: swipepanic/.agent/specs/CONSENSUS_CONTRACT.md
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PLAY = fs.readFileSync(path.join(ROOT, 'play.html'), 'utf8');

function extractHelpers() {
  const start = PLAY.indexOf('const COUNTRY_CODES');
  const end = PLAY.indexOf('const COUNTRY_STORAGE_KEY');
  assert.ok(start > -1 && end > start, 'country helpers not found in play.html');

  const source = `
    ${PLAY.slice(start, end)}
    function flagFromCode(code) {
      return String.fromCodePoint(
        ...[...code].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65),
      );
    }
    const CODE_BY_FLAG = {};
    for (const code of COUNTRY_CODES) CODE_BY_FLAG[flagFromCode(code)] = code;
    return { COUNTRY_CODES, flagFromCode, CODE_BY_FLAG };
  `;
  // eslint-disable-next-line no-new-func
  return new Function(source)();
}

const helpers = extractHelpers();

test('the flag emoji is derived correctly from the ISO code', () => {
  assert.equal(helpers.flagFromCode('FR'), '🇫🇷');
  assert.equal(helpers.flagFromCode('US'), '🇺🇸');
  assert.equal(helpers.flagFromCode('BR'), '🇧🇷');
  assert.equal(helpers.flagFromCode('JP'), '🇯🇵');
});

test('the picker covers the whole world, not a shortlist', () => {
  // The point of the feature: any visitor finds their own country.
  assert.ok(
    helpers.COUNTRY_CODES.length >= 190,
    `expected a world-wide list, got ${helpers.COUNTRY_CODES.length} countries`,
  );
  const unique = new Set(helpers.COUNTRY_CODES);
  assert.equal(unique.size, helpers.COUNTRY_CODES.length, 'duplicate country codes');
  for (const code of helpers.COUNTRY_CODES) {
    assert.match(code, /^[A-Z]{2}$/, `malformed ISO code: ${code}`);
  }
});

test('every flag already used by the live is recognised by the picker', () => {
  // The live writes flag emoji into the consensus file. A flag the picker
  // cannot produce would be a country nobody can ever select.
  const consensus = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'data', 'live_consensus.json'), 'utf8'),
  );

  const used = new Set();
  for (const entry of Object.values(consensus)) {
    for (const flag of Object.keys(entry.countries || {})) used.add(flag);
  }

  const unknown = [...used].filter((flag) => !helpers.CODE_BY_FLAG[flag]);
  assert.deepEqual(unknown, [], `flags absent from the picker: ${unknown.join(' ')}`);
});

test('an unmeasured country is never given the world percentage', () => {
  // The exact regression: `c['🇫🇷'] ? ... : `🇫🇷 ${rejectPct}%`` printed the
  // global figure under a national flag.
  // A ternary that answers a missing country with the global percentage.
  const foldsOntoGlobal = /c\[[^\]]+\]\s*\?[^:]*:\s*`[^`]*\$\{rejectPct\}%`/;
  assert.ok(
    !foldsOntoGlobal.test(PLAY),
    'play.html still falls back to the global percentage for a missing country',
  );
  assert.ok(
    !PLAY.includes("const fr = c['🇫🇷']"),
    'the hardcoded FR/US/ES country trio is back',
  );
});

test('no fabricated example percentages are shipped in the markup', () => {
  for (const fake of ['🇫🇷 62%', '🇺🇸 54%', '🇪🇸 58%']) {
    assert.ok(!PLAY.includes(fake), `fake example still present: ${fake}`);
  }
});

test('the vote carries the declared country and the card', () => {
  assert.ok(PLAY.includes('country: currentCountry'), 'vote must carry the declared country');
  assert.ok(PLAY.includes('card_id: cardId'), 'vote must carry the card it is about');
  assert.ok(PLAY.includes("choice: direction === 'green' ? 'accept' : 'reject'"));
});

test('the collector stays configuration, and no secret lives in the page', () => {
  assert.ok(PLAY.includes('vote_config.json'), 'ids come from a config file');
  // A credential being ASSIGNED a value, not the word appearing in a comment:
  // the previous form matched its own explanation of why there is no token.
  const assignedCredential =
    /(api[_-]?key|secret|access[_-]?token|auth[_-]?token|bearer)\s*[:=]\s*['"`]/i;
  const authHeader = /['"`]Authorization['"`]\s*:/i;

  assert.ok(!assignedCredential.test(PLAY), 'a public page must never carry a credential');
  assert.ok(!authHeader.test(PLAY), 'a public page must never send an auth header');
});

test('votes are batched and survive the tab closing', () => {
  assert.ok(PLAY.includes('voteBuffer'), 'votes must be batched, not one request per swipe');
  assert.ok(PLAY.includes('sendBeacon'), 'a closing tab must still deliver its batch');
  assert.ok(PLAY.includes("addEventListener('pagehide'"), 'pagehide must flush');
});

test('nothing is sent while no collector is configured', () => {
  assert.ok(
    PLAY.includes('if (!voteConfig || voteBuffer.length === 0) return;'),
    'an unconfigured page must stay silent',
  );
});

test('every visible country string exists in all six languages', () => {
  const match = PLAY.match(/const i18n = (\{[\s\S]*?\n {4}\});/);
  assert.ok(match, 'i18n block not found');
  // eslint-disable-next-line no-new-func
  const i18n = new Function(`return ${match[1]}`)();

  const required = [
    'countryPrompt',
    'countryYours',
    'countryNoData',
    'countryCompare',
    'countryPick',
    'votesLabel',
  ];

  for (const lang of ['fr', 'en', 'es', 'de', 'nl', 'pt']) {
    for (const key of required) {
      assert.ok(i18n[lang] && i18n[lang][key], `missing ${lang}.${key}`);
    }
  }
});
