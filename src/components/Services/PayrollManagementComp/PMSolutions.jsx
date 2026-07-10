import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import PaymentsIcon from '@mui/icons-material/Payments';
import GavelIcon from '@mui/icons-material/Gavel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BarChartIcon from '@mui/icons-material/BarChart';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    icon: PaymentsIcon,
    title: 'End-to-End Payroll Processing',
    items: [
      'Complete payroll calculation and processing.',
      'Accurate salary computation and deductions.',
      'Automated payslip generation and distribution.',
      'Timely payroll execution without delays.',
    ],
  },
  {
    icon: GavelIcon,
    title: 'Payroll Tax Compliance & Filing',
    items: [
      'Federal, state, and local payroll tax compliance.',
      'Accurate tax calculations and timely filings.',
      'Handling of payroll-related statutory obligations.',
      'Reduced compliance risks and penalties.',
    ],
  },
  {
    icon: PersonAddIcon,
    title: 'Employee Onboarding & Offboarding',
    items: [
      'Seamless payroll setup for new hires.',
      'Accurate salary structuring and tax setup.',
      'Final settlements and exit payroll processing.',
      'Compliance-ready documentation management.',
    ],
  },
  {
    icon: AccessTimeIcon,
    title: 'Time & Attendance Integration',
    items: [
      'Automated tracking of work hours and overtime.',
      'Leave and attendance synchronization.',
      'Error-free payroll based on real-time data.',
      'Improved payroll accuracy and transparency.',
    ],
  },
  {
    icon: PublicIcon,
    title: 'Multi-Country Payroll Support',
    items: [
      'Payroll services across multiple geographies.',
      'Support for USA, UK, Canada, Australia, and India.',
      'Country-specific compliance and tax handling.',
      'Centralized global payroll management.',
    ],
  },
  {
    icon: CardGiftcardIcon,
    title: 'Employee Benefits & Deductions',
    items: [
      'Management of insurance and retirement plans.',
      'Handling reimbursements and statutory deductions.',
      'Accurate benefit calculations and reporting.',
      'Employee-friendly and compliant payroll structure.',
    ],
  },
  {
    icon: BarChartIcon,
    title: 'Custom Payroll Reports',
    items: [
      'Audit-ready payroll and compliance reports.',
      'Custom reports tailored to business needs.',
      'Real-time dashboards for payroll insights.',
      'Improved decision-making with accurate data.',
    ],
  },
  {
    icon: IntegrationInstructionsIcon,
    title: 'Payroll Software Integration',
    items: [
      'Integration with leading payroll platforms.',
      'QuickBooks, Gusto, ADP, Paychex support.',
      'Xero, Zoho, and Odoo payroll integration.',
      'Seamless data flow across accounting systems.',
    ],
  },
];

const PMSolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              END-TO-END PAYROLL SOLUTIONS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Payroll Management Services by{' '}
              <Box component="span" sx={{ color: primary }}>Milta Accounting</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 620, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Milta Accounting is a leading payroll management company offering comprehensive Payroll Management Services in the USA and globally, helping businesses stay compliant, accurate, and stress-free.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  p: 3.5, borderRadius: '20px', height: '100%',
                  bgcolor: 'background.paper',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
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
                  },
                }}
              >
                <Box className="sweep-bar" sx={{ position: 'absolute', top: 0, left: 0, height: '3px', width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`, borderRadius: '0 0 3px 0', transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                <Typography className="card-num" sx={{ position: 'absolute', top: 14, right: 18, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '3.2rem', lineHeight: 1, color: alpha(primary, 0.07), userSelect: 'none', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.32s ease' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box className="icon-wrap" sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, flexShrink: 0, transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography className="card-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', color: 'text.primary', mb: 2, lineHeight: 1.35, transition: 'color 0.28s ease' }}>
                  {svc.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {svc.items.map((item) => (
                    <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: primary, mt: '2px', flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.86rem', lineHeight: 1.55, color: 'text.secondary' }}>
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

export default PMSolutions;
