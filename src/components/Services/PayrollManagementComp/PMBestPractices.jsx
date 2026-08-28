import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BadgeIcon from '@mui/icons-material/Badge';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import HubIcon from '@mui/icons-material/Hub';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const PRACTICES = [
  {
    icon: AccountBalanceWalletIcon,
    title: 'Clear Wage Structures',
    desc: 'Ensure consistent and transparent wage structures across roles to avoid confusion and disputes.',
  },
  {
    icon: EventAvailableIcon,
    title: 'Defined Payroll Schedules',
    desc: 'Establish well-defined payroll schedules and cut-off dates to ensure timely payments.',
  },
  {
    icon: BadgeIcon,
    title: 'Proper Employee Classification',
    desc: 'Correctly classify exempt and non-exempt employees for accurate wage and tax calculations.',
  },
  {
    icon: MoreTimeIcon,
    title: 'Overtime & Leave Accuracy',
    desc: 'Calculate overtime and leave precisely to avoid payroll errors and disputes.',
  },
  {
    icon: HubIcon,
    title: 'Integrated Systems',
    desc: 'Integrate payroll with accounting systems to streamline financial tracking and reporting.',
  },
  {
    icon: CreditCardIcon,
    title: 'Multiple Payment Methods',
    desc: 'Offer employees convenient payment methods including direct deposit, checks, or digital wallets.',
  },
  {
    icon: AccessAlarmIcon,
    title: 'Reliable Time Tracking',
    desc: 'Use accurate time and attendance tools to track work hours, leaves, and overtime automatically.',
  },
  {
    icon: FactCheckIcon,
    title: 'Test Before Rollout',
    desc: 'Test new payroll systems before full implementation to ensure error-free processing.',
  },
];

const PMBestPractices = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, lineHeight: 1.3 }}>
              Best Practices for Accurate{' '}
              <Box component="span" sx={{ color: primary }}>Payroll Management</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 780, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Effective payroll management requires more than basic processing. To achieve error-free payroll, modern,
              technology-enabled payroll systems and ERP integrations are essential.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {PRACTICES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Box
                key={item.title}
                component={motion.div}
                {...fadeUp((i % 4) * 0.08)}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: '18px',
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
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
                    width: 72, height: 72, borderRadius: '50%', mb: 2.5, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: alpha(primary, 0.08),
                    border: `1px solid ${alpha(primary, 0.15)}`,
                    transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Icon className="icon-svg" sx={{ fontSize: 34, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', mb: 1.5, lineHeight: 1.3, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: 'text.secondary' }}>
                  {item.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default PMBestPractices;
