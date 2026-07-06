import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';

const certifications = [
  { id: 1, image: '/assets/certification-1.jpg' },
  { id: 2, image: '/assets/certification-2.jpg' },
  { id: 3, image: '/assets/certification-3.png' },
  { id: 4, image: '/assets/certification-4.png' },
  { id: 5, image: '/assets/certification-5.png' },
  { id: 6, image: '/assets/certification-6.png' },
  { id: 7, image: '/assets/certification-7.png' },
  { id: 8, image: '/assets/certification-8.jpg' },
  { id: 9, image: '/assets/certification-9.jpg' },
  { id: 10, image: '/assets/certification-10.png' }
];

const CertificationsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '40%',
          bgcolor: alpha(theme.palette.primary.main, 0.03),
          borderRadius: '50%',
          filter: 'blur(120px)'
        }}
      />

      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                letterSpacing: 2
              }}
            >
              TRUST & EXCELLENCE
            </Typography>
          </motion.div>

          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mt: 2 }}
          >
            Our Certifications
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              mt: 1
            }}
          >
            We are proud to be recognized with industry certifications that reflect our commitment to excellence.
          </Typography>
        </Box>

        {/* Grid - Exactly 4 items per row */}
        <Grid container spacing={3}>
          {certifications.map((item, index) => (
            <Grid 
              item 
              xs={6}  // 2 items on mobile
              sm={4}  // 3 items on tablet
              md={4}  // 3 items on medium desktop
              lg={3}  // 4 items on large desktop (12 ÷ 3 = 4)
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 160,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                    borderRadius: 2,
                    p: 2.5,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at center, ${alpha(theme.palette.primary.main, 0.08)}, transparent 70%)`,
                      opacity: 0,
                      transition: 'opacity 0.35s ease'
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                      '&::before': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`Certification ${item.id}`}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'all 0.35s ease',
                      filter: 'grayscale(100%) contrast(0.9) opacity(0.75)'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/fallback-certification.png';
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Badge */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 3,
              py: 1.5,
              borderRadius: 50,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: theme.palette.primary.main
              }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              Industry Recognized Standards
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default CertificationsSection;