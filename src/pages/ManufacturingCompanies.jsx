import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import MCHero from '../components/Industries/ManufacturingCompaniesComp/MCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';
const MCWhatIs     = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhatIs'));
const MCSolutions  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCSolutions'));
const MCWhyChoose  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhyChoose'));
const MCAdvantages = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCAdvantages'));
const MCChallenges = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCChallenges'));
import MCFAQ, { FAQS } from '../components/Industries/ManufacturingCompaniesComp/MCFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const ManufacturingCompanies = () => {
  useFullSEO({
    title: "Bookkeeping For Manufacturing Companies | Milta",
    description:
      "We provide accounting and bookkeeping services for manufacturing companies, handling the tracking of financial operations and ensuring compliance with tax laws and regulations.",
    keywords:
      "accounting services for manufacturing, accounting for manufacturing, manufacturing accounting, tax returns for manufacturing, manufacturing tax planning, tax planning for manufacturing.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-manufacturing/',
    ogTitle: "Bookkeeping For Manufacturing Companies | Milta",
    ogDescription:
      "We provide accounting and bookkeeping services for manufacturing companies, handling the tracking of financial operations and ensuring compliance with tax laws and regulations.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-manufacturing/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
