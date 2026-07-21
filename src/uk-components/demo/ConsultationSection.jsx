// src/components/ConsultationSection.jsx
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  "Knowledgeable Consulting",
  "Best Rates and Converge",
  "Well Known Reputations",
  "Professional & Exclusive Team",
];

const ConsultationSection = () => {
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

            {/* LEFT COLUMN */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxWidth: 520 }}>
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
                    Consultations
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
                  Learn Insurance
                  <br />
                  Solution With Our
                  <br />
                  Professionals
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
                      maxWidth: 420,
                    }}
                  >
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    blanditiis praesentium voluptatum deleniti atque
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 30,
                    px: 4.5,
                    py: 1.3,
                    textTransform: "none",
                    fontWeight: 600,
                    borderColor: "#ddd",
                    color: "#111",
                    "&:hover": {
                      borderColor: "#97ba3a",
                    },
                  }}
                >
                  Learn More →
                </Button>
              </Box>
            </Grid>

            {/* RIGHT COLUMN */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  maxWidth: 600,
                  ml: "auto",
                }}
              >
                <Grid container spacing={4}>
                  {features.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          height: 170,
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: "#fff",
                          boxShadow: "0px 24px 60px rgba(0,0,0,0.08)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          gap: 2,
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-6px)",
                          },
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            fontSize: 32,
                            color: \"#97ba3a\",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: 18,
                            fontWeight: 600,
                            lineHeight: 1.4,
                            maxWidth: 220,
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

export default ConsultationSection;
