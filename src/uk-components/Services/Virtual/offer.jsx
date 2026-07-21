// src/components/VirtualAssistantIntroSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const VirtualAssistantIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        /* SECTION GLOBAL PADDING (from variables.css) */
        py: { xs: "50px", sm: "70px", md: "60px" },

        /* PRIMARY BACKGROUND COLOR */
        backgroundColor: "#2b6d2a",

        /* GLOBAL TEXT */
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          /* CONTAINER GLOBAL PADDING */
          px: { xs: "12px", sm: "16px", md: "24px" },
        }}
      >
        {/* CONTENT WRAPPER */}
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* ================= HEADING ================= */}
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: 1.2,

              /* RESPONSIVE FONT SIZE */
              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "52px",
              },

              mb: 3,
              color: "#fff",
            }}
          >
            What Is a Virtual Assistant Service
            <br />
            and How Can It Support Your Business?
          </Typography>

          {/* ================= DESCRIPTION ================= */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 5,
            }}
          >
           
            {/* TEXT */}
            <Typography
              sx={{
                maxWidth: "700px",

                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },

                lineHeight: 1.75,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              A virtual assistant (VA) is a skilled professional who provides
              remote support to businesses without the need for on-site presence.
              Unlike traditional employees, virtual assistants work remotely,
              helping you avoid costs related to office space, equipment, and
              long-term contracts.
              <br />
              <br />
              With modern technology, hiring a virtual assistant service has
              become a practical and cost-effective solution for UK businesses.
              At Miltafs, our virtual assistant services for small businesses are
              designed to support entrepreneurs, startups, and SMEs with reliable,
              professional expertise across multiple business functions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VirtualAssistantIntroSection;
