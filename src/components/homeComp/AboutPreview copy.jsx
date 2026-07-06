import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <Box sx={{ py: 15, backgroundColor: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: { xs: 8, md: 15 } }}>
          
          {/* Unique Image Left */}
          <Box sx={{ flex: 1.2, position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  borderRadius: '100px 30px 100px 30px',
                  boxShadow: '0 50px 100px rgba(0,0,0,0.05)',
                }}
              >
                <Box 
                  component="img" 
                  src="/about_modern.png" 
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                  }}
                />
              </Box>
              {/* Floating Accent */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  width: '200px',
                  height: '200px',
                  backgroundColor: 'rgba(154, 187, 59, 0.05)',
                  borderRadius: '50%',
                  zIndex: -1,
                }} 
              />
            </motion.div>
          </Box>

          {/* Content Right */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 5 }}>THE PHILOSOPHY</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 1, letterSpacing: '-0.02em' }}>
                    Precision in <br />
                    Every <Box component="span" sx={{ color: 'secondary.main' }}>Framework</Box>.
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8 }}>
                  Our approach is purely architectural. We build financial structures that are not only compliant but strategically designed for resilience and growth in a globalized economy.
                </Typography>
                <Stack direction="row" spacing={5} sx={{ py: 2 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900 }}>15y+</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>LEGACY</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900 }}>500+</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>PARTNERS</Typography>
                  </Box>
                </Stack>
                <Button 
                  variant="contained" 
                  sx={{ 
                    width: 'fit-content', 
                    py: 2, 
                    px: 6, 
                    borderRadius: '50px',
                    backgroundColor: '#1A1A1A',
                    fontWeight: 700
                  }}
                >
                  Our Methodology
                </Button>
              </Stack>
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default AboutPreview;
