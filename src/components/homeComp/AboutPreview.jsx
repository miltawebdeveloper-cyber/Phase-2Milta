import React, { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Stack, Divider, Avatar } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import StarIcon from '@mui/icons-material/Star';

const CONTENT_WIDTH = 1300;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const HIGHLIGHTS = [
  'Dedicated Account Managers',
  'Real-Time Financial Reporting',
  'Experienced Professional Team',
];

const STATS = [
  { num: 10, suffix: 'y+', label: 'Experience' },
  { num: 100, suffix: '+', label: 'Clients' },
];

/* Animated count-up — fires once when element enters viewport */
const CountUp = ({ num, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * num));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, num]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutPreview = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <Box ref={ref} sx={{ bgcolor: 'background.paper', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 0, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { xs: 'auto', md: '620px' },
            borderRadius: { xs: 0, md: '28px' },
            overflow: 'visible',
            /* Suggestion 6: green left-edge accent stripe */
            boxShadow: '0 32px 80px rgba(0,0,0,0.10), inset 5px 0 0 #266929',
            position: 'relative',
          }}
        >
          {/* ── Image side ── */}
          <Box
            sx={{
              flex: '0 0 46%',
              position: 'relative',
              overflow: 'hidden',
              minHeight: { xs: 340, md: 'auto' },
              borderRadius: { xs: 0, md: '28px 0 0 28px' },
              clipPath: { xs: 'none', md: 'polygon(0 0, 91% 0, 100% 50%, 91% 100%, 0 100%)' },
            }}
          >
            <motion.div style={{ position: 'absolute', inset: '-10%', y }}>
              <Box
                sx={{
                  width: '100%',
                  height: '120%',
                  background: 'url(/about_modern.png) no-repeat center center / cover',
                }}
              />
            </motion.div>

            {/* Gradient overlay */}
            <Box sx={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(150deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.22) 55%, transparent 100%)',
            }} />

            {/* Brand chip */}
            <Box sx={{
              position: 'absolute', top: 28, left: 28, zIndex: 3,
              px: 2, py: 0.9,
              borderRadius: '50px',
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', gap: 1,
            }}>
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#266929' }} />
              <Typography sx={{
                color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}>
                Milta Accounting Services
              </Typography>
            </Box>

            {/* Floating glass stats — with animated count-up */}
            <Box sx={{
              position: 'absolute', bottom: 28, left: 24, right: 60, zIndex: 3,
              display: 'flex', gap: 2,
            }}>
              {STATS.map((s) => (
                <Box key={s.label} sx={{
                  flex: 1, px: 2.5, py: 2,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}>
                  <Typography sx={{
                    color: '#fff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 900, fontSize: '1.65rem', lineHeight: 1,
                  }}>
                    <CountUp num={s.num} suffix={s.suffix} />
                  </Typography>
                  <Typography sx={{
                    color: 'rgba(255,255,255,0.72)', fontSize: '0.68rem',
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', mt: 0.5,
                  }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>


          {/* ── Content side ── */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 8 },
            bgcolor: 'background.default',
            borderRadius: { xs: 0, md: '0 28px 28px 0' },
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle dot pattern */}
            <Box sx={{
              position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(38,105,41,0.055) 1.5px, transparent 1.5px)',
              backgroundSize: '26px 26px',
            }} />

            {/* Suggestion 5: large faded watermark number */}
            <Typography sx={{
              position: 'absolute',
              bottom: '-4%',
              right: '-2%',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '10rem', md: '16rem' },
              lineHeight: 1,
              color: 'rgba(38,105,41,0.04)',
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: 0,
            }}>
              Milta
            </Typography>

            <Stack spacing={4} sx={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>

              {/* Overline */}
              <motion.div {...fadeUp(0)}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 30, height: 3, borderRadius: 2, backgroundColor: 'primary.main' }} />
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.16em' }}>
                    ABOUT US
                  </Typography>
                </Box>
              </motion.div>

              {/* Heading */}
              <motion.div {...fadeUp(0.1)}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '1.85rem', md: '2.75rem' },
                    lineHeight: 1.18,
                    letterSpacing: '-0.02em',
                    color: 'text.primary',
                  }}
                >
                  Your Trusted{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>Partner</Box>
                  {' '}for Outsourced Accounting & Bookkeeping Services
                </Typography>
              </motion.div>

              {/* Body */}
              <motion.div {...fadeUp(0.18)}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1rem' }}>
At Milta Accounting Services, we believe in building lasting partnerships through precision, reliability, and trust. Our offshore accounting solutions simplify your business finances, so you can focus on what matters most — growth.                </Typography>
              </motion.div>

              {/* Highlights */}
              <motion.div {...fadeUp(0.26)}>
                <Stack spacing={1.5}>
                  {HIGHLIGHTS.map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.05rem', flexShrink: 0 }} />
                      <Typography sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.88rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>

              {/* Divider */}
              <motion.div {...fadeUp(0.32)}>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.07)' }} />
              </motion.div>

              {/* CTA row */}
              <motion.div {...fadeUp(0.38)}>
                <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/about"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                    sx={{
                      px: 3.5, py: 1.5,
                      borderRadius: '50px',
                      backgroundColor: 'primary.main',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      letterSpacing: '0.04em',
                      boxShadow: '0 10px 28px rgba(38,105,41,0.28)',
                      '&:hover': {
                        backgroundColor: '#1a4d1d',
                        boxShadow: '0 16px 38px rgba(38,105,41,0.36)',
                      },
                    }}
                  >
                    Know More About Us
                  </Button>
                  <Typography
                    component={RouterLink}
                    to="/services"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      borderBottom: '2px solid',
                      borderColor: 'primary.main',
                      pb: 0.2,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    View Services
                  </Typography>
                </Box>
              </motion.div>

            </Stack>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default AboutPreview;
