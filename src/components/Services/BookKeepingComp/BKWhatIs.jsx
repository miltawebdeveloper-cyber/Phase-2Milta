import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bookkeepingImage from '../../../assets/services/bookkeeping.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});



const BKWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }} alignItems={{ md: 'center' }}>

          {/* Text side */}
          <Box sx={{ flex: 1 }}>
          
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2.5 }}>
                Top-Notch Bookkeeping Services{' '}
                <Box component="span" sx={{ color: primary }}>for Small Businesses in the USA</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.35), mb: 3 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Running a small business in the USA means juggling many tasks, from managing day-to-day operations to meeting deadlines. At Miltafs, we understand that keeping your financial records can be challenging. That's why we offer bookkeeping services for small businesses across the United States — helping you streamline your finances and maintain accurate financial records.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 3 }}>
                Whether you require bank reconciliation, payroll processing, or detailed financial reporting, Miltafs provides reliable and affordable solutions tailored for growth-minded business owners.
              </Typography>
            </motion.div>
           
            
            {/* Get Started Button */}
            <motion.div {...fadeUp(0.5)}>
              <Button
                variant="contained"
                href="/contact"
                endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                sx={{
                  mt: 4,
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '50px',
                  bgcolor: primary, 
                  color: '#fff',
                  fontWeight: 700, 
                  fontSize: '0.9rem', 
                  letterSpacing: '0.06em',
                  boxShadow: `0 10px 28px ${alpha(primary, 0.4)}`,
                  '&:hover': { 
                    bgcolor: '#1a4d1d', 
                    boxShadow: `0 16px 38px ${alpha(primary, 0.5)}`,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                GET STARTED
              </Button>
            </motion.div>
          </Box>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px 900px 0px' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 auto', width: '100%', maxWidth: 420 }}
          >
            <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: `0 32px 80px ${alpha(primary, 0.12)}` }}>
              <Box
                component="img"
                src={bookkeepingImage}
                alt="Bookkeeping services for small businesses"
                sx={{ width: '100%', height: 580, objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.04)' } }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${alpha(primary, 0.15)} 0%, transparent 60%)` }} />

              
            </Box>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
};

export default BKWhatIs;