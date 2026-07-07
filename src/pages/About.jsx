import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/aboutComp/AboutHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

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

const About = () => {
  useFullSEO({
    title: 'About Milta Financial Services | Your Offshore Accounting Partner',
    description:
      'Learn how Milta Financial Services helps US businesses grow with reliable offshore bookkeeping, tax and accounting expertise, personalized service and cost savings.',
    keywords:
      'about milta, offshore accounting partner, us accounting firm, outsourced bookkeeping team, milta financial services',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/about',
    ogTitle: 'About Milta Financial Services | Your Offshore Accounting Partner',
    ogDescription:
      'Reliable offshore bookkeeping, tax and accounting expertise with personalized service and real cost savings for US businesses.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/about',
    ogType: 'website',
  });

  return (
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
};

export default About;
