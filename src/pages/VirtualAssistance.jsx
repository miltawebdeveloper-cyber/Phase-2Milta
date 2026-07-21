import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/VirtualAssistant/VAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import VAFAQ, { FAQS } from '../components/Services/VirtualAssistant/VAFAQ';

const VAWhatIs        = lazy(() => import('../components/Services/VirtualAssistant/VAWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/VirtualAssistant/VAWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/VirtualAssistant/VASolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/VirtualAssistant/VAAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/VirtualAssistant/VATrustedPartner'));
import Footer from '../components/Footer';

const VirtualAssistant = () => {
  useFullSEO({
    title: "Hire Virtual Assistants & Remote Personal | Virtual Assistant Services",
    description:
      "Professional virtual assistant services for small businesses. We specialize in real estate, data entry, bookkeeping, event planning, and more. Affordable and scalable solutions.",
    keywords:
      "virtual assistant service, virtual assistant services for small business, virtual bookkeeping service, accounting virtual service, virtual assistant services in the usa, accounting virtual service in the usa.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/',
    ogTitle: "Hire Virtual Assistants & Remote Personal | Virtual Assistant Services",
    ogDescription:
      "Professional virtual assistant services for small businesses. We specialize in real estate, data entry, bookkeeping, event planning, and more. Affordable and scalable solutions.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/',
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
      <VATrustedPartner />
      <VAFAQ />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default VirtualAssistant;
