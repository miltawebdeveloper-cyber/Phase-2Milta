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
import useFullSEO from "../utils/useFullSEO";

const TermsOfService = () => {
  useFullSEO({
    title: "Terms of Service | Milta Accounting",
    description:
      "Review the terms and conditions for using Miltafs accounting services and website. Learn about client responsibilities, payment terms, and more.",
    keywords:
      "terms of service, terms and conditions, accounting terms, Miltafs terms",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/terms-of-service",
    ogTitle: "Terms of Service | Milta Accounting",
    ogDescription: "Review the terms and conditions for using Miltafs accounting services and website. Learn about client responsibilities, payment terms, and more.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/terms-of-service",
  });

  return (
    <Box
      sx={{
        py: { xs: 7, md: 8 },
        px: 2,
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md" sx={{ maxWidth: "1100px" }}>
        {/* Page Title */}
        <Typography
          variant="h4"
          component="h1"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 0.5,
            lineHeight: 1.3,
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
          }}
        >
          Terms of Service
        </Typography>

        {/* Last Modified Date */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            color: "#555",
            fontStyle: "italic",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Last Modified: 24 February 2025
        </Typography>

        {/* 1. Introduction */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 0,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          1. Introduction
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Welcome to Miltafs! These Terms and Conditions ("Terms") govern your use of our accounting services and website. By engaging with Miltafs, you agree to be bound by these Terms.
        </Typography>

        {/* 2. Services Provided */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          2. Services Provided
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Miltafs offers a range of accounting services to UK-based clients, including tax preparation, financial reporting, and bookkeeping. All services are provided remotely from our office in India.
        </Typography>

        {/* 3. Client Responsibilities */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          3. Client Responsibilities
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Clients agree to provide accurate and complete financial information promptly. You are responsible for ensuring that all data you submit complies with UK tax laws and regulations.
        </Typography>

        {/* 4. Payment Terms */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          4. Payment Terms
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our services are billed monthly unless otherwise agreed upon. Payments must be made in the UK pounds through accepted payment methods. Late payments may incur additional fees.
        </Typography>

        {/* 5. Disclaimer of Warranties */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          5. Disclaimer of Warranties
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Miltafs provides services on an "as-is" basis. We make no warranties, expressed or implied, regarding the accuracy, timeliness, or completeness of the services provided.
        </Typography>

        {/* 6. Limitation of Liability */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          6. Limitation of Liability
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Miltafs will not be liable for any direct, indirect, or consequential damages caused by errors, omissions, or delays in the services provided.
        </Typography>

        {/* 7. Governing Law and Dispute Resolution */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          7. Governing Law and Dispute Resolution
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          These Terms will be governed and construed in conformity with United Kingdom laws. Any disagreements shall be addressed through arbitration or in a UK court with sufficient authority.
        </Typography>

        {/* 8. Intellectual Property */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          8. Intellectual Property
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          On the Miltafs website, all content, trademarks, and other intellectual property are the sole property of Miltafs and cannot be used without permission in writing.
        </Typography>

        {/* 9. Termination */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          9. Termination
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          The services may be terminated by either party with thirty days' notice. Any unpaid payments will become immediately due in the case of termination.
        </Typography>

        {/* 10. Amendments */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 3,
            mb: 1,
            color: "#97ba3a",
            lineHeight: 1.5,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 16, sm: 17, md: 18 },
          }}
        >
          10. Amendments
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          These Terms are subject to change at any moment by Miltafs. Any updates will be sent to clients via email or posted as a notice on our website.
        </Typography>

        <Divider sx={{ my: 4, borderColor: "#97ba3a" }} />

        {/* Closing */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mt: 2,
            lineHeight: 1.9,
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 15, sm: 16, md: 17 },
          }}
        >
          Let Miltafs be your reliable partner in attaining your financial objectives. Whether you're searching for experienced bookkeeping, accounting, or financial counsel, we're here to help.{" "}
          <Box component="span" sx={{ color: "#97ba3a" }}>
            Contact us today for a free consultation and take the first step towards financial success!
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsOfService;