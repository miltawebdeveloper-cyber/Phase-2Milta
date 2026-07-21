// src/components/WhatWeDoSection.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

/* ✅ Modern Outline Icons */
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

const services = [
  {
    icon: <BusinessCenterOutlinedIcon />,
    title: "Value-Driven Accounting Approach",
    desc: "We combine best-practice methodologies with tailored accounts payable solutions that support sustainable business growth and stronger financial control.",
  },
  {
    icon: <ChecklistOutlinedIcon />,
    title: "Advanced Accounting Automation",
    desc: "By integrating AI and automation tools, we reduce manual processing, enhance accuracy, and speed up invoice turnaround times.",
  },
  {
    icon: <GavelOutlinedIcon />,
    title: "Proven Outsourcing Expertise",
    desc: "With over 10 years of experience, we deliver dependable accounts payable outsourcing services that improve efficiency and financial control.",
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    title: "Dedicated Accounts Payable Specialist",
    desc: "You’ll have direct access to a dedicated AP professional who manages your payables with consistency, accountability, and accuracy.",
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    title: "Real-Time Financial Visibility",
    desc: "Our reporting and dashboards provide real-time insights into liabilities, payment status, and cash flow projections.",
  },
  {
    icon: <BusinessCenterOutlinedIcon />,
    title: "Cost-Efficient Outsourcing Model",
    desc: "Outsourcing accounts payable to Milta reduces overhead costs, recruitment expenses, and training investments while delivering enterprise-level accuracy and compliance.",
  },
];

const WhatWeDoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 3 },
        pb: { xs: 10, md: 3 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mb: 10 }}>
          {/* Label */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 14,
                color: "#2b6d2a",
              }}
            >
              Why Choose Us
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 28, md: 44 },
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#2b6d2a",
              fontFamily: "'Poppins', sans-serif",
              mb: 3,
            }}
          >
            Why Choose Milta for
            <br />
            Accounts Payable Services?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: "#666",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Our accounts payable services are designed to improve accuracy,
            control costs, and give UK businesses full visibility into their
            payables while reducing operational complexity.
          </Typography>
        </Box>

        {/* ================= SERVICES GRID ================= */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 4,
            maxWidth: 1080,
            mx: "auto",
          }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 300px", md: "0 1 320px" },
                maxWidth: { xs: "100%", sm: 340 },
                display: "flex",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#2b6d2a",
                  borderRadius: "18px",
                  p: 4,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",

                  transition: "all 0.35s ease",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.10)",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    backgroundColor: "#97ba3a",
                    boxShadow: "0px 20px 45px rgba(0,0,0,0.18)",
                  },
                }}
              >
                {/* Icon Box */}
                <Box
                  sx={{
                    mb: 3,
                    width: 55,
                    height: 55,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    fontSize: 34,
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16.5,
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDoSection;
