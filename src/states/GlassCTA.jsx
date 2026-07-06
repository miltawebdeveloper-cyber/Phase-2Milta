// src/states/GlassCTA.jsx
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const GlassCTA = ({
  title = "Ready to Simplify Your Taxes?",
  description = "If you're looking for tax services near me, our tax preparation services ensure accuracy and compliance every step of the way.",
  buttonText = "Contact Us Today for a Free Consultation!",
  onButtonClick = () => {},
  backgroundGradient = " #ff7e5f",
  headingGradient = "linear-gradient(90deg, #ff7e5f, #be6520ff)",
  buttonGradient = "linear-gradient(90deg, #11998e, #38ef7d)",
}) => {
  return (
    <Box
      sx={{
        background: backgroundGradient,
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        py: 8,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: headingGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#012008ff" }}>
          {description}
        </Typography>
        <Button
          onClick={onButtonClick}
          sx={{
            background: buttonGradient,
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": {
              background: buttonGradient,
              opacity: 0.9,
            },
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default GlassCTA;
