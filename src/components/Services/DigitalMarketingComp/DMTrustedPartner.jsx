import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import WebIcon from '@mui/icons-material/Web';
import LayersIcon from '@mui/icons-material/Layers';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PublicIcon from '@mui/icons-material/Public';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const TRUST_POINTS = [
  { icon: VerifiedIcon,     title: 'Proven Industry Experience',  desc: 'Over 15 years serving businesses across all sectors — not confined to specific industries, our expertise spans startups to multi-location enterprises.' },
  { icon: GroupsIcon,       title: 'Dedicated Expert Team',        desc: 'A team of certified digital marketing professionals committed to staying ahead of algorithm changes, platform updates, and emerging strategies.' },
  { icon: WebIcon,          title: 'Custom Website Development',   desc: 'Mobile-ready, SEO-optimized websites built around your brand — designed to convert visitors into customers from the very first click.' },
  { icon: LayersIcon,       title: 'Multi-Channel Strategy',       desc: 'SEO, PPC, social media, content, and email marketing working together in a unified strategy to maximize your online reach and ROI.' },
  { icon: QueryStatsIcon,   title: 'Data-Driven Optimization',     desc: 'Continuous analysis using Google Analytics, Search Console, and social insights to refine campaigns and consistently improve performance.' },
  { icon: PublicIcon,       title: 'Full-Service Digital Agency',  desc: 'From initial consultation to campaign execution and reporting — we handle every aspect of your digital marketing so you can focus on your business.' },
];

const STATS = [
  { num: '500+',  label: 'Clients Served'    },
  { num: '15y+',  label: 'Industry Expertise'},
  { num: '100%',  label: 'Transparent Reports'},
  { num: '24/7',  label: 'Support Access'    },
];

const DMTrustedPartner = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ backgroundColor: '#F7FAF7', position: 'relative' }}>

      {/* ── DARK BAND ── */}
      <Box sx={{
        background: 'linear-gradient(160deg, #091509 0%, #0d1f0e 45%, #163018 100%)',
        pt: { xs: 8, md: 12 }, pb: { xs: 20, md: 26 },
        overflow: 'hidden', position: 'relative',
      }}>
        <Box sx={{ position: 'absolute', top: '-20%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.28)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '-15%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.18)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: 600, md: 1100 }, height: { xs: 600, md: 1100 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.04)}`, pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: 360, md: 680 }, height: { xs: 360, md: 680 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.03)}`, pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha('#fff', 0.04)} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <motion.div {...fadeUp(0)}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem' }}>
                  YOUR TRUSTED PARTNER
                </Typography>
                <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
              </Box>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2, color: '#ffffff', maxWidth: 720, mx: 'auto', letterSpacing: '-0.02em' }}>
                Why Miltafs is Your Trusted Partner for{' '}
                <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Digital Marketing Excellence in the USA</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: alpha('#fff', 0.6), fontSize: '1rem', lineHeight: 1.8, maxWidth: 580, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
                We don't rely on gimmicks. Miltafs leverages expertise, data, and custom strategies to drive real customers to your business and deliver sustainable growth.
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.24)}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 3, md: 6 }, mt: 5 }}>
                {STATS.map((s) => (
                  <Box key={s.label} textAlign="center">
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#fff', lineHeight: 1 }}>{s.num}</Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.72rem', color: alpha('#fff', 0.5), fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mt: 0.5 }}>{s.label}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* ── CARDS — overlap the dark band ── */}
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 2 }}>
        <Box sx={{ mt: { xs: -12, md: -22 }, pb: { xs: 8, md: 12 } }}>

          {/* Row 1 — 3 cards */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5, mb: 2.5 }}>
            {TRUST_POINTS.slice(0, 3).map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div key={pt.title} {...fadeUp(i * 0.1)}>
                  <Box sx={{
                    p: { xs: 3.5, md: 4 }, borderRadius: '22px',
                    bgcolor: 'background.default', border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.1)', height: '100%',
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 24px 56px ${alpha(primary, 0.14)}`,
                      border: `1px solid ${alpha(primary, 0.28)}`,
                      '& .tp-sweep': { width: '100%' },
                      '& .tp-icon': { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 6px 18px ${alpha(primary, 0.35)}`, transform: 'scale(1.08)' },
                      '& .tp-icon-svg': { color: '#fff' },
                      '& .tp-title': { color: primary },
                    },
                  }}>
                    <Box className="tp-sweep" sx={{ position: 'absolute', top: 0, left: 0, height: 3, width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.4)})`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }} />
                    <Typography sx={{ position: 'absolute', bottom: 8, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '4rem', lineHeight: 1, color: alpha(primary, 0.05), userSelect: 'none', pointerEvents: 'none' }}>
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Box className="tp-icon" sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.14)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, flexShrink: 0, transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)' }}>
                      <Icon className="tp-icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                    </Box>
                    <Typography className="tp-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', color: 'text.primary', mb: 1, lineHeight: 1.3, transition: 'color 0.28s ease' }}>
                      {pt.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.86rem', lineHeight: 1.75, color: 'text.secondary' }}>
                      {pt.desc}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* Row 2 — 3 cards */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {TRUST_POINTS.slice(3).map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div key={pt.title} {...fadeUp((i + 3) * 0.1)}>
                  <Box sx={{
                    p: { xs: 3.5, md: 4 }, borderRadius: '22px',
                    bgcolor: 'background.default', border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 24px 56px ${alpha(primary, 0.14)}`,
                      border: `1px solid ${alpha(primary, 0.28)}`,
                      '& .tp-sweep': { width: '100%' },
                      '& .tp-icon': { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 6px 18px ${alpha(primary, 0.35)}`, transform: 'scale(1.08)' },
                      '& .tp-icon-svg': { color: '#fff' },
                      '& .tp-title': { color: primary },
                    },
                  }}>
                    <Box className="tp-sweep" sx={{ position: 'absolute', top: 0, left: 0, height: 3, width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.4)})`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }} />
                    <Typography sx={{ position: 'absolute', bottom: 8, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '4rem', lineHeight: 1, color: alpha(primary, 0.05), userSelect: 'none', pointerEvents: 'none' }}>
                      {String(i + 4).padStart(2, '0')}
                    </Typography>
                    <Box className="tp-icon" sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.14)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, flexShrink: 0, transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)' }}>
                      <Icon className="tp-icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                    </Box>
                    <Typography className="tp-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem', color: 'text.primary', mb: 1, lineHeight: 1.3, transition: 'color 0.28s ease' }}>
                      {pt.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.86rem', lineHeight: 1.75, color: 'text.secondary' }}>
                      {pt.desc}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default DMTrustedPartner;
