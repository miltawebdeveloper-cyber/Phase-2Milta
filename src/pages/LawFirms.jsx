import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import LFHero from '../components/Industries/LawFirmsComp/LFHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import ServicesSection from '../components/homeComp/ServicesSection';


const LFWhatIs     = lazy(() => import('../components/Industries/LawFirmsComp/LFWhatIs'));
const LFSolutions  = lazy(() => import('../components/Industries/LawFirmsComp/LFSolutions'));
const LFWhyChoose  = lazy(() => import('../components/Industries/LawFirmsComp/LFWhyChoose'));
const LFAdvantages = lazy(() => import('../components/Industries/LawFirmsComp/LFAdvantages'));
const LFChallenges = lazy(() => import('../components/Industries/LawFirmsComp/LFChallenges'));
const LFFAQ        = lazy(() => import('../components/Industries/LawFirmsComp/LFFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const LawFirms = () => {
  useFullSEO({
    title: 'Accounting & Bookkeeping for Law Firms | Milta Financial Services',
    description:
      'Trust accounting, IOLTA compliance and accurate bookkeeping for law firms. Milta helps attorneys stay compliant and focused on clients, not paperwork.',
    keywords:
      'accounting for law firms, legal bookkeeping, iolta trust accounting, attorney accounting services, milta law firms',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industries/law-firms/',
    ogTitle: 'Accounting & Bookkeeping for Law Firms | Milta Financial Services',
    ogDescription:
      'Trust accounting, IOLTA compliance and accurate bookkeeping so attorneys stay compliant and focused on clients.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industries/law-firms/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <LFHero />
    <Suspense fallback={null}>
      <LFWhatIs />
      <LFSolutions />
      <ServicesSection />
      <LFWhyChoose />
      <LFAdvantages />
     
      <LFFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default LawFirms;
