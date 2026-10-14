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
    'btnShareRecap',
    'shareToast',
    'ctaStoreSub',
    'packHalloween',
    'packWinter',
    'packSchool',
  ];

  for (const lang of ['fr', 'en', 'es', 'de', 'nl', 'pt']) {
    for (const key of required) {
      assert.ok(i18n[lang] && i18n[lang][key], `missing ${lang}.${key}`);
    }
  }
});

test('OpenGraph and Twitter metadata are present in index.html and play.html', () => {
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('property="og:title"'), 'index.html missing og:title');
  assert.ok(indexHtml.includes('property="og:image"'), 'index.html missing og:image');
  assert.ok(indexHtml.includes('property="og:description"'), 'index.html missing og:description');
  assert.ok(indexHtml.includes('name="twitter:card"'), 'index.html missing twitter:card');

  assert.ok(PLAY.includes('property="og:title"'), 'play.html missing og:title');
  assert.ok(PLAY.includes('property="og:image"'), 'play.html missing og:image');
  assert.ok(PLAY.includes('name="twitter:card"'), 'play.html missing twitter:card');
});

test('seasonal packs in daily_pool.json have 35 cards existing in official catalog', () => {
  const catalog = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'official_card_catalog.json'), 'utf8'),
  );
  const catalogIds = new Set(catalog.cards.map((c) => c.id));
  const poolFile = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'daily_pool.json'), 'utf8'),
  );

  const seasonalPoolIds = [
    'classic_school_starter',
    'classic_halloween_starter',
    'classic_winter_starter',
  ];

  for (const poolId of seasonalPoolIds) {
    const pool = poolFile.pools.find((p) => p.id === poolId);
    assert.ok(pool, `missing pool ${poolId}`);
    assert.equal(pool.cardIds.length, 35, `${poolId} does not have 35 cards`);
    for (const cardId of pool.cardIds) {
      assert.ok(catalogIds.has(cardId), `card ${cardId} in ${poolId} not found in catalog`);
    }
  }
});

test('daily.json is configured with valid cards and 6-language copy', () => {
  const daily = JSON.parse(fs.readFileSync(path.join(ROOT, 'daily.json'), 'utf8'));
  const catalog = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'official_card_catalog.json'), 'utf8'),
  );
  const catalogIds = new Set(catalog.cards.map((c) => c.id));

  assert.ok(daily.cardIds && daily.cardIds.length >= 34, 'daily.json must have at least 34 cards');
  for (const cardId of daily.cardIds) {
    assert.ok(catalogIds.has(cardId), `daily.json card ${cardId} not found in catalog`);
  }

  for (const lang of ['fr', 'en', 'es', 'de', 'nl', 'pt']) {
    assert.ok(daily.title[lang], `daily.json missing title.${lang}`);
    assert.ok(daily.subtitle[lang], `daily.json missing subtitle.${lang}`);
  }
});

test('seasonal themes and banners are present across index.html, play.html and styles.css', () => {
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const playHtml = fs.readFileSync(path.join(ROOT, 'play.html'), 'utf8');
  const stylesCss = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
  const siteJs = fs.readFileSync(path.join(ROOT, 'site.js'), 'utf8');

  // CSS theme classes
  assert.ok(stylesCss.includes('body.theme-halloween'), 'styles.css missing body.theme-halloween');
  assert.ok(stylesCss.includes('body.theme-winter'), 'styles.css missing body.theme-winter');
  assert.ok(stylesCss.includes('.seasonal-event-banner'), 'styles.css missing .seasonal-event-banner');

  // index.html theme switch & seasonal banner
  assert.ok(indexHtml.includes('class="theme-switch"'), 'index.html missing .theme-switch');
  assert.ok(indexHtml.includes('data-theme="halloween"'), 'index.html missing halloween button');
  assert.ok(indexHtml.includes('data-theme="winter"'), 'index.html missing winter button');
  assert.ok(indexHtml.includes('id="seasonal-event-banner"'), 'index.html missing #seasonal-event-banner');

  // play.html theme switch inline & seasonal packs
  assert.ok(playHtml.includes('id="themeSwitchInline"'), 'play.html missing #themeSwitchInline');
  assert.ok(playHtml.includes('data-theme="halloween"'), 'play.html missing halloween button');
  assert.ok(playHtml.includes('data-theme="winter"'), 'play.html missing winter button');
  assert.ok(playHtml.includes('value="halloween_pack"'), 'play.html missing halloween_pack');
  assert.ok(playHtml.includes('value="winter_holidays_pack"'), 'play.html missing winter_holidays_pack');
  assert.ok(playHtml.includes('value="valentines_pack"'), 'play.html missing valentines_pack');
  assert.ok(playHtml.includes('value="summer_pack"'), 'play.html missing summer_pack');

  // site.js seasonal banners in all 6 languages
  for (const lang of ['fr', 'en', 'es', 'de', 'nl', 'pt']) {
    assert.ok(siteJs.includes(`"seasonalBannerHalloween"`), 'site.js missing seasonalBannerHalloween');
    assert.ok(siteJs.includes(`"seasonalBannerWinter"`), 'site.js missing seasonalBannerWinter');
  }
});

