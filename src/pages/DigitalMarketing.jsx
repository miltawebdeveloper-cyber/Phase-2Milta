import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/DigitalMarketingComp/DMHero';
import ScrollToTop from '../components/ScrollToTop';

const DMWhatIs        = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhatIs'));
const DMWhyChoose     = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhyChoose'));
const DMSolutions     = lazy(() => import('../components/Services/DigitalMarketingComp/DMSolutions'));
const DMAdvantages    = lazy(() => import('../components/Services/DigitalMarketingComp/DMAdvantages'));
const DMTrustedPartner = lazy(() => import('../components/Services/DigitalMarketingComp/DMTrustedPartner'));
const DMFAQ           = lazy(() => import('../components/Services/DigitalMarketingComp/DMFAQ'));
const CTASection           = lazy(() => import('../components/HomeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const DigitalMarketing = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <DMWhatIs />
      <DMWhyChoose />
      <DMSolutions />
      <DMAdvantages />
      <DMTrustedPartner />
      <DMFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default DigitalMarketing;
