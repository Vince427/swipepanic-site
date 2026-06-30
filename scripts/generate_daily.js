'use strict';

const fs = require('fs');
const path = require('path');

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

// Optional generation input. Returns the parsed JSON, or null when the file is
// absent (the live fields are then simply omitted from daily.json).
function readOptionalJson(relativePath) {
  const absolutePath = path.resolve(__dirname, '..', relativePath);
  if (!fs.existsSync(absolutePath)) {
    return null;
  }
  return readJson(relativePath);
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

  // Optional live-event sources. `live_consensus.json` (published, also fetched
  // by the app) feeds the streamer/live chip; `live_event.json` (build input)
  // carries the live schedule. Both are optional — absent → fields omitted.
  const consensus = readOptionalJson('data/live_consensus.json');
  const liveEvent = readOptionalJson('live_event.json');

  const daily = buildDailyForDate(pool, date, catalog, patch, { consensus, liveEvent });
  const dailyErrors = validateDaily(daily, pool, patch, []);
  if (dailyErrors.length > 0) {
    throw new Error(dailyErrors.join('\n'));
  }

  writeJson('daily.json', daily);
  const extras = [
    daily.streamerVotes ? `${Object.keys(daily.streamerVotes).length} streamerVotes` : null,
    daily.liveStartDate ? 'liveStartDate' : null,
    daily.liveEndDate ? 'liveEndDate' : null,
    daily.liveTime ? 'liveTime' : null
  ].filter(Boolean);
  const suffix = extras.length > 0 ? ` (+ ${extras.join(', ')})` : '';
  console.log(`Generated weekly ${daily.id} into daily.json from daily_pool.json${suffix}`);
}

main();
