import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CCHero from '../components/Industries/ContractorsComp/CCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';
const CCWhatIs     = lazy(() => import('../components/Industries/ContractorsComp/CCWhatIs'));
const CCSolutions  = lazy(() => import('../components/Industries/ContractorsComp/CCSolutions'));
const CCWhyChoose  = lazy(() => import('../components/Industries/ContractorsComp/CCWhyChoose'));
const CCAdvantages = lazy(() => import('../components/Industries/ContractorsComp/CCAdvantages'));
const CCFAQ        = lazy(() => import('../components/Industries/ContractorsComp/CCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const ContractorsCompanies = () => {
  useFullSEO({
    title: 'Accounting for Contractors & Construction Companies | Milta',
    description:
      'Job costing, WIP reporting and compliant bookkeeping built for contractors and construction companies. Milta keeps your projects profitable and your books accurate.',
    keywords:
      'accounting for contractors, construction bookkeeping, job costing, wip reporting, contractor accounting services, milta',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/contractors-companies/',
    ogTitle: 'Accounting for Contractors & Construction Companies | Milta',
    ogDescription:
      'Job costing, WIP reporting and compliant bookkeeping built for contractors and construction companies.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/contractors-companies/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <CCHero />
    <Suspense fallback={null}>
      <CCWhatIs />
      <CCSolutions />
      <ServicesSection />
      
      <CCAdvantages />
      
      <CCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default ContractorsCompanies;
