// src/components/RunningLine.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import GoldTexture from "../../assets/gold-texture.jpg";

const RunningLine = () => {
  const text = "Accounting Services";

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        bgcolor: "#fff",
        py: { xs: 4, md: 8 }, // responsive vertical spacing
      }}
    >
      {/* TRACK */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 18s linear infinite",
        }}
      >
        {/* FIRST SET */}
        <Box sx={{ display: "flex" }}>
          {[...Array(6)].map((_, i) => (
            <Typography
              key={`first-${i}`}
              component="span"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4.5rem",
                  lg: "6rem",
                },
                mr: { xs: 2, md: 4 },
                background: `url(${GoldTexture}) center/cover`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* DUPLICATE SET */}
        <Box sx={{ display: "flex" }}>
          {[...Array(6)].map((_, i) => (
            <Typography
              key={`second-${i}`}
              component="span"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4.5rem",
                  lg: "6rem",
                },
                mr: { xs: 2, md: 4 },
                background: `url(${GoldTexture}) center/cover`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default RunningLine;
