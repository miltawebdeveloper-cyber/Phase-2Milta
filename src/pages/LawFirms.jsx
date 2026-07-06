import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import LFHero from '../components/Industries/LawFirmsComp/LFHero';
import ScrollToTop from '../components/ScrollToTop';

const LFWhatIs     = lazy(() => import('../components/Industries/LawFirmsComp/LFWhatIs'));
const LFSolutions  = lazy(() => import('../components/Industries/LawFirmsComp/LFSolutions'));
const LFWhyChoose  = lazy(() => import('../components/Industries/LawFirmsComp/LFWhyChoose'));
const LFAdvantages = lazy(() => import('../components/Industries/LawFirmsComp/LFAdvantages'));
const LFChallenges = lazy(() => import('../components/Industries/LawFirmsComp/LFChallenges'));
const LFFAQ        = lazy(() => import('../components/Industries/LawFirmsComp/LFFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const LawFirms = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <LFHero />
    <Suspense fallback={null}>
      <LFWhatIs />
      <LFSolutions />
      <LFWhyChoose />
      <LFAdvantages />
      <LFChallenges />
      <LFFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default LawFirms;
