import React from "react";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const points = [
  "US-focused accounting expertise.",
  "State-compliant bookkeeping and tax support.",
  "Cost savings of 40–60% compared to in-house hiring.",
  "Experienced professionals trained in US accounting systems.",
  "Scalable support for growing businesses.",
  "Transparent communication and reporting.",
];

const WhyChooseMilta = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 6 },
            alignItems: "stretch",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0,1fr) minmax(0,1fr)" },
            gridTemplateAreas: {
              xs: `"right" "left"`,
              md: `"left right"`,
            },
          }}
        >
          {/* LEFT COLUMN — points card */}
          <motion.div {...fadeUp(0.1)} style={{ gridArea: "left" }}>
            <Box
              sx={{
                height: "100%",
                bgcolor: "background.default",
                borderRadius: "16px",
                p: { xs: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${alpha(primary, 0.12)}`,
                boxShadow: `0 12px 32px ${alpha(theme.palette.common.black, 0.06)}`,
              }}
            >
              {/* VERTICAL ACCENT LINE */}
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  bottom: 24,
                  left: 0,
                  width: "6px",
                  bgcolor: primary,
                  borderRadius: "0 4px 4px 0",
                }}
              />

              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: primary,
                  fontSize: "1rem",
                }}
              >
                Businesses in multiple US states trust us because we offer:
              </Typography>

              <List sx={{ pl: 0 }}>
                {points.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      pl: 0,
                      py: 0.8,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "text.secondary",
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ fontSize: "1.1rem", color: primary, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </motion.div>

          {/* RIGHT COLUMN — heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
              gridArea: "right",
            }}
          >
            <motion.div {...fadeUp(0)}>
              <Box
                sx={{
                  width: 48,
                  height: 4,
                  bgcolor: primary,
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  lineHeight: 1.2,
                  fontSize: { xs: "1.9rem", md: "2.6rem" },
                }}
              >
                Why Businesses Across the{" "}
                <Box component="span" sx={{ color: primary }}>
                  USA Choose Milta
                </Box>
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 520 }}>
                Our goal is to simplify financial operations so you can focus on
                business growth.
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseMilta;
