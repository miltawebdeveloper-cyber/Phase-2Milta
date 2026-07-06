import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RIHero from '../components/Industries/Restaurant/RIHero';
import ScrollToTop from '../components/ScrollToTop';

const RIWhatIs     = lazy(() => import('../components/Industries/Restaurant/RIWhatIs'));
const RISolutions  = lazy(() => import('../components/Industries/Restaurant/RISolutions'));
const RIWhyChoose  = lazy(() => import('../components/Industries/Restaurant/RIWhyChoose'));
const RIAdvantages = lazy(() => import('../components/Industries/Restaurant/RIAdvantages'));
const RIChallenges = lazy(() => import('../components/Industries/Restaurant/RIChallenges'));
const RIFAQ        = lazy(() => import('../components/Industries/Restaurant/RIFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const Restaurant = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <RIHero />
    <Suspense fallback={null}>
      <RIWhatIs />
      <RISolutions />
      <RIWhyChoose />
      <RIAdvantages />
      <RIChallenges />
      <RIFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default Restaurant;
