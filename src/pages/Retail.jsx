import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RAHero from '../components/Industries/RetailBusiness/RAHero';
import ScrollToTop from '../components/ScrollToTop';

const RAWhatIs     = lazy(() => import('../components/Industries/RetailBusiness/RAWhatIs'));
const RASolutions  = lazy(() => import('../components/Industries/RetailBusiness/RASolutions'));
const RAWhyChoose  = lazy(() => import('../components/Industries/RetailBusiness/RAWhyChoose'));
const RAAdvantages = lazy(() => import('../components/Industries/RetailBusiness/RAAdvantages'));
const RAChallenges = lazy(() => import('../components/Industries/RetailBusiness/RAChallenges'));
const RAFAQ        = lazy(() => import('../components/Industries/RetailBusiness/RAFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const RetailBusiness = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <RAHero />
    <Suspense fallback={null}>
      <RAWhatIs />
      <RASolutions />
      <RAWhyChoose />
      <RAAdvantages />
      <RAChallenges />
      <RAFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default RetailBusiness;
