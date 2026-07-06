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
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { icon: AccountBalanceIcon, title: 'Accounting & Bookkeeping',        desc: 'Financial statement preparation, GL maintenance, AR/AP management, bank reconciliations, and payroll processing.' },
  { icon: ReceiptLongIcon,    title: 'Tax Planning & Preparation',       desc: 'Corporate returns (1120, 1120S, 1065), individual filings (1040, 1041), sales tax, payroll tax, and IRS representation.' },
  { icon: BarChartIcon,       title: 'Financial Consulting & Advisory',  desc: 'Budgeting, cash flow management, business valuation, risk management, and mergers & acquisitions advisory.' },
  { icon: CleaningServicesIcon,title: 'Catch-Up & Clean-Up Services',   desc: 'Review and correction of historical records, reconciliation of discrepancies, and updating outdated accounting systems.' },
  { icon: SettingsIcon,       title: 'Accounting Software Setup',        desc: 'QuickBooks setup and training, cloud migrations to Xero, seamless desktop-to-online conversions, and ongoing support.' },
  { icon: VerifiedIcon,       title: 'Audit & Assurance Services',       desc: 'Internal audits, financial statement reviews, compilations, compliance audits, and regulatory reporting.' },
  { icon: AssignmentIcon,     title: 'Write-Up Services',                desc: 'Monthly, quarterly, and annual write-up including data entry, account reconciliations, and general ledger checks for accuracy.' },
  { icon: PeopleIcon,         title: 'CPA Firm Back-Office Support',     desc: 'Tax preparation assistance, data entry, reconciliation, and audit documentation support for CPA firms during peak seasons.' },
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
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              From organizing financial records to tax filings, financial consulting, and audit support — we cover every aspect of your business finances.
            </Typography>
          </motion.div>
        </Box>

        {/* Service grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
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
                    '& .card-arrow': { opacity: 1, transform: 'translateX(0px)' },
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
                  position: 'absolute', bottom: 10, right: 14,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: '3.8rem', lineHeight: 1,
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
                  fontWeight: 800, fontSize: '0.95rem',
                  color: 'text.primary', mb: 1, lineHeight: 1.35,
                  transition: 'color 0.28s ease',
                }}>
                  {svc.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.84rem', lineHeight: 1.72,
                  color: 'text.secondary',
                  pr: 2,
                }}>
                  {svc.desc}
                </Typography>

                {/* Slide-in arrow */}
                <Box className="card-arrow" sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 0.5,
                  mt: 2.5,
                  color: primary,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700, fontSize: '0.75rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  opacity: 0,
                  transform: 'translateX(-8px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}>
                  Learn more
                  <ArrowForwardIcon sx={{ fontSize: '0.8rem' }} />
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
