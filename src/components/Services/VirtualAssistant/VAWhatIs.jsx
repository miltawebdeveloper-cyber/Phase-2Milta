import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const POINTS = [
  'Cost Savings: save on recruitment, training, and employee benefits — pay only for the services or hours you require, reducing operational costs without compromising quality.',
  'Increased Productivity: focus on core operations while experienced professionals handle repetitive, time-consuming tasks with faster turnaround and greater efficiency.',
  'Flexibility and Scalability: adjust service levels and adapt tasks to your company\'s evolving needs at any time — scale up or down without long-term commitments.',
  'Expert Support: access professionals proficient in accounting, bookkeeping, customer support, administrative tasks, and more — trained in the latest tools and techniques.',
];

const VAWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }} alignItems={{ md: 'center' }}>

          {/* Text side */}
          <Box sx={{ flex: 1 }}>
            <motion.div {...fadeUp(0)}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
                UNDERSTANDING VIRTUAL ASSISTANT SERVICES
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2.5 }}>
                What is a Virtual Assistant Service and{' '}
                <Box component="span" sx={{ color: primary }}>How Does It Benefit Your Business?</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.35), mb: 3 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                A virtual assistant (VA) is an expert who provides remote support to businesses. Unlike traditional employees, VAs work from their own locations — eliminating the need for physical office space, equipment, and other overhead costs.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 3, fontWeight: 600 }}>
                Partnering with Miltafs virtual assistant services offers four core advantages:
              </Typography>
            </motion.div>
            <Stack spacing={1.5}>
              {POINTS.map((point, i) => (
                <motion.div key={i} {...fadeUp(0.22 + i * 0.08)}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleIcon sx={{ fontSize: 20, color: primary, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', fontFamily: '"Outfit", sans-serif', lineHeight: 1.7 }}>
                      {point}
                    </Typography>
                  </Stack>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 auto', width: '100%', maxWidth: 420 }}
          >
            <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: `0 32px 80px ${alpha(primary, 0.12)}` }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                alt="Virtual assistant services for small businesses"
                sx={{ width: '100%', height: 480, objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.04)' } }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${alpha(primary, 0.15)} 0%, transparent 60%)` }} />
              <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24, borderRadius: '16px', bgcolor: (t) => t.palette.mode === 'dark' ? 'rgba(25,42,27,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', p: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                <Stack direction="row" spacing={3} justifyContent="space-around">
                  {[{ num: '100+', label: 'Clients' }, { num: '12+', label: 'Countries' }, { num: '15y+', label: 'Experience' }].map(({ num, label }) => (
                    <Box key={label} textAlign="center">
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '1.4rem', color: primary, lineHeight: 1 }}>{num}</Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.7rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.4 }}>{label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
};

export default VAWhatIs;
