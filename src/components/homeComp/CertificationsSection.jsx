import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

import cert1 from '../../assets/certification-1.jpg';
import cert2 from '../../assets/certification-2.jpg';
import cert3 from '../../assets/certification-3.png';
import cert4 from '../../assets/certification-4.png';
import cert5 from '../../assets/certification-5.png';
import cert6 from '../../assets/certification-6.png';
import cert7 from '../../assets/certification-7.png';
import cert8 from '../../assets/certification-8.jpg';
import cert9 from '../../assets/certification-9.jpg';
import cert10 from '../../assets/certification-10.png';

const CERTIFICATIONS = [
  { id: 1, image: cert1, alt: 'Certification 1' },
  { id: 2, image: cert2, alt: 'Certification 2' },
  { id: 3, image: cert3, alt: 'Certification 3' },
  { id: 4, image: cert4, alt: 'Certification 4' },
  { id: 5, image: cert5, alt: 'Certification 5' },
  { id: 6, image: cert6, alt: 'Certification 6' },
  { id: 7, image: cert7, alt: 'Certification 7' },
  { id: 8, image: cert8, alt: 'Certification 8' },
  { id: 9, image: cert9, alt: 'Certification 9' },
  { id: 10, image: cert10, alt: 'Certification 10' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const CertificationsSection = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '-12%',
          right: '-6%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(primary, 0.06)} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem' }}>
                WHAT WE HAVE
              </Typography>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
            </Box>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: 'text.primary', letterSpacing: '-0.02em', mb: 2 }}
            >
              Certifications &amp;{' '}
              <Box component="span" sx={{ color: primary }}>
                Accreditations
              </Box>
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.18)}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 620, mx: 'auto', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8 }}
            >
              Our certifications reflect a lasting commitment to accuracy, security, and
              professional excellence.
            </Typography>
          </motion.div>
        </Box>

        {/* Logo grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {CERTIFICATIONS.map((item, index) => (
            <motion.div key={item.id} {...fadeUp((index % 5) * 0.06)}>
              <Box
                sx={{
                  height: { xs: 120, md: 150 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 2, md: 2.5 },
                  borderRadius: '18px',
                  bgcolor: '#ffffff',
                  border: `1px solid ${alpha(primary, 0.1)}`,
                  boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
                  transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 18px 44px ${alpha(primary, 0.16)}`,
                    borderColor: alpha(primary, 0.3),
                    '& img': { filter: 'none', opacity: 1 },
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.82,
                    transition: 'all 0.32s ease',
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationsSection;
