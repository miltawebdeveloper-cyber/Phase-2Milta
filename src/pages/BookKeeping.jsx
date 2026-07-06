import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/BookKeepingComp/BKHero';
import ScrollToTop from '../components/ScrollToTop';

const BKWhatIs        = lazy(() => import('../components/Services/BookKeepingComp/BKWhatIs'));
const BKWhyChoose     = lazy(() => import('../components/Services/BookKeepingComp/BKWhyChoose'));
const BKSolutions     = lazy(() => import('../components/Services/BookKeepingComp/BKSolutions'));
const BKAdvantages    = lazy(() => import('../components/Services/BookKeepingComp/BKAdvantages'));
const BKTrustedPartner = lazy(() => import('../components/Services/BookKeepingComp/BKTrustedPartner'));
const BKFAQ           = lazy(() => import('../components/Services/BookKeepingComp/BKFAQ'));
const CTASection           = lazy(() => import('../components/HomeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const BookKeeping = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <BKWhatIs />
      <BKWhyChoose />
      <BKSolutions />
      <BKAdvantages />
      <BKTrustedPartner />
      <BKFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default BookKeeping;
