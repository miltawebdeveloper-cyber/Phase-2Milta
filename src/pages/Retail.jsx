import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RAHero from '../components/Industries/RetailBusiness/RAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';


const RAWhatIs     = lazy(() => import('../components/Industries/RetailBusiness/RAWhatIs'));
const RASolutions  = lazy(() => import('../components/Industries/RetailBusiness/RASolutions'));
const RAWhyChoose  = lazy(() => import('../components/Industries/RetailBusiness/RAWhyChoose'));
const RAAdvantages = lazy(() => import('../components/Industries/RetailBusiness/RAAdvantages'));
const RAChallenges = lazy(() => import('../components/Industries/RetailBusiness/RAChallenges'));
import RAFAQ, { FAQS } from '../components/Industries/RetailBusiness/RAFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const RetailBusiness = () => {
  useFullSEO({
    title: "Milta - Accounting services for retail Businesses in the USA",
    description:
      "We offer accounting services for retail businesses in the USA. Our services include expense tracking, cash flow monitoring, tax maintenance, and reporting.",
    keywords:
      "bookkeeping for retail, accounting services for retail, retail accounting services, retail accounting, tax returns for retail",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/',
    ogTitle: "Milta - Accounting services for retail Businesses in the USA",
    ogDescription:
      "We offer accounting services for retail businesses in the USA. Our services include expense tracking, cash flow monitoring, tax maintenance, and reporting.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
