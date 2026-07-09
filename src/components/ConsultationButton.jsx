// src/components/ConsultationButton.jsx
import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useConsultation } from "./ConsultationModal";

/**
 * Reusable CTA that opens the global consultation popup (Contact form modal).
 * Drop it into any service page / section. Style can be overridden via `sx`.
 */
const ConsultationButton = ({
  label = "Book a 30 Minutes Free Consultation",
  sx,
  size = "large",
  ...rest
}) => {
  const { open } = useConsultation();

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{ display: "inline-block" }}
    >
      <Button
        onClick={open}
        variant="contained"
        size={size}
        startIcon={<CalendarMonthIcon />}
        sx={{
          px: { xs: 3.5, md: 5 },
          py: { xs: 1.4, md: 1.8 },
          borderRadius: "50px",
          backgroundColor: "primary.main",
          color: "#fff",
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "none",
          fontSize: { xs: "0.9rem", md: "1rem" },
          boxShadow: "0 12px 32px rgba(38,105,41,0.35)",
          "&:hover": {
            backgroundColor: "#1a4a1c",
            boxShadow: "0 16px 40px rgba(38,105,41,0.45)",
          },
          ...sx,
        }}
        {...rest}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default ConsultationButton;
