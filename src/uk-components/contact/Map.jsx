// src/components/MapSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, keyframes } from "@mui/material";

// Skeleton pulse animation
const pulse = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

function MapSection() {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "100px",
      }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#ffffff", py: { xs: 4, md: 6 } }}>
      {/* Center wrapper */}
      <Box
        ref={mapRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Map container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 0, md: 0 },

            height: {
              xs: "260px",
              sm: "320px",
              md: "420px",
              lg: "500px",
              xl: "600px",
            },
          }}
        >
          {showMap ? (
            <Box
              component="iframe"
              title="Milta Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.174230768357!2d76.9926347765556!3d11.025551154545992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859412de57513%3A0x6589c77f7c346bfa!2sMilta%20Accounting%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1764942754971!5m2!1sen!2sin"
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, #f2f2f2 0%, #e6e6e6 50%, #f2f2f2 100%)",
                backgroundSize: "200px 100%",
                animation: `${pulse} 1.4s infinite`,
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default MapSection;
