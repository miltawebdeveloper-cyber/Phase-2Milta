import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import healthcareImage from '../../../assets/industry/Healthcare.jpg';

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

const HCWhatIs = () => {
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
            Professional Accounting Services for Healthcare –{' '}
            <Box component="span" sx={{ color: primary }}>
              Powered by Milta
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
            {/* Body copy - Intro */}
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                At Milta, we specialize in delivering reliable, outsourced accounting services for healthcare providers across the United States. With over 6 years of hands-on experience, our team understands the unique financial demands of the healthcare sector. Whether you're running a private practice, managing an urgent care clinic, or operating a large hospital, Milta is your trusted financial partner, so you can focus on delivering quality patient care.
              </Typography>
            </motion.div>

            {/* Body copy - Who We Serve */}
            <motion.div {...fadeUp(0.22)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  Who We Serve
                </Box><br />
                Milta, one of the leading healthcare accounting companies, works with a variety of healthcare providers, including large healthcare groups and independent medical practitioners.
              </Typography>
            </motion.div>

            {/* Body copy - Dentists */}
            <motion.div {...fadeUp(0.26)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>Dentists</Box><br />
                We offer specialized accounting for healthcare professionals in the dental industry, ensuring accurate billing, compliance, and smooth financial operations.
              </Typography>
            </motion.div>

            {/* Body copy - Pharmacies */}
            <motion.div {...fadeUp(0.30)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>Pharmacies</Box><br />
                Milta provides custom accounting solutions for pharmacies, helping them navigate complex financial processes while boosting profitability and regulatory compliance.
              </Typography>
            </motion.div>

            {/* Body copy - Hospitals & Healthcare Facilities */}
            <motion.div {...fadeUp(0.34)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>Hospitals &amp; Healthcare Facilities</Box><br />
                We support large healthcare institutions with full-scale financial services, from financial reporting and payroll to insurance claim processing and vendor payments.
              </Typography>
            </motion.div>

            {/* Body copy - Medical Practices */}
            <motion.div {...fadeUp(0.38)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>Medical Practices</Box><br />
                Whether you manage a small clinic or a multi-specialty practice, our accountants for medical professionals handle all aspects of your bookkeeping and financial reporting.
              </Typography>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.42)}>
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
                src={healthcareImage}
                alt="Professional Accounting Services for Healthcare"
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

export default HCWhatIs;