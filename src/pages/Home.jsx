import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/homeComp/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const TrustSection        = lazy(() => import('../components/homeComp/TrustSection'));
const FeaturesSection     = lazy(() => import('../components/homeComp/FeaturesSection'));
const AboutPreview        = lazy(() => import('../components/homeComp/AboutPreview'));
const ServicesSection     = lazy(() => import('../components/homeComp/ServicesSection'));
const IndustriesSection   = lazy(() => import('../components/homeComp/IndustriesSection'));
const Testimonials        = lazy(() => import('../components/homeComp/Testimonials'));
const CertificationsSection = lazy(() => import('../components/homeComp/CertificationsSection'));
const CTASection          = lazy(() => import('../components/homeComp/CTASection'));
const Footer              = lazy(() => import('../components/Footer'));

const Home = () => {
  useFullSEO({
    title: 'Outsourced Accounting & Bookkeeping Services in the USA | Milta',
    description:
      'Milta Financial Services delivers expert bookkeeping, tax, payroll, CPA and virtual assistant support for US businesses — accurate, affordable and scalable.',
    keywords:
      'outsourced accounting usa, bookkeeping services, tax planning, payroll management, cpa services, virtual assistant, milta financial services',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/',
    ogTitle: 'Outsourced Accounting & Bookkeeping Services in the USA | Milta',
    ogDescription:
      'Expert bookkeeping, tax, payroll, CPA and virtual assistant support for US businesses — accurate, affordable and scalable.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/',
    ogType: 'website',
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
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default Home;
