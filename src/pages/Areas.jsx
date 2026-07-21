import React, { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSec from "../components/Location/HeroSec";
import ScrollToTop from "../components/ScrollToTop";
import useFullSEO from "../utils/useFullSEO";

const MiltaAccountingOverview = lazy(() => import("../components/Location/MiltaAccountingOverview"));
const StatesServicesSection   = lazy(() => import("../components/Location/StatesServicesSection"));
const USAChooseMilta          = lazy(() => import("../components/Location/USAChooseMilta"));
const Faq                     = lazy(() => import("../components/Location/Faq"));
const CTASection              = lazy(() => import("../components/homeComp/CTASection"));
import Footer from "../components/Footer";

function Areas() {
  useFullSEO({
    // MAIN SEO
    title: "Areas We Serve in the USA | Milta",
    description:
      "We offer small and medium-sized businesses in the US expert bookkeeping, accounting, tax planning and preparation, CPA, virtual assistant, and digital marketing services.",
    keywords:
      "bookkeeping services for small businesses, tax planning and preparation, cpa services for florida small businesses, virtual assistant services, data  entry & management services, financial controller services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/areas/usa-accounrting-services/",
    ogTitle: "Areas We Serve in the USA | Milta",
    ogDescription:
      "We offer small and medium-sized businesses in the US expert bookkeeping, accounting, tax planning and preparation, CPA, virtual assistant, and digital marketing services.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/areas/usa-accounrting-services/",
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <HeroSec />
      <Suspense fallback={null}>
        <MiltaAccountingOverview />
        <StatesServicesSection />
        <USAChooseMilta />
        <Faq />
        <CTASection />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </Box>
  );
}

export default Areas;
