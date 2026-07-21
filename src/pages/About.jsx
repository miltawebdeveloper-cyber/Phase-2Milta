import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/aboutComp/AboutHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import AboutFAQ, { FAQS } from '../components/aboutComp/AboutFAQ';

const AboutMilta    = lazy(() => import('../components/aboutComp/AboutMilta'));
const VisionMission = lazy(() => import('../components/aboutComp/VisionMission'));
const WhyChoose     = lazy(() => import('../components/aboutComp/WhyChoose'));
const MDPortfolio   = lazy(() => import('../components/aboutComp/MDPortfolio'));
const CTASection    = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

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
    title: "Trusted Partner for Accounting Outsourcing Services for Small Business",
    description:
      "We specialize in providing exceptional accounting outsourcing services customized specifically for small businesses in the USA. We understand your business needs.",
    keywords:
      "business outsourcing services, accounting services for small business, finance and accounting outsourcing, outsource accounting services, virtual cfo services.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/about',
    ogTitle: "Trusted Partner for Accounting Outsourcing Services for Small Business",
    ogDescription:
      "We specialize in providing exceptional accounting outsourcing services customized specifically for small businesses in the USA. We understand your business needs.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/about',
    ogType: 'website',
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <ScrollProgressBar />
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <AboutMilta />
      <VisionMission />
       <MDPortfolio />
      <WhyChoose />
      <AboutFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default About;
