import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the window scroll position to the top whenever the route path
 * changes. Without this, navigating between lazy-loaded pages leaves the
 * window at the previous scroll offset (or snaps oddly while Suspense
 * fallbacks collapse the layout). Rendered once inside <Router>.
 */
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;
