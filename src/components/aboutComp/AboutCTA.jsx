import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutCTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background dot mesh */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(#266929 1px, transparent 1px), radial-gradient(#266929 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 6, md: 10 },
              borderRadius: '40px',
              background: 'linear-gradient(135deg, #266929 0%, #1a4a1c 100%)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Soft glow overlays */}
            <Box
              sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.05)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -50,
                left: -50,
                width: 300,
                height: 300,
                borderRadius: '50%',
                backgroundColor: 'rgba(154, 187, 59, 0.1)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 6,
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.75rem',
                  mb: 3,
                  display: 'block'
                }}
              >
                READY TO TRANSFORM
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '2.8rem' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  color: 'white',
                  mb: 3
                }}
              >
                Let's Optimize Your{' '}
                <Box component="span" sx={{ color: '#9ABB3B' }}>
                  Financial Operations
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  fontWeight: 300,
                  mb: 5
                }}
              >
                Join thousands of businesses that trust Milta Accounts to handle their financial
                operations. Let's discuss how we can help you achieve your business goals.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '50px',
                    backgroundColor: 'white',
                    color: '#266929',
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    fontSize: '0.95rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 24px 48px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '50px',
                    border: '2px solid rgba(255,255,255,0.5)',
                    color: 'white',
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  View Services
                </Button>
              </Stack>

              {/* Contact strip */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={4}
                justifyContent="center"
                sx={{
                  mt: 6,
                  pt: 6,
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', mb: 0.5, letterSpacing: 1 }}>
                    EMAIL
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>
                    info@miltafs.com
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', mb: 0.5, letterSpacing: 1 }}>
                    PHONE (USA)
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>
                    +1 (813) 303-0213
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', mb: 0.5, letterSpacing: 1 }}>
                    PHONE (INDIA)
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>
                    +91-96001 03723
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutCTA;
