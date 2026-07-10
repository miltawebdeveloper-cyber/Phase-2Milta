import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/DigitalMarketingComp/DMHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const DMWhatIs        = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhatIs'));
const DMWhyChoose     = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhyChoose'));
const DMSolutions     = lazy(() => import('../components/Services/DigitalMarketingComp/DMSolutions'));
const DMAdvantages    = lazy(() => import('../components/Services/DigitalMarketingComp/DMAdvantages'));
const DMTrustedPartner = lazy(() => import('../components/Services/DigitalMarketingComp/DMTrustedPartner'));
const DMFAQ           = lazy(() => import('../components/Services/DigitalMarketingComp/DMFAQ'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
const Footer          = lazy(() => import('../components/Footer'));

const DigitalMarketing = () => {
  useFullSEO({
    title: 'Digital Marketing Agency in the USA | Milta Financial Services',
    description:
      'Grow your brand with Milta’s digital marketing services — SEO, content, social and paid campaigns designed to bring US businesses more leads and revenue.',
    keywords:
      'digital marketing agency usa, seo services, social media marketing, ppc, content marketing, milta digital marketing',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/',
    ogTitle: 'Digital Marketing Agency in the USA | Milta Financial Services',
    ogDescription:
      'SEO, content, social and paid campaigns designed to bring US businesses more leads and revenue.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <DMWhatIs />
       <DMSolutions />
      <DMWhyChoose />
     
      <DMAdvantages />
      <DMTrustedPartner />
      <DMFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default DigitalMarketing;
