// src/components/WhyChooseMiltaSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Simplify Accounting",
    subtitle:
      "We simplify accounting and reduce the time spent on financial administration.",
    direction: { x: -80, y: 0 },
  },
  {
    title: "Dependable Support",
    subtitle:
      "We provide reliable support without the cost of an in-house team.",
    direction: { x: 0, y: -80 },
  },
  {
    title: "Flexible Services",
    subtitle:
      "Our services are adaptable and grow alongside your business.",
    direction: { x: 0, y: 80 },
  },
  {
    title: "Accuracy & Security",
    subtitle:
      "We maintain accurate records, ensure full compliance, and protect your data with secure systems and processes.",
    direction: { x: 80, y: 0 },
  },
];

const WhyChooseMiltaSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
        backgroundColor: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="subtitle1"
          sx={{
            color: "#97ba3a",
            mb: 1,
            fontWeight: 700,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          ● Why Businesses Choose Milta
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: { xs: 4, md: 8 },
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            fontSize: { xs: "24px", sm: "30px", md: "40px" },
            lineHeight: 1.3,
          }}
        >
          Key Reasons to Work With Us
        </Typography>

        {/* Responsive grid — CSS grid gives equal-width columns and equal-height
            rows regardless of content length. (MUI v9 dropped the old
            `<Grid item xs=... />` API, so those props were being ignored.) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: { xs: 3, sm: 4 },
            alignItems: "stretch",
          }}
        >
          {reasons.map((reason, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30, // 📱 Use simple fade-up on mobile
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1, // Faster stagger
                }}
                viewport={{ once: true, amount: 0.2 }}

                style={{ width: "100%", display: "flex" }}
              >
                <Box
                  sx={{
                    /* Fill the grid cell — a fixed width here overflowed the
                       cell and knocked the whole grid off-centre. */
                    width: "100%",

                    /* Equal-height cards across a row */
                    height: "100%",
                    minHeight: { xs: "auto", md: 130 },

                    borderRadius: "22px",
                    p: { xs: 2.5, sm: 3 },

                    background: "#fff",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    textAlign: "center",

                    transition: "all 0.35s ease",

                    "&:hover": {
                      transform: { md: "translateY(-10px)" },
                      boxShadow: "0 16px 35px rgba(0,0,0,0.22)",
                    },

                    position: "relative",
                    overflow: "hidden",

                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "6px",
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "16px", sm: "18px", md: "19px" },
                    }}
                  >
                    {reason.title}
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "13px", sm: "14px" },
                      lineHeight: 1.6,
                      px: { xs: 0.5, sm: 1 },
                      opacity: 0.85,
                    }}
                  >
                    {reason.subtitle}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseMiltaSection;