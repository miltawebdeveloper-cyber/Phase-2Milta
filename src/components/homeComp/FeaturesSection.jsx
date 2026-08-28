import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupsIcon from '@mui/icons-material/Groups';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const features = [
  {
    title: '1. Schedule',
    desc: 'Schedule an appointment with our team to explore how we can assist with your business accounting needs. Operating virtually from India, we ensure convenience and flexibility.',
    icon: <EventAvailableIcon sx={{ fontSize: 22 }} />,
   
  },
  {
    title: '2. Initial Meeting',
    desc: "In a 30-minute initial consultation, we discuss your business's unique needs and identify how our services can best support your goals.",
    icon: <GroupsIcon sx={{ fontSize: 22 }} />,
    cta: true,
  },
  {
    title: '3. Provide a Diagnostic Review',
    desc: 'Following the consultation, we provide a detailed diagnostic review, highlighting areas for improvement, opportunities for automation, and addressing any questions you may have.',
    icon: <FactCheckIcon sx={{ fontSize: 22 }} />,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
          <Typography
            variant="overline"
            sx={{ fontWeight: 800, letterSpacing: 3, color: 'primary.main', display: 'block', mb: 1 }}
          >
            How We Work
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mb: 1.5, color: 'text.primary' }}
          >
            Our Work Process
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto', lineHeight: 1.7 }}>
            We provide reliable and affordable outsourcing services for small and medium-sized businesses
            across the USA.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 3 }}
          divider={
            <Box
              sx={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                alignSelf: 'stretch',
                flexShrink: 0,
                width: { xs: '100%', md: '1px' },
                height: { xs: '1px', md: 'auto' },
              }}
            />
          }
          sx={{
            justifyContent: 'space-between',
            alignItems: 'stretch',
            py: { xs: 1, md: 5 },
            px: { xs: 2, md: 0 },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={{ flex: 1, display: 'flex' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px 900px 0px' }}
              transition={{ duration: 0.25, delay: Math.min(index * 0.1, 0.15) }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ width: '100%' }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(38, 105, 41, 0.1)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      display: 'block',
                      mb: 1,
                      color: 'primary.main',
                      lineHeight: 1.4
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      fontWeight: 500,
                      lineHeight: 1.6
                    }}
                  >
                    {feature.desc}
                  </Typography>

                  {feature.cta && (
                    <Button
                      component={RouterLink}
                      to="/contact#contact-form"
                      variant="contained"
                      sx={{
                        mt: 2,
                        py: 1.1,
                        px: 3,
                        borderRadius: '50px',
                        backgroundColor: '#1a3d1c',
                        color: '#fff',
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        boxShadow: '0 10px 24px rgba(38,105,41,0.28)',
                        '&:hover': { backgroundColor: '#0f2911', boxShadow: '0 14px 30px rgba(38,105,41,0.38)' },
                      }}
                    >
                      Book a Consultation
                    </Button>
                  )}
                </Box>
              </Stack>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
