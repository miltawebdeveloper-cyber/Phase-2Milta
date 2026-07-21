// src/components/BookkeepingIntroSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const BookkeepingIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 }, // 📱 Balanced vertical padding
        backgroundColor: "#ffffff",
      }}

    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 820,
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* ================= SECTION LABEL ================= */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 3,
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
              <Typography
                sx={{
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#1a1a1a",
                }}
              >
                Why Milta?
              </Typography>
            </Box>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "38px" },
                fontWeight: 600,
                lineHeight: 1.3,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
                color: "#2b6d2a",
              }}
            >
              A Smarter Way for UK Businesses
              <br />
              to Outsource with Confidence
            </Typography>
          </motion.div>

          {/* ================= DESCRIPTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.9,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                maxWidth: 720,
                mx: "auto",
              }}
            >
              Running a business in the UK means managing compliance
              requirements, rising operational costs, limited internal
              resources, and increasing administrative pressure. Milta was
              created to simplify these challenges.
              <br />
              <br />
              We are a UK-focused outsourcing partner supporting small and
              medium-sized businesses with reliable, affordable, and scalable
              business services. From accounting and tax support to virtual
              assistance and digital marketing, Milta helps businesses operate
              efficiently while maintaining accuracy, security, and transparency.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default BookkeepingIntroSection;