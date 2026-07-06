import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { icon: PersonIcon,        title: 'Personalized Attention',          desc: 'Every client receives a dedicated tax professional who understands your unique financial situation and tailors your return accordingly.' },
  { icon: CalendarTodayIcon, title: 'Year-Round Tax Support',           desc: 'We are available beyond tax season — helping with estimated payments, tax planning, and IRS correspondence throughout the entire year.' },
  { icon: FlagIcon,          title: 'Customized for U.S. Clients',      desc: 'Our services are specifically built for the U.S. tax system — covering all IRS forms, state agencies, and local jurisdictions relevant to your situation.' },
  { icon: SchoolIcon,        title: 'Specialized Complex Returns',      desc: 'Whether you have multiple income streams, investment properties, foreign income, or trust obligations — we handle the most complex tax scenarios with precision.' },
  { icon: VerifiedIcon,      title: 'Proven Track Record',              desc: 'Hundreds of satisfied individuals, businesses, and non-profits trust Milta every tax season — backed by 15+ years of consistent, error-free filings.' },
];

const PANEL_STATS = [
  { num: '100%', label: 'Filing Accuracy'  },
  { num: '15y+', label: 'Tax Expertise'    },
  { num: '24/7', label: 'Support Access'   },
  { num: '0',    label: 'Missed Deadlines' },
];

const TaxAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 6, lg: 5 }, alignItems: 'stretch' }}>

          {/* LEFT: dark info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 360px', display: 'flex' }}
          >
            <Box sx={{
              width: '100%',
              minHeight: { xs: 'auto', lg: 500 },
              background: 'linear-gradient(145deg, #0d1f0e 0%, #163018 50%, #1a3d1c 100%)',
              borderRadius: '24px',
              p: { xs: 4, md: 5 },
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              overflow: 'hidden', position: 'relative',
            }}>
              <Box sx={{ position: 'absolute', top: '-20%', right: '-15%', width: 320, height: 320, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.35)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
              <Box sx={{ position: 'absolute', bottom: '-25%', left: '-15%', width: 280, height: 280, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.2)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 460, height: 460, borderRadius: '50%', border: `1px solid ${alpha('#ffffff', 0.05)}`, pointerEvents: 'none' }} />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box sx={{ width: 24, height: 3, borderRadius: 2, bgcolor: primary }} />
                  <Typography variant="overline" sx={{ color: primary, fontWeight: 800, letterSpacing: '0.16em', fontSize: '0.72rem' }}>
                    THE ADVANTAGES
                  </Typography>
                </Box>

                <Typography variant="h2" sx={{ color: '#ffffff', fontSize: { xs: '1.75rem', md: '2.1rem' }, fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 2.5 }}>
                  Why Professional{' '}
                  <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Tax Preparation</Box>{' '}
                  Matters
                </Typography>

                <Typography sx={{ color: alpha('#ffffff', 0.68), fontSize: '0.9rem', lineHeight: 1.8, mb: 4, fontFamily: '"Outfit", sans-serif' }}>
                  Filing your taxes with Milta means expert accuracy, maximum savings, zero missed deadlines, and the peace of mind that every return is done right.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 4 }}>
                  {PANEL_STATS.map((stat) => (
                    <Box key={stat.label} sx={{ px: 2, py: 1.5, borderRadius: '12px', bgcolor: alpha('#ffffff', 0.07), border: `1px solid ${alpha('#ffffff', 0.1)}` }}>
                      <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '1.3rem', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
                        {stat.num}
                      </Typography>
                      <Typography sx={{ color: alpha('#fff', 0.55), fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Button
                  variant="contained"
                  href="/contact"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{
                    px: 3.5, py: 1.4, borderRadius: '50px',
                    bgcolor: primary, color: '#fff',
                    fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em',
                    boxShadow: `0 10px 28px ${alpha(primary, 0.4)}`,
                    '&:hover': { bgcolor: '#1a4d1d', boxShadow: `0 16px 38px ${alpha(primary, 0.5)}` },
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* RIGHT: advantage cards */}
          <Stack sx={{ flex: 1 }} spacing={2.5}>
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div key={adv.title} {...fadeUp(i * 0.09)}>
                  <Box sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: '20px',
                    bgcolor: 'background.default',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    display: 'flex', alignItems: 'center', gap: 3,
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: `0 12px 40px ${alpha(primary, 0.12)}`,
                      border: `1px solid ${alpha(primary, 0.25)}`,
                      '& .adv-accent': { opacity: 1, height: '65%' },
                    },
                  }}>
                    <Box className="adv-accent" sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 4, height: '35%', borderRadius: '0 4px 4px 0', bgcolor: primary, opacity: 0, transition: '0.28s ease' }} />
                    <Box sx={{ width: 54, height: 54, flexShrink: 0, borderRadius: '16px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon sx={{ fontSize: 26, color: primary }} />
                    </Box>
                    <Box sx={{ flex: 1, pr: { xs: 4, md: 8 } }}>
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'text.primary', mb: 0.5, lineHeight: 1.3 }}>
                        {adv.title}
                      </Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: 'text.secondary' }}>
                        {adv.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Stack>

        </Box>
      </Container>
    </Box>
  );
};

export default TaxAdvantages;
