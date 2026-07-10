import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import VAHero from '../components/Services/DataEntryComp/DEHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const VAWhatIs        = lazy(() => import('../components/Services/DataEntryComp/DEWhatIs'));
const VAWhyChoose     = lazy(() => import('../components/Services/DataEntryComp/DEWhyChoose'));
const VASolutions     = lazy(() => import('../components/Services/DataEntryComp/DESolutions'));
const VAAdvantages    = lazy(() => import('../components/Services/DataEntryComp/DEAdvantages'));
const VATrustedPartner = lazy(() => import('../components/Services/DataEntryComp/DETrustedPartner'));
const VAFAQ           = lazy(() => import('../components/Services/DataEntryComp/DEFAQ'));
const Footer          = lazy(() => import('../components/Footer'));

const VirtualAssistant = () => {
  useFullSEO({
    title: 'Accounting Data Entry Services in the USA | Milta',
    description:
      'Outsource accurate, secure accounting data entry to Milta. Clean records, fast turnaround and reduced overhead so your team can focus on higher-value work.',
    keywords:
      'data entry services usa, accounting data entry, outsourced data management, bookkeeping data entry, milta data entry',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/',
    ogTitle: 'Accounting Data Entry Services in the USA | Milta',
    ogDescription:
      'Accurate, secure accounting data entry with clean records, fast turnaround and reduced overhead.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/',
    ogType: 'website',
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
