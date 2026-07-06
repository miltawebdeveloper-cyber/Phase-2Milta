import React, { lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const SubscriptionBanner = lazy(() => import("../components/Blog/SubscriptionBanner"));
const EditorsPickCarousel = lazy(() => import("../components/Blog/EditorsPickCarousel"));
const BlogGridSection = lazy(() => import("../components/Blog/BlogGridSection"));
const CTASection = lazy(() => import("../components/homeComp/CTASection"));
const Footer = lazy(() => import("../components/Footer"));

const Blog = () => {
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
