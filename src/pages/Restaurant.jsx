import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RIHero from '../components/Industries/Restaurant/RIHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';

const RIWhatIs     = lazy(() => import('../components/Industries/Restaurant/RIWhatIs'));
const RISolutions  = lazy(() => import('../components/Industries/Restaurant/RISolutions'));
const RIWhyChoose  = lazy(() => import('../components/Industries/Restaurant/RIWhyChoose'));
const RIAdvantages = lazy(() => import('../components/Industries/Restaurant/RIAdvantages'));
const RIChallenges = lazy(() => import('../components/Industries/Restaurant/RIChallenges'));
const RIFAQ        = lazy(() => import('../components/Industries/Restaurant/RIFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const Restaurant = () => {
  useFullSEO({
    title: 'Accounting for the Restaurant Industry | Milta Financial Services',
    description:
      'Food-cost tracking, tip and payroll management and daily sales reconciliation for restaurants. Milta helps you protect margins and run a profitable kitchen.',
    keywords:
      'restaurant accounting, food cost tracking, restaurant bookkeeping, tip payroll, restaurant cpa, milta restaurant industry',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/restaurant-industry/',
    ogTitle: 'Accounting for the Restaurant Industry | Milta Financial Services',
    ogDescription:
      'Food-cost tracking, tip and payroll management and daily sales reconciliation to protect your margins.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/restaurant-industry/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <RIHero />
    <Suspense fallback={null}>
      <RIWhatIs />
      <RISolutions />
      <ServicesSection />
      <RIWhyChoose />
      <RIAdvantages />
      
      <RIFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default Restaurant;
