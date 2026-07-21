import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/BookKeepingComp/BKHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import BKFAQ, { FAQS } from '../components/Services/BookKeepingComp/BKFAQ';

const BKWhatIs        = lazy(() => import('../components/Services/BookKeepingComp/BKWhatIs'));
const BKWhyChoose     = lazy(() => import('../components/Services/BookKeepingComp/BKWhyChoose'));
const BKSolutions     = lazy(() => import('../components/Services/BookKeepingComp/BKSolutions'));
const BKAdvantages    = lazy(() => import('../components/Services/BookKeepingComp/BKAdvantages'));
const BKTrustedPartner = lazy(() => import('../components/Services/BookKeepingComp/BKTrustedPartner'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const BookKeeping = () => {
  useFullSEO({
    title: "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes.",
    description:
      "We create customized solutions for small and growing businesses. Speak with Our Bookkeeping Pros and get A Free Consultation Today.",
    keywords:
      "business outsourcing services, accounting services for small business, finance and accounting outsourcing, outsource accounting services, virtual cfo services",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/',
    ogTitle: "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes.",
    ogDescription:
      "We create customized solutions for small and growing businesses. Speak with Our Bookkeeping Pros and get A Free Consultation Today.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/',
    ogType: 'website',
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(FAQS),
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
