import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ContactForm from "../../components/contactComp/ContactForm";

const CTA = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f7faf7",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md">
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              color: "#97ba3a",
              fontWeight: 600,
              fontSize: "14px",
              mb: 1,
            }}
          >
            ● Get In Touch
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#2b6d2a",
              lineHeight: 1.25,
              fontSize: { xs: "28px", md: "40px" },
            }}
          >
            Send Us Message
          </Typography>
        </Box>

        {/* Form card */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            p: { xs: 2.5, sm: 4, md: 5 },
            borderRadius: "18px",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
          }}
        >
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
