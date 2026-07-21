import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const services = [
  {
    icon: <UmbrellaIcon sx={{ fontSize: 40, color: "#FFBF69" }} />,
    title: "Accurate Record Keeping",
    desc: "We maintain precise and error-free financial records so you can focus on growing your business.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#FFBF69" }} />,
    title: "Timely Reporting",
    desc: "Get financial reports delivered on time, every time — helping you make informed business decisions.",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#FFBF69" }} />,
    title: "Expert Support",
    desc: "Our experienced team provides continuous support for all your bookkeeping and financial queries.",
  },
  {
    icon: <PriceCheckIcon sx={{ fontSize: 40, color: "#FFBF69" }} />,
    title: "Affordable Pricing",
    desc: "High-quality bookkeeping services designed to fit every business budget.",
  },
];

const WhatWeDoSection = () => {
  return (
    <Box component="section" sx={{ pt: { xs: 10, md: 8 }, pb: { xs: 10, md: 4 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">

        {/* CENTERED HEADER */}
        <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mb: 8 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#FFBF69",
              }}
            />
            <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#1E3F24" }}>
              Why Choose Us
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 30, md: 44 },
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#111827",
              fontFamily: "var(--uk-font-primary)",
              mb: 3,
            }}
          >
            Why Choose Miltafs’s
            <br />
            Bookkeeping Services?
          </Typography>

          <Typography sx={{ color: "#666", fontSize: 16, lineHeight: 1.8 }}>
            There are many bookkeeping services available, but why choose Miltafs?
            Here’s what sets us apart.
          </Typography>
        </Box>

        {/* SERVICES – CENTERED */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  backgroundColor: "#1E3F24",
                  borderRadius: 2,
                  p: 4,
                  width: "100%",
                  maxWidth: 250,
                  textAlign: "left",
                }}
              >
                <Box sx={{ mb: 3 }}>{item.icon}</Box>

                <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16, mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDoSection;
