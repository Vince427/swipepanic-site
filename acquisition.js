(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.SwipePanicAcquisition = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const SUPPORTED_LANGS = Object.freeze(['fr', 'en', 'es', 'de', 'nl', 'pt']);
  const LANGUAGE_STORAGE_KEY = 'sp_lang';
  const CAMPAIGN_KEYS = Object.freeze([
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
  ]);
  const ALLOWED_SOURCES = new Set([
    'app',
    'creator',
    'google',
    'google_ads',
    'instagram',
    'live',
    'site',
    'social',
    'tiktok',
    'youtube',
  ]);
  const SAFE_CAMPAIGN_VALUE = /^[a-zA-Z0-9._-]{1,80}$/;
  const STORE_URL =
    'https://play.google.com/store/apps/details?id=com.swipepanic.swipe_panic';

  function normalizeLanguage(value) {
    const language = String(value || '').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(language) ? language : null;
  }

  function resolveLanguage(options) {
    const params = new URLSearchParams(options.search || '');
    const fromUrl = normalizeLanguage(params.get('lang'));
    if (fromUrl) return fromUrl;
    const fromStorage = normalizeLanguage(options.storedLanguage);
    if (fromStorage) return fromStorage;
    for (const candidate of options.navigatorLanguages || []) {
      const fromBrowser = normalizeLanguage(candidate);
      if (fromBrowser) return fromBrowser;
    }
    return 'en';
  }

  function persistLanguage(storage, language) {
    const normalized = normalizeLanguage(language);
    if (!normalized || !storage) return normalized;
    try {
      storage.setItem(LANGUAGE_STORAGE_KEY, normalized);
    } catch (error) {}
    return normalized;
  }

  function languageUrl(currentUrl, language) {
    const normalized = normalizeLanguage(language) || 'en';
    const url = new URL(currentUrl);
    url.searchParams.set('lang', normalized);
    return url.toString();
  }

  function campaignFromSearch(search) {
    const input = new URLSearchParams(search || '');
    const output = new URLSearchParams();
    for (const key of CAMPAIGN_KEYS) {
      const value = input.get(key);
      if (!value || !SAFE_CAMPAIGN_VALUE.test(value)) continue;
      if (key === 'utm_source' && !ALLOWED_SOURCES.has(value)) continue;
      output.set(key, value);
    }
    if (!output.has('utm_source')) return new URLSearchParams();
    return output;
  }

  function playStoreUrl(options) {
    const url = new URL(options.baseUrl || STORE_URL);
    const language = normalizeLanguage(options.language);
    if (language) url.searchParams.set('hl', language);
    const campaign = campaignFromSearch(options.search);
    if ([...campaign].length > 0) {
      url.searchParams.set('referrer', campaign.toString());
    } else {
      url.searchParams.delete('referrer');
    }
    return url.toString();
  }

  function decorateStoreLinks(documentObject, locationObject, language) {
    if (!documentObject || !locationObject) return;
    const href = playStoreUrl({
      search: locationObject.search,
      language,
    });
    documentObject
      .querySelectorAll('a[href*="play.google.com/store/apps/details"]')
      .forEach((link) => link.setAttribute('href', href));
  }

  return Object.freeze({
    CAMPAIGN_KEYS,
    LANGUAGE_STORAGE_KEY,
    STORE_URL,
    SUPPORTED_LANGS,
    campaignFromSearch,
    decorateStoreLinks,
    languageUrl,
    normalizeLanguage,
    persistLanguage,
    playStoreUrl,
    resolveLanguage,
  });
});
