import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BKHero from '../components/Services/DigitalMarketingComp/DMHero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import DMFAQ, { FAQS } from '../components/Services/DigitalMarketingComp/DMFAQ';

const DMWhatIs        = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhatIs'));
const DMWhyChoose     = lazy(() => import('../components/Services/DigitalMarketingComp/DMWhyChoose'));
const DMSolutions     = lazy(() => import('../components/Services/DigitalMarketingComp/DMSolutions'));
const DMImportance    = lazy(() => import('../components/Services/DigitalMarketingComp/DMImportance'));
const DMAdvantages    = lazy(() => import('../components/Services/DigitalMarketingComp/DMAdvantages'));
const DMTrustedPartner = lazy(() => import('../components/Services/DigitalMarketingComp/DMTrustedPartner'));
const CTASection           = lazy(() => import('../components/homeComp/CTASection'));
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  useFullSEO({
    title: "Digital Marketing Agency in the USA | PPC, SEO, and More.",
    description:
      "Best digital marketing agency in the USA. Boost your online presence, drive traffic, and increase sales with our expert services.",
    keywords:
      "digital marketing agency, digital marketing services in the usa, digital marketing services usa, a digital marketing agency in the usa",
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/',
    ogTitle: "Digital Marketing Agency in the USA | PPC, SEO, and More.",
    ogDescription:
      "Best digital marketing agency in the USA. Boost your online presence, drive traffic, and increase sales with our expert services.",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/',
    ogType: 'website',
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <BKHero />
    
      <DMWhatIs />
       <DMSolutions />
      <DMImportance />
      <DMWhyChoose />    
      <DMFAQ />
      <CTASection />
      <Footer />
    <ScrollToTop />
  </Box>
  );
};

export default DigitalMarketing;
