import React from "react";
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CareerCta = () => (
  <Box id="stay-connected" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
    <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 6, md: 10 },
            borderRadius: "40px",
            bgcolor: "background.paper",
            border: "1px solid rgba(38,105,41,0.12)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative orb */}
          <Box
            sx={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: (t) =>
                t.palette.mode === "dark"
                  ? "radial-gradient(circle, rgba(38,105,41,0.22) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(38,105,41,0.1) 0%, transparent 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 2 }}>
              STAY CONNECTED
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" }, color: "text.primary", mb: 3 }}
            >
              Let's Continue{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Interacting
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: "640px", mx: "auto", fontSize: { xs: "1rem", md: "1.1rem" }, mb: 5 }}
            >
              Stay informed about new job openings and exciting career possibilities by
              connecting with us on LinkedIn.
            </Typography>

            <Stack direction="row" justifyContent="center">
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/company/milta-accounting-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<LinkedInIcon />}
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
                  Go to LinkedIn
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  </Box>
);

export default CareerCta;
