import React from "react";
import { Box } from "@mui/material";

/**
 * Decorative SVG wave used to transition between page sections.
 *
 * Props:
 *  - fill:   wave color (default deep green to match dark sections)
 *  - bg:     background behind the wave (default transparent)
 *  - height: wave height in px (default 60)
 *  - flip:   set true to flip the wave vertically
 */
const WaveDivider = ({
  fill = "#0b3d2e",
  bg = "transparent",
  height = 60,
  flip = false,
}) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: "100%",
        lineHeight: 0,
        backgroundColor: bg,
        transform: flip ? "rotate(180deg)" : "none",
        overflow: "hidden",
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        sx={{ display: "block", width: "100%", height }}
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
          fill={fill}
        />
      </Box>
    </Box>
  );
};

export default WaveDivider;
