import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import REHero from '../components/Industries/RealEstateComp/REHero';
import ScrollToTop from '../components/ScrollToTop';

const REWhatIs     = lazy(() => import('../components/Industries/RealEstateComp/REWhatIs'));
const RESolutions  = lazy(() => import('../components/Industries/RealEstateComp/RESolutions'));
const REWhyChoose  = lazy(() => import('../components/Industries/RealEstateComp/REWhyChoose'));
const REAdvantages = lazy(() => import('../components/Industries/RealEstateComp/REAdvantages'));
const REChallenges = lazy(() => import('../components/Industries/RealEstateComp/REChallenges'));
const REFAQ        = lazy(() => import('../components/Industries/RealEstateComp/REFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const RealEstateCompanies = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <REHero />
    <Suspense fallback={null}>
      <REWhatIs />
      <RESolutions />
      <REWhyChoose />
      <REAdvantages />
      <REChallenges />
      <REFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default RealEstateCompanies;
