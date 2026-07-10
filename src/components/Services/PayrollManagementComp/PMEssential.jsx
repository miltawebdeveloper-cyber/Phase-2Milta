import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LockIcon from '@mui/icons-material/Lock';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  {
    icon: SentimentSatisfiedAltIcon,
    title: 'Employee Satisfaction & Trust',
    desc: 'Timely and error-free salary processing improves employee confidence, morale, and retention while eliminating payroll-related disputes.',
  },
  {
    icon: HourglassBottomIcon,
    title: 'Time Efficiency for Internal Teams',
    desc: 'Professional payroll management frees your HR and finance teams from repetitive payroll tasks, allowing them to focus on strategic business initiatives.',
  },
  {
    icon: LockIcon,
    title: 'Secure Payroll Data Protection',
    desc: 'Advanced payroll systems safeguard sensitive employee data, including salaries, tax information, and personal details, through secure platforms.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Scalable & Cost-Effective Payroll',
    desc: 'Easily manage payroll as your workforce grows while reducing costs associated with in-house payroll staff and expensive payroll software.',
  },
];

const PMEssential = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, lineHeight: 1.3 }}>
              Why Payroll Management Is Essential
              <Box component="span" sx={{ display: 'block', color: primary }}>
                for US Businesses
              </Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 780, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Effective payroll management directly impacts regulatory compliance, employee satisfaction, and overall
              business stability. Partnering with a professional payroll management firm ensures accurate processing,
              data security, and smooth payroll operations—without internal stress.
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

export default PMEssential;
