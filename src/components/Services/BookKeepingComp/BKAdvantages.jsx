import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const BENEFITS = [
  { 
    title: 'Track Income & Expenses', 
    desc: 'Stay organized and informed by keeping accurate records of all your business transactions.' 
  },
  { 
    title: 'Stress-Free Tax Preparation', 
    desc: 'Ensure timely and smooth tax filing with well-maintained financial records throughout the year.' 
  },
  { 
    title: 'Financial Insights for Planning', 
    desc: 'Gain valuable insights into your company\'s performance to make data-driven business decisions.' 
  },
  { 
    title: 'Ensure Legal Compliance', 
    desc: 'Stay compliant with tax and financial laws while maintaining accurate and transparent records.' 
  },
];


const BKAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 6, lg: 5 },
          alignItems: 'stretch',
        }}>

          {/* ── LEFT: dark info panel ── */}
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Glow — top right */}
              <Box sx={{
                position: 'absolute', top: '-20%', right: '-15%',
                width: 320, height: 320, borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(primary, 0.35)} 0%, transparent 65%)`,
                pointerEvents: 'none',
              }} />
              {/* Glow — bottom left */}
              <Box sx={{
                position: 'absolute', bottom: '-25%', left: '-15%',
                width: 280, height: 280, borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(primary, 0.2)} 0%, transparent 65%)`,
                pointerEvents: 'none',
              }} />
              {/* Decorative ring */}
              <Box sx={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 460, height: 460, borderRadius: '50%',
                border: `1px solid ${alpha('#ffffff', 0.05)}`,
                pointerEvents: 'none',
              }} />
            

              {/* Top content */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box sx={{ width: 24, height: 3, borderRadius: 2, bgcolor: primary }} />
                  <Typography variant="overline" sx={{
                    color: primary, fontWeight: 800,
                    letterSpacing: '0.16em', fontSize: '0.72rem',
                  }}>
                    WHY BOOKKEEPING
                  </Typography>
                </Box>

                <Typography variant="h2" sx={{
                  color: '#ffffff',
                  fontSize: { xs: '1.75rem', md: '2.1rem' },
                  fontWeight: 900, lineHeight: 1.2,
                  letterSpacing: '-0.02em', mb: 2.5,
                }}>
                  What is a Bookkeeping Service {' '}
                  <Box component="span" sx={{ color: alpha(primary, 0.9) }}>and Why Does Every Business Need It?</Box>
                </Typography>

                <Typography sx={{
                  color: alpha('#ffffff', 0.68),
                  fontSize: '0.9rem', lineHeight: 1.8, mb: 4,
                  fontFamily: '"Outfit", sans-serif',
                }}>
                  Bookkeeping involves recording, organizing, and managing a company’s financial transactions. It ensures accuracy, supports better decision-making, and helps businesses stay compliant with tax and financial regulations.
                </Typography>

               
              </Box>

              {/* CTA */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Button
                  variant="contained"
                  href="/contact"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{
                    px: 3.5, py: 1.4,
                    borderRadius: '50px',
                    bgcolor: primary, color: '#fff',
                    fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em',
                    boxShadow: `0 10px 28px ${alpha(primary, 0.4)}`,
                    '&:hover': {
                      bgcolor: '#1a4d1d',
                      boxShadow: `0 16px 38px ${alpha(primary, 0.5)}`,
                    },
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* ── RIGHT: benefit cards ── */}
          <Stack sx={{ flex: 1 }} spacing={2.5}>
            {BENEFITS.map((benefit, i) => {
              return (
                <motion.div key={benefit.title} {...fadeUp(i * 0.09)}>
                  <Box sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: '20px',
                    bgcolor: 'background.default',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: `0 12px 40px ${alpha(primary, 0.12)}`,
                      border: `1px solid ${alpha(primary, 0.25)}`,
                      '& .adv-accent': { opacity: 1, height: '65%' },
                    },
                  }}>
                    {/* Left accent bar */}
                    <Box className="adv-accent" sx={{
                      position: 'absolute', left: 0, top: '50%',
                      transform: 'translateY(-50%)',
                      width: 4, height: '35%',
                      borderRadius: '0 4px 4px 0',
                      bgcolor: primary, opacity: 0,
                      transition: '0.28s ease',
                    }} />

                    {/* Icon - CheckCircle */}
                    <Box sx={{
                      width: 54, height: 54, flexShrink: 0,
                      borderRadius: '16px',
                      bgcolor: alpha(primary, 0.08),
                      border: `1px solid ${alpha(primary, 0.15)}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mt: 0.5
                    }}>
                      <CheckCircleIcon sx={{ fontSize: 26, color: primary }} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1, pr: { xs: 4, md: 8 } }}>
                      <Typography sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 800, fontSize: '1.05rem',
                        color: 'text.primary', mb: 0.5, lineHeight: 1.3,
                      }}>
                        {benefit.title}
                      </Typography>
                      <Typography sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '0.88rem', lineHeight: 1.75,
                        color: 'text.secondary',
                      }}>
                        {benefit.desc}
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

export default BKAdvantages;