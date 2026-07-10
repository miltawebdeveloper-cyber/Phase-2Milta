import React, { lazy } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import TaxHero from '../components/Services/TaxComp/TaxHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const TaxWhatIs        = lazy(() => import('../components/Services/TaxComp/TaxWhatIs'));
const TaxWhyChoose     = lazy(() => import('../components/Services/TaxComp/TaxWhyChoose'));
const TaxSolutions     = lazy(() => import('../components/Services/TaxComp/TaxSolutions'));
const TaxAdvantages    = lazy(() => import('../components/Services/TaxComp/TaxAdvantages'));
const TaxTrustedPartner = lazy(() => import('../components/Services/TaxComp/TaxTrustedPartner'));
const TaxFAQ           = lazy(() => import('../components/Services/TaxComp/TaxFAQ'));
const CTASection       = lazy(() => import('../components/homeComp/CTASection'));
const Footer           = lazy(() => import('../components/Footer'));

const TaxPlanning = () => {
  useFullSEO({
    title: 'Tax Planning & Preparation Services in the USA | Milta',
    description:
      'Minimize tax liability and stay compliant with Milta’s tax planning and preparation services for US businesses. Accurate filings, proactive strategy, year-round support.',
    keywords:
      'tax planning services usa, tax preparation, business tax filing, tax compliance, outsourced tax services, milta tax',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/tax-planning-and-preparation-services-usa/',
    ogTitle: 'Tax Planning & Preparation Services in the USA | Milta',
    ogDescription:
      'Minimize tax liability and stay compliant with accurate filings, proactive strategy and year-round support.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/tax-planning-and-preparation-services-usa/',
    ogType: 'website',
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
