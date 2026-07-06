import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import NPHero from '../components/Industries/NonProfit/NPHero';
import ScrollToTop from '../components/ScrollToTop';

const NPWhatIs     = lazy(() => import('../components/Industries/NonProfit/NPWhatIs'));
const NPSolutions  = lazy(() => import('../components/Industries/NonProfit/NPSolutions'));
const NPWhyChoose  = lazy(() => import('../components/Industries/NonProfit/NPWhyChoose'));
const NPAdvantages = lazy(() => import('../components/Industries/NonProfit/NPAdvantages'));
const NPChallenges = lazy(() => import('../components/Industries/NonProfit/NPChallenges'));
const NPFAQ        = lazy(() => import('../components/Industries/NonProfit/NPFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const NonProfit = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <NPHero />
    <Suspense fallback={null}>
      <NPWhatIs />
      <NPSolutions />
      <NPWhyChoose />
      <NPAdvantages />
      <NPChallenges />
      <NPFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default NonProfit;
