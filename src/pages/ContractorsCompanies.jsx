import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CCHero from '../components/Industries/ContractorsComp/CCHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ServicesSection from '../components/homeComp/ServicesSection';
const CCWhatIs     = lazy(() => import('../components/Industries/ContractorsComp/CCWhatIs'));
const CCSolutions  = lazy(() => import('../components/Industries/ContractorsComp/CCSolutions'));
const CCWhyChoose  = lazy(() => import('../components/Industries/ContractorsComp/CCWhyChoose'));
const CCAdvantages = lazy(() => import('../components/Industries/ContractorsComp/CCAdvantages'));
const CCTrustedPartner = lazy(() => import('../components/Industries/ContractorsComp/CCTrustedPartner'));
import CCFAQ, { FAQS } from '../components/Industries/ContractorsComp/CCFAQ';
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const ContractorsCompanies = () => {
  useFullSEO({
    title: "Accounting and Bookkeeping Services for Contractor Businesses",
    description:
      "Expert bookkeeping for services contractors, track income, expenses, payroll, and taxes to keep your construction finances on point.",
    keywords:
      "bookkeeping for contractors, bookkeeping for construction companies, bookkeeping for small construction business, accounting for construction companies, accounting for construction, construction tax planning, tax planning for contractors",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/industry/bookkeeping-for-contractors-companies/',
    ogTitle: "Accounting and Bookkeeping Services for Contractor Businesses",
    ogDescription:
      "Expert bookkeeping for services contractors, track income, expenses, payroll, and taxes to keep your construction finances on point.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/industry/bookkeeping-for-contractors-companies/',
    ogType: 'website',
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <CCHero />
    <Suspense fallback={null}>
      <CCWhatIs />
      <CCSolutions />
      <ServicesSection />
      
      <CCAdvantages />
      <CCTrustedPartner />

      <CCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default ContractorsCompanies;
