import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/contactComp/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';
import { faqSchema } from '../utils/faqSchema';
import ContactFAQ, { FAQS } from '../components/contactComp/ContactFAQ';

const GetInTouch = lazy(() => import('../components/contactComp/GetInTouch'));
const Location   = lazy(() => import('../components/contactComp/Location'));
import Footer from '../components/Footer';

const Contact = () => {
  useFullSEO({
    title: "Connect with Experts Ready to Support Your Needs | Milta",
    description:
      "Your success matters to us. Need advice or a solution? Click to connect with Milta’s friendly team today — let’s make things happen together!",
    keywords:
      'contact milta, accounting support, bookkeeping enquiry, milta financial services contact, hire accountant usa',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/contact',
    ogTitle: "Connect with Experts Ready to Support Your Needs | Milta",
    ogDescription:
      "Your success matters to us. Need advice or a solution? Click to connect with Milta’s friendly team today — let’s make things happen together!",
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/contact',
    ogType: 'website',
    schema: faqSchema(FAQS),
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <Hero title="Contact Us" />
    <Suspense fallback={null}>
      <GetInTouch />
      <Location />
      <ContactFAQ />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default Contact;
