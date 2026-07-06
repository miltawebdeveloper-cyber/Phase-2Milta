import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/FinancialControllerComp/FCHero';
import ScrollToTop from '../components/ScrollToTop';

const VAWhatIs        = lazy(() => import('../components/Services/FinancialControllerComp/FCWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/FinancialControllerComp/FCWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/FinancialControllerComp/FCSolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/FinancialControllerComp/FCAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/FinancialControllerComp/FCTrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/FinancialControllerComp/FCFAQ'));
const Footer          = lazy(() => import('../components/Footer'));

const VirtualAssistant = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <VAHero />
    
      <VAWhatIs />
      <VAWhyChoose />
      <VASolutions />
      <VAAdvantages />
      <VATrustedPartner />
      <VAFAQ />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default VirtualAssistant;
