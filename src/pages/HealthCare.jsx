import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HCHero from '../components/Industries/HealthCare/HCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';


const HCWhatIs     = lazy(() => import('../components/Industries/HealthCare/HCWhatIs'));
const HCSolutions  = lazy(() => import('../components/Industries/HealthCare/HCSolutions'));
const HCWhyChoose  = lazy(() => import('../components/Industries/HealthCare/HCWhyChoose'));
const HCAdvantages = lazy(() => import('../components/Industries/HealthCare/HCAdvantages'));
const HCChallenges = lazy(() => import('../components/Industries/HealthCare/HCChallenges'));
import HCFAQ, { FAQS } from '../components/Industries/HealthCare/HCFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const HealthCare = () => {
  useFullSEO({
    title: "We Provide Accounting Services For Healthcare.",
    description:
      "Our specialized Accounting Services for Healthcare ensure accurate services for doctors, medical practices, and the healthcare industry.",
    keywords:
      "accounting services for healthcare, healthcare accounting firms, accounting for healthcare professionals, accounting in the healthcare industry, accountants for medical professionals, tax returns for healthcare",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-healthcare/',
    ogTitle: "We Provide Accounting Services For Healthcare.",
    ogDescription:
      "Our specialized Accounting Services for Healthcare ensure accurate services for doctors, medical practices, and the healthcare industry.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-healthcare/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
