import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import RIHero from '../components/Industries/Restaurant/RIHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';

const RIWhatIs     = lazy(() => import('../components/Industries/Restaurant/RIWhatIs'));
const RISolutions  = lazy(() => import('../components/Industries/Restaurant/RISolutions'));
const RIWhyChoose  = lazy(() => import('../components/Industries/Restaurant/RIWhyChoose'));
const RIAdvantages = lazy(() => import('../components/Industries/Restaurant/RIAdvantages'));
const RIChallenges = lazy(() => import('../components/Industries/Restaurant/RIChallenges'));
import RIFAQ, { FAQS } from '../components/Industries/Restaurant/RIFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const Restaurant = () => {
  useFullSEO({
    title: "Accounting and Bookkeeping for Small Restaurant Business - Milta",
    description:
      "We provide expert accounting and bookkeeping for small restaurant businesses to help you stay organized, compliant, and profitable.",
    keywords:
      "bookkeeping for small restaurant, accounting for small restaurant business, bookkeeping for restaurant business, bookkeeping for restaurant, restaurant bookkeeping service, tax returns for restaurant",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-restaurant-businesses/',
    ogTitle: "Accounting and Bookkeeping for Small Restaurant Business - Milta",
    ogDescription:
      "We provide expert accounting and bookkeeping for small restaurant businesses to help you stay organized, compliant, and profitable.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-restaurant-businesses/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
