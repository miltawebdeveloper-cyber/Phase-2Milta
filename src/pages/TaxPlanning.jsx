import React, { lazy } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import TaxHero from '../components/Services/TaxComp/TaxHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import TaxFAQ, { FAQS } from '../components/Services/TaxComp/TaxFAQ';

const TaxWhatIs        = lazy(() => import('../components/Services/TaxComp/TaxWhatIs'));
const TaxWhyChoose     = lazy(() => import('../components/Services/TaxComp/TaxWhyChoose'));
const TaxSolutions     = lazy(() => import('../components/Services/TaxComp/TaxSolutions'));
const TaxAdvantages    = lazy(() => import('../components/Services/TaxComp/TaxAdvantages'));
const TaxTrustedPartner = lazy(() => import('../components/Services/TaxComp/TaxTrustedPartner'));
const CTASection       = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const TaxPlanning = () => {
  useFullSEO({
    title: "US Expat Tax Service | Federal, State, and City Tax Filing",
    description:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 etc.",
    keywords:
      "us expat tax service, tax planning and preparation services, tax preparation service in the usa, tax planning and preparation services in the usa",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/tax-planning-and-preparation-services-usa/',
    ogTitle: "US Expat Tax Service | Federal, State, and City Tax Filing",
    ogDescription:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 etc.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/tax-planning-and-preparation-services-usa/',
    ogType: 'website',
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <TaxHero />
    
      <TaxWhatIs />
       <TaxAdvantages />
      <TaxWhyChoose />
      
      <TaxSolutions />
     
      <TaxTrustedPartner />
      <TaxFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default TaxPlanning;
