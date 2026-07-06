import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const work1 = '/hero_organic.png';
const work2 = '/about_modern.png';
const work3 = '/about_us.png';
const work4 = '/service_abstract.png';

const slides = [
  {
    title: 'Expert <span class="highlight">Outsourcing</span> <br> Accounting & Bookkeeping Services',
    description: 'Trusted by 100+ Clients Across 12 Countries. Proudly serving small businesses, growing enterprises, and Fortune 500 companies.',
    image: work3,
    alt: 'Outsourcing accounting and bookkeeping services for global businesses',
    link: '/us/services/bookkeeping-company-in-the-usa/',
    btnText: 'Learn More',
  },
  {
    title: 'Tax <span class="highlight">Planning</span> and <br> Preparation Services in the USA!',
    description: 'Professional US Expat Tax Service for Federal, State, and City Tax Preparation.',
    image: work1,
    alt: 'Tax planning and preparation services for businesses in the USA',
    link: '/us/services/tax-planning-and-preparation-services-usa/',
    btnText: 'Learn More',
  },
  {
    title: 'The <span class="highlight">Best</span> CPA Service <br> for Small Businesses in the USA',
    description: 'We offer the best CPA service for small businesses in the USA.',
    image: work4,
    alt: 'Certified public accountant services for small businesses in the USA',
    link: '/us/services/best-cpa-services-for-small-businesses-in-the-usa/',
    btnText: 'Learn More',
  },
  {
    title: 'Expert <span class="highlight">Financial</span> Controller <br> Services in the USA',
    description: 'Improve your accounting systems with experts.',
    image: work2,
    alt: 'Professional financial controller services for business accounting',
    link: '/us/services/financial-controller-services-in-the-usa/',
    btnText: 'Learn More',
  },
];

