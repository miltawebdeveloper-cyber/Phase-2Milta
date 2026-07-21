// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Room Entitlement & Annual Limits",
  "In-patient Hospitalization",
  "Day Care Treatment",
  "Specialized Investigations",
  "Pre-Post Hospitalization",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth={false}>
        {/* ✅ CONTENT WIDTH CONSTRAINED TO 1200px */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          <Grid container spacing={10} alignItems="center">

            {/* LEFT COLUMN - IMAGE */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxWidth: 520 }}>
                <Box
                  component="img"
                  src="https://img.freepik.com/free-photo/accountants-working-with-documents_1098-17969.jpg"
                  alt="Business Insurance Benefits"
                  sx={{
                    width: "100%",
                    maxWidth: 480,
                    height: "auto",
                    borderRadius: 4,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT COLUMN - CONTENT */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  maxWidth: 600,
                  ml: { md: 4 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#97ba3a",
                    }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Benefits
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: 34, md: 46 },
                    fontWeight: 700,
                    lineHeight: 1.18,
                    mb: 3,
                    fontFamily: "var(--uk-font-primary)",
                  }}
                >
                  Special Benefits of the
                  <br />
                  Business Insurance
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
                  <Box
                    sx={{
                      width: 4,
                      backgroundColor: "#97ba3a",
                      borderRadius: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.75,
                      maxWidth: 520,
                    }}
                  >
                    We denounce with righteous indignation and dislike men who are beguiled 
                    and demoralized by the charms of pleasure of the moment.
                  </Typography>
                </Box>

                {/* Benefits List */}
                <Grid container spacing={3}>
                  {benefits.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: "#f9f9f9",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            fontSize: 24,
                            color: \"#97ba3a\",
                            mt: 0.25,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: 1.4,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;