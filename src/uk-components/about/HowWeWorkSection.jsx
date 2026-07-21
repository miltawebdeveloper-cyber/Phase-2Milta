// src/components/HowWeWorkSection.jsx
import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const HowWeWorkSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 7, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          maxWidth: { xs: "100%", sm: "1100px" },
          textAlign: "center",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            sx={{
              color: "#97ba3a",
              mb: { xs: 1, sm: 1.5 },
              fontWeight: 600,
              fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
              letterSpacing: { xs: 0.3, sm: 0.4, md: 0.5 },
            }}
          >
            ● Our Approach
          </Typography>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4, md: 5, lg: 6 },
              fontFamily: "'Poppins', sans-serif",
              color: "#2b6d2a",
              lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
              fontSize: {
                xs: "1.75rem",
                sm: "2rem",
                md: "2.25rem",
                lg: "2.5rem",
              },
              wordBreak: "break-word",
            }}
          >
            How We Work
          </Typography>
        </motion.div>

        {/* Paragraphs */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "90%", md: "85%", lg: 800 },
            mx: "auto",
            textAlign: { xs: "left", sm: "center" },
            px: { xs: 0, sm: 2, md: 0 },
          }}
        >
          {/* Paragraph 1 */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -30 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2.5, sm: 3, md: 4 },
                fontSize: { 
                  xs: "0.95rem", 
                  sm: "1rem", 
                  md: "1.05rem", 
                  lg: "1.1rem" 
                },
                lineHeight: { xs: 1.7, sm: 1.75, md: 1.8, lg: 1.9 },
                color: "#333",
                maxWidth: { sm: "600px", md: "700px", lg: "100%" },
                mx: { sm: "auto" },
                fontWeight: 400,
                letterSpacing: { xs: 0.2, sm: 0.3, md: 0.4 },
                px: { xs: 0, sm: 1, md: 0 },
              }}
            >
              Every partnership starts with listening. We take the time to
              understand your business, your goals, and the challenges you're
              facing before offering any solutions.
            </Typography>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 30 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 4 },
                fontSize: { 
                  xs: "0.95rem", 
                  sm: "1rem", 
                  md: "1.05rem", 
                  lg: "1.1rem" 
                },
                lineHeight: { xs: 1.7, sm: 1.75, md: 1.8, lg: 1.9 },
                color: "#333",
                maxWidth: { sm: "600px", md: "700px", lg: "100%" },
                mx: { sm: "auto" },
                fontWeight: 400,
                letterSpacing: { xs: 0.2, sm: 0.3, md: 0.4 },
                px: { xs: 0, sm: 1, md: 0 },
              }}
            >
              From there, we provide accounting and bookkeeping support that
              fits your needs, no unnecessary extras. As your business grows,
              our support adapts with you. We offer continuous assistance, clear
              insights, and practical guidance to help you plan and make
              informed decisions.
            </Typography>
          </motion.div>
        </Box>

        {/* Optional: Add a subtle decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              width: { xs: "50px", sm: "60px", md: "70px" },
              height: { xs: "2px", sm: "3px" },
              backgroundColor: "#97ba3a",
              mx: "auto",
              mt: { xs: 4, sm: 5, md: 6 },
              opacity: 0.5,
              borderRadius: "2px",
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default HowWeWorkSection;