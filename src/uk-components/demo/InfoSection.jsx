// src/components/InfoSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Replace with your Freepik image URL
const FamilyImage =
  "https://img.freepik.com/free-photo/happy-family-enjoying-time-together_1157-26509.jpg?w=1380&t=st=1695523542~exp=1695524142~hmac=eeff9c94c013f9c3748676f5ff50fce7eecf28db3b7018a6c707b5e0349efc3a";

const features = [
  { title: "Up to $400 cash back when you join", description: "Get up to $400 back after joining our program. It's easy and fast!" },
  { title: "100% back on popular extras", description: "Enjoy full cashback on selected extras. Save money while getting the best coverage." },
  { title: "Outstanding value insurance", description: "Affordable plans with great benefits tailored for your needs." },
];

const InfoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 6 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          {/* LEFT COLUMN - TEXT */}
          <Grid item xs={12} md={8}>
            <Box sx={{ maxWidth: 520, mx: { xs: "auto", md: 0 } }}>
              {/* Small Label */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
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
                  What We Offer
                </Typography>
              </Box>

              {/* Main Heading */}
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "var(--uk-font-primary)",
                }}
              >
                What you need to <br /> know
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.75,
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque
                inventore.
              </Typography>

              {/* Feature List with Accordion */}
              {features.map((item, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    borderRadius: 3,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                    "& .MuiAccordionSummary-root": {
                      borderRadius: 3,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      {`0${index + 1}. ${item.title}`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#666" }}>
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>

          {/* RIGHT COLUMN - IMAGE */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={FamilyImage}
              alt="Family"
              sx={{
                width: "100%",
                
                borderRadius: 3,
                boxShadow: "0px 24px 60px rgba(0,0,0,0.08)",
                maxHeight: { xs: 300, md: "auto" },
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoSection;
