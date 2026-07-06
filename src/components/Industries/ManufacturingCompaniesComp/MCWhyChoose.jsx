import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BarChartIcon from '@mui/icons-material/BarChart';
import GavelIcon from '@mui/icons-material/Gavel';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { icon: GroupsIcon,      title: 'Industry-Focused Expertise',              desc: 'From raw-material tracking and inventory valuation to job costing and production overheads, we tailor solutions to your specific operational demands.' },
  { icon: Inventory2Icon,  title: 'Full-Cycle Inventory & Cost Management',  desc: 'Real-time visibility into inventory and COGS — from raw materials to finished goods — for data-driven pricing and production decisions.' },
  { icon: BarChartIcon,    title: 'Advanced Job Costing & Budgeting',        desc: 'Precise job costing reports and financial forecasts so you can track project profitability, control costs, and plan with confidence.' },
  { icon: GavelIcon,       title: 'Manufacturing Tax Expertise',             desc: 'We identify eligible deductions, maximize credits, and maintain full compliance with ever-changing state and federal tax laws.' },
  { icon: DevicesIcon,     title: 'Technology-Driven Solutions',             desc: 'We work with QuickBooks Desktop Enterprise, Xero, NetSuite, and Sage for seamless, secure, cloud-based collaboration.' },
  { icon: SupportAgentIcon, title: 'Dedicated Support & Transparent Reporting', desc: 'A professional account manager who knows your business, with proactive insights and timely, transparent reports — no surprises, just outcomes.' },
];

const STATS = [{ num: '10+', label: 'Years Experience' }, { num: '500+', label: 'Clients Served' }, { num: '100%', label: 'Retention Rate' }];

const MCWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{
      py: { xs: 8, md: 14 },
      background: 'linear-gradient(145deg, #091509 0%, #0d1f0e 45%, #163018 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glows */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.28)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '-15%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.18)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      {/* Rings */}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 600, md: 1100 }, height: { xs: 600, md: 1100 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.04)}`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 350, md: 680 }, height: { xs: 350, md: 680 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.03)}`, pointerEvents: 'none' }} />
      {/* Dot pattern */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha('#fff', 0.035)} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 8, lg: 10 }} alignItems={{ lg: 'flex-start' }}>

          {/* ── LEFT: sticky text panel ── */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', lg: 360 }, position: { lg: 'sticky' }, top: { lg: 80 } }}>
            <motion.div {...fadeUp(0)}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box sx={{ width: 20, height: 2, borderRadius: 2, bgcolor: primary }} />
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.72rem' }}>
                  WHY MILTA
                </Typography>
              </Box>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ color: '#ffffff', fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 900, lineHeight: 1.18, letterSpacing: '-0.02em', mb: 2.5 }}>
                Advantages of Choosing Milta for{' '}
                <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Manufacturing Accounting</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: alpha('#fff', 0.6), fontSize: '0.95rem', lineHeight: 1.8, mb: 4, fontFamily: '"Outfit", sans-serif' }}>
                We specialize in accurate, efficient, industry-specific accounting and bookkeeping for manufacturing companies across the U.S. Our deep understanding of manufacturers' unique financial challenges sets us apart from generic providers.
              </Typography>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.25)}>
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                {STATS.map((s) => (
                  <Box key={s.label}>
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>{s.num}</Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.68rem', color: alpha('#fff', 0.45), fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.4 }}>{s.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Button
                variant="outlined"
                href="/contact"
                endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem !important' }} />}
                sx={{
                  px: 3.5, py: 1.3, borderRadius: '50px',
                  color: '#fff', borderColor: alpha('#fff', 0.3),
                  fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.06em',
                  '&:hover': { borderColor: primary, bgcolor: alpha(primary, 0.15) },
                }}
              >
                GET STARTED
              </Button>
            </motion.div>
          </Box>

          {/* ── RIGHT: 2×2 glass card grid + 1 wide card ── */}
          <Box sx={{ flex: 1 }}>
            {/* 2×2 grid (cards 1–4) */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 2 }}>
              {CARDS.slice(0, 4).map((card, i) => {
                const Icon = card.icon;
                return (
                  <Box
                    key={card.title}
                    component={motion.div}
                    {...fadeUp(0.1 + i * 0.1)}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.055)',
                      border: `1px solid rgba(255,255,255,0.1)`,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.09)',
                        border: `1px solid ${alpha(primary, 0.45)}`,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 20px 50px rgba(0,0,0,0.25)`,
                        '& .wc-icon': { bgcolor: primary },
                        '& .wc-icon svg': { color: '#fff' },
                      },
                    }}
                  >
                    <Box className="wc-icon" sx={{
                      width: 48, height: 48, borderRadius: '14px',
                      bgcolor: alpha(primary, 0.18),
                      border: `1px solid ${alpha(primary, 0.3)}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 2.5, transition: 'all 0.3s ease',
                    }}>
                      <Icon sx={{ fontSize: 22, color: primary }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.97rem', color: '#ffffff', mb: 1, lineHeight: 1.3 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.84rem', lineHeight: 1.72, color: alpha('#fff', 0.58) }}>
                      {card.desc}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Cards 5 & 6 — full-width featured bars */}
            <Stack spacing={2}>
              {CARDS.slice(4).map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Box
                    key={card.title}
                    component={motion.div}
                    {...fadeUp(0.5 + idx * 0.1)}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '20px',
                      display: 'flex', alignItems: 'center', gap: 3,
                      background: `linear-gradient(135deg, ${alpha(primary, 0.25)} 0%, ${alpha(primary, 0.1)} 100%)`,
                      border: `1px solid ${alpha(primary, 0.35)}`,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 20px 50px ${alpha(primary, 0.25)}` },
                    }}
                  >
                    <Box sx={{ width: 52, height: 52, flexShrink: 0, borderRadius: '16px', bgcolor: alpha(primary, 0.3), border: `1px solid ${alpha(primary, 0.45)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon sx={{ fontSize: 24, color: '#fff' }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', color: '#ffffff', mb: 0.5, lineHeight: 1.3 }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.86rem', lineHeight: 1.7, color: alpha('#fff', 0.65) }}>
                        {card.desc}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default MCWhyChoose;
