import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from, to, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(from + (to - from) * easeProgress);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

const stats = [
  { label: 'Years Of Success', to: 10, suffix: '+' },
  { label: 'Happy Clients',    to: 100, suffix: '+' },
  { label: 'Completed Projects', to: 1000, suffix: '+' },
  { label: 'Software Used',    to: 10, suffix: '+' },
];

const TrustSection = () => {
  return (
    <Box sx={{ py: 0, backgroundColor: 'transparent', position: 'relative', zIndex: 10, mt: -8 }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>

        {/* Card entrance — scale up + fade */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
                      <AnimatedCounter from={0} to={stat.to} duration={2.5} suffix={stat.suffix} />
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
