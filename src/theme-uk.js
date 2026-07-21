// src/theme-uk.js
import { createTheme } from "@mui/material/styles";

const ukTheme = createTheme({
  typography: {
    fontFamily: 'var(--uk-font-secondary)', // default body font
    h1: { fontFamily: 'var(--uk-font-primary)' },
    h2: { fontFamily: 'var(--uk-font-primary)' },
    h3: { fontFamily: 'var(--uk-font-primary)' },
    h4: { fontFamily: 'var(--uk-font-primary)' },
    h5: { fontFamily: 'var(--uk-font-primary)' },
    h6: { fontFamily: 'var(--uk-font-primary)' },
  },
});

export default ukTheme;
