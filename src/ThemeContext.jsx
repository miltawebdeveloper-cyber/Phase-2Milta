import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeCtx = createContext({ mode: 'light', toggleMode: () => {} });

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('milta-theme') || 'light'; } catch { return 'light'; }
  });

  const toggleMode = () => setMode(prev => {
    const next = prev === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('milta-theme', next); } catch {}
    return next;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    // Hands the theme back to MUI. Until this runs, the pre-boot rules in
    // index.html are what paint the dark background and the inverted logo on a
    // prerendered page; leaving the class on would let them keep overriding the
    // real theme. See the theme bootstrap comment in index.html.
    document.documentElement.classList.remove('pre-boot');
  }, [mode]);

  return (
    <ThemeCtx.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeCtx);
