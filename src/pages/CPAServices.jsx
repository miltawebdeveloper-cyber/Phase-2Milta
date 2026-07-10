import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/CPA/CPAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const CPAWhatIs        = lazy(() => import('../components/Services/CPA/CPAWhatIs'));
const CPAWhyChoose     = lazy(() => import('../components/Services/CPA/CPAWhyChoose'));
const CPASolutions     = lazy(() => import('../components/Services/CPA/CPASolutions'));
const CPAAdvantages    = lazy(() => import('../components/Services/CPA/CPAAdvantages'));
const CPATrustedPartner = lazy(() => import('../components/Services/CPA/CPATrustedPartner'));
const CPAFAQ           = lazy(() => import('../components/Services/CPA/CPAFAQ'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const CPAServices = () => {
  useFullSEO({
    title: 'Best CPA Services for Small Businesses in the USA | Milta',
    description:
      'Expert CPA services for US small businesses. Milta delivers compliance, financial reporting and strategic advice to help your business stay healthy and grow.',
    keywords:
      'cpa services usa, cpa for small business, certified public accountant, outsourced cpa, milta cpa services',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/',
    ogTitle: 'Best CPA Services for Small Businesses in the USA | Milta',
    ogDescription:
      'Expert CPA services delivering compliance, financial reporting and strategic advice for small businesses.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <CPAWhatIs />
      <CPASolutions />
      <CPAWhyChoose />
      
      <CPAAdvantages />
      <CPATrustedPartner />
      <CPAFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default CPAServices;
