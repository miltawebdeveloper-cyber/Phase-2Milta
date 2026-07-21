import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { submitNewsletterForm } from "../../api/client";

const SubscriptionBanner = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmitBrevo = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);
    const response = await submitNewsletterForm({ email: newsletterEmail });

    if (response.error) {
      alert("Failed to send subscription. Try again later.");
      setLoading(false);
      return;
    }

    if (response.emailNotification && !response.emailNotification.success) {
      alert("Subscription was received, but the email notification could not be delivered.");
    }

    setNewsletterEmail("");
    setLoading(false);
  };

  return (
    <Box component="section" sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 8 },
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #1e5320 0%, #2b6d2a 55%, #35802f 100%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 24px 60px rgba(24, 66, 24, 0.28)",
          }}
        >
          {/* Soft light bloom */}
          <Box
            sx={{
              position: "absolute",
              top: "-40%",
              right: "-10%",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(151,186,58,0.28) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          {/* Fine dot texture */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Eyebrow */}
            <Typography
              sx={{
                fontSize: { xs: "11px", md: "12px" },
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#97ba3a",
                textTransform: "uppercase",
              }}
            >
              Join Thousands
            </Typography>

            {/* Heading */}
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: "26px", sm: "32px", md: "40px" },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Insights Worth Reading
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "14px", md: "16px" },
                color: "rgba(255,255,255,0.82)",
                maxWidth: 560,
                mx: "auto",
                lineHeight: 1.75,
              }}
            >
              Get curated finance, accounting &amp; growth insights straight to your inbox.
            </Typography>

            {/* Input + Button */}
            <Box
              component="form"
              onSubmit={handleNewsletterSubmitBrevo}
              sx={{
                mt: { xs: 4, md: 5 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <TextField
                placeholder="Enter your email"
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                sx={{
                  width: { xs: "100%", sm: "360px" },
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#fff",
                    borderRadius: "50px",
                    height: 52,
                    fontFamily: "'Poppins', sans-serif",
                    "& fieldset": { border: "1px solid rgba(255,255,255,0.35)" },
                    "&:hover fieldset": { border: "1px solid #97ba3a" },
                    "&.Mui-focused fieldset": { border: "1px solid #97ba3a" },
                  },
                  "& input": { px: 2.5, fontSize: "15px" },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                disableElevation
                disabled={loading}
                sx={{
                  height: 52,
                  bgcolor: "#97ba3a",
                  color: "#12300f",
                  fontWeight: 700,
                  borderRadius: "50px",
                  px: 4,
                  fontSize: "15px",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  fontFamily: "'Poppins', sans-serif",
                  "&:hover": { bgcolor: "#a8cc46" },
                }}
              >
                {loading ? "Sending…" : "Subscribe →"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscriptionBanner;
