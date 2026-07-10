import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme, alpha } from '@mui/material/styles';
import payrollImage from '../../../assets/services/payroll.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const PMWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }} alignItems={{ md: 'center' }}>

          {/* Text side */}
          <Box sx={{ flex: 1 }}>
            
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2.5 }}>
                Payroll Management Services{' '}
                <Box component="span" sx={{ color: primary }}>in the USA</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.35), mb: 3 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Managing payroll accurately is critical for every business, but it is also one of the most complex and compliance-driven functions. At Milta Accounting, we deliver reliable Payroll Management Services in the USA, helping businesses streamline payroll processing, reduce errors, and stay fully compliant with federal, state, and local regulations.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 3 }}>
                As a trusted payroll management company, we take complete responsibility for your payroll liabilities, ensuring employee wages, deductions, and taxes are calculated and paid accurately, every time, on schedule.
              </Typography>
              <Button
                onClick={() => navigate('/contact')}
                variant="outlined"
                sx={{
                  color: primary,
                  borderColor: primary,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.25,
                  borderRadius: '50px',
                  '&:hover': { borderColor: primary, bgcolor: alpha(primary, 0.08) },
                }}
              >
                More Details
              </Button>
            </motion.div>
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
                src={payrollImage}
                alt="Payroll management services"
                sx={{ width: '100%', height: 480, objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.04)' } }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${alpha(primary, 0.15)} 0%, transparent 60%)` }} />
              <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24, borderRadius: '16px', bgcolor: (t) => t.palette.mode === 'dark' ? 'rgba(25,42,27,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', p: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                <Stack direction="row" spacing={3} justifyContent="space-around">
                  {[{ num: '100+', label: 'Clients' }, { num: '50', label: 'States' }, { num: '10y+', label: 'Experience' }].map(({ num, label }) => (
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

export default PMWhatIs;
