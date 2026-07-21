import React from 'react';
import { Box } from '@mui/material';
import usFlag from '../assets/flags/us.svg';
import gbFlag from '../assets/flags/gb.svg';

// Official national flag assets (local SVG — not emoji, not icon-font glyphs).
const FLAG_SRC = {
  US: usFlag,
  GB: gbFlag,
};

const FLAG_NAME = {
  US: 'United States',
  GB: 'United Kingdom',
};

/**
 * Renders an official national flag. The two flags have different native
 * ratios (US 19:10, UK 2:1), so they're drawn into a uniform 3:2 box with
 * `objectFit: cover` to keep the switcher visually consistent.
 */
const Flag = ({ code, width = 24, sx }) => (
  <Box
    component="img"
    src={FLAG_SRC[code]}
    alt={FLAG_NAME[code]}
    sx={{
      display: 'block',
      flexShrink: 0,
      width,
      height: Math.round((width * 2) / 3),
      objectFit: 'cover',
      borderRadius: '3px',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
      ...sx,
    }}
  />
);

export default Flag;
