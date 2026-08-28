import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const STEPS = [
  {
    icon: ScheduleIcon,
    title: 'Time & Wage Calculation',
    desc: 'Track working hours and hourly wages, paid leave, vacation, holidays, overtime, and non-exempt employee calculations. Estimate gross pay accurately after deductions.',
  },
  {
    icon: PaymentsIcon,
    title: 'Payroll Processing & Payments',
    desc: 'Manage direct deposits or paper checks, automate payroll runs, and ensure on-time salary disbursement.',
  },
  {
    icon: AssessmentIcon,
    title: 'Payroll Reporting & Insights',
    desc: 'Analyze labor costs, track employee headcount, monitor vacation and leave balances, and identify highest and lowest earning employees.',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Payroll Tax Processing & Deductions',
    desc: 'Calculate federal, state, and local taxes accurately, automate tax payments to authorities, and manage voluntary deductions and wage garnishments.',
  },
];

const PMHowItWorks = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: alpha(primary, 0.04), position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, lineHeight: 1.3 }}>
              How Our Payroll Management System Works
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 720, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Our advanced payroll management system ensures precision, transparency, and compliance at every stage.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Box
                key={step.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: '18px',
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  bgcolor: 'background.paper',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                    '& .icon-wrap': { bgcolor: primary, transform: 'scale(1.06)' },
                    '& .icon-svg': { color: '#ffffff' },
                    '& .step-num': { opacity: 1 },
                  },
                }}
              >
                <Typography
                  className="step-num"
                  sx={{ position: 'absolute', top: 14, right: 18, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '2.6rem', lineHeight: 1, color: alpha(primary, 0.1), userSelect: 'none', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.32s ease' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box
                  className="icon-wrap"
                  sx={{
                    width: 64, height: 64, borderRadius: '50%', mb: 2.5, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: alpha(primary, 0.08),
                    border: `1px solid ${alpha(primary, 0.15)}`,
                    transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Icon className="icon-svg" sx={{ fontSize: 30, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', mb: 1.5, lineHeight: 1.3, color: 'text.primary' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: 'text.secondary' }}>
                  {step.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default PMHowItWorks;
