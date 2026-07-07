import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/contactComp/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useFullSEO from '../utils/useFullSEO';

const GetInTouch = lazy(() => import('../components/contactComp/GetInTouch'));
const Location   = lazy(() => import('../components/contactComp/Location'));
const Footer     = lazy(() => import('../components/Footer'));

const Contact = () => {
  useFullSEO({
    title: 'Contact Milta Financial Services | Talk to Our Accounting Team',
    description:
      'Get in touch with Milta Financial Services. Share your goals and challenges — we respond within one business day with a bespoke accounting approach.',
    keywords:
      'contact milta, accounting support, bookkeeping enquiry, milta financial services contact, hire accountant usa',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/contact',
    ogTitle: 'Contact Milta Financial Services | Talk to Our Accounting Team',
    ogDescription:
      'Share your goals and challenges — we respond within one business day with a bespoke accounting approach.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/contact',
    ogType: 'website',
  });

  return (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <Hero title="Contact Us" />
    <Suspense fallback={null}>
      <GetInTouch />
      <Location />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
  );
};

export default Contact;
