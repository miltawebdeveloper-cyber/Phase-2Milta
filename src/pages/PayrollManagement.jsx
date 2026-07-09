import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/PayrollManagementComp/PMHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const PMWhatIs        = lazy(() => import('../components/Services/PayrollManagementComp/PMWhatIs'));
const PMWhyChoose     = lazy(() => import('../components/Services/PayrollManagementComp/PMWhyChoose'));
const PMSolutions     = lazy(() => import('../components/Services/PayrollManagementComp/PMSolutions'));
const PMAdvantages    = lazy(() => import('../components/Services/PayrollManagementComp/PMAdvantages'));
const PMTrustedPartner = lazy(() => import('../components/Services/PayrollManagementComp/PMTrustedPartner'));
const PMFAQ           = lazy(() => import('../components/Services/PayrollManagementComp/PMFAQ'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const PayrollManagement = () => {
  useFullSEO({
    title: 'Payroll Management Services in the USA | Milta Financial Services',
    description:
      'Accurate, on-time payroll for US businesses. Milta handles payroll processing, tax filings and compliance so your employees are paid right, every time.',
    keywords:
      'payroll management services usa, outsourced payroll, payroll processing, payroll tax compliance, milta payroll',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/',
    ogTitle: 'Payroll Management Services in the USA | Milta Financial Services',
    ogDescription:
      'Accurate, on-time payroll processing, tax filings and compliance so employees are paid right, every time.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/',
    ogType: 'website',
  });

  return (
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
};

export default PayrollManagement;
