import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CCHero from '../components/Industries/ContractorsComp/CCHero';
import ScrollToTop from '../components/ScrollToTop';

const CCWhatIs     = lazy(() => import('../components/Industries/ContractorsComp/CCWhatIs'));
const CCSolutions  = lazy(() => import('../components/Industries/ContractorsComp/CCSolutions'));
const CCWhyChoose  = lazy(() => import('../components/Industries/ContractorsComp/CCWhyChoose'));
const CCAdvantages = lazy(() => import('../components/Industries/ContractorsComp/CCAdvantages'));
const CCChallenges = lazy(() => import('../components/Industries/ContractorsComp/CCChallenges'));
const CCFAQ        = lazy(() => import('../components/Industries/ContractorsComp/CCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const ContractorsCompanies = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <CCHero />
    <Suspense fallback={null}>
      <CCWhatIs />
      <CCSolutions />
      <CCWhyChoose />
      <CCAdvantages />
      <CCChallenges />
      <CCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default ContractorsCompanies;
