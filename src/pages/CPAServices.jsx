import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/cpa/CPAHero';
import ScrollToTop from '../components/ScrollToTop';

const CPAWhatIs        = lazy(() => import('../components/Services/CPA/CPAWhatIs'));
const CPAWhyChoose     = lazy(() => import('../components/Services/CPA/CPAWhyChoose'));
const CPASolutions     = lazy(() => import('../components/Services/CPA/CPASolutions'));
const CPAAdvantages    = lazy(() => import('../components/Services/CPA/CPAAdvantages'));
const CPATrustedPartner = lazy(() => import('../components/Services/CPA/CPATrustedPartner'));
const CPAFAQ           = lazy(() => import('../components/Services/CPA/CPAFAQ'));
const CTASection           = lazy(() => import('../components/HomeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const CPAServices = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <CPAWhatIs />
      <CPAWhyChoose />
      <CPASolutions />
      <CPAAdvantages />
      <CPATrustedPartner />
      <CPAFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default CPAServices;
