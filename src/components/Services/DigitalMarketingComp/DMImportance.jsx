import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InsightsIcon from '@mui/icons-material/Insights';
import SavingsIcon from '@mui/icons-material/Savings';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  {
    icon: TrendingUpIcon,
    title: 'Stronger Online Visibility',
    desc: 'Digital marketing puts your brand in front of customers exactly where they search, browse, and buy — building consistent visibility across search engines and social platforms.',
  },
  {
    icon: PersonSearchIcon,
    title: 'Reach the Right Audience',
    desc: 'Precise targeting means your budget reaches people who are already looking for what you offer, instead of being spent on audiences that will never convert.',
  },
  {
    icon: InsightsIcon,
    title: 'Measurable Growth Insights',
    desc: 'Every click, lead, and sale is tracked. Clear analytics show what drives revenue so you can double down on what works and cut what does not.',
  },
  {
    icon: SavingsIcon,
    title: 'Better ROI Than Traditional Ads',
    desc: 'Campaigns are optimised continuously against real performance data, delivering a lower cost per lead and a higher return than print or broadcast advertising.',
  },
];

const DMImportance = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, lineHeight: 1.3 }}>
              Why Is Digital Marketing Important?
              <Box component="span" sx={{ display: 'block', color: primary }}>
                And How Does It Help Your Business Grow?
              </Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 720, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Digital marketing is the growth engine of every modern business. The right strategy helps you attract
              qualified traffic, understand what your customers respond to, and turn attention into revenue — without
              wasted spend or guesswork.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Box
                key={card.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '18px',
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                    '& .icon-wrap': { bgcolor: primary, transform: 'scale(1.06)' },
                    '& .icon-svg': { color: '#ffffff' },
                  },
                }}
              >
                <Box
                  className="icon-wrap"
                  sx={{
                    width: 88, height: 88, borderRadius: '50%', mb: 3, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: alpha(primary, 0.08),
                    border: `1px solid ${alpha(primary, 0.15)}`,
                    transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Icon className="icon-svg" sx={{ fontSize: 40, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.05rem', mb: 1.5, lineHeight: 1.3, color: 'text.primary' }}>
                  {card.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: 'text.secondary' }}>
                  {card.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default DMImportance;
