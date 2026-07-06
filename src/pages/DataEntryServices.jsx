import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/DataEntryComp/DEHero';
import ScrollToTop from '../components/ScrollToTop';

const VAWhatIs        = lazy(() => import('../components/Services/DataEntryComp/DEWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/DataEntryComp/DEWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/DataEntryComp/DESolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/DataEntryComp/DEAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/DataEntryComp/DETrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/DataEntryComp/DEFAQ'));
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
