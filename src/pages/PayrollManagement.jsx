import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/PayrollManagementComp/PMHero';
import ScrollToTop from '../components/ScrollToTop';

const PMWhatIs        = lazy(() => import('../components/Services/PayrollManagementComp/PMWhatIs'));
const PMWhyChoose     = lazy(() => import('../components/Services/PayrollManagementComp/PMWhyChoose'));
const PMSolutions     = lazy(() => import('../components/Services/PayrollManagementComp/PMSolutions'));
const PMAdvantages    = lazy(() => import('../components/Services/PayrollManagementComp/PMAdvantages'));
const PMTrustedPartner = lazy(() => import('../components/Services/PayrollManagementComp/PMTrustedPartner'));
const PMFAQ           = lazy(() => import('../components/Services/PayrollManagementComp/PMFAQ'));
const CTASection           = lazy(() => import('../components/HomeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const PayrollManagement = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <PMWhatIs />
      <PMWhyChoose />
      <PMSolutions />
      <PMAdvantages />
      <PMTrustedPartner />
      <PMFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
);

export default PayrollManagement;
