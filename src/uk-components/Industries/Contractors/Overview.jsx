import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// optional image (use if you want right-side visual like Hero)

const ContractorsAccountingLayout = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 5, sm: 6, md: 7 },
        fontFamily: "var(--uk-font-secondary)",
      }}
    >
      <Container
        sx={{
          maxWidth: "var(--uk-max-width)",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* ================= LEFT CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            px: { xs: 1.5, sm: 0 },
          }}
        >
          {/* Tagline */}
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
            Contractor Accounting
          </Typography>

          {/* Main Heading */}
          <Typography
            variant={isSm ? "h5" : "h2"}
            sx={{
              fontFamily: "var(--uk-font-primary)",
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.3,
              fontSize: { xs: "24px", sm: "30px", md: "48px" },
              color: "#1a1a1a",
            }}
          >
            Accounting & Bookkeeping for Contractors
          </Typography>

          {/* Description */}
          <Stack spacing={2.5}>
            <Typography
              sx={{
                color: "var(--uk-text-muted)",
                lineHeight: 1.9,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Contractors are self-employed professionals or businesses hired to
              deliver specific projects across industries such as IT,
              consulting, and construction.
            </Typography>

            <Typography
              sx={{
                color: "var(--uk-text-muted)",
                lineHeight: 1.9,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Bookkeeping for contractors involves managing income, expenses,
              payroll, invoicing, and taxes. Accurate records help control costs,
              improve cash flow, and ensure legal compliance.
            </Typography>

            <Typography
              sx={{
                color: "var(--uk-text-muted)",
                lineHeight: 1.9,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Cloud-based tools like QuickBooks automate reporting and give
              real-time financial insights, helping contractors focus on growing
              their business.
            </Typography>
          </Stack>

          {/* Key Points */}
          <Stack spacing={2} sx={{ mt: 4 }}>
            {[
              "Project-based accounting",
              "Expense & payroll management",
              "Tax compliance & reporting",
              "Subcontractor payment tracking",
              "Real-time cloud bookkeeping",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "0.95rem",
                  color: "#1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: "#2b6d2a",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

      </Container>
    </Box>
  );
};

export default ContractorsAccountingLayout;
