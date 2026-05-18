# Swipe Panic public site

Static public pages and JSON files for `https://swipepanic.app`.

Remote content endpoints:

- `manifest.json`
- `daily.json`
- `daily_pool.json`
- `official_card_catalog.json`
- `cards_patch.json`
- `blacklist.txt`
- `blacklist.json`

Validate public JSON before publishing:

```powershell
node scripts\validate_remote_content.js
```

Regenerate `daily.json` from the reviewed public pool:

```powershell
node scripts\generate_daily.js --date=2026-05-10
```

## Admin workflow

The site is public and static. Do not publish internal launch plans, private
agent notes, API secrets or app worktree files here.

Weekly content (published through daily.json for app compatibility):

1. Add reviewed official card IDs to `official_card_catalog.json`.
2. Add or update a pool in `daily_pool.json`.
3. Keep `safe_reviewed` as a 6-locale map, not a boolean shortcut.
4. Run `node scripts\generate_daily.js --date=YYYY-MM-DD`.
5. Run `node scripts\validate_remote_content.js`.

Reports and suggestions arrive through `support@swipepanic.app`. Configure mail
filters by subject/source:

- `[SwipePanic][UGC_REPORT]` or `Source: app_ugc_report` -> urgent moderation.
- `[SwipePanic][CARD_REPORT]` or `Source: app_card_report` -> official card review.
- `[SwipePanic][CARD_SUGGESTION]` or `Source: site_suggest` -> backlog.
- `JSON_REPORT` / `JSON_DRAFT` blocks -> copy into a review branch only after
  manual moderation.

When a reported item is valid, add the pack/card/device/keyword to
`blacklist.json` and the legacy line to `blacklist.txt`, then validate before
publishing. The app still works offline if these files cannot be reached.
