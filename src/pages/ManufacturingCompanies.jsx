import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import MCHero from '../components/Industries/ManufacturingCompaniesComp/MCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';
const MCWhatIs     = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhatIs'));
const MCSolutions  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCSolutions'));
const MCWhyChoose  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhyChoose'));
const MCAdvantages = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCAdvantages'));
const MCChallenges = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCChallenges'));
const MCFAQ        = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const ManufacturingCompanies = () => {
  useFullSEO({
    title: 'Accounting for Manufacturing Companies | Milta Financial Services',
    description:
      'Inventory costing, margin analysis and reliable bookkeeping for manufacturers. Milta gives you the numbers to control costs and grow production profitably.',
    keywords:
      'accounting for manufacturing, inventory costing, manufacturing bookkeeping, cost accounting, milta manufacturing companies',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/manufacturing-companies/',
    ogTitle: 'Accounting for Manufacturing Companies | Milta Financial Services',
    ogDescription:
      'Inventory costing, margin analysis and reliable bookkeeping to control costs and grow production profitably.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/manufacturing-companies/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <MCHero />
    <Suspense fallback={null}>
      <MCWhatIs />
      <MCSolutions />
      <ServicesSection />
      <MCWhyChoose />
      <MCAdvantages />
      
      <MCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default ManufacturingCompanies;
