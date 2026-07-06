import { createTheme } from '@mui/material/styles';

export const createAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#266929',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#266929',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'dark' ? '#0f1a10' : '#ffffff',
      paper:   mode === 'dark' ? '#192a1b' : '#F7FAF7',
    },
    text: {
      primary:   mode === 'dark' ? '#e2f0e2' : '#1A1A1A',
      secondary: mode === 'dark' ? '#7aaa7a' : '#666666',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "sans-serif"',
    h1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      fontSize: '4.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '1.15rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    overline: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: '0.2em',
    },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 32px',
          borderRadius: '50px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 24px rgba(38, 105, 41, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
          border: '1px solid rgba(0,0,0,0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
            borderColor: '#266929',
          },
        },
      },
    },
  },
});

export default createAppTheme('light');
