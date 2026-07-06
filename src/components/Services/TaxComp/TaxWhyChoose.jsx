import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SavingsIcon from '@mui/icons-material/Savings';
import LayersIcon from '@mui/icons-material/Layers';
import TimerIcon from '@mui/icons-material/Timer';
import LockIcon from '@mui/icons-material/Lock';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { icon: WorkspacePremiumIcon, title: 'Expert Knowledge & Experience',         desc: 'Our tax professionals bring over 15 years of hands-on expertise across federal, state, and city tax systems — ensuring every return is prepared accurately and every applicable benefit is captured.' },
  { icon: SavingsIcon,          title: 'Maximum Refunds & Minimal Liabilities', desc: 'We proactively identify every deduction, credit, and tax-saving strategy available to you — reducing your tax burden and maximizing your refund or minimizing what you owe.', featured: true },
  { icon: LayersIcon,           title: 'Comprehensive End-to-End Services',     desc: 'From federal, state, and city preparation to tax review, e-filing, and audit support — we handle every aspect of your tax obligations so nothing falls through the cracks.' },
  { icon: TimerIcon,            title: 'Time & Cost Efficiency',                desc: 'Outsourcing your taxes to Milta saves you countless hours and avoids costly errors. Our streamlined process ensures fast turnaround while keeping your costs predictable and competitive.' },
  { icon: LockIcon,             title: 'Secure & Confidential',                 desc: 'Your financial data is handled with the highest level of security and confidentiality. We use encrypted systems and strict protocols to protect every document and detail you share with us.' },
];

const TaxWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -160, right: -160, pointerEvents: 'none' }}
      >
        <Box sx={{ width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.07)} 0%, transparent 70%)` }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
              WHY MILTA
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2, maxWidth: 680 }}>
              Why Choose Milta as Your{' '}
              <Box component="span" sx={{ color: primary }}>Tax Planning & Preparation Partner?</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.3), mt: 2 }} />
          </motion.div>
        </Box>

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

export default TaxWhyChoose;
