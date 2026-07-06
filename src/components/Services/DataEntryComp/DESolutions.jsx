import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SyncIcon from '@mui/icons-material/Sync';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { icon: AccountBalanceIcon,   title: 'General Ledger Entry',                desc: 'Methodically document all financial activities to maintain an accurate and thorough general ledger.' },
  { icon: CurrencyExchangeIcon, title: 'Accounts Payable & Receivable',        desc: 'Manage billing and payments accurately, streamlining cash flow and improving vendor relationships.' },
  { icon: ReceiptLongIcon,      title: 'Invoice Data Entry',                   desc: 'Efficient processing of invoices for timely payments and organized, error-free record-keeping.' },
  { icon: SyncIcon,             title: 'Bank Reconciliation',                  desc: 'Reconcile bank statements with your accounting records to eliminate discrepancies and ensure consistency.' },
  { icon: PeopleIcon,           title: 'Payroll Data Entry',                   desc: 'From salaries to deductions, ensure payroll records are precise, compliant, and up-to-date.' },
  { icon: AssignmentIcon,       title: 'Expense Report Management',            desc: 'Organize and evaluate business spending for efficient planning, reporting, and payment workflows.' },
  { icon: BarChartIcon,         title: 'Financial Statement Preparation',      desc: 'Prepare accurate balance sheets and profit & loss statements for better business decision-making.' },
  { icon: HandshakeIcon,        title: 'QuickBooks & Custom Data Entry',       desc: 'Specialized QuickBooks integration and flexible custom solutions tailored to your unique business needs.' },
];

const DESolutions = () => {
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
              Our Data Entry{' '}
              <Box component="span" sx={{ color: primary }}>Services in the USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              From general ledger entry to QuickBooks integration — every service is customized to ensure accuracy, efficiency, and compliance for your business.
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
                    '& .icon-wrap': { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`, transform: 'scale(1.08)' },
                    '& .icon-svg': { color: '#ffffff' },
                    '& .card-title': { color: primary },
                    '& .card-num': { opacity: 1 },
                    '& .card-arrow': { opacity: 1, transform: 'translateX(0px)' },
                  },
                }}
              >
                <Box className="sweep-bar" sx={{ position: 'absolute', top: 0, left: 0, height: '3px', width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`, borderRadius: '0 0 3px 0', transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                <Typography className="card-num" sx={{ position: 'absolute', bottom: 10, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '3.8rem', lineHeight: 1, color: alpha(primary, 0.07), userSelect: 'none', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.32s ease' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box className="icon-wrap" sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, flexShrink: 0, transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography className="card-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.95rem', color: 'text.primary', mb: 1, lineHeight: 1.35, transition: 'color 0.28s ease' }}>
                  {svc.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.84rem', lineHeight: 1.72, color: 'text.secondary', pr: 2 }}>
                  {svc.desc}
                </Typography>
                <Box className="card-arrow" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 2.5, color: primary, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                  Learn more <ArrowForwardIcon sx={{ fontSize: '0.8rem' }} />
                </Box>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default DESolutions;
