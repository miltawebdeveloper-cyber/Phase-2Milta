import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme, alpha } from '@mui/material/styles';
import Flag from './Flag';

// Country → site home. US is the default site (root); UK lives under /uk.
const COUNTRIES = [
  { code: 'US', label: 'US', name: 'United States', path: '/' },
  { code: 'GB', label: 'UK', name: 'United Kingdom', path: '/uk' },
];

const STORAGE_KEY = 'milta_country';

/**
 * Country switcher shown in the navbar next to the theme toggle.
 * Current selection is derived from the URL (anything under /uk is UK,
 * everything else is US, so US is the default). The choice is also persisted
 * to localStorage. Selecting a country navigates to that site's home.
 */
const CountrySwitcher = ({ onHero = false, size = 42 }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const navigate = useNavigate();
  const location = useLocation();
  const [anchor, setAnchor] = useState(null);

  const isUk = location.pathname === '/uk' || location.pathname.startsWith('/uk/');
  const current = isUk ? COUNTRIES[1] : COUNTRIES[0];

  const handleSelect = (c) => {
    setAnchor(null);
    try { localStorage.setItem(STORAGE_KEY, c.code); } catch { /* ignore */ }
    if (c.code !== current.code) navigate(c.path);
  };

  const fg = onHero ? '#ffffff' : theme.palette.text.primary;
  const ringBg = onHero ? alpha('#ffffff', 0.12) : alpha(primary, 0.08);
  const ringBd = onHero ? alpha('#ffffff', 0.22) : alpha(primary, 0.18);

  return (
    <>
      <IconButton
        disableRipple
        disableTouchRipple
        onClick={(e) => setAnchor(e.currentTarget)}
        aria-label={`Country: ${current.name}. Change country`}
        title={current.name}
        sx={{
          width: size,
          height: size,
          p: 0,                     // no default padding — keeps the flag centred
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          color: fg,
          bgcolor: ringBg,
          border: `1px solid ${ringBd}`,
          transition: 'all 0.3s ease',
          '& .MuiTouchRipple-root': { display: 'none' },
          '&:hover': { bgcolor: onHero ? alpha('#ffffff', 0.22) : alpha(primary, 0.16) },
        }}
      >
        <Flag code={current.code} width={size >= 42 ? 24 : 21} sx={{ m: 0 }} />
      </IconButton>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        // Stop MUI nudging the popover away from the viewport edge, which
        // knocked it out of alignment with the button.
        marginThreshold={0}
        slotProps={{
          list: { sx: { py: 0.5 } },
          paper: {
            sx: {
              mt: 1,
              minWidth: 'auto',
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
            },
          },
        }}
      >
        {COUNTRIES.map((c) => (
          <MenuItem
            key={c.code}
            disableRipple
            disableTouchRipple
            selected={c.code === current.code}
            onClick={() => handleSelect(c)}
            aria-label={c.name}
            title={c.name}
            sx={{
              justifyContent: 'center',
              minWidth: 0,
              px: 1.5,
              py: 1.25,
              '& .MuiTouchRipple-root': { display: 'none' },
              '&:hover, &:focus, &.Mui-focusVisible, &.Mui-selected': {
                backgroundColor: 'transparent',
              },
              '&:hover img': { transform: 'scale(1.08)' },
            }}
          >
            <Flag code={c.code} width={28} sx={{ transition: 'transform 0.2s ease' }} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CountrySwitcher;
