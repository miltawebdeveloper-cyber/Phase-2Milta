import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const JoinImage = "/about_modern.png";

const JoinMilta = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
    <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 10 },
        }}
      >
        {/* Image */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "260px", sm: "360px", md: "440px" },
                aspectRatio: "1/1",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-10%",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  background: (t) =>
                    t.palette.mode === "dark"
                      ? "radial-gradient(circle, rgba(38,105,41,0.3) 0%, transparent 72%)"
                      : "radial-gradient(circle, rgba(38,105,41,0.14) 0%, transparent 72%)",
                  filter: "blur(24px)",
                  zIndex: -1,
                },
              }}
            >
              <Box
                component="img"
                src={JoinImage}
                alt="Join Milta Team"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  boxShadow: (t) =>
                    t.palette.mode === "dark"
                      ? "0 40px 80px rgba(0,0,0,0.4)"
                      : "0 40px 80px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1.2, width: "100%", textAlign: { xs: "center", md: "left" } }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1 }}>
              JOIN OUR TEAM
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }, color: "text.primary", mb: 3 }}>
              Join Milta –{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Innovate, Grow, and Dream with Us!
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5, textAlign: { xs: "center", md: "justify" }, fontSize: { xs: "0.97rem", md: "1.05rem" } }}
            >
              For 10+ years, Milta has empowered global businesses including Fortune 100
              companies across US countries, with a focus on US-based clients through
              Finance &amp; Accounting, IT, and Revenue Cycle Management solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4, textAlign: { xs: "center", md: "justify" }, fontSize: { xs: "0.97rem", md: "1.05rem" } }}
            >
              At Milta, you'll tackle exciting challenges, voice bold ideas, and grow in a
              collaborative "family" culture. We're passionate about innovation,
              sustainability, and building a tech-driven future that inspires pride.
            </Typography>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }} style={{ display: "inline-block" }}>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/career/open-positions"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 2,
                  px: { xs: 5, md: 7 },
                  borderRadius: "50px",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  boxShadow: "0 12px 28px rgba(38,105,41,0.28)",
                  "&:hover": { backgroundColor: "#1a4d1d", boxShadow: "0 18px 36px rgba(38,105,41,0.36)" },
                }}
              >
                See All Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default JoinMilta;
