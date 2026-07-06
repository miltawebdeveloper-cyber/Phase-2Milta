import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/aboutComp/AboutHero';
import ScrollToTop from '../components/ScrollToTop';

const AboutMilta    = lazy(() => import('../components/aboutComp/AboutMilta'));
const VisionMission = lazy(() => import('../components/aboutComp/VisionMission'));
const WhyChoose     = lazy(() => import('../components/aboutComp/WhyChoose'));
const MDPortfolio   = lazy(() => import('../components/aboutComp/MDPortfolio'));
const CTASection    = lazy(() => import('../components/homeComp/CTASection'));
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

const About = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <ScrollProgressBar />
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <AboutMilta />
      <VisionMission />
      <WhyChoose />
      <MDPortfolio />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default About;
