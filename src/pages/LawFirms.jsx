import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import LFHero from '../components/Industries/LawFirmsComp/LFHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';


const LFWhatIs     = lazy(() => import('../components/Industries/LawFirmsComp/LFWhatIs'));
const LFSolutions  = lazy(() => import('../components/Industries/LawFirmsComp/LFSolutions'));
const LFWhyChoose  = lazy(() => import('../components/Industries/LawFirmsComp/LFWhyChoose'));
const LFAdvantages = lazy(() => import('../components/Industries/LawFirmsComp/LFAdvantages'));
const LFChallenges = lazy(() => import('../components/Industries/LawFirmsComp/LFChallenges'));
import LFFAQ, { FAQS } from '../components/Industries/LawFirmsComp/LFFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const LawFirms = () => {
  useFullSEO({
    title: "Bookkeeping And Accounting Services For Law Firms And Lawyers",
    description:
      "Outsourced bookkeeping and accounting for lawyers and law firms. We offer financial management, billing, and compliance support.",
    keywords:
      "law firm bookkeeping, bookkeeping for lawyers, law firm accounting services, law firm bookkeeping services, bookkeeping services for lawyers, tax planning lawyer, tax planning law firm",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-lawfirms/',
    ogTitle: "Bookkeeping And Accounting Services For Law Firms And Lawyers",
    ogDescription:
      "Outsourced bookkeeping and accounting for lawyers and law firms. We offer financial management, billing, and compliance support.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-lawfirms/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
