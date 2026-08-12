# Upload checklist — fixes the 09:26 GMT incomplete deploy

Context: as of 2026-08-12 10:00 GMT, 185 of 240 built pages serve the home
page instead of themselves (136/136 `/us/blogs/*`, 224/232 `/us/services/*`
state variants). Live `sitemap.xml` is also still the old hand-made 215-URL
file. Both resolve with one correct, complete upload.

## 1. Build fresh, locally

```
npm run build        # vite build + prerender.mjs -> writes dist/
npm run check:seo    # must print "All SEO checks passed." — do not upload otherwise
```

## 2. Package ONLY dist/ — never the project root

```
npm run package      # writes deploy/site.zip from dist/*, ~17 MB
```

Do **not** zip the project root or upload `dist.zip` from an old copy. That
mistake is what put `.env` (Brevo + Supabase keys) on the public internet for
over a week — see `deploy/htaccess-FINAL-2026-08-12.txt` lines 336–357.

## 3. Upload

- Extract `deploy/site.zip` into `public_html/`, **replacing everything**.
  A partial extract (some files skipped, upload interrupted, wrong source
  folder) is exactly how today's incident happened — verify the extracted
  file count roughly matches `dist/`'s file count before moving on.
- Confirm `public_html/sitemap.xml` is the one from `dist/`, not a hand-edited
  file left over from before prerendering existed.
- `.htaccess`: use `deploy/htaccess-FINAL-2026-08-12.txt` in full (back up the
  current one first — instructions are in that file's header).

## 4. Verify immediately — do not consider the upload done otherwise

```
node scripts/verify-deploy.mjs
```

Expect **240/240 passing, 0 failing**. If most failures say "canonical → home
page", the upload is incomplete or `.htaccess` BLOCK 3 didn't apply — re-check
step 3, don't retry step 4 hoping it resolves itself.

Spot checks:

```
curl -sI https://www.miltafs.com/dist.zip                          # 403
curl -sI https://www.miltafs.com/us/blogs/ai-transforming-outsourced-accounting-2026   # 200, NOT home-page size
curl -sI https://www.miltafs.com/us/services/best-bookkeeping-services-in-california/  # 200, NOT home-page size
curl -sI https://www.miltafs.com/career                            # 301 -> /career/
curl -sI https://www.miltafs.com/uk                                # 301 -> /uk/
```

## 5. After it's green

- Search Console → Sitemaps → resubmit (or just wait; the URL hasn't changed,
  only its content).
- Search Console → the four soft-404 URLs in `htaccess-FINAL-2026-08-12.txt` →
  Validate Fix.
- Still open regardless of this upload: `/dist.zip` returns 403 but has never
  been *deleted*, and `/package.json` + `/vite.config.js` are still 200 by
  design (the deny rule excludes those extensions). Rotate the Brevo and
  Supabase keys if that hasn't happened yet — see item 1 in the "STILL
  OUTSTANDING" section of `htaccess-FINAL-2026-08-12.txt`.
