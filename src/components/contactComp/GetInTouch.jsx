import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const contactDetails = [
  { icon: <EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} />, label: 'Email', value: 'info@miltafs.com' },
  { icon: <PhoneOutlinedIcon sx={{ fontSize: '1.1rem' }} />, label: 'Phone', value: '+1 (800) 123-4567' },
  { icon: <LocationOnOutlinedIcon sx={{ fontSize: '1.1rem' }} />, label: 'Office', value: 'United States' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const GetInTouch = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
            alignItems: 'stretch',
          }}
        >

          {/* ── Left column — Image + contact info ── */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: { xs: '100%', md: '42%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1 }}
            >
              <Box
                sx={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  height: { xs: '260px', md: '100%' },
                  minHeight: { md: '460px' },
                  position: 'relative',
                  boxShadow: '0 24px 56px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  component="img"
                  src="/virtualAssistant.jpg"
                  alt="Contact Milta Financial Services"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)',
                    '&:hover': { transform: 'scale(1.04)' },
                  }}
                />
                {/* Dark overlay with contact quick-info */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,30,12,0.88) 0%, rgba(10,30,12,0.2) 55%, transparent 100%)',
                  }}
                />
                <Box sx={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: 3, display: 'block', mb: 0.5 }}>
                    MILTA FINANCIAL SERVICES
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 800, lineHeight: 1.3 }}>
                    We respond within<br />one business day.
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Contact detail chips */}
            <Stack spacing={2}>
              {contactDetails.map((item, i) => (
                <motion.div key={item.label} {...fadeUp(0.15 + i * 0.1)}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 40, height: 40,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(38,105,41,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 1, display: 'block' }}>
                        {item.label.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* ── Right column — Form ── */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div {...fadeUp(0.1)}>
              <Box
                sx={{
                  display: 'inline-flex', alignItems: 'center',
                  px: 2, py: 0.6, mb: 2.5,
                  borderRadius: '50px',
                  border: '1px solid rgba(38,105,41,0.25)',
                  backgroundColor: 'rgba(38,105,41,0.05)',
                }}
              >
                <Typography variant="overline" sx={{ color: 'primary.main', lineHeight: 1, fontWeight: 800, letterSpacing: 3 }}>
                  GET IN TOUCH
                </Typography>
              </Box>
            </motion.div>

            <motion.div {...fadeUp(0.18)}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.9rem', md: '2.4rem' },
                  lineHeight: 1.2,
                  mb: 1.5,
                  color: 'text.primary',
                  letterSpacing: '-0.03em',
                }}
              >
                Let's talk about{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>your business</Box>
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.26)}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Tell us the details and our team will get back to you with a tailored solution.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactForm />
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default GetInTouch;
