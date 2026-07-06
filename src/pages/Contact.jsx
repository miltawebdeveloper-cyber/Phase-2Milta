import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/contactComp/Hero';
import ScrollToTop from '../components/ScrollToTop';

const GetInTouch = lazy(() => import('../components/contactComp/GetInTouch'));
const Location   = lazy(() => import('../components/contactComp/Location'));
const Footer     = lazy(() => import('../components/Footer'));

const Contact = () => (
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

export default Contact;
