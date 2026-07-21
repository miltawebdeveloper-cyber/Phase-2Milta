import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/FinancialControllerComp/FCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import VAFAQ, { FAQS } from '../components/Services/FinancialControllerComp/FCFAQ';

const VAWhatIs        = lazy(() => import('../components/Services/FinancialControllerComp/FCWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/FinancialControllerComp/FCWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/FinancialControllerComp/FCSolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/FinancialControllerComp/FCAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/FinancialControllerComp/FCTrustedPartner'));
import Footer from '../components/Footer';

const VirtualAssistant = () => {
  useFullSEO({
    title: "Outsourced Financial Controller Services for SMEs in the USA",
    description:
      "Our Outsourced Financial Controller Services for small & medium businesses. Expert reporting, compliance, cash flow, & financial management support.",
    keywords:
      "financial controller services in the usa, financial controller services, outsourced financial controller, accounting controller, financial controller services for smes.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/',
    ogTitle: "Outsourced Financial Controller Services for SMEs in the USA",
    ogDescription:
      "Our Outsourced Financial Controller Services for small & medium businesses. Expert reporting, compliance, cash flow, & financial management support.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/',
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
         <VAAdvantages />
      <VAWhyChoose />
      <VAFAQ />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default VirtualAssistant;
