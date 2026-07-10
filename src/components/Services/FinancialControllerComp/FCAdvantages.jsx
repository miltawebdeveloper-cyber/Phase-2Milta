import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const POINTS = [
  { icon: RocketLaunchIcon, label: 'Startups',               text: 'Establish a strong financial foundation with expert guidance.' },
  { icon: StorefrontIcon,   label: 'Small Businesses',        text: 'Streamline financial processes and stay focused on growth.' },
  { icon: BusinessIcon,     label: 'Medium-Sized Enterprises', text: 'Optimize financial management with professional insights without the expense of full-time staff.' },
];

const FCAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>

      {/* Decorative background */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' }} />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -140, right: -120, pointerEvents: 'none', zIndex: 0 }}
      >
        <Box sx={{ width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.09)} 0%, transparent 70%)` }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              WHO WE SERVE
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              Who Can Benefit from Our{' '}
              <Box component="span" sx={{ color: primary }}>Services?</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, fontFamily: '"Outfit", sans-serif', maxWidth: 620, mx: 'auto', mt: 2 }}>
              Strengthening Businesses of All Sizes with Expert Financial Guidance.
            </Typography>
          </motion.div>
        </Box>

        {/* Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 3.5 } }}>
          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <Box
                key={point.label}
                component={motion.div}
                {...fadeUp(i * 0.12)}
                sx={{
                  position: 'relative',
                  p: { xs: 3.5, md: 4 },
                  borderRadius: '22px',
                  bgcolor: 'background.default',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 24px 56px ${alpha(primary, 0.16)}`,
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    '& .fc-topbar': { width: '100%' },
                    '& .fc-icon': { transform: 'scale(1.08) rotate(-4deg)', bgcolor: primary, boxShadow: `0 10px 24px ${alpha(primary, 0.4)}` },
                    '& .fc-icon-svg': { color: '#fff' },
                    '& .fc-num': { opacity: 1 },
                  },
                }}
              >
                {/* Sweeping top accent */}
                <Box className="fc-topbar" sx={{ position: 'absolute', top: 0, left: 0, height: '4px', width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.4)})`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }} />

                {/* Watermark number */}
                <Typography className="fc-num" sx={{ position: 'absolute', top: 12, right: 20, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '3.4rem', lineHeight: 1, color: alpha(primary, 0.08), userSelect: 'none', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.32s ease' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>

                <Box className="fc-icon" sx={{
                  width: 64, height: 64, borderRadius: '18px', mb: 3,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  bgcolor: alpha(primary, 0.1), border: `1px solid ${alpha(primary, 0.18)}`,
                  transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <Icon className="fc-icon-svg" sx={{ fontSize: 30, color: primary, transition: 'color 0.32s ease' }} />
                </Box>

                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'text.primary', mb: 1, lineHeight: 1.3 }}>
                  {point.label}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.92rem', lineHeight: 1.75, color: 'text.secondary' }}>
                  {point.text}
                </Typography>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default FCAdvantages;
