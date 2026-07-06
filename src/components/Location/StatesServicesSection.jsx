import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
  Collapse,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { statesData } from "./statesData";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const StatesServicesSection = () => {
  const theme = useTheme();
  const accent = theme.palette.primary.light;
  const stateKeys = Object.keys(statesData);
  const [activeState, setActiveState] = useState(stateKeys[0]);

  const prettify = (s) => s.replace(/([A-Z])/g, " $1").trim();

  const ServiceLink = ({ service }) => (
    <ListItemButton
      component={Link}
      to={service.url}
      sx={{
        mb: 1,
        px: 2,
        py: 1.25,
        borderRadius: "8px",
        color: "#ffffff",
        border: `1px solid ${alpha("#ffffff", 0.12)}`,
        bgcolor: alpha("#ffffff", 0.03),
        transition: "all 0.25s ease",
        "&:hover": {
          bgcolor: alpha(accent, 0.16),
          borderColor: alpha(accent, 0.5),
          transform: "translateX(4px)",
        },
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 13, mr: 1.5, color: accent, flexShrink: 0 }} />
      <ListItemText
        primary={service.name}
        primaryTypographyProps={{ fontSize: "0.92rem", fontWeight: 500 }}
      />
    </ListItemButton>
  );

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(145deg, #0d1f0e 0%, #163018 50%, #1a3d1c 100%)`,
        color: "#ffffff",
      }}
    >
      {/* Ambient glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.25
          )} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 }, maxWidth: 820, mx: "auto" }}>
          <motion.div {...fadeUp(0)}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 2.5,
                py: 0.75,
                mb: 3,
                borderRadius: "50px",
                border: `1px solid ${alpha("#ffffff", 0.2)}`,
                bgcolor: alpha("#ffffff", 0.06),
              }}
            >
              <PlaceOutlinedIcon sx={{ fontSize: 16, color: accent }} />
              <Typography variant="overline" sx={{ color: alpha("#ffffff", 0.9), lineHeight: 1 }}>
                States We Serve
              </Typography>
            </Box>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}>
              Serving Businesses Across{" "}
              <Box component="span" sx={{ color: accent }}>
                Key US States
              </Box>
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <Typography variant="body1" sx={{ color: alpha("#ffffff", 0.8), mt: 2 }}>
              Our team understands state-specific accounting requirements, sales tax rules,
              payroll compliance, and reporting standards—delivering reliable financial
              support regardless of your location.
            </Typography>
          </motion.div>
        </Box>

        <motion.div {...fadeUp(0.25)}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 4 } }}>
            {/* LEFT SIDEBAR */}
            <Box
              sx={{
                width: { xs: "100%", md: 280 },
                flexShrink: 0,
                borderRadius: "12px",
                overflow: "hidden",
                border: `1px solid ${alpha("#ffffff", 0.1)}`,
                bgcolor: alpha("#ffffff", 0.04),
                backdropFilter: "blur(8px)",
                height: "fit-content",
              }}
            >
              <List disablePadding>
                {stateKeys.map((state) => {
                  const { description, services } = statesData[state];
                  const isActive = activeState === state;

                  return (
                    <Box key={state}>
                      <ListItemButton
                        selected={isActive}
                        onClick={() => setActiveState(state)}
                        sx={{
                          py: 1.5,
                          color: "#ffffff",
                          transition: "all 0.3s ease",
                          borderLeft: "4px solid transparent",
                          "&.Mui-selected": {
                            bgcolor: alpha(accent, 0.18),
                            borderLeft: `4px solid ${accent}`,
                          },
                          "&.Mui-selected:hover": { bgcolor: alpha(accent, 0.26) },
                          "&:hover": { bgcolor: alpha("#ffffff", 0.08) },
                        }}
                      >
                        <ListItemText
                          primary={prettify(state)}
                          primaryTypographyProps={{
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? accent : "#ffffff",
                          }}
                        />
                        <ArrowForwardIosIcon
                          sx={{
                            fontSize: 13,
                            color: isActive ? accent : alpha("#ffffff", 0.4),
                            transition: "transform 0.3s ease",
                            transform: isActive ? "rotate(90deg)" : "none",
                          }}
                        />
                      </ListItemButton>

                      {/* Mobile-only inline content */}
                      <Collapse in={isActive} sx={{ display: { xs: "block", md: "none" } }}>
                        <Box
                          sx={{
                            px: 2,
                            py: 2,
                            borderTop: `1px solid ${alpha("#ffffff", 0.12)}`,
                            bgcolor: alpha("#000000", 0.15),
                          }}
                        >
                          <Typography sx={{ color: alpha("#ffffff", 0.85), mb: 2, fontSize: "0.92rem" }}>
                            {description}
                          </Typography>
                          <List disablePadding>
                            {services.map((service, index) => (
                              <ServiceLink key={index} service={service} />
                            ))}
                          </List>
                        </Box>
                      </Collapse>
                    </Box>
                  );
                })}
              </List>
            </Box>

            {/* RIGHT CONTENT for desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
                borderRadius: "12px",
                p: 4,
                border: `1px solid ${alpha("#ffffff", 0.1)}`,
                bgcolor: alpha("#ffffff", 0.04),
                backdropFilter: "blur(8px)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, color: accent, mb: 1 }}>
                    Serving Businesses in {prettify(activeState)}
                  </Typography>

                  <Typography sx={{ color: alpha("#ffffff", 0.8), mb: 3 }}>
                    {statesData[activeState].description}
                  </Typography>

                  <List disablePadding>
                    {statesData[activeState].services.map((service, index) => (
                      <ServiceLink key={index} service={service} />
                    ))}
                  </List>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StatesServicesSection;
