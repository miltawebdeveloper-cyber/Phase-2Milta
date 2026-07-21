import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/CPA/CPAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import CPAFAQ, { FAQS } from '../components/Services/CPA/CPAFAQ';

const CPAWhatIs        = lazy(() => import('../components/Services/CPA/CPAWhatIs'));
const CPAWhyChoose     = lazy(() => import('../components/Services/CPA/CPAWhyChoose'));
const CPASolutions     = lazy(() => import('../components/Services/CPA/CPASolutions'));
const CPAAdvantages    = lazy(() => import('../components/Services/CPA/CPAAdvantages'));
const CPATrustedPartner = lazy(() => import('../components/Services/CPA/CPATrustedPartner'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const CPAServices = () => {
  useFullSEO({
    title: "The best CPA service for small businesses in the USA | Milta",
    description:
      "We offer the best CPA service for small businesses in the USA, as well as accounting firms that support and foster sustainable growth.",
    keywords:
      "cpa services in usa, cpa firms near me, cpa firms in the usa, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in the usa, certified public accountant near me.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/',
    ogTitle: "The best CPA service for small businesses in the USA | Milta",
    ogDescription:
      "We offer the best CPA service for small businesses in the USA, as well as accounting firms that support and foster sustainable growth.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/',
    ogType: 'website',
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <CPAWhatIs />
      <CPASolutions />
      <CPAWhyChoose />
      
      <CPAAdvantages />
      
      <CPAFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default CPAServices;
