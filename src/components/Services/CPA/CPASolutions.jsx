import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BarChartIcon from '@mui/icons-material/BarChart';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsIcon from '@mui/icons-material/Settings';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    icon: AccountBalanceIcon,
    title: 'Accounting & Bookkeeping Services',
    items: [
      'Financial statements for the month, quarter, and year.',
      'Reconciliations and general ledger review.',
      'Management of accounts payable and receivable.',
      'Processing and compliance with payroll.',
      'Reconciliation of credit cards and banks.',
    ],
  },
  {
    icon: ReceiptLongIcon,
    title: 'Tax Planning & Preparation',
    items: [
      'Tax returns for individuals and corporations (Forms 1040, 1120S, 1065, etc.).',
      'Sales tax and payroll filings.',
      'Evaluations and advice on tax compliance.',
      'IRS participation in audits.',
    ],
  },
  {
    icon: BarChartIcon,
    title: 'Financial Consulting & Advisory',
    items: [
      'Forecasting and budgeting techniques.',
      'Optimization of cash flow.',
      'Financial analysis and business valuation.',
      'Internal controls and risk management.',
      'Advice on mergers and acquisitions.',
    ],
  },
  {
    icon: CleaningServicesIcon,
    title: 'Catch-Up & Clean-Up Accounting',
    items: [
      'Corrections to historical records.',
      'Identification and reconciliation of discrepancies.',
      'Upgrades to outdated accounting systems.',
    ],
  },
  {
    icon: SettingsIcon,
    title: 'Software Setup & Conversions',
    items: [
      'QuickBooks migration and customization.',
      'Conversion to Xero-like cloud systems.',
      'Continuous technical assistance and troubleshooting.',
    ],
  },
  {
    icon: VerifiedIcon,
    title: 'Audit & Assurance Services',
    items: [
      'Risk assessments and internal audits.',
      'Audits and evaluations of financial statements.',
      'Regulatory reporting and compliance.',
    ],
  },
];

const CPASolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>

      {/* Subtle dot pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`,
        backgroundSize: '28px 28px',
      }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              END-TO-END SOLUTIONS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Our Core CPA{' '}
              <Box component="span" sx={{ color: primary }}>Services</Box>
              {' '}in the USA
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              From tax planning to audit and financial advisory, we support your business at every stage of growth.
            </Typography>
          </motion.div>
        </Box>

        {/* Service grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  p: 3.5,
                  borderRadius: '20px',
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: alpha(primary, 0.03),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 24px 56px ${alpha(primary, 0.13)}, 0 4px 16px rgba(0,0,0,0.06)`,
                    '& .sweep-bar': { width: '100%' },
                    '& .icon-wrap': {
                      bgcolor: primary,
                      border: `1px solid ${primary}`,
                      boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`,
                      transform: 'scale(1.08)',
                    },
                    '& .icon-svg': { color: '#ffffff' },
                    '& .card-title': { color: primary },
                    '& .card-num': { opacity: 1 },
                  },
                }}
              >
                {/* Sweeping top accent bar */}
                <Box className="sweep-bar" sx={{
                  position: 'absolute', top: 0, left: 0,
                  height: '3px', width: 0,
                  background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`,
                  borderRadius: '0 0 3px 0',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                {/* Faded watermark number */}
                <Typography className="card-num" sx={{
                  position: 'absolute', top: 14, right: 18,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: '3.2rem', lineHeight: 1,
                  color: alpha(primary, 0.07),
                  userSelect: 'none', pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.32s ease',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>

                {/* Icon */}
                <Box className="icon-wrap" sx={{
                  width: 52, height: 52,
                  borderRadius: '14px',
                  bgcolor: alpha(primary, 0.08),
                  border: `1px solid ${alpha(primary, 0.15)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, flexShrink: 0,
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                </Box>

                {/* Title */}
                <Typography className="card-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '1rem',
                  color: 'text.primary', mb: 2, lineHeight: 1.35,
                  transition: 'color 0.28s ease',
                }}>
                  {svc.title}
                </Typography>

                {/* Bulleted items */}
                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {svc.items.map((item) => (
                    <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: primary, mt: '2px', flexShrink: 0 }} />
                      <Typography sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '0.86rem', lineHeight: 1.55,
                        color: 'text.secondary',
                      }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default CPASolutions;
