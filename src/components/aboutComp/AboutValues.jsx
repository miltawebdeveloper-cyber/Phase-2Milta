import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';

const CONTENT_WIDTH = 1300;

/* Two alternating greens — matching theme primary */
const CARDS = [
  {
    icon: <LanguageIcon />,
    title: 'Global Reach',
    text: 'Trusted by 500+ clients across 50 states with world-class offshore accounting and bookkeeping.',
    bg: '#1e5722',
  },
  {
    icon: <BusinessCenterIcon />,
    title: 'Local Expertise',
    text: 'Deep knowledge of US federal, state, and city tax regulations for every business size.',
    bg: '#4caf50',
  },
  {
    icon: <VerifiedIcon />,
    title: 'Precision First',
    text: 'IRS-certified professionals delivering accurate, compliance-ready financials every time.',
    bg: '#266929',
  },
  {
    icon: <PeopleIcon />,
    title: 'True Partnership',
    text: 'We invest in your long-term success as a dedicated extension of your Accounts team.',
    bg: '#5dbb61',
  },
];

const SKEW    = -8;   /* parallelogram lean angle (degrees)  */
const OVERLAP = 80;   /* px each card overlaps the previous  */

const AboutValues = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', overflow: 'hidden' }}>

    {/* ── Heading ── */}
    <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 }, mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px 900px 0px' }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          OUR VALUES
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px 900px 0px' }} transition={{ duration: 0.25, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, color: 'text.primary' }}>
          What Drives{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>Our Work</Box>
        </Typography>
      </motion.div>
    </Box>

    {/* ── Parallelogram card row ── */}
    <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          minHeight: { xs: 'auto', md: 260 },
        }}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 900px 0px' }}
            transition={{ duration: 0.25, delay: Math.min(i * 0.1, 0.15), ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: '1 1 0',
              minWidth: 0,
              marginLeft: i === 0 ? 0 : -OVERLAP,
              zIndex: i + 1,
              display: 'flex',
            }}
          >
            {/* Skewed shell — creates parallelogram shape */}
            <Box
              sx={{
                flex: 1,
                transform: `skewX(${SKEW}deg)`,
                borderRadius: '22px',
                overflow: 'hidden',
                backgroundColor: card.bg,
                boxShadow: '0 18px 48px rgba(0,0,0,0.18)',
              }}
            >
              {/* Counter-skew wrapper — keeps content upright */}
              <Box
                sx={{
                  transform: `skewX(${-SKEW}deg)`,
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  /* Extra horizontal padding to compensate for skew cut-off */
                  pl: { xs: 3, md: i === 0 ? 4 : 5 },
                  pr: { xs: 3, md: i === CARDS.length - 1 ? 4 : 5 },
                }}
              >
                {/* Icon */}
                <Box sx={{ mb: 2.5 }}>
                  {React.cloneElement(card.icon, {
                    sx: { fontSize: { xs: 36, md: 44 }, color: 'rgba(255,255,255,0.92)' },
                  })}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#fff',
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: '0.84rem', md: '0.9rem' },
                    color: 'rgba(255,255,255,0.76)',
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>

  </Box>
);

export default AboutValues;
