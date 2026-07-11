import React, { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import AccountingSoftwareSection from "../components/SoftwareTools/AccountingSoftwareSection";
import useFullSEO from "../utils/useFullSEO";

const CTASection = lazy(() => import("../components/homeComp/CTASection"));
const Footer = lazy(() => import("../components/Footer"));

function AccountingSoftware() {
  useFullSEO({
    // MAIN SEO
    title: "We Specialize in Software for Accounting Services",
    description:
      "We work with proven, industry-recognized accounting software to deliver accurate, timely, and audit-ready financial data for our USA clients.",
    keywords:
      "accounting software, right accounting software, accounting software important",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/software/tools-we-use/",
    ogTitle: "We Specialize in Software for Accounting Services",
    ogDescription: "We work with proven, industry-recognized accounting software to deliver accurate, timely, and audit-ready financial data for our USA clients.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/software/tools-we-use/",
  });


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <main>
        <AccountingSoftwareSection />
      </main>
      <Suspense fallback={null}>
        <CTASection />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </Box>
  );
}

export default AccountingSoftware;
