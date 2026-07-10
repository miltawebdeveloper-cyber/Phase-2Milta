import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/VirtualAssistant/VAHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const VAWhatIs        = lazy(() => import('../components/Services/VirtualAssistant/VAWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/VirtualAssistant/VAWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/VirtualAssistant/VASolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/VirtualAssistant/VAAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/VirtualAssistant/VATrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/VirtualAssistant/VAFAQ'));
const Footer          = lazy(() => import('../components/Footer'));

const VirtualAssistant = () => {
  useFullSEO({
    title: 'Virtual Assistant Services in the USA | Milta Financial Services',
    description:
      'Delegate admin, scheduling and back-office tasks to Milta’s reliable virtual assistants. Save time and cut costs while your business stays organized and productive.',
    keywords:
      'virtual assistant services usa, hire virtual assistant, remote admin support, back office outsourcing, milta virtual assistant',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/',
    ogTitle: 'Virtual Assistant Services in the USA | Milta Financial Services',
    ogDescription:
      'Delegate admin, scheduling and back-office tasks to reliable virtual assistants and save time and cost.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/',
    ogType: 'website',
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