test('Flash Duel (Face-to-Face) mode is integrated across index, ugc, changelog and site.js (all 6 languages)', () => {
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const ugcHtml = fs.readFileSync(path.join(ROOT, 'ugc.html'), 'utf8');
  const changelogHtml = fs.readFileSync(path.join(ROOT, 'changelog.html'), 'utf8');
  const siteJs = fs.readFileSync(path.join(ROOT, 'site.js'), 'utf8');

  // index.html features section contains the Duel Flash card
  assert.ok(indexHtml.includes('data-i18n="modeDuel"'), 'index.html missing modeDuel');
  assert.ok(indexHtml.includes('data-i18n="duelBadge"'), 'index.html missing duelBadge');
  assert.ok(indexHtml.includes('data-i18n="duelCopy"'), 'index.html missing duelCopy');

  // ugc.html contains the Face-to-Face step
  assert.ok(ugcHtml.includes('data-i18n="ugcStepDuelTitle"'), 'ugc.html missing ugcStepDuelTitle');
  assert.ok(ugcHtml.includes('data-i18n="ugcStepDuelIntro"'), 'ugc.html missing ugcStepDuelIntro');
  assert.ok(ugcHtml.includes('data-i18n="ugcStepDuelDetails"'), 'ugc.html missing ugcStepDuelDetails');

  // changelog.html contains v1.8.0 and v1.7.0
  assert.ok(changelogHtml.includes('1.8.0'), 'changelog.html missing v1.8.0');
  assert.ok(changelogHtml.includes('1.7.0'), 'changelog.html missing v1.7.0');
  assert.ok(changelogHtml.includes('data-i18n="cl180changes"'), 'changelog.html missing cl180changes');
  assert.ok(changelogHtml.includes('data-i18n="cl170changes"'), 'changelog.html missing cl170changes');

  // Extract site.js dictionary
  const dictMatch = siteJs.match(/const dictionary = (\{[\s\S]*?\n  \});/);
  assert.ok(dictMatch, 'site.js dictionary block not found');
  // eslint-disable-next-line no-new-func
  const dictionary = new Function(`return ${dictMatch[1]}`)();

  const requiredDuelKeys = [
    'themePickerLabel',
    'themeClassic',
    'themeHalloween',
    'themeWinter',
    'modeDuel',
    'duelBadge',
    'duelCopy',
    'ugcStepDuelTitle',
    'ugcStepDuelIntro',
    'ugcStepDuelDetails',
    'cl180changes',
    'cl170changes',
  ];

  for (const lang of ['fr', 'en', 'es', 'de', 'nl', 'pt']) {
    for (const key of requiredDuelKeys) {
      assert.ok(
        dictionary[lang] && dictionary[lang][key],
        `missing ${lang}.${key} in site.js dictionary`,
      );
    }
  }
});

test('theme switchers and hero picker are present on all public HTML pages', () => {
  const pages = [
    'index.html',
    'play.html',
    'changelog.html',
    'ugc.html',
    'support.html',
    'live.html',
    'suggest.html',
  ];

  for (const page of pages) {
    const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
    assert.ok(
      html.includes('theme-switch') || html.includes('themeSwitchInline'),
      `${page} missing theme switcher`,
    );
    assert.ok(html.includes('data-theme="classic"'), `${page} missing classic theme button`);
    assert.ok(html.includes('data-theme="halloween"'), `${page} missing halloween theme button`);
    assert.ok(html.includes('data-theme="winter"'), `${page} missing winter theme button`);
  }

  // index.html hero picker
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('hero-theme-picker'), 'index.html missing hero-theme-picker');
});


