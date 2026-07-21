import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/homeComp/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import HomeFAQ, { FAQS } from '../components/homeComp/HomeFAQ';

const TrustSection        = lazy(() => import('../components/homeComp/TrustSection'));
const FeaturesSection     = lazy(() => import('../components/homeComp/FeaturesSection'));
const AboutPreview        = lazy(() => import('../components/homeComp/AboutPreview'));
const ServicesSection     = lazy(() => import('../components/homeComp/ServicesSection'));
const HireProfessionals   = lazy(() => import('../components/homeComp/HireProfessionals'));
const IndustriesSection   = lazy(() => import('../components/homeComp/IndustriesSection'));
const Testimonials        = lazy(() => import('../components/homeComp/Testimonials'));
const CertificationsSection = lazy(() => import('../components/homeComp/CertificationsSection'));
const ToolsSection        = lazy(() => import('../components/homeComp/ToolsSection'));
const CTASection          = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const Home = () => {
  useFullSEO({
    title: "Exceptional Accounting Outsourcing Services for Small Businesses USA.",
    description:
      "We provide outsourced accounting services for Small Businesses that will help you keep a complete record of all the expenses and the cash flow",
    keywords:
      "business outsourcing services, accounting services for small business, finance and accounting outsourcing, outsource accounting services.",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/',
    ogTitle: "Exceptional Accounting Outsourcing Services for Small Businesses USA.",
    ogDescription:
      "We provide outsourced accounting services for Small Businesses that will help you keep a complete record of all the expenses and the cash flow",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/',
    ogType: 'website',
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <TrustSection />
      <FeaturesSection />
      <AboutPreview />
      <ServicesSection />
      
      <IndustriesSection />
      <Testimonials />
      <CertificationsSection />
      
      <ToolsSection />
      <HireProfessionals />
      <HomeFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default Home;
