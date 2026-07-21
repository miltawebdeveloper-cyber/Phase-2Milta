// src/uk-components/Header/UkHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";

import Flag from "../../components/Flag";

// Served from /public so the UK header uses the same brand mark as the US site.
const logo = "/logo.svg";

/**
 * Flat, effect-free style for every nav item.
 * No hover/active/focus colour change, no background, no ripple, no transition
 * — just plain text. Navigation behaviour is unaffected.
 */
const navItemSx = {
  fontFamily: "'Poppins', sans-serif",
  color: "#1a1a1a",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.92rem",
  whiteSpace: "nowrap",
  minWidth: 0,
  boxShadow: "none",
  transition: "none",
  backgroundColor: "transparent",
  "& .MuiTouchRipple-root": { display: "none" },
  "&:hover, &:active, &:focus, &:focus-visible, &.Mui-focusVisible, &.active": {
    color: "#1a1a1a",
    backgroundColor: "transparent !important",
    boxShadow: "none",
    fontWeight: 600,
    textDecoration: "none",
    transform: "none",
  },
};

export default function UkHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState({});
  const [countryAnchor, setCountryAnchor] = useState(null);

  const [country, setCountry] = useState("GB");

  const navigate = useNavigate();

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { label: "Home", path: "/uk" },
    { label: "About", path: "/uk/about" },
    { label: "Why Choose Milta", path: "/uk/why-choose-milta" },
    {
      label: "Services",
      path: "/uk/services",
      submenu: [
        { label: "Bookkeeping Services", to: "/uk/bookkeeping-services-for-small-business" },
        { label: "Accounts Payable", to: "/uk/accounts-payable-services-in-uk" },
        { label: "Accounts Receivable", to: "/uk/accounts-receivable-services-in-uk" },
        { label: "Payroll Services", to: "/uk/payroll-services-for-small-business" },
        { label: "Data Entry Services", to: "/uk/accounting-data-entry-services-uk" },
        { label: "Virtual Assistance", to: "/uk/virtual-assistant-services-in-the-uk" },
        { label: "Digital Marketing", to: "/uk/best-digital-marketing-service-in-uk" },
      ],
    },
    {
      label: "Industries",
      submenu: [
        { label: "Contractors", to: "/uk/accounting-services-for-contractors" },
        { label: "E-Commerce", to: "/uk/ecommerce-accounting-service" },
        { label: "Healthcare", to: "/uk/accounting-services-for-healthcare" },
        { label: "Hospitality", to: "/uk/hospitality-accounting-services" },
        { label: "Law Firms", to: "/uk/law-firm-accounting-services" },
        { label: "Manufacturing", to: "/uk/accounting-services-for-manufacturing" },
        { label: "Non-Profit", to: "/uk/accounting-services-for-non-profit" },
        { label: "Real Estate", to: "/uk/accounting-services-for-real-estate" },
        { label: "Restaurants", to: "/uk/accounting-services-for-restaurants" },
        { label: "Retail Business", to: "/uk/accounting-services-for-retail-business" },
      ],
    },
    { label: "Blog", path: "/uk/blogs" },
    { label: "Contact", path: "/uk/contact" },
  ];

  /* ================= COUNTRIES ================= */
  const countries = [
    { code: "US", label: "United States" },
    { code: "GB", label: "United Kingdom" },
  ];

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SERVICES MENU ================= */
  const handleServicesClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(item.label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  /* ================= MOBILE SUBMENU ================= */
  const toggleMobileMenu = (label) => {
    setMobileOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  /* ================= COUNTRY SELECT ================= */
  const handleCountrySelect = (code) => {
    setCountry(code);
    setCountryAnchor(null);
    setOpen(false);

    try { localStorage.setItem("milta_country", code); } catch { /* ignore */ }
    if (code === "US") navigate("/");
    if (code === "GB") navigate("/uk");
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          color: "#2b6d2a",
          fontFamily: "'Poppins', sans-serif",
          borderBottom: "1px solid rgba(0, 0, 0, 0.15)"

        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // ✅ Hide on Mobile
              justifyContent: "space-between",
              alignItems: "center",
              px: { md: 3 },
              py: 1,
            }}
          >
            {/* ================= LEFT SIDE (Address Only) ================= */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{
                  color: "#2b6d2a",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "#2b6d2a",
                  maxWidth: "720px",
                  lineHeight: 1.4,
                }}
              >
                Coimbatore, Tamil Nadu, India.
              </Typography>
            </Box>

            {/* ================= RIGHT SIDE (Email + Social Icons) ================= */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {/* Email */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <EmailIcon
                  fontSize="small"
                  sx={{
                    color: "#2b6d2a",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "#2b6d2a",
                  }}
                >
                  info@miltafs.com
                </Typography>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 1.2 }}>
                {/* LinkedIn */}
                <Box
                  component="a"
                  href="https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* Facebook */}
                <Box
                  component="a"
                  href="https://www.facebook.com/miltaaccountingservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* Instagram */}
                <Box
                  component="a"
                  href="https://www.instagram.com/milta_accountings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* YouTube */}
                <Box
                  component="a"
                  href="https://www.youtube.com/@milta-accounting-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

      </Box>

      {/* ================= MAIN HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.08)"
            : "none",
          boxShadow: scrolled ? "0 6px 18px rgba(0, 0, 0, 0.08)" : "none",
          transition: "0.3s",
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              px: { xs: 0, md: 1 },
              minHeight: {
                xs: scrolled ? 58 : 72, // 📱 Slimmer on mobile
                md: scrolled ? 70 : 85  // 💻 Standard on desktop
              },
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/uk"
              sx={{ display: "flex", alignItems: "center", flexShrink: 0, lineHeight: 0 }}
            >
              <Box
                component="img"
                src={logo}
                alt="Milta Logo"
                sx={{
                  display: "block",
                  height: {
                    xs: scrolled ? 40 : 46,
                    md: scrolled ? 50 : 60,
                  },
                  width: "auto",
                  transition: "height 0.3s ease",
                }}
              />
            </Box>

            {/* ================= DESKTOP NAV ================= */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: 0.25,
                minWidth: 0,
              }}
            >
              {navItems.map((item) =>
                item.submenu && item.path ? (
                  // Label navigates to the main page; caret opens the dropdown.
                  <Box key={item.label} sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      disableRipple
                      disableTouchRipple
                      disableFocusRipple
                      component={NavLink}
                      to={item.path}
                      sx={{ ...navItemSx, pl: 1.2, pr: 0.5 }}
                    >
                      {item.label}
                    </Button>
                    <IconButton
                      disableRipple
                      disableTouchRipple
                      disableFocusRipple
                      onClick={(e) => handleServicesClick(e, item)}
                      aria-label={`${item.label} submenu`}
                      sx={{ ...navItemSx, p: 0.25, minWidth: 0 }}
                    >
                      <ExpandMoreIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                ) : item.submenu ? (
                  // No landing page (e.g. Industries): the whole control opens the dropdown.
                  <Button
                    key={item.label}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    onClick={(e) => handleServicesClick(e, item)}
                    aria-label={`${item.label} menu`}
                    endIcon={<ExpandMoreIcon sx={{ fontSize: 18 }} />}
                    sx={{ ...navItemSx, px: 1.2, "& .MuiButton-endIcon": { ml: 0.25 } }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={item.label}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    component={NavLink}
                    to={item.path}
                    end={item.path === "/uk"}
                    sx={{ ...navItemSx, px: 1.2 }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>

            {/* ================= RIGHT: Country + CTA + Mobile ================= */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
              {/* Country selector — flag + country name + caret */}
              <Button
                disableRipple
                disableTouchRipple
                onClick={(e) => setCountryAnchor(e.currentTarget)}
                aria-label="Select country"
                endIcon={<ExpandMoreIcon sx={{ fontSize: 20 }} />}
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 0,
                  height: 42,
                  px: 1.25,
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "10px",
                  textTransform: "none",
                  color: "#1a1a1a",
                  "& .MuiButton-endIcon": { ml: 0.5 },
                  "& .MuiTouchRipple-root": { display: "none" },
                  "&:hover": { borderColor: "#2b6d2a", backgroundColor: "transparent" },
                }}
              >
                <Flag code={country} width={24} />
              </Button>

              {/* CTA */}
              <Button
                variant="contained"
                disableElevation
                component={NavLink}
                to="/uk/contact"
                sx={{
                  backgroundColor: "#2b6d2a",
                  color: "#fff",
                  borderRadius: "30px",
                  height: 40,
                  px: 2.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  display: { xs: "none", md: "inline-flex" },
                  "&:hover": {
                    backgroundColor: "#97ba3a",
                    color: "#ffffff",
                  },
                }}
              >
                Get A Quote →
              </Button>

              <IconButton
                aria-label="Open menu"
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= SERVICES / INDUSTRIES DROPDOWN ================= */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 260,
              maxHeight: "70vh",
              borderRadius: "14px",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
              py: 1,
            },
          },
        }}
      >
        {navItems
          .find((i) => i.label === activeMenu)
          ?.submenu?.map((sub) => (
            <MenuItem
              key={sub.label}
              disableRipple
              disableTouchRipple
              component={Link}
              to={sub.to}
              onClick={handleCloseMenu}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#1a1a1a",
                py: 1,
                transition: "none",
                "& .MuiTouchRipple-root": { display: "none" },
                "&:hover, &:focus, &:focus-visible, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover": {
                  color: "#1a1a1a",
                  backgroundColor: "transparent !important",
                },
              }}
            >
              {sub.label}
            </MenuItem>
          ))}
      </Menu>

      {/* ================= COUNTRY MENU ================= */}
      <Menu
        anchorEl={countryAnchor}
        open={Boolean(countryAnchor)}
        onClose={() => setCountryAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        marginThreshold={0}
        slotProps={{
          list: { sx: { py: 0.5 } },
          paper: {
            sx: {
              mt: 1,
              minWidth: "auto",
              borderRadius: "10px",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
            },
          },
        }}
      >
        {countries.map((c) => (
          <MenuItem
            key={c.code}
            disableRipple
            disableTouchRipple
            selected={country === c.code}
            onClick={() => handleCountrySelect(c.code)}
            aria-label={c.label}
            title={c.label}
            sx={{
              justifyContent: "center",
              minWidth: 0,
              px: 1.5,
              py: 1.25,
              transition: "none",
              "& .MuiTouchRipple-root": { display: "none" },
              "&:hover, &:focus, &:focus-visible, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "transparent !important",
              },
            }}
          >
            <Flag code={c.code} width={28} />
          </MenuItem>
        ))}
      </Menu>

      {/* ================= MOBILE DRAWER ================= */}
      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
              flexShrink: 0,
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <Box
              component={Link}
              to="/uk"
              onClick={() => setOpen(false)}
              sx={{ display: "flex", alignItems: "center", lineHeight: 0 }}
            >
              <Box component="img" src={logo} alt="Milta Logo" sx={{ display: "block", height: 40, width: "auto" }} />
            </Box>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Items — scrollable so long submenus aren't cut off */}
          <List sx={{ flexGrow: 1, overflowY: "auto", minHeight: 0 }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemButton
                    disableRipple
                    disableTouchRipple
                    component={item.path ? Link : "button"}
                    to={item.path || undefined}
                    onClick={() => {
                      // Items with a page navigate (and close the drawer); the
                      // caret handles expanding any submenu. Submenu-only items
                      // (no page) toggle on tap.
                      if (item.path) {
                        setOpen(false);
                        return;
                      }
                      if (item.submenu) {
                        toggleMobileMenu(item.label);
                        return;
                      }
                      setOpen(false);
                    }}
                    sx={{
                      flex: 1,
                      "& .MuiTouchRipple-root": { display: "none" },
                      "&:hover, &:focus, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "transparent !important",
                      },
                      transition: "none",
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                  {item.submenu && (
                    <IconButton
                      onClick={() => toggleMobileMenu(item.label)}
                      sx={{ mr: 1 }}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ExpandMoreIcon
                        sx={{
                          transform: mobileOpen[item.label] ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "0.2s",
                        }}
                      />
                    </IconButton>
                  )}
                </Box>

                {item.submenu && (
                  <Collapse in={mobileOpen[item.label]}>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.label}
                        disableRipple
                        disableTouchRipple
                        component={Link}
                        to={sub.to}
                        sx={{
                          pl: 4,
                          "& .MuiTouchRipple-root": { display: "none" },
                          "&:hover, &:focus, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover": {
                            backgroundColor: "transparent !important",
                          },
                          transition: "none",
                        }}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </Collapse>
                )}
              </Box>
            ))}
          </List>

          {/* ================= COUNTRY SELECTOR (Mobile) ================= */}
          <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", p: 2, flexShrink: 0 }}>
            <Typography variant="subtitle1" sx={{ mb: 1.25, fontWeight: 600, fontSize: "0.9rem" }}>
              Choose Country
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {countries.map((c) => (
                <Button
                  key={c.code}
                  onClick={() => handleCountrySelect(c.code)}
                  aria-label={c.label}
                  title={c.label}
                  sx={{
                    minWidth: 0,
                    width: 48,
                    height: 40,
                    p: 0,
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: country === c.code ? "#2b6d2a" : "transparent",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <Flag code={c.code} width={24} />
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>

    </>
  );
}
