'use strict';

const {
  readJson,
  readText,
  validateBlacklistJson,
  validateCardsPatch,
  validateDaily,
  validateDailyPool,
  validateOfficialCardCatalog,
  validateManifest
} = require('./remote_content_rules');

function main() {
  const errors = [];
  const manifest = readJson('manifest.json');
  const daily = readJson('daily.json');
  const patch = readJson('cards_patch.json');
  const blacklist = readJson('blacklist.json');
  const pool = readJson('daily_pool.json');
  const catalog = readJson('official_card_catalog.json');

  validateManifest(manifest, errors);
  validateCardsPatch(patch, errors);
  validateBlacklistJson(blacklist, errors);
  validateOfficialCardCatalog(catalog, errors);
  validateDailyPool(pool, catalog, patch, errors);
  validateDaily(daily, pool, patch, errors);

  const blacklistText = readText('blacklist.txt');
  if (blacklistText.length > 64 * 1024) {
    errors.push('blacklist.txt: too_large');
  }

  if (errors.length > 0) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
    return;
  }

  console.log('Remote content OK');
}

main();
