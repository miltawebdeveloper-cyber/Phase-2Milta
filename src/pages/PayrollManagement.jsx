import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/PayrollManagementComp/PMHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const PMWhatIs        = lazy(() => import('../components/Services/PayrollManagementComp/PMWhatIs'));
const PMWhyChoose     = lazy(() => import('../components/Services/PayrollManagementComp/PMWhyChoose'));
const PMSolutions     = lazy(() => import('../components/Services/PayrollManagementComp/PMSolutions'));
const PMHowItWorks    = lazy(() => import('../components/Services/PayrollManagementComp/PMHowItWorks'));
const PMBestPractices = lazy(() => import('../components/Services/PayrollManagementComp/PMBestPractices'));
const PMEssential     = lazy(() => import('../components/Services/PayrollManagementComp/PMEssential'));
const PMAdvantages    = lazy(() => import('../components/Services/PayrollManagementComp/PMAdvantages'));
const PMTrustedPartner = lazy(() => import('../components/Services/PayrollManagementComp/PMTrustedPartner'));
const PMFAQ           = lazy(() => import('../components/Services/PayrollManagementComp/PMFAQ'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const PayrollManagement = () => {
  useFullSEO({
    title: "Payroll Management Services in the USA",
    description:
      "Save time and reduce costs with our expert Payroll Management Services in the USA! Contact us today for affordable payroll management solutions by professionals.",
    keywords:
      "payroll management services in the usa, payroll management system, payroll management company, payroll management services, payroll management",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/',
    ogTitle: "Payroll Management Services in the USA",
    ogDescription:
      "Save time and reduce costs with our expert Payroll Management Services in the USA! Contact us today for affordable payroll management solutions by professionals.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/payroll-management-services-in-the-usa/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <PMWhatIs />
      <PMHowItWorks />
      <PMSolutions />
      <PMWhyChoose />
       <PMEssential />
      <PMBestPractices />
   
     
      <PMFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default PayrollManagement;
