import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  {
    title: 'Cost Savings',
    desc: 'Partnering with Miltafs helps you significantly cut operational expenses while maintaining high-quality standards.',
    items: [
      'Save on recruitment, training, and employee benefits.',
      'Pay only for the services or hours you require.',
      'Reduce operational costs without compromising on quality.',
    ],
  },
  {
    title: 'Increased Productivity',
    featured: true,
    desc: "Boost your company's performance by delegating time-consuming tasks to our skilled virtual assistants.",
    items: [
      "Focus on your business's core operations while delegating repetitive tasks.",
      'Access experienced professionals skilled in various domains.',
      'Improve turnaround times with efficient task handling.',
    ],
  },
  {
    title: 'Expert Support',
    desc: 'Gain access to qualified professionals with expertise in multiple business support areas.',
    items: [
      'Professionals skilled in accounting, bookkeeping, and customer support.',
      'Trained in the latest tools and technologies.',
      'Dedicated to delivering top-notch performance and accuracy.',
    ],
  },
];

const VAAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              Benefits of{' '}
              <Box component="span" sx={{ color: primary }}>Virtual Assistant Services in the USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, fontFamily: '"Outfit", sans-serif', maxWidth: 720, mx: 'auto', mt: 2 }}>
              Partnering with Miltafs offers a multitude of advantages that help small businesses scale efficiently, cut costs, and enhance productivity — all while ensuring quality and reliability.
            </Typography>
          </motion.div>
        </Box>

        {/* 3-column advantages */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {ADVANTAGES.map((adv, i) => (
            <Box
              key={adv.title}
              component={motion.div}
              {...fadeUp(i * 0.1)}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: '20px',
                transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                ...(adv.featured ? {
                  background: 'linear-gradient(155deg, #0d1f0e 0%, #163018 55%, #1e4020 100%)',
                  boxShadow: `0 8px 32px ${alpha(primary, 0.25)}`,
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: `0 20px 52px ${alpha(primary, 0.35)}` },
                } : {
                  bgcolor: 'background.default',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 16px 44px ${alpha(primary, 0.12)}`,
                    border: `1px solid ${alpha(primary, 0.25)}`,
                  },
                }),
              }}
            >
              <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.15rem', color: primary, mb: 1.5, lineHeight: 1.3 }}>
                {adv.title}
              </Typography>
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.92rem', lineHeight: 1.75, color: adv.featured ? alpha('#fff', 0.7) : 'text.secondary', mb: 2.5 }}>
                {adv.desc}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {adv.items.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: primary, mt: '2px', flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.6, color: adv.featured ? alpha('#fff', 0.7) : 'text.secondary' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default VAAdvantages;
