import React, { lazy } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import TaxHero from '../components/Services/TaxComp/TaxHero';
import ScrollToTop from '../components/ScrollToTop';

const TaxWhatIs        = lazy(() => import('../components/Services/TaxComp/TaxWhatIs'));
const TaxWhyChoose     = lazy(() => import('../components/Services/TaxComp/TaxWhyChoose'));
const TaxSolutions     = lazy(() => import('../components/Services/TaxComp/TaxSolutions'));
const TaxAdvantages    = lazy(() => import('../components/Services/TaxComp/TaxAdvantages'));
const TaxTrustedPartner = lazy(() => import('../components/Services/TaxComp/TaxTrustedPartner'));
const TaxFAQ           = lazy(() => import('../components/Services/TaxComp/TaxFAQ'));
const CTASection       = lazy(() => import('../components/HomeComp/CTASection'));
const Footer           = lazy(() => import('../components/Footer'));

const TaxPlanning = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <TaxHero />
    
      <TaxWhatIs />
      <TaxWhyChoose />
      <TaxSolutions />
      <TaxAdvantages />
      <TaxTrustedPartner />
      <TaxFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default TaxPlanning;
