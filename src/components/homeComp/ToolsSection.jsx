import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

import tool1 from '../../assets/tools/tools-1.png';
import tool2 from '../../assets/tools/tools-2.png';
import tool3 from '../../assets/tools/tools-3.png';
import tool4 from '../../assets/tools/tools-4.png';
import tool10 from '../../assets/tools/tools-10.png';
import tool12 from '../../assets/tools/tools-12.png';
import tool13 from '../../assets/tools/tools-13.png';
import tool14 from '../../assets/tools/tools-14.png';
import tool15 from '../../assets/tools/tools-15.png';
import tool16 from '../../assets/tools/tools-16.png';
import tool18 from '../../assets/tools/tools-18.png';
import tool19 from '../../assets/tools/tools-19.png';
import tool20 from '../../assets/tools/tools-20.png';

const TOOLS = [
  { id: 1, image: tool1, alt: 'Accounting tool 1' },
  { id: 2, image: tool2, alt: 'Accounting tool 2' },
  { id: 3, image: tool3, alt: 'Accounting tool 3' },
  { id: 4, image: tool4, alt: 'Accounting tool 4' },
  { id: 10, image: tool10, alt: 'Accounting tool 5' },
  { id: 12, image: tool12, alt: 'Accounting tool 6' },
  { id: 13, image: tool13, alt: 'Accounting tool 7' },
  { id: 14, image: tool14, alt: 'Accounting tool 8' },
  { id: 15, image: tool15, alt: 'Accounting tool 9' },
  { id: 16, image: tool16, alt: 'Accounting tool 10' },
  { id: 18, image: tool18, alt: 'Accounting tool 11' },
  { id: 19, image: tool19, alt: 'Accounting tool 12' },
  { id: 20, image: tool20, alt: 'Accounting tool 13' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ToolsSection = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-12%',
          left: '-6%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(primary, 0.06)} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem' }}>
                OUR TECH STACK
              </Typography>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
            </Box>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: 'text.primary', letterSpacing: '-0.02em', mb: 2 }}
            >
              Tools{' '}
              <Box component="span" sx={{ color: primary }}>
                We Use
              </Box>
            </Typography>
          </motion.div>
        </Box>

        {/* Auto-scrolling logo strip */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            // Fading edges
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: { xs: 40, md: 90 },
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': { left: 0, background: (th) => `linear-gradient(90deg, ${th.palette.background.default}, transparent)` },
            '&::after': { right: 0, background: (th) => `linear-gradient(270deg, ${th.palette.background.default}, transparent)` },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              gap: { xs: 2, md: 2.5 },
              '@keyframes toolsScroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              animation: 'toolsScroll 32s linear infinite',
              '&:hover': { animationPlayState: 'paused' },
            }}
          >
            {[...TOOLS, ...TOOLS].map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: 150, md: 190 },
                  height: { xs: 100, md: 130 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 1.5, md: 2.5 },
                  borderRadius: '18px',
                  bgcolor: '#ffffff',
                  border: `1px solid ${alpha(primary, 0.1)}`,
                  boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
                  transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 18px 44px ${alpha(primary, 0.16)}`,
                    borderColor: alpha(primary, 0.3),
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ToolsSection;
