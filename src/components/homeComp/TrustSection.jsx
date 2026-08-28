import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutCubic — smooth, incremental, consistent feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(from + (to - from) * eased);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  const reached = count >= to;
  const display = Math.floor(count).toLocaleString('en-US');

  return (
    <span ref={ref}>
      {prefix}{display}{reached ? suffix : ''}
    </span>
  );
};

const stats = [
  { label: 'Years Of Success',   from: 1,   to: 10,   suffix: '+' },
  { label: 'Happy Clients',      from: 10,  to: 100,  suffix: '+' },
  { label: 'Completed Projects', from: 100, to: 1000, suffix: '+' },
  { label: 'Software Used',      from: 1,   to: 10,   suffix: '+' },
];

const TrustSection = () => {
  return (
    <Box sx={{ py: 0, backgroundColor: 'transparent', position: 'relative', zIndex: 10, mt: -8 }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>

        {/* Card entrance — scale up + fade */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px 900px 0px' }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(10,10,10,0.98) 100%)',
              backdropFilter: 'blur(30px)',
              borderRadius: '40px',
              p: { xs: 5, md: 8 },
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 50px 100px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: { xs: 5, md: 0 },
            }}
          >
            {/* Glow pulse */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
            >
              <Box sx={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(38, 105, 41, 0.2), transparent 70%)' }} />
            </motion.div>

            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                {/* Each stat staggered */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.12, 0.15), ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 900, mb: 1,
                        fontSize: { xs: '2.8rem', sm: '3rem', md: '4.5rem' },
                        letterSpacing: '-0.04em',
                        color: '#FFFFFF', lineHeight: 1,
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      <AnimatedCounter from={stat.from} to={stat.to} duration={2.5} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="overline"
                      sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 3, fontSize: '0.75rem', opacity: 0.9 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>

                {index < stats.length - 1 && (
                  <>
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, height: '60px', alignSelf: 'center', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px', zIndex: 1 }} />
                    <Divider flexItem sx={{ display: { xs: 'block', md: 'none' }, width: '40%', alignSelf: 'center', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px', my: 1, zIndex: 1 }} />
                  </>
                )}
              </React.Fragment>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TrustSection;
