import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import REHero from '../components/Industries/RealEstateComp/REHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';
const REWhatIs     = lazy(() => import('../components/Industries/RealEstateComp/REWhatIs'));
const RESolutions  = lazy(() => import('../components/Industries/RealEstateComp/RESolutions'));
const REWhyChoose  = lazy(() => import('../components/Industries/RealEstateComp/REWhyChoose'));
const REAdvantages = lazy(() => import('../components/Industries/RealEstateComp/REAdvantages'));
const REChallenges = lazy(() => import('../components/Industries/RealEstateComp/REChallenges'));
import REFAQ, { FAQS } from '../components/Industries/RealEstateComp/REFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const RealEstateCompanies = () => {
  useFullSEO({
    title: "Reliable Bookkeeping For Real Estate Companies | Milta",
    description:
      "Milta offers bookkeeping services for real estate. Book your free consultation today and simplify your property financial management.",
    keywords:
      "bookkeeping for real estate, property management bookkeeping, bookkeeping for real estate agents, bookkeeping for real estate investors, property management bookkeeping services, real estate accounting services",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/bookkeeping-for-real-estate-companies/',
    ogTitle: "Reliable Bookkeeping For Real Estate Companies | Milta",
    ogDescription:
      "Milta offers bookkeeping services for real estate. Book your free consultation today and simplify your property financial management.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/bookkeeping-for-real-estate-companies/',
    ogType: 'website',
    schema: faqSchema(FAQS),
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
