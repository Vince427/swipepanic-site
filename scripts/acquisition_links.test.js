'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const acquisition = require('../acquisition');

test('language priority is URL, storage, browser, then English', () => {
  const resolve = (search, storedLanguage, navigatorLanguages) =>
    acquisition.resolveLanguage({ search, storedLanguage, navigatorLanguages });

  assert.equal(resolve('?lang=de', 'fr', ['es-ES']), 'de');
  assert.equal(resolve('', 'fr', ['es-ES']), 'fr');
  assert.equal(resolve('', null, ['it-IT', 'pt-BR']), 'pt');
  assert.equal(resolve('', null, ['it-IT']), 'en');
  assert.equal(resolve('?lang=xx', 'nl', ['de-DE']), 'nl');
});

test('changing language preserves the selected cards and campaign', () => {
  const result = new URL(
    acquisition.languageUrl(
      'https://swipepanic.app/play.html?cards=a,b&utm_source=tiktok&utm_campaign=launch',
      'es',
    ),
  );
  assert.equal(result.searchParams.get('lang'), 'es');
  assert.equal(result.searchParams.get('cards'), 'a,b');
  assert.equal(result.searchParams.get('utm_source'), 'tiktok');
  assert.equal(result.searchParams.get('utm_campaign'), 'launch');
});

test('Play link forwards only allowlisted campaign fields', () => {
  const result = new URL(
    acquisition.playStoreUrl({
      language: 'fr',
      search:
        '?card=dating_42&country=FR&answer=reject&utm_source=tiktok' +
        '&utm_medium=social&utm_campaign=launch_1&utm_content=variant-a',
    }),
  );
  assert.equal(result.searchParams.get('hl'), 'fr');
  assert.equal(result.searchParams.has('card'), false);
  assert.equal(result.searchParams.has('country'), false);
  assert.equal(result.searchParams.has('answer'), false);

  const referrer = new URLSearchParams(result.searchParams.get('referrer'));
  assert.deepEqual(Object.fromEntries(referrer), {
    utm_source: 'tiktok',
    utm_medium: 'social',
    utm_campaign: 'launch_1',
    utm_content: 'variant-a',
  });
});

test('app share links keep their campaign attribution', () => {
  const result = new URL(
    acquisition.playStoreUrl({
      language: 'fr',
      search: '?utm_source=app&utm_medium=share&utm_campaign=recap',
    }),
  );
  assert.equal(result.searchParams.get('hl'), 'fr');
  const referrer = new URLSearchParams(result.searchParams.get('referrer'));
  assert.deepEqual(Object.fromEntries(referrer), {
    utm_source: 'app',
    utm_medium: 'share',
    utm_campaign: 'recap',
  });
});

test('unknown sources and unsafe values are dropped', () => {
  const unknown = new URL(
    acquisition.playStoreUrl({
      language: 'en',
      search: '?utm_source=unknown&utm_campaign=launch',
    }),
  );
  assert.equal(unknown.searchParams.has('referrer'), false);

  const unsafe = acquisition.campaignFromSearch(
    '?utm_source=tiktok&utm_campaign=hello%20world&utm_content=<script>',
  );
  assert.deepEqual(Object.fromEntries(unsafe), { utm_source: 'tiktok' });
});

test('no card, country, vote or UGC text is an acquisition field', () => {
  assert.deepEqual(acquisition.CAMPAIGN_KEYS, [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
  ]);
});

test('every page loads acquisition before the shared site script', () => {
  const root = path.join(__dirname, '..');
  for (const name of fs.readdirSync(root).filter((file) => file.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(root, name), 'utf8');
    const siteScript = html.indexOf('<script src="./site.js');
    if (siteScript === -1) continue;
    const acquisitionScript = html.indexOf('<script src="./acquisition.js');
    assert.ok(acquisitionScript > -1, `${name} does not load acquisition.js`);
    assert.ok(acquisitionScript < siteScript, `${name} loads acquisition.js too late`);
  }
});

test('the mini-game persists language and decorates its store CTA', () => {
  const play = fs.readFileSync(path.join(__dirname, '..', 'play.html'), 'utf8');
  assert.ok(play.includes('SwipePanicAcquisition.resolveLanguage'));
  assert.ok(play.includes('SwipePanicAcquisition.persistLanguage'));
  assert.ok(play.includes('SwipePanicAcquisition.languageUrl'));
  assert.ok(play.includes('SwipePanicAcquisition.decorateStoreLinks'));
});

test('the live funnel expresses pack context as campaign content', () => {
  const site = fs.readFileSync(path.join(__dirname, '..', 'site.js'), 'utf8');
  assert.ok(site.includes("utm_content: pack"));
  assert.ok(!site.includes("'&utm_source=live&utm_medium=site&utm_campaign=live_funnel&pack='"));
});
