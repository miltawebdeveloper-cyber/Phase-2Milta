import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  TextField,
  Link,
  Button,
} from "@mui/material";

import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Aliased: MUI already exports a `Link` above, and this file uses both.
import { Link as RouterLink } from "react-router-dom";
import { submitNewsletterForm } from "../../api/client";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= NEWSLETTER SUBMIT =================
  const handleNewsletterSubmitBrevo = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email address.");
      return;
    }

    setLoading(true);
    const response = await submitNewsletterForm({ email: newsletterEmail });

    if (response.error) {
      alert("Something went wrong. Please try again later.");
      setLoading(false);
      return;
    }

    if (response.emailNotification && !response.emailNotification.success) {
      alert("Subscription was received, but the email notification could not be delivered.");
    }

    setNewsletterEmail("");
    setLoading(false);
  };

  // ================= LINKS =================
  const servicesLinks = [
    { label: "Bookkeeping Services", to: "/uk/bookkeeping-services-for-small-business" },
    { label: "Accounting Payable", to: "/uk/accounts-payable-services-in-uk" },
    { label: "Accounts Receivable", to: "/uk/accounts-receivable-services-in-uk" },
    { label: "Digital Marketing", to: "/uk/best-digital-marketing-service-in-uk" },
    { label: "Payroll Services", to: "/uk/payroll-services-for-small-business" },
    { label: "Virtual Assistance", to: "/uk/virtual-assistant-services-in-the-uk" },
  ];

  const industriesLinks = [
    { label: "E-Commerce", to: "/uk/ecommerce-accounting-service/" },
    { label: "Healthcare", to: "/uk/accounting-services-for-healthcare" },
    { label: "Law Firms", to: "/uk/law-firm-accounting-services" },
    { label: "Real Estate", to: "/uk/accounting-services-for-real-estate" },
    { label: "Hospitality", to: "/uk/hospitality-accounting-services" },

  ];


  const legalLinks = [
    { label: "Blog", to: "/uk/blogs" },
    { label: "Contact", to: "/uk/contact" },
    { label: "About", to: "/uk/about" },
    { label: "Why Choose Milta", to: "/uk/why-choose-milta" },
    { label: "Privacy Policy", to: "/uk/privacy-policy" },
    { label: "Terms of Service", to: "/uk/terms-of-service" },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "#2b6d2a", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        {/* ================= TOP FOOTER AREA ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 6,
            pb: 5,
          }}
        >
          {/* ================= LEFT SIDE: Contact & Socials ================= */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Get In Touch
            </Typography>

            {/* Contact Info */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
              <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={contactIconStyle}>
                  <EmailIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
                <Typography variant="body2" color="#fff" sx={{ opacity: 0.9 }}>
                  info@miltafs.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                <Box sx={contactIconStyle}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
                <Typography variant="body2" color="#fff" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                  No. 175, Sri Sai Tower, 3rd floor,<br></br> Bharathi Colony Rd,
                  Peelamedu, <br></br>Coimbatore, Tamil Nadu 641004, India.
                </Typography>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1.2, mt: 2 }}>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/"
                target="_blank"
                rel="noopener"
              >
                <Box sx={socialIconStyle}>
                  <LinkedIn fontSize="small" />
                </Box>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/miltaaccountingservices/"
                target="_blank"
                rel="noopener"
              >
                <Box sx={socialIconStyle}>
                  <Facebook fontSize="small" />
                </Box>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/milta_accountings/"
                target="_blank"
                rel="noopener"
              >
                <Box sx={socialIconStyle}>
                  <Instagram fontSize="small" />
                </Box>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@milta-accounting-service"
                target="_blank"
                rel="noopener"
              >
                <Box sx={socialIconStyle}>
                  <YouTube fontSize="small" />
                </Box>
              </Link>
            </Box>

          </Box>

          {/* ================= CENTER: Services & Company ================= */}
          <Box sx={{ flex: 0.5, display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Services
              </Typography>
              {/* These were onClick={() => navigate(...)} on a <Typography>,
                  which renders no <a href>. The whole UK footer was therefore
                  invisible to crawlers, which is why /uk/ecommerce-accounting-service
                  and /uk/hospitality-accounting-services had ZERO inbound links
                  despite being listed here and in the header. */}
              {servicesLinks.map((item, i) => (
                <Typography
                  key={i}
                  component={RouterLink}
                  to={item.to}
                  variant="body2"
                  color="#fff"
                  sx={{ display: "block", mb: 1.2, opacity: 0.85, textDecoration: "none", cursor: "pointer", "&:hover": { color: "#97ba3a" } }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

          </Box>


          <Box sx={{ flex: 0.8, display: "flex", flexDirection: "column", gap: 3 }}>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Industries
              </Typography>
              {industriesLinks.map((item, i) => (
                <Typography
                  key={i}
                  component={RouterLink}
                  to={item.to}
                  variant="body2"
                  color="#fff"
                  sx={{ display: "block", mb: 1.2, opacity: 0.85, textDecoration: "none", cursor: "pointer", "&:hover": { color: "#97ba3a" } }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>


          </Box>

          {/* ================= RIGHT SIDE: Newsletter ================= */}
          <Box sx={{ flex: 1, maxWidth: 420 }}>
            <Typography variant="h6" color="#fff" sx={{ fontWeight: 700, mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" color="#fff" sx={{ opacity: 0.85, mb: 3, lineHeight: 1.7 }}>
              Signup for updates, insights and promotions directly in your inbox.
            </Typography>

            <Box component="form" onSubmit={handleNewsletterSubmitBrevo} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                placeholder="Email"
                size="small"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                sx={{ bgcolor: "#fff", borderRadius: "30px", "& fieldset": { border: "none" } }}
              />
              <Button
                type="submit"
                disabled={loading}
                sx={{ bgcolor: "#97ba3a", color: "#fff", fontWeight: 700, borderRadius: "30px", py: 1.2, textTransform: "none", "&:hover": { bgcolor: "#fff", color: "#00b894" } }}
              >
                {loading ? "Sending..." : "Sign Up"}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* ================= BOTTOM LEGAL BAR ================= */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            py: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            opacity: 0.65,
            gap: 2,
          }}
        >
          {/* Left Column: Legal Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" }, // 📱 Center on mobile
            }}
          >
            {legalLinks.map((item, i) => (
              <Typography
                key={i}
                component={RouterLink}
                to={item.to}
                variant="caption"
                color="#fff"
                sx={{ textDecoration: "none", cursor: "pointer", "&:hover": { color: "#97ba3a" } }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>


          {/* Right Column: Copyright */}
          <Typography
            variant="caption"
            sx={{

              color: "#fff",
              fontSize: 12,
              textAlign: { xs: "center", md: "right" },
            }}
          >
            © {new Date().getFullYear()} Milta Accounting Services. All rights reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;

// ================= STYLES =================
const contactIconStyle = {
  width: 34,
  height: 34,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const socialIconStyle = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  bgcolor: "rgba(255,255,255,0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "0.3s",
  color: "#ffffff",
  "&:hover": {
    bgcolor: "#97ba3a",
    color: "#fff",
    transform: "scale(1.08)",
  },
};
