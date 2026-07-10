import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RAHero from '../components/Industries/RetailBusiness/RAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';


const RAWhatIs     = lazy(() => import('../components/Industries/RetailBusiness/RAWhatIs'));
const RASolutions  = lazy(() => import('../components/Industries/RetailBusiness/RASolutions'));
const RAWhyChoose  = lazy(() => import('../components/Industries/RetailBusiness/RAWhyChoose'));
const RAAdvantages = lazy(() => import('../components/Industries/RetailBusiness/RAAdvantages'));
const RAChallenges = lazy(() => import('../components/Industries/RetailBusiness/RAChallenges'));
const RAFAQ        = lazy(() => import('../components/Industries/RetailBusiness/RAFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const RetailBusiness = () => {
  useFullSEO({
    title: 'Accounting for Retail Businesses | Milta Financial Services',
    description:
      'Inventory tracking, POS reconciliation and sales-tax compliance for retail businesses. Milta keeps your margins clear and your books ready for growth.',
    keywords:
      'retail accounting, inventory tracking, pos reconciliation, sales tax compliance, retail bookkeeping, milta retail business',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/',
    ogTitle: 'Accounting for Retail Businesses | Milta Financial Services',
    ogDescription:
      'Inventory tracking, POS reconciliation and sales-tax compliance to keep your retail margins clear.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <RAHero />
    <Suspense fallback={null}>
      <RAWhatIs />
      <RASolutions />
      <ServicesSection />
      <RAWhyChoose />
      <RAAdvantages />  
      <RAFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default RetailBusiness;
