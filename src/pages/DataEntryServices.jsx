import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/DataEntryComp/DEHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import VAFAQ, { FAQS } from '../components/Services/DataEntryComp/DEFAQ';

const VAWhatIs        = lazy(() => import('../components/Services/DataEntryComp/DEWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/DataEntryComp/DEWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/DataEntryComp/DESolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/DataEntryComp/DEAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/DataEntryComp/DETrustedPartner'));
import Footer from '../components/Footer';

const VirtualAssistant = () => {
  useFullSEO({
    title: "Outsourcing Accounting Data Entry Services In the USA",
    description:
      "Our professional accounting data entry services are designed to improve accuracy, save time, and support the growth of your small business operations.",
    keywords:
      "data entry services in the usa, accounting data entry services, data entry companies, bookkeeping data entry, outsourcing accounting data entry",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/',
    ogTitle: "Outsourcing Accounting Data Entry Services In the USA",
    ogDescription:
      "Our professional accounting data entry services are designed to improve accuracy, save time, and support the growth of your small business operations.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/',
    ogType: 'website',
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <VAHero />
    
      <VAWhatIs />
      <VASolutions />
      <VAWhyChoose />
      
      <VAAdvantages />
      <VATrustedPartner />
      <VAFAQ />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default VirtualAssistant;