const Hero = () => (
  <Box
    sx={{
      position: 'relative',
      minHeight: { xs: 'auto', md: '100vh' },
      background: (t) => t.palette.mode === 'dark'
        ? 'linear-gradient(140deg, rgba(38,105,41,0.12) 0%, #0f1a10 38%, rgba(38,105,41,0.06) 100%)'
        : 'linear-gradient(140deg, rgba(38,105,41,0.055) 0%, #ffffff 38%, rgba(38,105,41,0.025) 100%)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      pt: { xs: 10, md: 0 },
      pb: { xs: 6, md: 0 },
    }}
  >
    {/* ── Top accent bar ── */}
    <Box sx={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 3, zIndex: 20,
      background: 'linear-gradient(90deg, transparent 0%, #266929 30%, #4caf50 60%, transparent 100%)',
    }} />

    {/* ── Floating aurora orbs ── */}
    <motion.div
      animate={{ x: [0, 28, 0], y: [0, -22, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: '-12%', right: '-6%', width: 580, height: 580, pointerEvents: 'none', zIndex: 0 }}
    >
      <Box sx={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: (t) => t.palette.mode === 'dark'
          ? 'radial-gradient(circle, rgba(38,105,41,0.28) 0%, transparent 68%)'
          : 'radial-gradient(circle, rgba(38,105,41,0.13) 0%, transparent 68%)',
        filter: 'blur(55px)',
      }} />
    </motion.div>

    <motion.div
      animate={{ x: [0, -20, 0], y: [0, 26, 0], scale: [1, 1.12, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      style={{ position: 'absolute', bottom: '-18%', left: '-8%', width: 520, height: 520, pointerEvents: 'none', zIndex: 0 }}
    >
      <Box sx={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: (t) => t.palette.mode === 'dark'
          ? 'radial-gradient(circle, rgba(38,105,41,0.2) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(38,105,41,0.09) 0%, transparent 70%)',
        filter: 'blur(70px)',
      }} />
    </motion.div>

    <motion.div
      animate={{ x: [0, 16, -10, 0], y: [0, -14, 8, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      style={{ position: 'absolute', top: '20%', left: '38%', width: 380, height: 380, pointerEvents: 'none', zIndex: 0 }}
    >
      <Box sx={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: (t) => t.palette.mode === 'dark'
          ? 'radial-gradient(circle, rgba(100,180,108,0.16) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(100,180,108,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
    </motion.div>

    {/* ── Subtle dot grid ── */}
    <Box sx={{
      position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
      backgroundImage: (t) => t.palette.mode === 'dark'
        ? 'radial-gradient(circle, rgba(38,105,41,0.2) 1px, transparent 1px)'
        : 'radial-gradient(circle, rgba(38,105,41,0.07) 1px, transparent 1px)',
      backgroundSize: '34px 34px',
    }} />

    {/* ── Large decorative ring ── */}
    <Box sx={{
      position: 'absolute', top: '50%', right: { xs: '-30%', md: '-8%' },
      transform: 'translateY(-50%)',
      width: { xs: 400, md: 700 }, height: { xs: 400, md: 700 },
      borderRadius: '50%',
      border: (t) => t.palette.mode === 'dark'
        ? '1px solid rgba(38,105,41,0.22)'
        : '1px solid rgba(38,105,41,0.07)',
      zIndex: 0, pointerEvents: 'none',
    }} />
    <Box sx={{
      position: 'absolute', top: '50%', right: { xs: '-40%', md: '-14%' },
      transform: 'translateY(-50%)',
      width: { xs: 560, md: 920 }, height: { xs: 560, md: 920 },
      borderRadius: '50%',
      border: (t) => t.palette.mode === 'dark'
        ? '1px solid rgba(38,105,41,0.13)'
        : '1px solid rgba(38,105,41,0.04)',
      zIndex: 0, pointerEvents: 'none',
    }} />

    {/* ── Swiper ── */}
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={300}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}" style="background-color:#266929;width:30px;height:3px;border-radius:0;margin:0 5px;"></span>`,
      }}
      style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: { xs: 4, md: 10 },
                  py: { xs: 6, md: 12 },
                  visibility: isActive ? 'visible' : 'hidden',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                {/* Content */}
                <Box sx={{ flex: { xs: '1', md: '1.2' }, zIndex: 2, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Typography
                      variant="h1"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                      sx={{
                        fontSize: { xs: '2.4rem', sm: '3.5rem', md: '4rem', lg: '3.5rem' },
                        fontWeight: 900,
                        lineHeight: { xs: 1.1, md: 1.2 },
                        mb: 3,
                        letterSpacing: '-0.05em',
                        maxWidth: { xs: '100%', md: '600px' },
                        '& .highlight': { color: 'primary.main' },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        maxWidth: { xs: '100%', md: '500px' },
                        mx: { xs: 'auto', md: 0 },
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        fontWeight: 300,
                        mb: 5,
                      }}
                    >
                      {slide.description}
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center">
                      <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                        <Button
                          variant="contained"
                          size="large"
                          href={slide.link}
                          sx={{
                            py: 2, px: { xs: 5, md: 7 },
                            borderRadius: '50px',
                            backgroundColor: 'primary.main',
                            color: '#fff',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            textTransform: 'uppercase',
                            fontSize: { xs: '0.85rem', md: '0.95rem' },
                            boxShadow: '0 12px 28px rgba(38,105,41,0.28)',
                            '&:hover': { backgroundColor: '#1a4d1d', boxShadow: '0 18px 36px rgba(38,105,41,0.36)' },
                          }}
                        >
                          {slide.btnText}
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                        <Button
                          variant="outlined"
                          size="large"
                          sx={{
                            py: 1.8, px: { xs: 5, md: 7 },
                            borderRadius: '50px',
                            color: 'text.primary',
                            borderColor: (t) => t.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            textTransform: 'uppercase',
                            fontSize: { xs: '0.85rem', md: '0.95rem' },
                            backdropFilter: 'blur(6px)',
                            backgroundColor: (t) => t.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)',
                            '&:hover': {
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              backgroundColor: 'rgba(38,105,41,0.06)',
                            },
                          }}
                        >
                          Our Process
                        </Button>
                      </motion.div>
                    </Stack>
                  </motion.div>
                </Box>

                {/* Image */}
                <Box sx={{ flex: 1, position: 'relative', width: { xs: '100%', md: 'auto' }, display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Glow ring behind image */}
                    <Box sx={{
                      position: 'absolute', inset: '-12%',
                      borderRadius: index % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '70% 30% 30% 70% / 70% 70% 30% 30%',
                      background: (t) => t.palette.mode === 'dark'
                        ? 'radial-gradient(circle, rgba(38,105,41,0.3) 0%, transparent 72%)'
                        : 'radial-gradient(circle, rgba(38,105,41,0.14) 0%, transparent 72%)',
                      filter: 'blur(24px)',
                      zIndex: -1,
                    }} />

                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: '260px', sm: '350px', md: '450px', lg: '500px' },
                        aspectRatio: '1/1',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: { xs: '-10px', md: '-20px' },
                          right: { xs: '-10px', md: '-20px' },
                          width: '100%',
                          height: '100%',
                          border: (t) => t.palette.mode === 'dark'
                            ? '1.5px solid rgba(38,105,41,0.4)'
                            : '1.5px solid rgba(38,105,41,0.15)',
                          borderRadius: index % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '70% 30% 30% 70% / 70% 70% 30% 30%',
                          zIndex: -1,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.image}
                        alt={slide.alt}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: index % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '70% 30% 30% 70% / 70% 70% 30% 30%',
                          boxShadow: (t) => t.palette.mode === 'dark'
                            ? '0 40px 80px rgba(0,0,0,0.4)'
                            : '0 40px 80px rgba(0,0,0,0.08)',
                        }}
                      />
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

export default Hero;
