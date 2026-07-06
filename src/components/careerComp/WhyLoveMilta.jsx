import React from "react";
import { Box, Container, Typography, Card, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  Favorite,
  Schedule,
  School,
  Groups,
  VolunteerActivism,
  WorkspacePremium,
} from "@mui/icons-material";

const benefits = [
  {
    icon: <VolunteerActivism />,
    title: "Employee Referral Bonus",
    description:
      "Refer great talent and get rewarded — because success grows when shared.",
  },
  {
    icon: <Favorite />,
    title: "Paid Sick Leave",
    description: "Take the time you need to recharge. Your well-being matters most.",
  },
  {
    icon: <School />,
    title: "Development Opportunities & Training Programs",
    description:
      "Unlock your potential with workshops, courses, and mentorship to fuel your career growth.",
  },
  {
    icon: <Schedule />,
    title: "Flexible Schedules",
    description:
      "Balance life and work effortlessly with flexible hours that adapt to your lifestyle.",
  },
  {
    icon: <Groups />,
    title: "Friendly Work Environment",
    description:
      "Collaborate with supportive colleagues who feel like family in every project.",
  },
  {
    icon: <WorkspacePremium />,
    title: "Employee Training Programs",
    description:
      "Stay ahead with cutting-edge training that transforms today's skills into tomorrow's leadership.",
  },
];

const WhyLoveMilta = () => (
  <Box id="why-milta" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
    <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 4 } }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1 }}>
            LIFE AT MILTA
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, color: "text.primary", mb: 2 }}>
            Why You'll Love{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Working With Us
            </Box>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: "680px", mx: "auto", fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            At Milta, we don't just hire talent — we invest in it. Here's how we prioritize you.
          </Typography>
        </motion.div>
      </Box>

      {/* Benefits grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 2.5, md: 3.5 },
        }}
      >
        {benefits.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "100%" }}
          >
            <Card
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                backgroundColor: "background.paper",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Watermark number */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 18,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900,
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(38,105,41,0.05)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: "14px",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  boxShadow: "0 12px 24px rgba(38,105,41,0.22)",
                }}
              >
                {React.cloneElement(item.icon, { sx: { fontSize: 26 } })}
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1.5, color: "text.primary" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                {item.description}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* CTA Button */}
      <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
        <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }} style={{ display: "inline-block" }}>
          <Button
            variant="contained"
            size="large"
            href="#apply"
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
            Join Us
          </Button>
        </motion.div>
      </Box>
    </Container>
  </Box>
);

export default WhyLoveMilta;
