// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Reduce costs by eliminating in-house staffing, training, and infrastructure expenses",
  "Gain access to experienced professionals specialising in accounting data entry services",
  "Scale support easily to handle seasonal workloads or business expansion",
  "Free up time to focus on strategic and revenue-generating business activities",
  "Ensure accuracy and compliance through strict quality checks and validation processes",
  "Protect sensitive financial data with secure transfers, encryption, and confidentiality protocols",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 6 },
        backgroundColor: "#2b6d2a",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 34, md: 46 },
              fontWeight: 700,
              lineHeight: 1.18,
              mb: 3,
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Advantages of Outsourcing
            <br />
            Accounting Data Entry Services in the UK
          </Typography>

          {/* Description */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 5,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.75,
                maxWidth: 650,
                color: "#f0f0f0",
              }}
            >
              Outsourcing accounting data entry allows UK businesses to reduce
              operational costs, improve accuracy, and gain access to expert
              support—without the challenges of hiring and managing an in-house
              team.
            </Typography>
          </Box>

          {/* Benefits List */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 380px" },
                  maxWidth: { xs: "100%", sm: 420 },
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2,
                    maxWidth: "450px",
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 24,
                      color: "#97ba3a",
                      mt: 0.25,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "#fff",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
