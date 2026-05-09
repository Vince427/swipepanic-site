const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const locales = ['fr', 'en', 'es', 'de', 'nl', 'pt'];
const modes = new Set(['classic', 'quiz', 'social']);
const cardTypes = new Set(['red_flag', 'green_flag']);
const maxTextLength = 180;
const maxBlacklistItems = 10000;

const errors = [];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
  } catch (error) {
    fail(file, `invalid JSON (${error.message})`);
    return null;
  }
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function expectString(file, value, field, options = {}) {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(file, `${field} must be a non-empty string`);
    return;
  }
  if (options.max && value.length > options.max) {
    fail(file, `${field} is too long (${value.length}/${options.max})`);
  }
}

function expectLocalized(file, value, field) {
  if (!isObject(value)) {
    fail(file, `${field} must be an object with ${locales.join(', ')}`);
    return;
  }

  for (const locale of locales) {
    expectString(file, value[locale], `${field}.${locale}`, { max: maxTextLength });
  }
}

function expectRelativeUrl(file, value, field) {
  expectString(file, value, field, { max: 80 });
  if (typeof value !== 'string') return;

  if (/^https?:\/\//i.test(value) || value.startsWith('/') || value.includes('..') || value.includes('\\')) {
    fail(file, `${field} must be a simple relative file path`);
  }
}

function expectUniqueStrings(file, values, field) {
  if (!Array.isArray(values)) {
    fail(file, `${field} must be an array`);
    return;
  }

  const seen = new Set();
  values.forEach((value, index) => {
    expectString(file, value, `${field}[${index}]`, { max: 120 });
    if (typeof value !== 'string') return;
    if (seen.has(value)) fail(file, `${field} contains duplicate "${value}"`);
    seen.add(value);
  });
}

function validateManifest() {
  const file = 'manifest.json';
  const manifest = readJson(file);
  if (!manifest) return;

  if (!Number.isInteger(manifest.version) || manifest.version < 1) {
    fail(file, 'version must be a positive integer');
  }

  expectString(file, manifest.min_app_version, 'min_app_version', { max: 20 });
  for (const field of ['daily_url', 'cards_patch_url', 'blacklist_url', 'blacklist_json_url']) {
    expectRelativeUrl(file, manifest[field], field);
  }
}

function validateDaily() {
  const file = 'daily.json';
  const daily = readJson(file);
  if (!daily) return;

  if (!Number.isInteger(daily.version) || daily.version < 1) {
    fail(file, 'version must be a positive integer');
  }
  expectString(file, daily.id, 'id', { max: 80 });
  expectString(file, daily.date, 'date', { max: 20 });

  if (!modes.has(daily.mode)) {
    fail(file, `mode must be one of ${Array.from(modes).join(', ')}`);
  }

  if (!Number.isInteger(daily.maxCards) || daily.maxCards < 1 || daily.maxCards > 100) {
    fail(file, 'maxCards must be an integer from 1 to 100');
  }

  expectLocalized(file, daily.title, 'title');
  expectLocalized(file, daily.subtitle, 'subtitle');
  expectUniqueStrings(file, daily.cardIds, 'cardIds');

  if (Array.isArray(daily.cardIds) && Number.isInteger(daily.maxCards) && daily.cardIds.length < daily.maxCards) {
    fail(file, `cardIds must contain at least maxCards entries (${daily.cardIds.length}/${daily.maxCards})`);
  }
}

function validateCardsPatch() {
  const file = 'cards_patch.json';
  const patch = readJson(file);
  if (!patch) return;

  if (!Number.isInteger(patch.version) || patch.version < 1) {
    fail(file, 'version must be a positive integer');
  }
  expectString(file, patch.updated_at, 'updated_at', { max: 40 });

  if (!Array.isArray(patch.cards)) {
    fail(file, 'cards must be an array');
    return;
  }

  const ids = new Set();
  patch.cards.forEach((card, index) => {
    const prefix = `cards[${index}]`;
    if (!isObject(card)) {
      fail(file, `${prefix} must be an object`);
      return;
    }

    expectString(file, card.id, `${prefix}.id`, { max: 100 });
    expectString(file, card.pack_id, `${prefix}.pack_id`, { max: 80 });
    expectString(file, card.theme, `${prefix}.theme`, { max: 60 });

    if (typeof card.id === 'string') {
      if (ids.has(card.id)) fail(file, `duplicate card id "${card.id}"`);
      ids.add(card.id);
    }

    if (!modes.has(card.mode)) fail(file, `${prefix}.mode must be classic, quiz or social`);
    if (!cardTypes.has(card.type)) fail(file, `${prefix}.type must be red_flag or green_flag`);
    if (typeof card.enabled !== 'boolean') fail(file, `${prefix}.enabled must be boolean`);
    if (!Number.isInteger(card.difficulty) || card.difficulty < 1 || card.difficulty > 5) {
      fail(file, `${prefix}.difficulty must be an integer from 1 to 5`);
    }

    expectLocalized(file, card.texts, `${prefix}.texts`);
    if (!isObject(card.safe_reviewed)) {
      fail(file, `${prefix}.safe_reviewed must be an object`);
    } else {
      for (const locale of locales) {
        if (card.safe_reviewed[locale] !== true) {
          fail(file, `${prefix}.safe_reviewed.${locale} must be true before publication`);
        }
      }
    }
  });
}

function validateBlacklistTxt() {
  const file = 'blacklist.txt';
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    fail(file, 'file is missing');
    return;
  }

  const lines = fs.readFileSync(fullPath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

  if (lines.length > maxBlacklistItems) {
    fail(file, `too many entries (${lines.length}/${maxBlacklistItems})`);
  }

  const seen = new Set();
  lines.forEach((line, index) => {
    if (!/^[A-Za-z0-9_.:-]{3,160}$/.test(line)) {
      fail(file, `line ${index + 1} has an invalid id format`);
    }
    if (seen.has(line)) fail(file, `duplicate entry "${line}"`);
    seen.add(line);
  });
}

function validateBlacklistJson() {
  const file = 'blacklist.json';
  const blacklist = readJson(file);
  if (!blacklist) return;

  if (!Number.isInteger(blacklist.version) || blacklist.version < 1) {
    fail(file, 'version must be a positive integer');
  }
  expectString(file, blacklist.updated_at, 'updated_at', { max: 40 });

  for (const field of ['blocked_pack_hashes', 'blocked_card_hashes', 'blocked_terms']) {
    expectUniqueStrings(file, blacklist[field], field);
    if (Array.isArray(blacklist[field]) && blacklist[field].length > maxBlacklistItems) {
      fail(file, `${field} has too many entries (${blacklist[field].length}/${maxBlacklistItems})`);
    }
  }

  if (Array.isArray(blacklist.blocked_terms)) {
    blacklist.blocked_terms.forEach((term, index) => {
      if (typeof term === 'string' && term.length < 3) {
        fail(file, `blocked_terms[${index}] must contain at least 3 characters`);
      }
    });
  }
}

validateManifest();
validateDaily();
validateCardsPatch();
validateBlacklistTxt();
validateBlacklistJson();

if (errors.length) {
  console.error('Remote content validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Remote content validation passed.');
