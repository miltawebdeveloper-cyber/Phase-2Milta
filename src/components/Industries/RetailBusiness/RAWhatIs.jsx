import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import retailImage from '../../../assets/industry/Retail Businesses.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '100+', label: 'Clients'    },
  { num: '50',  label: 'States'  },
  { num: '10y+', label: 'Experience' },
];

const CCWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 5 } }}
      >
        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
              lineHeight: 1.34,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Retail Accounting &{' '}
            <Box component="span" sx={{ color: primary }}>
              Bookkeeping Services by Milta
            </Box>
          </Typography>
        </motion.div>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '5fr 4fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'stretch',
        }}>

          {/* ══ LEFT: Text content ══ */}
          <Box>
            {/* Body copy - Paragraph 1 */}
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                In today's competitive retail environment, effective bookkeeping for retail businesses is more than a best practice—it's essential for growth, profitability, and compliance. From traditional storefronts to e-commerce platforms and hybrid models, every retail business needs accurate financial records to make informed decisions, manage inventory, and ensure compliance with tax laws.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 2 */}
            <motion.div {...fadeUp(0.22)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                As the retail landscape evolves through digital transformation, traditional accounting methods no longer suffice. That's why Milta offers advanced, customized retail accounting services designed to meet the dynamic needs of modern retailers.
              </Typography>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.26)}>
              <Box sx={{
                display: 'inline-flex',
                gap: 0,
                borderRadius: '14px',
                overflow: 'hidden',
                border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                bgcolor: 'background.paper',
              }}>
                {STATS.map(({ num, label }, i) => (
                  <Box
                    key={label}
                    sx={{
                      px: { xs: 3, md: 3.5 }, py: 2,
                      textAlign: 'center',
                      borderRight: i < STATS.length - 1
                        ? (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`
                        : 'none',
                    }}
                  >
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.5rem' }, color: primary, lineHeight: 1 }}>
                      {num}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.62rem', color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mt: 0.4 }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* ══ RIGHT: Image ══ */}
          <motion.div {...fadeRight(0.22)} style={{ height: '100%' }}>
            <Box sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
              boxShadow: `0 20px 60px ${alpha(primary, 0.08)}`,
              position: 'relative',
              height: '100%',
              minHeight: { xs: '300px', md: '400px' },
            }}>
              <img
                src={retailImage}
                alt="Retail Accounting & Bookkeeping Services by Milta"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
};

export default CCWhatIs;