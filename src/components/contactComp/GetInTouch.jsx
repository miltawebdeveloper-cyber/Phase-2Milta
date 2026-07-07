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
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 7 },
            alignItems: 'stretch',
            p: { xs: 3, md: 4 },
            borderRadius: '36px',
            background: 'radial-gradient(circle at 20% 20%, rgba(154,187,59,0.24), transparent 25%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 18%), linear-gradient(135deg, rgba(6, 18, 12, 0.96) 0%, rgba(18, 42, 24, 0.98) 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 40px 110px rgba(0,0,0,0.24)',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'absolute', top: -80, right: -90, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 72%)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', bottom: -90, left: -80, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(154,187,59,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.04))', pointerEvents: 'none' }} />

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
                  borderRadius: '32px',
                  overflow: 'hidden',
                  height: { xs: '260px', md: '100%' },
                  minHeight: { md: '380px' },
                  position: 'relative',
                  boxShadow: '0 32px 72px rgba(0,0,0,0.18)',
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
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 18, 14, 0.96) 0%, rgba(6, 18, 14, 0.25) 55%, transparent 100%)',
                  }}
                />
                <Box sx={{ position: 'absolute', top: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.75, borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#9ABB3B' }} />
                    <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: '#E8F9D8', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                      Premium support
                    </Typography>
                  </Box>
                  <Box sx={{ px: 2, py: 0.8, borderRadius: '999px', background: 'rgba(38,105,41,0.14)', color: '#D6F0D2', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Global service
                  </Box>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 28, left: 24, right: 24, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 3, display: 'block' }}>
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1.8,
                      borderRadius: '24px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.72)', letterSpacing: 0.8, display: 'block' }}>
                        {item.label.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
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
                  px: 3, py: 0.75, mb: 3,
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <Typography variant="overline" sx={{ color: '#D6F0D2', lineHeight: 1, fontWeight: 800, letterSpacing: 3 }}>
                  GET IN TOUCH
                </Typography>
              </Box>
            </motion.div>

            <motion.div {...fadeUp(0.18)}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2rem', md: '2.6rem' },
                  lineHeight: 1.1,
                  mb: 1.5,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                }}
              >
                Let's talk about{' '}
                <Box component="span" sx={{ color: '#9ABB3B' }}>your business</Box>
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.26)}>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.9, mb: 5, maxWidth: 560 }}>
                Share your goals, challenges, and timeline — we’ll respond with a bespoke accounting approach that scales with your business.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 4 },
                  borderRadius: '34px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,248,236,0.98) 100%)',
                  boxShadow: '0 28px 80px rgba(0,0,0,0.16)',
                  border: '1px solid rgba(38,105,41,0.12)',
                }}
              >
                <Box sx={{ position: 'absolute', top: 16, right: 16, width: 84, height: 84, borderRadius: '28px', background: 'rgba(154,187,59,0.1)' }} />
                <Box sx={{ position: 'absolute', bottom: -24, left: -24, width: 92, height: 92, borderRadius: '50%', background: 'rgba(38,105,41,0.12)' }} />
                <Box sx={{ position: 'absolute', top: -24, left: 24, width: 72, height: 72, borderRadius: '50%', background: 'rgba(38,105,41,0.06)' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box sx={{ width: 28, height: 4, borderRadius: '999px', background: 'linear-gradient(90deg, #266929, #9ABB3B)' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#2D4F29', letterSpacing: 1.2, textTransform: 'uppercase' }}>
                    Business details
                  </Typography>
                </Box>

                <ContactForm />
              </Box>
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default GetInTouch;
