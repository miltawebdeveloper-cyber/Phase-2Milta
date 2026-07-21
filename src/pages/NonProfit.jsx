import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import NPHero from '../components/Industries/NonProfit/NPHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';


const NPWhatIs     = lazy(() => import('../components/Industries/NonProfit/NPWhatIs'));
const NPSolutions  = lazy(() => import('../components/Industries/NonProfit/NPSolutions'));
const NPWhyChoose  = lazy(() => import('../components/Industries/NonProfit/NPWhyChoose'));
const NPAdvantages = lazy(() => import('../components/Industries/NonProfit/NPAdvantages'));
const NPChallenges = lazy(() => import('../components/Industries/NonProfit/NPChallenges'));
import NPFAQ, { FAQS } from '../components/Industries/NonProfit/NPFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const NonProfit = () => {
  useFullSEO({
    title: "Best Bookkeeping for Nonprofits in the US",
    description:
      "Milta is your reliable partner for bookkeeping for nonprofits in the US. Whether you are launching a new nonprofit or managing a growing foundation, we can help.",
    keywords:
      "bookkeeping for nonprofits in the us, nonprofit accountants near me, bookkeeping for nonprofit, bookkeeping for nonprofit organizations in the us, non profit accountant near me, accounting for small nonprofits, tax returns for nonprofit, nonprofit tax preparation, nonprofit tax preparers near me, tax filing for nonprofit corporation, nonprofit corporation tax filing",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/accounting-services-for-nonprofit-organizations/',
    ogTitle: "Best Bookkeeping for Nonprofits in the US",
    ogDescription:
      "Milta is your reliable partner for bookkeeping for nonprofits in the US. Whether you are launching a new nonprofit or managing a growing foundation, we can help.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/accounting-services-for-nonprofit-organizations/',
    ogType: 'website',
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <NPHero />
    <Suspense fallback={null}>
      <NPWhatIs />
      
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
