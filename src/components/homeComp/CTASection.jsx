import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CTASection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >

      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto' }}>
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
              bgcolor: 'background.paper',
              border: '1px solid rgba(38,105,41,0.1)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="overline"
                  sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 3, display: 'block' }}
                >
                  THE NEXT STEP
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.2rem', sm: '3rem', md: '1.5rem' },
                    lineHeight: 1.2,
                    letterSpacing: '-0.03em',
                    color: 'text.primary',
                    mb: 3
                  }}
                >
                  Efficient, Cost-Effective Outsourced{' '}
                  <Box component="span" sx={{ color: '#266929' }}>Accounting Services in the USA</Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: '600px',
                    mx: 'auto',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    fontWeight: 400,
                    mb: 5
                  }}
                >
                 Save Up to 50-60% on Your Outsourcing Costs — Without Reducing Service Quality or Scope.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component={RouterLink}
                      to="/contact#contact-form"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 6, py: 2,
                        borderRadius: '50px',
                        backgroundColor: '#266929',
                        color: 'white',
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        fontSize: '0.95rem',
                        boxShadow: '0 12px 32px rgba(38,105,41,0.25)',
                        '&:hover': { backgroundColor: '#1a4a1c', boxShadow: '0 16px 40px rgba(38,105,41,0.35)' }
                      }}
                    >
                      Book a Consultation
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      component={RouterLink}
                      to="/services"
                      sx={{
                        px: 6, py: 2,
                        borderRadius: '50px',
                        border: '2px solid rgba(38,105,41,0.4)',
                        color: '#266929',
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        fontSize: '0.95rem',
                        '&:hover': { border: '2px solid #266929', backgroundColor: 'rgba(38,105,41,0.06)' }
                      }}
                    >
                      Our Services
                    </Button>
                  </motion.div>
                </Stack>
              </motion.div>

            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
