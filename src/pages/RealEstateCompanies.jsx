import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import REHero from '../components/Industries/RealEstateComp/REHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';
const REWhatIs     = lazy(() => import('../components/Industries/RealEstateComp/REWhatIs'));
const RESolutions  = lazy(() => import('../components/Industries/RealEstateComp/RESolutions'));
const REWhyChoose  = lazy(() => import('../components/Industries/RealEstateComp/REWhyChoose'));
const REAdvantages = lazy(() => import('../components/Industries/RealEstateComp/REAdvantages'));
const REChallenges = lazy(() => import('../components/Industries/RealEstateComp/REChallenges'));
const REFAQ        = lazy(() => import('../components/Industries/RealEstateComp/REFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const RealEstateCompanies = () => {
  useFullSEO({
    title: 'Accounting for Real Estate Companies | Milta Financial Services',
    description:
      'Property-level bookkeeping, CAM reconciliations and investor reporting for real estate firms. Milta keeps your portfolio’s finances clear and compliant.',
    keywords:
      'real estate accounting, property bookkeeping, cam reconciliation, investor reporting, real estate cpa, milta real estate',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/real-estate-companies/',
    ogTitle: 'Accounting for Real Estate Companies | Milta Financial Services',
    ogDescription:
      'Property-level bookkeeping, CAM reconciliations and investor reporting to keep your portfolio clear and compliant.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/real-estate-companies/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <REHero />
    <Suspense fallback={null}>
      <REWhatIs />
      <RESolutions />
      <ServicesSection/>
      <REWhyChoose />
      <REAdvantages />
     
      <REFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default RealEstateCompanies;
