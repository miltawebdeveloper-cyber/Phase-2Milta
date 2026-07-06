import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GavelIcon from '@mui/icons-material/Gavel';
import BuildIcon from '@mui/icons-material/Build';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CloudIcon from '@mui/icons-material/Cloud';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ELEMENTS = [
  { icon: AccountTreeIcon,          title: 'Project-Based Accounting',            desc: 'Track income, expenses, and profitability per project with WIP reports for billable milestones and future cash flow needs.' },
  { icon: AccountBalanceWalletIcon, title: 'Expense Management',                  desc: 'Categorize materials, labor, and overhead costs with approval systems to maintain budgets and prevent unauthorized spending.' },
  { icon: PaymentsIcon,             title: 'Payroll Processing',                  desc: 'On-time payments, tax deductions, and labor law compliance for full-time employees and subcontractors.' },
  { icon: ReceiptLongIcon,          title: 'Invoicing & Payment Tracking',        desc: 'Create accurate invoices, monitor outstanding balances, and integrate payment platforms for better cash flow.' },
  { icon: GavelIcon,                title: 'Tax Compliance & Planning',           desc: 'Capture all deductible expenses, file tax documents on time, and use strategic methods to lower tax liability.' },
  { icon: BuildIcon,                title: 'Equipment & Asset Tracking',          desc: 'Track asset purchases, depreciation, maintenance schedules, and resale value for accurate financial projections.' },
  { icon: AccountBalanceIcon,       title: 'Bank Reconciliation',                 desc: 'Regularly compare bank statements with financial records to catch errors early and prevent fraud.' },
  { icon: BarChartIcon,             title: 'Financial Reporting',                 desc: 'Timely cash flow reports, balance sheets, and P&L statements to guide bidding and budgeting decisions.' },
  { icon: HandshakeIcon,            title: 'Subcontractor Payments & Compliance', desc: 'Track contracts, issue 1099s, and maintain compliance to avoid misclassification and IRS penalties.' },
  { icon: CloudIcon,                title: 'Cloud-Based Bookkeeping Tools',       desc: 'Real-time data sharing between field and office with automated reporting, bank syncing, and 24/7 access.' },
];

const CCSolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const featured = ELEMENTS.slice(0, 2);
  const rest = ELEMENTS.slice(2);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>

      {/* Dot pattern bg */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.045)} 1.5px, transparent 1.5px)`,
        backgroundSize: '28px 28px',
      }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              KEY ELEMENTS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Key Elements of Bookkeeping for{' '}
              <Box component="span" sx={{ color: primary }}>Contractor Businesses</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              10 essential aspects of bookkeeping that keep every construction business profitable and compliant.
            </Typography>
          </motion.div>
        </Box>

        {/* ── TIER 1: 2 large featured cards ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
          {featured.map((el, i) => {
            const Icon = el.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <Box
                key={el.title}
                component={motion.div}
                {...fadeUp(i * 0.1)}
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: `linear-gradient(140deg, ${primary} 0%, ${alpha(primary, 0.78)} 100%)`,
                    border: `1px solid ${primary}`,
                    transform: 'translateY(-6px)',
                    boxShadow: `0 24px 56px ${alpha(primary, 0.35)}`,
                    '& .feat-num': { color: 'rgba(255,255,255,0.18)' },
                    '& .feat-icon-box': {
                      bgcolor: 'rgba(255,255,255,0.18)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '& svg': { color: '#fff' },
                    },
                    '& .feat-title': { color: '#fff' },
                    '& .feat-desc': { color: 'rgba(255,255,255,0.78)' },
                  },
                }}
              >
                {/* Corner number */}
                <Typography className="feat-num" sx={{
                  position: 'absolute', top: 20, right: 24,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: '0.68rem',
                  color: alpha(primary, 0.5), letterSpacing: '0.12em',
                  transition: 'color 0.35s ease',
                }}>
                  {num}
                </Typography>

                <Box className="feat-icon-box" sx={{
                  width: 56, height: 56, borderRadius: '16px',
                  bgcolor: alpha(primary, 0.1),
                  border: `1px solid ${alpha(primary, 0.2)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, transition: 'all 0.35s ease',
                }}>
                  <Icon sx={{ fontSize: 26, color: primary, transition: 'color 0.35s ease' }} />
                </Box>

                <Typography className="feat-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.2rem' },
                  color: 'text.primary', mb: 1.25, lineHeight: 1.25,
                  transition: 'color 0.35s ease',
                }}>
                  {el.title}
                </Typography>
                <Typography className="feat-desc" sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.92rem', lineHeight: 1.8,
                  color: 'text.secondary',
                  transition: 'color 0.35s ease',
                }}>
                  {el.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* ── TIER 2: 4-col compact grid for remaining 8 ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {rest.map((el, i) => {
            const Icon = el.icon;
            const num = String(i + 3).padStart(2, '0');
            return (
              <Box
                key={el.title}
                component={motion.div}
                {...fadeUp(0.1 + i * 0.06)}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: '18px',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: `linear-gradient(140deg, ${alpha(primary, 0.12)} 0%, ${alpha(primary, 0.03)} 100%)`,
                    border: `1px solid ${alpha(primary, 0.4)}`,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 14px 36px ${alpha(primary, 0.14)}`,
                    '& .mini-num': { color: primary },
                    '& .mini-icon-box': {
                      bgcolor: primary,
                      border: `1px solid ${primary}`,
                      '& svg': { color: '#fff' },
                    },
                    '& .mini-title': { color: primary },
                  },
                }}
              >
                {/* Number badge top-right */}
                <Typography className="mini-num" sx={{
                  position: 'absolute', top: 14, right: 16,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: '0.62rem',
                  color: (t) => t.palette.mode === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.15)',
                  letterSpacing: '0.1em',
                  transition: 'color 0.3s ease',
                }}>
                  {num}
                </Typography>

                <Box className="mini-icon-box" sx={{
                  width: 42, height: 42, borderRadius: '12px',
                  bgcolor: alpha(primary, 0.08),
                  border: `1px solid ${alpha(primary, 0.15)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2, transition: 'all 0.3s ease',
                }}>
                  <Icon sx={{ fontSize: 19, color: primary, transition: 'color 0.3s ease' }} />
                </Box>

                <Typography className="mini-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '0.87rem',
                  color: 'text.primary', mb: 0.75, lineHeight: 1.35,
                  transition: 'color 0.3s ease',
                }}>
                  {el.title}
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.79rem', lineHeight: 1.72,
                  color: 'text.secondary',
                }}>
                  {el.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default CCSolutions;
