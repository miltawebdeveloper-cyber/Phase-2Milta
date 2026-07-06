import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/homeComp/Hero';
import ScrollToTop from '../components/ScrollToTop';

const TrustSection        = lazy(() => import('../components/homeComp/TrustSection'));
const FeaturesSection     = lazy(() => import('../components/homeComp/FeaturesSection'));
const AboutPreview        = lazy(() => import('../components/homeComp/AboutPreview'));
const ServicesSection     = lazy(() => import('../components/homeComp/ServicesSection'));
const IndustriesSection   = lazy(() => import('../components/homeComp/IndustriesSection'));
const Testimonials        = lazy(() => import('../components/homeComp/Testimonials'));
const CertificationsSection = lazy(() => import('../components/homeComp/CertificationsSection'));
const CTASection          = lazy(() => import('../components/homeComp/CTASection'));
const Footer              = lazy(() => import('../components/Footer'));

const Home = () => (
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

export default Home;
