import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

const people = [
  {
    name: "Mohammed Rizwan",
    role: "Managing Director",
    experience: "10+ Years",
    content:
      "Mohammed Rizwan holds a Bachelor's degree in Commerce and brings over a decade of hands-on experience in the financial services industry. His expertise spans accounting, strategic planning, and client relationship management.",
    img: "/MD2.webp",
    linkedin: "https://www.linkedin.com/in/mohammed-rizwan-8b4a221a2/",
    email: "mohammed@miltafs.com",
  },
  {
    name: "Raja Vignesh",
    role: "Managing Director",
    experience: "10+ Years",
    content:
      "Raja Vignesh is a graduate with a Bachelor's degree in Business Administration and has more than 10 years of experience in the financial sector. He specializes in growing the business, improving operations, and leading teams.",
    img: "/MD1.webp",
    linkedin: "https://www.linkedin.com/in/raja-vignesh-5ab3a3375/",
    email: "conway@miltafs.com",
  },
];

/* Reusable fade-up variant for staggered children */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

const PartnerSection = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.default', pt: { xs: 8, md: 5 }, pb: { xs: 8, md: 14 }, position: "relative", overflow: "hidden" }}>

      {/* Watermark — slow float up/down */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, pointerEvents: "none" }}
      >
        <Typography sx={{
          fontSize: { xs: "5rem", md: "12rem" },
          fontWeight: 900,
          color: alpha(primary, 0.04),
          whiteSpace: "nowrap",
          userSelect: "none",
          fontFamily: theme.typography.h1.fontFamily,
          letterSpacing: "0.1em",
        }}>
          LEADERSHIP
        </Typography>
      </motion.div>

      {/* Glow top-right — pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: -180, right: -180, pointerEvents: "none" }}
      >
        <Box sx={{
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(primary, 0.07)} 0%, transparent 70%)`,
        }} />
      </motion.div>

      {/* Glow bottom-left — pulse offset */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: -160, left: -160, pointerEvents: "none" }}
      >
        <Box sx={{
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(primary, 0.05)} 0%, transparent 70%)`,
        }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, position: "relative", zIndex: 1 }}>

        {/* ── Header — staggered children ── */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 11 } }}>

          {/* Overline pill */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px 900px 0px' }}
            variants={fadeUp} custom={0}
          >
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 3, display: 'block' }}>
              Our Leadership
            </Typography>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px 900px 0px' }}
            variants={fadeUp} custom={0.1}
          >
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.15,
              color: "text.primary",
              mb: 2,
            }}>
              The Visionary{" "}
              <Box component="span" sx={{ color: primary }}>Behind the Growth</Box>
            </Typography>
          </motion.div>

        

          {/* Accent bar — scale-in from center */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px 900px 0px' }}
            transition={{ duration: 0.25, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
          >
            <Box sx={{ width: 52, height: 4, borderRadius: "4px", bgcolor: alpha(primary, 0.3), mx: "auto", mt: 3 }} />
          </motion.div>
        </Box>

        {/* ── Cards ── */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 4 }}
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px 900px 0px' }}
              transition={{ duration: 0.25, delay: Math.min(i * 0.2, 0.15), ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1, maxWidth: 520, width: "100%" }}
            >
              <Box
                sx={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  bgcolor: 'background.paper',
                  boxShadow: `0 8px 40px ${alpha("#000", 0.08)}`,
                  border: `1px solid ${alpha(primary, 0.09)}`,
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: `0 28px 72px ${alpha(primary, 0.18)}`,
                  },
                  "&:hover .card-photo": {
                    transform: "scale(1.04)",
                  },
                }}
              >
                {/* ── Photo with overlay ── */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>

                

                  {/* Experience badge — slide in from left */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.55, 0.15), ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: "absolute", top: 18, left: 18, zIndex: 3 }}
                  >
                    <Box sx={{
                      bgcolor: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "12px",
                      px: 1.6, py: 0.6,
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.09)",
                      display: "flex", alignItems: "center", gap: 0.8,
                    }}>
                      {/* Green dot pulse */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: primary }} />
                      </motion.div>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "text.primary" }}>
                        {p.experience}
                      </Typography>
                    </Box>
                  </motion.div>

                  {/* Photo — scale in */}
                  <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.15, 0.15), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box
                      component="img"
                      className="card-photo"
                      src={p.img}
                      alt={p.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </motion.div>

                  {/* Bottom gradient */}
                  <Box sx={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "45%",
                    background: `linear-gradient(to top, rgba(10,30,12,0.9) 0%, rgba(10,30,12,0.5) 50%, transparent 100%)`,
                    pointerEvents: "none",
                    zIndex: 2,
                  }} />

                  {/* Name + role + icons — slide up from bottom */}
                  <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.4, 0.15), ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3 }}
                  >
                    <Box sx={{ px: 3, pb: 2.5, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                      {/* Name + role */}
                      <Box>
                        <Typography sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1.4rem", md: "1.6rem" },
                          color: "#ffffff",
                          fontFamily: theme.typography.h1.fontFamily,
                          lineHeight: 1.2,
                          mb: 0.5,
                        }}>
                          {p.name}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                            transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.6, 0.15), ease: "easeOut" }}
                            style={{ originX: 0 }}
                          >
                            <Box sx={{ width: 20, height: 2.5, borderRadius: "3px", bgcolor: primary }} />
                          </motion.div>
                          <Typography sx={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: alpha("#ffffff", 0.85),
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                          }}>
                            {p.role}
                          </Typography>
                        </Stack>
                      </Box>

                      {/* Social icons */}
                      <Stack direction="row" spacing={1} sx={{ mb: 0.5 }}>
                        <Box
                          component="a"
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            width: 36, height: 36,
                            borderRadius: "10px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            bgcolor: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "#fff",
                            textDecoration: "none",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              bgcolor: "#0A66C2",
                              borderColor: "#0A66C2",
                              transform: "translateY(-2px)",
                              boxShadow: "0 6px 18px rgba(10,102,194,0.4)",
                            },
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: "1rem" }} />
                        </Box>
                        <Box
                          component="a"
                          href={`mailto:${p.email}`}
                          sx={{
                            width: 36, height: 36,
                            borderRadius: "10px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            bgcolor: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "#fff",
                            textDecoration: "none",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              bgcolor: primary,
                              borderColor: primary,
                              transform: "translateY(-2px)",
                              boxShadow: `0 6px 18px ${alpha(primary, 0.45)}`,
                            },
                          }}
                        >
                          <EmailOutlinedIcon sx={{ fontSize: "1rem" }} />
                        </Box>
                      </Stack>
                    </Box>
                  </motion.div>
                </Box>

                {/* ── Content below photo — staggered ── */}
                <Box sx={{ px: { xs: 3, md: 3.5 }, pt: 3, pb: 3.5 }}>

                  {/* Accent line — scale in */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.5, 0.15), ease: "easeOut" }}
                    style={{ originX: 0 }}
                  >
                    <Box sx={{ height: 3, width: 40, borderRadius: "3px", bgcolor: primary, mb: 2.5 }} />
                  </motion.div>

                  {/* Bio */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.6, 0.15), ease: "easeOut" }}
                  >
                    <Typography sx={{
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: "text.secondary",
                      mb: 3,
                    }}>
                      {p.content}
                    </Typography>
                  </motion.div>

                  {/* Divider — width expand */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px 900px 0px' }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.2 + 0.7, 0.15), ease: "easeOut" }}
                    style={{ originX: 0 }}
                  >
                    <Box sx={{ height: "1px", bgcolor: alpha(primary, 0.1) }} />
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>

      </Container>
    </Box>
  );
};

export default PartnerSection;
