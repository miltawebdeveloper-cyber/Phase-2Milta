import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const MiltaOverviewSection = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle bg glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -120, left: -120, pointerEvents: 'none' }}
      >
        <Box sx={{
          width: 420, height: 420, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(primary, 0.06)} 0%, transparent 70%)`,
        }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 6 }}
          alignItems={{ md: 'center' }}
          justifyContent="center"
        >

          {/* ── Left column — Image ── */}
          <Box sx={{ width: '100%', maxWidth: 400, mx: { xs: 'auto', md: 0 } }}>
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  width: '100%',
                  boxShadow: '0 24px 56px rgba(0,0,0,0.1)',
                  transition: 'box-shadow 0.4s ease',
                  '&:hover': { boxShadow: `0 32px 72px ${alpha(primary, 0.15)}` },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Accounting and bookkeeping services"
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: 500,
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { transform: 'scale(1.04)' },
                  }}
                />
                {/* Gradient overlay — fade in */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
                >
                  <Box sx={{
                    width: '100%', height: '100%',
                    background: `linear-gradient(45deg, ${alpha(primary, 0.12)} 0%, transparent 60%)`,
                  }} />
                </motion.div>

                {/* Floating accent bar on image — slide in from left */}
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', bottom: 24, left: 0 }}
                >
                  <Box sx={{
                    width: 5, height: 64,
                    borderRadius: '0 6px 6px 0',
                    bgcolor: primary,
                  }} />
                </motion.div>
              </Box>
            </motion.div>
          </Box>

          {/* ── Right column — Content ── */}
          <Box sx={{ width: '100%', maxWidth: 800, mx: { xs: 'auto', md: 0 } }}>

            {/* Overline pill */}
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 3, display: 'block' }}>
                Back-Office Support Simplified
              </Typography>
            </motion.div>

            {/* Heading */}
            <motion.div {...fadeUp(0.18)}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '1.9rem', md: '2.4rem' },
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                Milta Overview of{' '}
                <Box component="span" sx={{ color: primary }}>
                  Outsourced Accounting Services In the USA
                </Box>
              </Typography>
            </motion.div>

            {/* Accent bar — scale in */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
              style={{ originX: 0, marginBottom: '20px' }}
            >
              <Box sx={{ width: 48, height: 3, borderRadius: '4px', bgcolor: alpha(primary, 0.35), mb: 2.5 }} />
            </motion.div>

            {/* Body 1 */}
            <motion.div {...fadeUp(0.32)}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}>
                Running a small or mid-sized business comes with enough challenges; your back-office
                support shouldn't be one of them. That's where Milta steps in. We're not a
                one-size-fits-all firm built for corporate giants. We focus on what matters to smaller
                businesses: practical solutions, fair pricing, and personalized service.
              </Typography>
            </motion.div>

            {/* Body 2 */}
            <motion.div {...fadeUp(0.42)}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Our team delivers hands-on accounting and bookkeeping support designed to make your
                life easier. Whether you're managing day-to-day Accountss or looking for long-term
                planning help, we provide service that actually fits your business — no fluff, no
                unnecessary costs. With Milta, you get reliable, thoughtful support that keeps your
                business on track.
              </Typography>
            </motion.div>

          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MiltaOverviewSection;
