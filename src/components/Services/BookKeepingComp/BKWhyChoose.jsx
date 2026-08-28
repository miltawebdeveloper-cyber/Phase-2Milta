import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { 
    icon: CheckCircleIcon, 
    title: 'Accurate Record Keeping', 
    desc: 'We maintain precise and error-free financial records to help you focus on growing your business.' 
  },
  { 
    icon: AccessTimeIcon, 
    title: 'Timely Reporting', 
    desc: 'Get financial reports delivered on time, every time — helping you make informed business decisions.' 
  },
   { 
    icon: SupportAgentIcon, 
    title: 'Secure Data Handling', 
    desc: 'We protect your data with advanced encryption and secure file transfers.' 
  },
  { 
    icon: SupportAgentIcon, 
    title: 'Expert Support', 
    desc: 'Our team provides continuous support for all your bookkeeping and financial queries.' 
  },
  { 
    icon: AttachMoneyIcon, 
    title: 'Affordable Pricing', 
    desc: 'High-quality bookkeeping services designed to fit every business budget.',
    featured: true 
  },
];

const BKWhyChoose = () => {
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
              Why Choose Miltafs's{' '}
              <Box component="span" sx={{ color: primary }}>Bookkeeping Services?</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 600, mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              There are many bookkeeping services available, but why choose Miltafs? Here's what sets us apart:
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.22)}>
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
                sx={{ ...(card.featured && { gridColumn: { md: '3' }, gridRow: { md: '1 / span 2' } }) }}
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

export default BKWhyChoose;