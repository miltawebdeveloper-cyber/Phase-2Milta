import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Pure Financial Clarity.',
    subtitle: 'We simplify the complex. High-precision accounting strategies for the modern visionary.',
    image: '/hero_organic.webp',
    accent: 'ESTABLISHED 2009',
    insight: '10+ Years Legacy'
  },
  {
    title: 'Architecting Future Assets.',
    subtitle: 'Global enterprise scaling powered by rigorous financial frameworks and digital systems.',
    image: '/about_modern.webp',
    accent: 'GLOBAL REACH',
    insight: '500+ Corporate Clients'
  },
  {
    title: 'Precision in Every Frame.',
    subtitle: 'Bespoke structural planning that turns regulatory compliance into strategic advantage.',
    image: '/about_us.webp',
    accent: 'STRATEGIC DESIGN',
    insight: 'Top Rated Firm 2024'
  }
];

const Hero = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }
      }}
    >
      {/* Background Decorative Mesh */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(#266929 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          zIndex: 0
        }} 
      />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #266929; width: 40px; height: 3px; border-radius: 0; margin: 0 6px; transition: all 0.3s ease;"></span>`;
          },
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Container maxWidth="lg">
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: { xs: 8, md: 12 },
                    py: { xs: 10, md: 15 },
                    visibility: isActive ? 'visible' : 'hidden',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  
                  {/* Content Side */}
                  <Box 
                    sx={{ 
                      flex: { xs: '1', md: '1.2' }, 
                      zIndex: 2,
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mb: 3 }}>
                        <Chip 
                          icon={<VerifiedIcon sx={{ fontSize: '1rem !important', color: 'primary.main' }} />}
                          label={slide.accent} 
                          variant="outlined"
                          sx={{ 
                            fontWeight: 800, 
                            letterSpacing: 2, 
                            border: '1px solid rgba(38, 105, 41, 0.1)',
                            backgroundColor: 'rgba(38, 105, 41, 0.02)',
                            fontSize: '0.7rem'
                          }}
                        />
                      </Stack>
                      
                      <Typography 
                        variant="h1" 
                        sx={{ 
                          fontSize: { xs: '3rem', sm: '3.8rem', md: '5.5rem' },
                          fontWeight: 900,
                          lineHeight: 1,
                          mb: 4,
                          letterSpacing: '-0.05em',
                          wordSpacing: "0.1em",
                          maxWidth: { xs: '100%', md: '650px' }
                        }}
                      >
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i}>
                            {i === 1 ? <Box component="span" sx={{ color: 'secondary.main' }}>{word} </Box> : word + ' '}
                          </span>
                        ))}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary', 
                          maxWidth: { xs: '100%', md: '550px' }, 
                          mx: { xs: 'auto', md: 0 },
                          lineHeight: 1.8,
                          fontSize: '1.25rem',
                          fontWeight: 300,
                          mb: 8
                        }}
                      >
                        {slide.subtitle}
                      </Typography>

                      <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={3} 
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                      >
                        <Button 
                          variant="contained" 
                          size="large"
                          sx={{ 
                            px: 6, 
                            py: 2.5,
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            backgroundColor: '#1A1A1A',
                            '&:hover': { backgroundColor: 'primary.main', transform: 'translateY(-3px)' }
                          }}
                        >
                          Explore Framework
                        </Button>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                          <Box sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #EEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TrendingUpIcon fontSize="small" />
                          </Box>
                          <Typography variant="button" sx={{ fontWeight: 800 }}>VIEW RESULTS</Typography>
                        </Stack>
                      </Stack>
                    </motion.div>
                  </Box>

                  {/* Unique Image Side */}
                  <Box 
                    sx={{ 
                      flex: 1, 
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      <Box 
                        sx={{ 
                          position: 'relative',
                          width: { xs: '300px', sm: '400px', md: '480px', lg: '550px' },
                          aspectRatio: '1/1',
                        }}
                      >
                        <Box 
                          component="img" 
                          src={slide.image} 
                          sx={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            borderRadius: index % 2 === 0 ? '40px 150px 40px 150px' : '150px 40px 150px 40px',
                            boxShadow: '0 60px 100px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(255,255,255,0.8)'
                          }}
                        />

                        {/* Floating Insight Chip */}
                        <motion.div
                          animate={isActive ? { y: [0, -15, 0] } : {}}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          style={{ position: 'absolute', top: '10%', right: '-10%', zIndex: 3 }}
                        >
                          <Box 
                            sx={{ 
                              px: 3, 
                              py: 2, 
                              backgroundColor: 'rgba(255,255,255,0.9)', 
                              backdropFilter: 'blur(10px)',
                              borderRadius: '20px',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                              border: '1px solid rgba(38, 105, 41, 0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2
                            }}
                          >
                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'secondary.main' }} />
                            <Typography variant="caption" sx={{ fontWeight: 800, color: '#1A1A1A', letterSpacing: 1 }}>
                              {slide.insight.toUpperCase()}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Box>
                    </motion.div>
                  </Box>

                </Box>
              </Container>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
