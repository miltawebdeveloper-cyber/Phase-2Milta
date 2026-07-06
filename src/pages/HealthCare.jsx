import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HCHero from '../components/Industries/HealthCare/HCHero';
import ScrollToTop from '../components/ScrollToTop';

const HCWhatIs     = lazy(() => import('../components/Industries/HealthCare/HCWhatIs'));
const HCSolutions  = lazy(() => import('../components/Industries/HealthCare/HCSolutions'));
const HCWhyChoose  = lazy(() => import('../components/Industries/HealthCare/HCWhyChoose'));
const HCAdvantages = lazy(() => import('../components/Industries/HealthCare/HCAdvantages'));
const HCChallenges = lazy(() => import('../components/Industries/HealthCare/HCChallenges'));
const HCFAQ        = lazy(() => import('../components/Industries/HealthCare/HCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const HealthCare = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <HCHero />
    <Suspense fallback={null}>
      <HCWhatIs />
      <HCSolutions />
      <HCWhyChoose />
      <HCAdvantages />
      <HCChallenges />
      <HCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default HealthCare;
