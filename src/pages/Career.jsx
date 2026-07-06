import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/careerComp/Hero';
import ScrollToTop from '../components/ScrollToTop';

const JoinMilta     = lazy(() => import('../components/careerComp/JoinMilta'));
const WhyLoveMilta  = lazy(() => import('../components/careerComp/WhyLoveMilta'));
const VoicesFromTeam = lazy(() => import('../components/careerComp/VoicesFromTeam'));
const CareerCta     = lazy(() => import('../components/homeComp/CTASection'));
const ApplyForm     = lazy(() => import('../components/careerComp/ApplyForm'));
const Footer        = lazy(() => import('../components/Footer'));

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #266929 0%, #4caf50 60%, #5dbb61 100%)',
        transformOrigin: '0%',
        zIndex: 1400,
      }}
    />
  );
};

const Career = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <ScrollProgressBar />
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <JoinMilta />
      <WhyLoveMilta />
      <VoicesFromTeam />
      <CareerCta />
      <ApplyForm />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default Career;
