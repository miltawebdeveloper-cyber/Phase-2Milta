import React, { lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import useFullSEO from "../utils/useFullSEO";

const SubscriptionBanner = lazy(() => import("../components/Blog/SubscriptionBanner"));
const EditorsPickCarousel = lazy(() => import("../components/Blog/EditorsPickCarousel"));
const BlogGridSection = lazy(() => import("../components/Blog/BlogGridSection"));
const CTASection = lazy(() => import("../components/homeComp/CTASection"));
const Footer = lazy(() => import("../components/Footer"));

const Blog = () => {
  useFullSEO({
    title: 'Accounting & Finance Insights | Milta Financial Services Blog',
    description:
      'Explore expert articles, tips and insights on bookkeeping, tax, payroll and business finance from the Milta Financial Services team.',
    keywords:
      'accounting blog, bookkeeping tips, tax insights, finance articles, small business finance, milta financial services blog',
    author: 'Milta Accounting',
    canonical: 'https://www.miltafs.com/blogs',
    ogTitle: 'Accounting & Finance Insights | Milta Financial Services Blog',
    ogDescription:
      'Expert articles, tips and insights on bookkeeping, tax, payroll and business finance.',
    ogImage: 'https://www.miltafs.com/images/miltafs-og.jpg',
    ogUrl: 'https://www.miltafs.com/blogs',
    ogType: 'website',
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <Suspense fallback={null}>
        <Box sx={{ pt: { xs: 12, md: 16 } }}>
          <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto" }}>
            <SubscriptionBanner />
          </Container>
          <EditorsPickCarousel />
          <BlogGridSection />
          <CTASection />
          <Footer />
        </Box>
      </Suspense>
      <ScrollToTop />
    </Box>
  );
};

export default Blog;
