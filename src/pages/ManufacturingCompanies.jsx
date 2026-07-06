import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import MCHero from '../components/Industries/ManufacturingCompaniesComp/MCHero';
import ScrollToTop from '../components/ScrollToTop';

const MCWhatIs     = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhatIs'));
const MCSolutions  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCSolutions'));
const MCWhyChoose  = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCWhyChoose'));
const MCAdvantages = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCAdvantages'));
const MCChallenges = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCChallenges'));
const MCFAQ        = lazy(() => import('../components/Industries/ManufacturingCompaniesComp/MCFAQ'));
const CTASection   = lazy(() => import('../components/homeComp/CTASection'));
const Footer       = lazy(() => import('../components/Footer'));

const ManufacturingCompanies = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <MCHero />
    <Suspense fallback={null}>
      <MCWhatIs />
      <MCSolutions />
      <MCWhyChoose />
      <MCAdvantages />
      <MCChallenges />
      <MCFAQ />
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default ManufacturingCompanies;
