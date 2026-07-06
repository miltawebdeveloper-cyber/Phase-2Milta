import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PolicyIcon from '@mui/icons-material/Policy';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PaymentsIcon from '@mui/icons-material/Payments';
import ExtensionIcon from '@mui/icons-material/Extension';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CHALLENGES = [
  { icon: CurrencyExchangeIcon, title: 'Irregular Cash Flow',            desc: 'Construction projects don\'t follow a predictable schedule, making it hard to balance payroll, purchase materials, and cover expenses during slower months.' },
  { icon: AccountTreeIcon,      title: 'Job Costing Complexity',         desc: 'Tracking labor, materials, and equipment costs across multiple job sites is difficult, leading to budget overruns and profit loss without detailed bookkeeping.' },
  { icon: SyncAltIcon,          title: 'Managing Change Orders',         desc: 'Frequent change orders require real-time adjustments to invoices, costs, and project budgets to keep financial records aligned and accurate.' },
  { icon: PolicyIcon,           title: 'Tax Compliance Issues',          desc: 'Complicated payroll, sales, and income taxes require organized records and strategic planning to avoid penalties and remain audit-ready.' },
  { icon: HandshakeIcon,        title: 'Subcontractor Payments',         desc: 'Paying subcontractors involves maintaining accurate 1099 records, handling tax paperwork, and tracking every payment to stay compliant with tax rules.' },
  { icon: HourglassEmptyIcon,   title: 'Tracking Retainage',             desc: 'Retainage withheld until project completion is difficult to monitor without proper accounting, causing serious cash flow issues if not managed correctly.' },
  { icon: PaymentsIcon,         title: 'Multiple Payment Methods',       desc: 'Managing checks, credit cards, wire transfers, and ACH payments complicates reconciliation and increases the risk of financial errors and missed income.' },
  { icon: ExtensionIcon,        title: 'Project Management Integration', desc: 'Aligning your accounting system with construction management software is essential for real-time tracking of expenses, profitability, and job performance.' },
];

const CCChallenges = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 8, lg: 8 }} alignItems="flex-start">

          {/* ── LEFT: sticky heading panel ── */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', lg: 340 }, position: { lg: 'sticky' }, top: { lg: 80 } }}>
            <motion.div {...fadeUp(0)}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
                COMMON CHALLENGES
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, lineHeight: 1.18, mb: 2.5, letterSpacing: '-0.02em' }}>
                Bookkeeping Challenges Faced{' '}
                <Box component="span" sx={{ color: primary }}>by Contractors</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 40, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.4), mb: 3 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.82, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                Understanding these pain points is the first step to overcoming them. Milta's expert team is equipped to handle every one of these challenges for your business.
              </Typography>
            </motion.div>

            {/* Summary card */}
            <motion.div {...fadeUp(0.26)}>
              <Box sx={{
                p: 3, borderRadius: '18px',
                bgcolor: alpha(primary, 0.05),
                border: `1px solid ${alpha(primary, 0.18)}`,
              }}>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '2.5rem', color: primary, lineHeight: 1, mb: 0.5 }}>
                  8
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: '0.82rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Identified challenges — all handled by Milta experts
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* ── RIGHT: 2-col challenges grid ── */}
          <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, alignContent: 'start' }}>
            {CHALLENGES.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <Box
                  key={ch.title}
                  component={motion.div}
                  {...fadeUp(i * 0.07)}
                  sx={{
                    p: 3,
                    borderRadius: '18px',
                    bgcolor: 'background.default',
                    border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'flex', gap: 2, alignItems: 'flex-start',
                    position: 'relative', overflow: 'hidden',
                    cursor: 'default',
                    transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 16px 42px ${alpha(primary, 0.1)}`,
                      border: `1px solid ${alpha(primary, 0.28)}`,
                      '& .chl-bar': { height: '55%' },
                      '& .chl-icon': { bgcolor: primary, '& svg': { color: '#fff' } },
                      '& .chl-title': { color: primary },
                    },
                  }}
                >
                  {/* Left accent bar */}
                  <Box className="chl-bar" sx={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: 3, height: '30%', borderRadius: '0 3px 3px 0',
                    bgcolor: primary, transition: 'height 0.28s ease',
                  }} />

                  {/* Icon */}
                  <Box className="chl-icon" sx={{
                    width: 42, height: 42, flexShrink: 0,
                    borderRadius: '12px',
                    bgcolor: alpha(primary, 0.08),
                    border: `1px solid ${alpha(primary, 0.15)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.28s ease',
                  }}>
                    <Icon sx={{ fontSize: 20, color: primary, transition: 'color 0.28s ease' }} />
                  </Box>

                  {/* Text */}
                  <Box sx={{ flex: 1, pl: 0.5 }}>
                    <Typography className="chl-title" sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 800, fontSize: '0.92rem',
                      color: 'text.primary', mb: 0.5, lineHeight: 1.3,
                      transition: 'color 0.28s ease',
                    }}>
                      {ch.title}
                    </Typography>
                    <Typography sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: '0.82rem', lineHeight: 1.7,
                      color: 'text.secondary',
                    }}>
                      {ch.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default CCChallenges;
