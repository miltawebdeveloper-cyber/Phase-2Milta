import React, { useState } from "react";
import { Box, Typography, InputBase, Button, Snackbar, Alert } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { submitNewsletterForm } from "../../api/client";

const SubscriptionBanner = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const darkGreen = "#062214"; // A deep, rich aesthetic green

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'error', message: '' });

  const closeSnackbar = () => setSnackbar((s) => ({ ...s, open: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setSnackbar({ open: true, severity: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitNewsletterForm({ email: trimmed });
      if (result?.error) throw new Error(result.error);

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error('Newsletter subscribe failed:', err);
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "32px",
        background: `linear-gradient(135deg, ${darkGreen} 0%, ${alpha(primary, 0.9)} 100%)`,
        py: { xs: 8, md: 11 },
        px: { xs: 3, md: 6 },
        mt: 8,
        mb: 4,
        textAlign: "center",
        boxShadow: `0 32px 80px ${alpha(primary, 0.25)}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Decorative Animated Blur Orbs */}
      <Box
        component={motion.div}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      <Box
        component={motion.div}
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        sx={{
          position: "absolute",
          bottom: "-30%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${alpha("#b5ffcc", 0.15)} 0%, rgba(255,255,255,0) 70%)`,
          filter: "blur(50px)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <Box sx={{ position: "relative", zIndex: 10, maxWidth: "720px", width: "100%" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              color: "#a3e5c0",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Stay Ahead of the Curve
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Typography
            variant="h2"
            // Top heading on /blogs, this banner's only consumer, and the page
            // had no h1 at all before.
            component="h1"
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 900,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
              lineHeight: 1.15,
              color: "#ffffff",
              mb: 5.5,
              letterSpacing: "-0.02em",
            }}
          >
            Join <Box component="span" sx={{ color: "#85f0b4" }}>Thousands</Box>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          {subscribed ? (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, minHeight: 72 }}>
              <CheckCircleIcon sx={{ fontSize: 32, color: "#85f0b4" }} />
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  color: "#ffffff",
                }}
              >
                You're subscribed. Watch your inbox!
              </Typography>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50px",
                p: 0.8,
                pl: { xs: 2.5, md: 3.5 },
                mx: "auto",
                maxWidth: "520px",
                transition: "all 0.3s ease",
                "&:focus-within": {
                  bgcolor: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.4)",
                  boxShadow: `0 0 0 4px ${alpha("#85f0b4", 0.15)}`,
                },
              }}
            >
              <InputBase
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                placeholder="Enter your email address"
                inputProps={{ "aria-label": "Email address" }}
                sx={{
                  flex: 1,
                  color: "#ffffff",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "1.05rem",
                  mr: 2,
                  "&::placeholder": { color: "rgba(255,255,255,0.55)", opacity: 1 },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={submitting}
                endIcon={<SendRoundedIcon sx={{ fontSize: "1.1rem" }} />}
                sx={{
                  borderRadius: "40px",
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 1.4, md: 1.6 },
                  bgcolor: "#ffffff",
                  color: darkGreen,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: "1rem",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  "&:hover": {
                    bgcolor: "#f0f0f0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
                  },
                  "&.Mui-disabled": { bgcolor: "rgba(255,255,255,0.6)", color: alpha(darkGreen, 0.5) },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {submitting ? "Sending..." : "Subscribe"}
              </Button>
            </Box>
          )}
        </motion.div>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubscriptionBanner;
