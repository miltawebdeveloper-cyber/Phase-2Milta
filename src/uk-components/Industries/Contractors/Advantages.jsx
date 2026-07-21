import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const ContractorsAdvantages = ({
  title = "Advantages of choosing Milta for Accounting and Bookkeeping for Contractors",
  description = `When it comes to reliable and accurate bookkeeping for contractors, Milta
  stands out as a trusted partner for businesses across various industries,
  especially small construction companies. Our expert team understands the
  complexities of accounting for construction companies, including
  project-based accounting, job costing, subcontractor management, and
  labor-intensive payroll systems.

  We streamline your financial operations using cloud-based tools like
  QuickBooks, enabling real-time tracking of expenses, invoices, and bank
  reconciliations. Our proactive tax planning ensures compliance, maximizes
  deductions, and removes the stress of deadlines.

  Whether you manage a large workforce or operate a small contracting
  business, Milta delivers tailored bookkeeping and tax solutions that
  improve profitability and support long-term growth.`,
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 4, sm: 6, md: 0 },
        fontFamily: "var(--uk-font-secondary)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: "var(--uk-max-width)",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* ================= TAGLINE ================= */}
        <Typography
          variant={isSm ? "subtitle2" : "body1"}
          sx={{
            color: "#2b6d2a",
            mb: 1.5,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            fontFamily: "var(--uk-font-secondary)",
          }}
        >
          <Box
            component="span"
            sx={{
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#97ba3a",
              color: "#ffffff",
              borderRadius: "50%",
              width: { xs: 20, sm: 24 },
              height: { xs: 20, sm: 24 },
              fontSize: { xs: 12, sm: 14 },
              fontWeight: "bold",
            }}
          >
            →
          </Box>
          Why Choose Milta
        </Typography>

        {/* ================= TITLE ================= */}
        <Typography
          variant={isSm ? "h5" : "h3"}
          sx={{
            fontFamily: "var(--uk-font-primary)",
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.3,
            fontSize: { xs: "22px", sm: "26px", md: "36px" },
            color: "#1a1a1a",
          }}
        >
          {title}
        </Typography>

        {/* ================= DESCRIPTION ================= */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.9,
            fontSize: { xs: "15px", md: "16px" },
            whiteSpace: "pre-line",
            maxWidth: 900,
            mx: { xs: "auto", md: 0 },
          }}
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
};

export default ContractorsAdvantages;
