import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import useFullSEO from "../utils/useFullSEO";

const TermsOfService = () => {
  useFullSEO({
    title: "Know the Rules! milta's Terms of Service Explained",
    description:
      "Transparency is our promise. Milta’s terms are clear, fair, and designed with you in mind. Click to review and see why clients stick with us.",
    keywords:
      "Milta terms of services, terms of services, terms of business, terms of management.",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/terms-of-service",
    ogTitle: "Know the Rules! milta's Terms of Service Explained",
    ogDescription:
      "Transparency is our promise. Milta’s terms are clear, fair, and designed with you in mind. Click to review and see why clients stick with us.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/terms-of-service",
  });

  const sections = [
    {
      title: "1. Introduction",
      content: `Welcome to Miltafs! These Terms and Conditions ("Terms") govern your use of our accounting services and website. By engaging with Miltafs, you agree to be bound by these Terms. Milta Accounting Service can help your business grow — we are a top outsourcing solution for your accounting needs in Coimbatore. Our services include tax planning & preparation, CPA service, Virtual Assistance, data entry, and more. Let's look at an overview of our outsourced accounting services.`,
    },
    {
      title: "2. Services Provided",
      content:
        "Miltafs offers a range of accounting services to U.S.-based clients, including tax preparation, financial reporting, and bookkeeping. All services are provided remotely from our office in India.",
    },
    {
      title: "3. Client Responsibilities",
      content:
        "Clients agree to provide accurate and complete financial information in a timely manner. You are responsible for ensuring that all data you submit complies with U.S. tax laws and regulations.",
    },
    {
      title: "4. Payment Terms",
      content:
        "Our services are billed monthly unless otherwise agreed upon. Payments must be made in U.S. dollars through accepted payment methods. Late payments may incur additional fees.",
    },
    {
      title: "5. Disclaimer of Warranties",
      content:
        'Miltafs provides services on an "as-is" basis. We make no warranties, expressed or implied, regarding the accuracy, timeliness, or completeness of the services provided.',
    },
    {
      title: "6. Limitation of Liability",
      content:
        "Miltafs will not be liable for any direct, indirect, or consequential damages caused by errors, omissions, or delays in the services provided.",
    },
    {
      title: "7. Governing Law and Dispute Resolution",
      content:
        "These Terms will be governed and construed in conformity with United States laws. Any disagreements shall be addressed through arbitration or in a U.S. court with sufficient authority.",
    },
    {
      title: "8. Intellectual Property",
      content:
        "All content, trademarks, and other intellectual property on the Miltafs website are the sole property of Miltafs and cannot be used without written permission.",
    },
    {
      title: "9. Termination",
      content:
        "Either party may terminate the services with thirty days' notice. Any unpaid payments will become immediately due upon termination.",
    },
    {
      title: "10. Amendments",
      content:
        "Miltafs reserves the right to amend these Terms at any time. Updates will be communicated via email or posted as a notice on our website.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
            }}
          >
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.24em" }}>
              Legal Information
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "text.primary",
                mb: 3,
              }}
            >
              Terms of Service
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, textAlign: "justify", color: "text.secondary" }}>
              These Terms of Service outline the rules and guidelines for using Miltafs’ accounting and financial services. Please read them carefully before proceeding.
            </Typography>

            <Divider sx={{ my: 4, borderColor: "primary.main" }} />

            {sections.map((section, i) => (
              <Box key={i} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "text.primary", lineHeight: 1.5 }}>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: "justify", color: "text.secondary" }}>
                  {section.content}
                </Typography>
              </Box>
            ))}

            <Divider sx={{ my: 4, borderColor: "primary.main" }} />

            <Typography variant="body1" align="center" sx={{ fontWeight: 600, mt: 4, lineHeight: 1.8, color: "text.primary" }}>
              Let Miltafs be your reliable partner in attaining your financial objectives. Whether you’re searching for experienced bookkeeping, accounting, or financial counsel, we’re here to help. <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Contact us today
              </Box>{" "}
              for a free consultation and take the first step toward financial success!
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default TermsOfService;
