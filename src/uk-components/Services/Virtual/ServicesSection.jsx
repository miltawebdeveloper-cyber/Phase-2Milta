// src/uk-components/Services/VirtualAssistant/UkVirtualAssistantServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Suitable Icons */
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const services = [
  {
    title: "Real Estate Virtual Assistant",
    desc: "Manage property listings, update client databases, coordinate viewings, assist with virtual tours, and prepare market research reports—so you can focus on closing deals.",
  },
  {
    title: "Data Entry Services",
    desc: "Accurate data entry across spreadsheets, CRM systems, and internal databases, ensuring consistency, reduced errors, and easy access to business information.",
  },
  {
    title: "Event Planning Support",
    desc: "End-to-end coordination for virtual meetings and in-person events, including RSVPs, vendor management, schedules, and timelines.",
  },
  {
    title: "Internet Research",
    desc: "In-depth market research, competitor analysis, and customer insights to support informed decision-making and strategic planning.",
  },
  {
    title: "Business Card Scanning",
    desc: "Digitise and organise business cards into structured contact systems, ensuring no leads are lost and databases stay current.",
  },
  {
    title: "Appointment Scheduling",
    desc: "Calendar management, meeting scheduling, reminders, and rescheduling across time zones—keeping your diary organised and stress-free.",
  },
  {
    title: "Accounting & Virtual Bookkeeping",
    desc: "Support with transaction entries, reconciliations, and financial reporting while maintaining compliance with UK accounting requirements.",
  },
  {
    title: "Call Answering Services",
    desc: "Professional call handling to ensure every enquiry is answered promptly, enhancing customer experience and reducing missed opportunities.",
  },
  {
    title: "Correspondence Management",
    desc: "Inbox management, drafting professional responses, organising communications, and ensuring timely follow-ups.",
  },
  {
    title: "Desktop Publishing Services",
    desc: "Creation of polished brochures, newsletters, reports, and presentations that are professional, consistent, and on-brand.",
  },
  {
    title: "Presentations & Spreadsheets",
    desc: "Design clear, professional presentations and structured spreadsheets to communicate data and ideas effectively.",
  },
  {
    title: "Travel & Hotel Reservations",
    desc: "Complete travel management including flights, accommodation, transport, and itineraries—tailored to your preferences and budget.",
  },
];

const UkVirtualAssistantServicesSection = () => {
  /* ✅ Icon Map for Each Service */
  const iconMap = {
    "Real Estate Virtual Assistant": HomeWorkIcon,
    "Data Entry Services": DataUsageIcon,
    "Event Planning Support": EventAvailableIcon,
    "Internet Research": TravelExploreIcon,
    "Business Card Scanning": ContactPhoneIcon,
    "Appointment Scheduling": ScheduleIcon,
    "Accounting & Virtual Bookkeeping": AccountBalanceIcon,
    "Call Answering Services": SupportAgentIcon,
    "Correspondence Management": MailIcon,
    "Desktop Publishing Services": DesktopWindowsIcon,
    "Presentations & Spreadsheets": SlideshowIcon,
    "Travel & Hotel Reservations": FlightTakeoffIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 0 }, pb: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1300, mx: "auto", textAlign: "center" }}>
          {/* ================= HEADER ================= */}
          <Box sx={{ maxWidth: 750, mx: "auto", mb: { xs: 6, md: 8 } }}>
            {/* Label */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#97ba3a",
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Services
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "42px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                color: "#2b6d2a",
              }}
            >
              Our Virtual Assistant Services
              <br />
              in the UK
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 650,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
            >
              Miltafs offers a comprehensive range of virtual assistant services
              in the UK, designed to support small and growing businesses with
              efficient, reliable, and scalable operational support.
            </Typography>
          </Box>

          {/* ================= SERVICE CARDS (Modern Style) ================= */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              width: "100%",
              maxWidth: 1080,
              mx: "auto",
            }}
          >
            {services.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 280px", md: "0 1 300px" },
                  maxWidth: { xs: "100%", sm: 320 },
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    maxWidth: 280,
                    width: "100%",
                    p: 3.5,
                    borderRadius: "16px",
                    height: "100%",

                    /* ✅ Same Premium Gradient Style */
                    background:
                      "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",

                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,

                    position: "relative",
                    transition:
                      "transform 0.32s ease, box-shadow 0.32s ease, background 0.32s ease",

                    boxShadow: "0 8px 24px rgba(43,109,42,0.06)",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 28px 70px rgba(15,23,42,0.14)",
                      background:
                        "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                    },
                  }}
                >
                  {/* ✅ Icon Badge Same as Bookkeeping */}
                  {(() => {
                    const Icon = iconMap[item.title] || CheckCircleIcon;
                    return (
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          background:
                            "linear-gradient(135deg,#ffffff10,#ffffff05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            "inset 0 2px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.08)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 1.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg,#97ba3a,#2b6d2a)",
                          }}
                        >
                          <Icon sx={{ fontSize: 26, color: "#fff" }} />
                        </Box>
                      </Box>
                    );
                  })()}

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: 16.5,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "rgba(255,255,255,0.92)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.88)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UkVirtualAssistantServicesSection;
