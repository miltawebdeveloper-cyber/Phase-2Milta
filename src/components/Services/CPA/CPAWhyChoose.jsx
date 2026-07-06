import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import TuneIcon from '@mui/icons-material/Tune';
import BarChartIcon from '@mui/icons-material/BarChart';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { icon: AccessTimeIcon,  title: 'Available Full-Time',           desc: 'Gain access to full-time professionals dedicated to your accounting needs, with backup support to ensure continuous operations.', featured: false },
  { icon: NightlightIcon,  title: 'Overnight Delivery',            desc: 'Operating in a different time zone, we work on your tasks while you are offline — deliverables ready when you return to the office.', featured: true },
  { icon: ListAltIcon,     title: 'Offload Non-Core Functions',    desc: 'Focus on growing your business and nurturing client relationships while we handle all financial complexities end to end.', featured: false },
  { icon: VerifiedIcon,    title: 'High-Quality CPA Services',     desc: 'With a client retention rate exceeding 95%, our skilled professionals deliver consistent, high-quality service tailored to your business.', featured: false },
  { icon: TuneIcon,        title: 'Reduced Overheads',             desc: 'Outsourcing eliminates costs related to salaries, management, and training — achieve overall savings of 60–70% on operational expenses.', featured: false },
  { icon: BarChartIcon,    title: 'Diversify Your Customers',      desc: 'Our expertise spans various industries and accounting platforms, letting you expand your client base without additional research or training.', featured: false },
];

const CPAWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -160, right: -160, pointerEvents: 'none' }}
      >
        <Box sx={{ width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.07)} 0%, transparent 70%)` }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
              WHY MILTAFS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2, maxWidth: 680 }}>
              Why Choose Miltafs for{' '}
              <Box component="span" sx={{ color: primary }}>CPA Services in the USA?</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.3), mt: 2 }} />
          </motion.div>
        </Box>

        {/* Bento grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Box
                key={card.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
              >
                <Box sx={{
                  height: '100%',
                  p: { xs: 3, md: card.featured ? 4.5 : 3.5 },
                  borderRadius: '18px',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  ...(card.featured ? {
                    background: 'linear-gradient(155deg, #0d1f0e 0%, #163018 55%, #1e4020 100%)',
                    boxShadow: `0 8px 32px ${alpha(primary, 0.25)}`,
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 52px ${alpha(primary, 0.35)}` },
                  } : {
                    bgcolor: 'background.default',
                    border: '1px solid rgba(0,0,0,0.07)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,0.09)' },
                  }),
                }}>
                  <Box sx={{
                    width: 52, height: 52, borderRadius: '50%', mb: 3, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    ...(card.featured
                      ? { bgcolor: alpha('#fff', 0.1), border: `1px solid ${alpha('#fff', 0.15)}` }
                      : { bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}` }),
                  }}>
                    <Icon sx={{ fontSize: 26, color: card.featured ? alpha('#fff', 0.9) : primary }} />
                  </Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.1rem', mb: 1.5, lineHeight: 1.3, color: card.featured ? '#fff' : 'text.primary' }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: card.featured ? alpha('#fff', 0.62) : 'text.secondary', flexGrow: 1 }}>
                    {card.desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default CPAWhyChoose;
