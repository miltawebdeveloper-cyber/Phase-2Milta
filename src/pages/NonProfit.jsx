import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import NPHero from '../components/Industries/NonProfit/NPHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';


const NPWhatIs     = lazy(() => import('../components/Industries/NonProfit/NPWhatIs'));
const NPSolutions  = lazy(() => import('../components/Industries/NonProfit/NPSolutions'));
const NPWhyChoose  = lazy(() => import('../components/Industries/NonProfit/NPWhyChoose'));
const NPAdvantages = lazy(() => import('../components/Industries/NonProfit/NPAdvantages'));
const NPChallenges = lazy(() => import('../components/Industries/NonProfit/NPChallenges'));
const NPFAQ        = lazy(() => import('../components/Industries/NonProfit/NPFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const NonProfit = () => {
  useFullSEO({
    title: 'Accounting for Nonprofit Organizations | Milta Financial Services',
    description:
      'Fund accounting, grant tracking and Form 990-ready reporting for nonprofits. Milta helps your organization stay transparent, compliant and mission-focused.',
    keywords:
      'nonprofit accounting, fund accounting, grant tracking, form 990, nonprofit bookkeeping, milta nonprofit organizations',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/non-profit-organizations/',
    ogTitle: 'Accounting for Nonprofit Organizations | Milta Financial Services',
    ogDescription:
      'Fund accounting, grant tracking and Form 990-ready reporting to keep your nonprofit transparent and compliant.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/non-profit-organizations/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <NPHero />
    <Suspense fallback={null}>
      <NPWhatIs />
      <NPSolutions />
      <ServicesSection />
      <NPWhyChoose />

      <NPFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default NonProfit;
