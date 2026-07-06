import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PieChartIcon from '@mui/icons-material/PieChart';
import GavelIcon from '@mui/icons-material/Gavel';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CHALLENGES = [
  { icon: VisibilityIcon,        title: 'Maintaining Transparency',        desc: 'Donors and regulators expect full visibility; without strong records and internal controls, trust and accountability suffer.' },
  { icon: PieChartIcon,          title: 'Fund Restriction Tracking',      desc: 'Separating restricted, temporarily restricted, and unrestricted net assets is complex but essential for compliant reporting.' },
  { icon: GavelIcon,             title: 'IRS Compliance & Form 990',      desc: 'Filing Form 990, 990-EZ, or 990-N correctly and on time is non-negotiable, and mistakes risk penalties or lost tax-exempt status.' },
  { icon: VolunteerActivismIcon, title: 'Grant & Donation Documentation', desc: 'Every contribution must be tracked and used as intended, with documentation that satisfies grantors and auditors.' },
  { icon: GroupsIcon,            title: 'Limited In-House Resources',     desc: 'Many small nonprofits can\'t afford a full-time accountant, leaving the books under-managed and error-prone.' },
  { icon: HourglassEmptyIcon,    title: 'Penalties & Late Filings',       desc: 'Missed deadlines and filing errors can trigger penalties and jeopardize your good standing with the IRS.' },
];

const NPChallenges = () => {
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
                <Box component="span" sx={{ color: primary }}>by Nonprofits</Box>
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
                  6
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

export default NPChallenges;
