import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HCHero from '../components/Industries/HealthCare/HCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';


const HCWhatIs     = lazy(() => import('../components/Industries/HealthCare/HCWhatIs'));
const HCSolutions  = lazy(() => import('../components/Industries/HealthCare/HCSolutions'));
const HCWhyChoose  = lazy(() => import('../components/Industries/HealthCare/HCWhyChoose'));
const HCAdvantages = lazy(() => import('../components/Industries/HealthCare/HCAdvantages'));
const HCChallenges = lazy(() => import('../components/Industries/HealthCare/HCChallenges'));
const HCFAQ        = lazy(() => import('../components/Industries/HealthCare/HCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const HealthCare = () => {
  useFullSEO({
    title: 'Accounting for the Healthcare Industry | Milta Financial Services',
    description:
      'Medical billing reconciliation, payroll and compliant bookkeeping for healthcare practices. Milta keeps your practice financially healthy and audit-ready.',
    keywords:
      'healthcare accounting, medical practice bookkeeping, medical billing reconciliation, healthcare payroll, milta healthcare industry',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/health-care-industry/',
    ogTitle: 'Accounting for the Healthcare Industry | Milta Financial Services',
    ogDescription:
      'Medical billing reconciliation, payroll and compliant bookkeeping to keep your practice financially healthy.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/health-care-industry/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <HCHero />
    <Suspense fallback={null}>
      <HCWhatIs />
      <ServicesSection />
      <HCWhyChoose />
      <HCAdvantages />
      
      <HCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default HealthCare;
