import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";

const Footer = lazy(() => import("../Footer"));

const MainLayout = ({ children }) => (
  <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
    <Navbar />
    <Box component="main">{children}</Box>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

export default MainLayout;
