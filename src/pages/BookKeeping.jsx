import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/BookKeepingComp/BKHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const BKWhatIs        = lazy(() => import('../components/Services/BookKeepingComp/BKWhatIs'));
const BKWhyChoose     = lazy(() => import('../components/Services/BookKeepingComp/BKWhyChoose'));
const BKSolutions     = lazy(() => import('../components/Services/BookKeepingComp/BKSolutions'));
const BKAdvantages    = lazy(() => import('../components/Services/BookKeepingComp/BKAdvantages'));
const BKTrustedPartner = lazy(() => import('../components/Services/BookKeepingComp/BKTrustedPartner'));
const BKFAQ           = lazy(() => import('../components/Services/BookKeepingComp/BKFAQ'));
const CTASection           = lazy(() => import('../components/HomeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const BookKeeping = () => {
  useFullSEO({
    title: 'Bookkeeping Services in the USA | Milta Financial Services',
    description:
      'Accurate, affordable bookkeeping services for US businesses. Milta keeps your books clean, reconciled and audit-ready so you can focus on growth.',
    keywords:
      'bookkeeping services usa, outsourced bookkeeping, small business bookkeeping, online bookkeeping company, milta bookkeeping',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/',
    ogTitle: 'Bookkeeping Services in the USA | Milta Financial Services',
    ogDescription:
      'Accurate, affordable bookkeeping that keeps your books clean, reconciled and audit-ready.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/',
    ogType: 'website',
  });

  return (
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
};

export default BookKeeping;
