import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BarChartIcon from '@mui/icons-material/BarChart';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const PROFESSIONALS = [
  {
    icon: AccountBalanceIcon,
    title: 'Tax Professional',
    desc: 'Expert support for accurate filings, compliance, and tax savings year-round.',
  },
  {
    icon: AssignmentIcon,
    title: 'Bookkeeping Specialist',
    desc: 'Maintain clean, up-to-date books for smarter financial decisions.',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Accounts Payable Specialist',
    desc: 'Efficient invoice processing and vendor payment management.',
  },
  {
    icon: BarChartIcon,
    title: 'Financial Reporting Analyst',
    desc: 'Data-driven reports and insights to accelerate business growth.',
  },
];

const HireProfessionals = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const onPrimary = theme.palette.primary.contrastText;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Hire Dedicated Accounting Professionals
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {PROFESSIONALS.map((pro, i) => {
            const Icon = pro.icon;
            return (
              <Box
                key={pro.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  borderRadius: '18px',
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 20px 48px ${alpha(primary, 0.14)}`,
                    '& .hp-icon': { transform: 'scale(1.08)' },
                  },
                }}
              >
                <Box
                  className="hp-icon"
                  sx={{
                    width: 62, height: 62, borderRadius: '50%', mb: 2.5, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: primary,
                    transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Icon sx={{ fontSize: 28, color: onPrimary }} />
                </Box>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.05rem', mb: 1.5, lineHeight: 1.3, color: 'primary.main' }}>
                  {pro.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: 'text.secondary' }}>
                  {pro.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default HireProfessionals;
