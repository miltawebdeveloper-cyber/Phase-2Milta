import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/FinancialControllerComp/FCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const VAWhatIs        = lazy(() => import('../components/Services/FinancialControllerComp/FCWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/FinancialControllerComp/FCWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/FinancialControllerComp/FCSolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/FinancialControllerComp/FCAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/FinancialControllerComp/FCTrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/FinancialControllerComp/FCFAQ'));
const Footer          = lazy(() => import('../components/Footer'));

const VirtualAssistant = () => {
  useFullSEO({
    title: 'Financial Controller Services in the USA | Milta Financial Services',
    description:
      'Get senior-level financial oversight without the full-time cost. Milta’s financial controller services deliver reporting, cash flow control and strategic guidance.',
    keywords:
      'financial controller services usa, outsourced controller, virtual controller, financial oversight, milta financial controller',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/',
    ogTitle: 'Financial Controller Services in the USA | Milta Financial Services',
    ogDescription:
      'Senior-level financial oversight without the full-time cost — reporting, cash flow control and strategic guidance.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/',
    ogType: 'website',
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
