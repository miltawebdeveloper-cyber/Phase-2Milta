import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import MemoryIcon from '@mui/icons-material/Memory';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const strengths = [
  {
    icon: GroupsIcon,
    title: 'Experienced Team',
    desc: 'Skilled accounting and Accounts professionals with years of industry expertise.',
  },
  {
    icon: HandshakeIcon,
    title: 'Client-Centered Approach',
    desc: 'We focus on understanding your business to deliver truly personalized solutions.',
  },
  {
    icon: VerifiedIcon,
    title: 'Proven Reliability',
    desc: 'Trusted by 100+ clients across 12 countries for consistent, high-quality service. We deliver accurate, timely results that businesses rely on — quarter after quarter.',
    featured: true,
  },
  {
    icon: MemoryIcon,
    title: 'Advanced Technology',
    desc: 'We use modern tools and secure systems to ensure accuracy and efficiency.',
  },
  {
    icon: PublicIcon,
    title: 'Global Reach',
    desc: 'Supporting businesses of all sizes — from small startups to Fortune 500 companies.',
  },
];

const WhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>

      {/* Pulsing bg glow — top right */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -160, right: -160, pointerEvents: 'none' }}
      >
        <Box sx={{
          width: 480, height: 480, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(primary, 0.07)} 0%, transparent 70%)`,
        }} />
      </motion.div>

      {/* Pulsing bg glow — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ position: 'absolute', bottom: -140, left: -140, pointerEvents: 'none' }}
      >
        <Box sx={{
          width: 400, height: 400, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(primary, 0.05)} 0%, transparent 70%)`,
        }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 1 }}>

        {/* ── Section header — staggered ── */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>

          {/* Overline pill */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 3, display: 'block' }}>
              Our Strength
            </Typography>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, color: 'text.primary' }}
            >
              Why Businesses{' '}
              <Box component="span" sx={{ color: primary }}>Choose Milta</Box>
            </Typography>
          </motion.div>

          {/* Accent bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
            style={{ originX: 0 }}
          >
            <Box sx={{ width: 48, height: 3, borderRadius: '4px', bgcolor: alpha(primary, 0.3), mt: 2 }} />
          </motion.div>
        </Box>

        {/* ── Bento grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {strengths.map((item, i) => {
            const Icon = item.icon;
            const isFeatured = !!item.featured;

            return (
              <Box
                key={item.title}
                component={motion.div}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                sx={{
                  ...(isFeatured && {
                    gridColumn: { md: '3' },
                    gridRow: { md: '1 / span 2' },
                  }),
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: isFeatured ? 4 : 3.5 },
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    ...(isFeatured ? {
                      background: `linear-gradient(155deg, #0d1f0e 0%, #163018 55%, #1e4020 100%)`,
                      boxShadow: `0 8px 32px ${alpha(primary, 0.25)}`,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 20px 48px ${alpha(primary, 0.35)}`,
                      },
                    } : {
                      bgcolor: 'background.default',
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                      },
                    }),
                  }}
                >
                  {/* Icon circle — pop in */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3, ease: 'backOut' }}
                  >
                    <Box
                      sx={{
                        width: 52, height: 52,
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        mb: 3,
                        flexShrink: 0,
                        ...(isFeatured ? {
                          bgcolor: alpha('#ffffff', 0.1),
                          border: `1px solid ${alpha('#ffffff', 0.15)}`,
                        } : {
                          bgcolor: 'rgba(0,0,0,0.05)',
                        }),
                      }}
                    >
                      <Icon sx={{ fontSize: '1.4rem', color: isFeatured ? '#ffffff' : 'text.secondary' }} />
                    </Box>
                  </motion.div>

                  {/* Title — slide up */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 + 0.38, ease: 'easeOut' }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: isFeatured ? '1.4rem' : '1.05rem',
                        mb: 1.5,
                        color: isFeatured ? '#ffffff' : 'text.primary',
                        fontFamily: theme.typography.h1.fontFamily,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </motion.div>

                  {/* Description — fade in */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.48 }}
                    style={{ flexGrow: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                        color: isFeatured ? alpha('#ffffff', 0.72) : 'text.secondary',
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </motion.div>

                  {/* CTA — featured card only, slide up */}
                  {isFeatured && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Box sx={{ mt: 4 }}>
                        <Button
                          variant="contained"
                          component={RouterLink}
                          to="/contact"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                          sx={{
                            px: 3, py: 1.3,
                            bgcolor: primary,
                            color: '#fff',
                            borderRadius: '10px',
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            textTransform: 'none',
                            boxShadow: `0 4px 16px ${alpha(primary, 0.4)}`,
                            '&:hover': {
                              bgcolor: '#9abb3b',
                              color: '#0d1f0e',
                              boxShadow: 'none',
                            },
                          }}
                        >
                          Book a Consultation
                        </Button>
                      </Box>
                    </motion.div>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default WhyChoose;
