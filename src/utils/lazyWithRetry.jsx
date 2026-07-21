import { lazy } from 'react';

// Wraps React.lazy so a failed dynamic import() doesn't leave the user stuck on
// the Suspense spinner / a blank page.
//
// Why this is needed: each deploy emits new content-hashed chunk filenames
// (e.g. Bookkeeping-DJlAyghB.js). A visitor whose browser still holds the
// previous index.html requests old chunk names that no longer exist -> the
// import 404s and rejects. A transient network error does the same. Since
// <Suspense> only handles the *pending* state, a rejected import would
// otherwise crash the whole route tree.
//
// Strategy:
//   1. Retry the import a couple of times with a short backoff (rides out
//      flaky-network / momentary 404s behind a CDN).
//   2. If it still fails, it's almost certainly a stale chunk from an older
//      deploy, so force a one-time full reload to pull the fresh index.html
//      and its new chunk names. A sessionStorage flag prevents a reload loop
//      when the failure is genuinely something else.
const RELOAD_FLAG = 'chunk-reload-attempted';

export default function lazyWithRetry(factory, retries = 2, interval = 400) {
  return lazy(async () => {
    try {
      const component = await loadWithRetry(factory, retries, interval);
      // Success: clear the guard so a *future* stale-chunk failure can reload.
      window.sessionStorage.removeItem(RELOAD_FLAG);
      return component;
    } catch (error) {
      const alreadyReloaded = window.sessionStorage.getItem(RELOAD_FLAG);
      if (!alreadyReloaded) {
        // Likely a stale chunk after a new deploy — reload once to get fresh assets.
        window.sessionStorage.setItem(RELOAD_FLAG, '1');
        window.location.reload();
        // Return a never-resolving module so nothing renders before the reload.
        return new Promise(() => {});
      }
      // We already reloaded and it still fails: let the error boundary handle it.
      throw error;
    }
  });
}

async function loadWithRetry(factory, retries, interval) {
  try {
    return await factory();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, interval));
    return loadWithRetry(factory, retries - 1, interval);
  }
}
