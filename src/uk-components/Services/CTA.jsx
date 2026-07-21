import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/* ✅ Framer Motion */
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, sm: 8, md: 12 }, // responsive padding
        backgroundColor: "#ffffff", // uses background variable
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {/* Headline Animation (Top) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4" // will scale via variables.css
            sx={{
              color: "#2b6d2a",
              fontWeight: 700,
              mb: { xs: 3, md: 4 }, // responsive margin bottom
              lineHeight: 1.3,
            }}
          >
            Looking for Best Outsourced Bookkeeping & Accounting Solutions?
          </Typography>
        </motion.div>

        {/* Description Animation (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: "rgba(30, 63, 36, 0.8)",
              fontSize: { xs: "var(--uk-body-size)", sm: 16, md: 16 },
              lineHeight: 1.8,
              maxWidth: 600,
              mx: "auto",
              mb: { xs: 4, md: 5 }, // responsive margin
            }}
          >
            If you need reliable, specialised accounting services designed for
            small businesses, we’re here to help. Tell us about your requirements,
            and we’ll create a solution that fits your business perfectly.
          </Typography>
        </motion.div>

        {/* CTA Button Animation (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            component={RouterLink}
            to="/uk/contact"
            variant="contained"
            sx={{
              backgroundColor: "#2b6d2a",
              fontWeight: 600,
              fontSize: { xs: 14, sm: 15, md: 16 },
              px: { xs: 4, sm: 5 },
              py: { xs: 1.5, sm: 1.8 },
              borderRadius: "27px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#2b6d2a", // darker hover
              },
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
