import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/VirtualAssistant/VAHero';
import ScrollToTop from '../components/ScrollToTop';

const VAWhatIs        = lazy(() => import('../components/Services/VirtualAssistant/VAWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/VirtualAssistant/VAWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/VirtualAssistant/VASolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/VirtualAssistant/VAAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/VirtualAssistant/VATrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/VirtualAssistant/VAFAQ'));
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
