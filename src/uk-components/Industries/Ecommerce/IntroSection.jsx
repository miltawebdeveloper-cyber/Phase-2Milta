import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const EcommerceIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 6 }, // ✅ same padding style
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth={false}>
        {/* CONTENT WIDTH CONSTRAINED */}
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Section Label */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#97ba3a",
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Ecommerce Accounting Services
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 28, sm: 34, md: 48 },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
              fontFamily: "'Poppins', sans-serif",
              color: "#2b6d2a", // ✅ added theme heading color
            }}
          >
            Ecommerce Accounting Customized
            <br />
            for UK Online Sellers
          </Typography>

          {/* Description */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Running a successful ecommerce business requires more than just
              great products; it demands accurate financial control, efficient
              operations, and reliable support. At Milta, we provide end-to-end
              ecommerce accounting services and back-office services designed
              specifically for UK online sellers.
              <br />
              <br />
              With over 10 years of experience and a team of 100+ skilled
              professionals, we support ecommerce businesses with ecommerce
              bookkeeping services, payroll services, data entry, virtual
              assistance, digital marketing, and accounts management. From
              handling daily transactions to improving cash flow visibility, we
              ensure your financial and operational systems remain accurate,
              compliant, and ready to scale.
              <br />
              <br />
              As your trusted outsourced service partner, we handle the numbers
              and processes—so you can focus on growing your store and serving
              your customers.
            </Typography>
          </Box>

          {/* CTA Buttons ✅ Added Back */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              href="/uk/contact"
              variant="contained"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: "#2b6d2a",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#2b6d2a",
                  opacity: 0.9,
                },
              }}
            >
              Get Started
            </Button>

            <Button
              href="tel:+919600103723"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                borderColor: "#2b6d2a",
                color: "#2b6d2a",
                "&:hover": {
                  borderColor: "#2b6d2a",
                  backgroundColor: "rgba(0,0,0,0.03)",
                },
              }}
            >
              Book a Call
            </Button>
          </Box>
        </Box>
      </Container >
    </Box >
  );
};

export default EcommerceIntroSection;
