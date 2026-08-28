// Keeps the prerendered page on screen while its route chunk downloads.
//
// Every URL is prerendered to real HTML (scripts/prerender.mjs writes the
// serialised DOM into <div id="root">), so a reload paints the finished page
// almost immediately. Then the bundle boots: createRoot().render() empties
// #root, and because every route is lazy the tree suspends straight away — so
// what replaces a complete page is PageLoader's spinner on a blank background,
// on every single reload, for as long as the route chunk takes to arrive.
//
// The markup that was just discarded is a pixel-accurate picture of the page
// being loaded, so it is a far better fallback than a spinner. This module
// snapshots it before React clears the container and hands it back to
// PageLoader for exactly one route: the one the visitor actually landed on.
//
// It is deliberately NOT a general-purpose cache. After the first client-side
// navigation the snapshot describes the wrong page, so it is dropped and the
// spinner takes over again — by then the chunk is usually already warm from
// navPreload's hover prefetch.

let shell = '';
let initialKey = null;
let spent = false;

// Call once, before the first render() — after that the container is empty.
export function capturePrerenderedShell() {
  const root = document.getElementById('root');
  shell = root ? root.innerHTML : '';
  initialKey = window.location.pathname + window.location.search;
}

// The snapshot, but only while it still describes the requested route.
export function prerenderedShellFor(key) {
  if (spent || !shell) return '';
  if (key !== initialKey) {
    // Navigated away: the snapshot is now the wrong page. Drop it for good so
    // it can never be shown against a route it does not belong to, and let the
    // string be collected.
    spent = true;
    shell = '';
    return '';
  }
  return shell;
}
