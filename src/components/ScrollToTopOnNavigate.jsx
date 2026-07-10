import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the window scroll position to the top whenever the route path
 * changes. Without this, navigating between lazy-loaded pages leaves the
 * window at the previous scroll offset (or snaps oddly while Suspense
 * fallbacks collapse the layout). Rendered once inside <Router>.
 */
const ScrollToTopOnNavigate = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // When a hash target is present (e.g. /contact#contact-form), scroll to it
    // instead of the top. The target may live inside a lazy-loaded section, so
    // retry for a short window until it mounts.
    if (hash) {
      let attempts = 0;
      let timer;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 20) {
          attempts += 1;
          timer = setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnNavigate;
