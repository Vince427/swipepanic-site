'use strict';

const {
  buildDailyForDate,
  readJson,
  validateDaily,
  validateDailyPool,
  validateOfficialCardCatalog,
  writeJson
} = require('./remote_content_rules');

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

function argValue(name) {
  const prefix = `${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

function main() {
  const date = argValue('--date') || todayUtc();
  const pool = readJson('daily_pool.json');
  const patch = readJson('cards_patch.json');
  const catalog = readJson('official_card_catalog.json');
  const errors = validateOfficialCardCatalog(catalog, []);
  validateDailyPool(pool, catalog, patch, errors);
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }

  const daily = buildDailyForDate(pool, date, catalog, patch);
  const dailyErrors = validateDaily(daily, pool, patch, []);
  if (dailyErrors.length > 0) {
    throw new Error(dailyErrors.join('\n'));
  }

  writeJson('daily.json', daily);
  console.log(`Generated ${daily.id} from daily_pool.json`);
}

main();
