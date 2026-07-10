import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/careerComp/Hero';
import ApplyForm from '../components/ApplyForm';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const JoinMilta     = lazy(() => import('../components/careerComp/JoinMilta'));
const WhyLoveMilta  = lazy(() => import('../components/careerComp/WhyLoveMilta'));
const VoicesFromTeam = lazy(() => import('../components/careerComp/VoicesFromTeam'));
const CareerCta     = lazy(() => import('../components/homeComp/CTASection'));
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

const Career = () => {
  // Auto-open the application popup shortly after the career page loads
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setApplyOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useFullSEO({
    title: 'Careers at Milta Financial Services | Join Our Accounting Team',
    description:
      'Build your career with Milta Financial Services. Explore open roles in accounting, bookkeeping and finance, and join a team that values growth and people.',
    keywords:
      'milta careers, accounting jobs, bookkeeping careers, finance jobs, work at milta, join milta financial services',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/career',
    ogTitle: 'Careers at Milta Financial Services | Join Our Accounting Team',
    ogDescription:
      'Explore open roles in accounting, bookkeeping and finance, and join a team that values growth and people.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/career',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <ScrollProgressBar />
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <JoinMilta />
      <WhyLoveMilta />
      <ApplyForm variant="inline" />
      <Footer />
    </Suspense>
    <ApplyForm open={applyOpen} onClose={() => setApplyOpen(false)} />
    <ScrollToTop />
  </Box>
  );
};

export default Career;
