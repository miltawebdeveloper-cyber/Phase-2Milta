import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const POINTS = [
  { label: 'Available Full-Time',              text: 'Gain access to full-time professionals dedicated to your accounting needs.' },
  { label: 'Overnight Delivery',               text: "We work while you're offline, ensuring your deliverables are ready by the time you return." },
  { label: 'Offload Non-Core Functions',       text: 'Focus on growing your business while we handle the financial complexities.' },
  { label: 'High-Quality CPA Services in USA', text: 'Skilled professionals with a client retention rate exceeding 95%.' },
  { label: 'Reduced Overheads',                text: 'Eliminate costs related to salaries, management, hiring, and training.' },
  { label: 'Diversify Your Customers',         text: 'Expand your client base without additional investments.' },
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
        Build pass
        
        
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2, maxWidth: 680 }}>
              Why Choose Milta for{' '}
              <Box component="span" sx={{ color: primary }}>CPA Services in USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.3), mt: 2 }} />
          </motion.div>
        </Box>

        {/* Points */}
        <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {POINTS.map((point, i) => (
            <Box
              component={motion.li}
              key={point.label}
              {...fadeUp(i * 0.09)}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
            >
              <ChevronRightIcon sx={{ fontSize: 20, color: primary, mt: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '1rem', lineHeight: 1.7, color: 'text.secondary' }}>
                <Box component="span" sx={{ color: 'text.primary' }}>{point.label}:</Box>{' '}
                {point.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CPAWhyChoose;
