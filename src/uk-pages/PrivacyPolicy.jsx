import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useFullSEO from "../utils/useFullSEO";

const PrivacyPolicy = () => {
  useFullSEO({
    title: "Your Privacy Is Safe With Us | Milta’s Policy",
    description:
      "We know trust matters. That’s why Milta is dedicated to protecting your personal and business information. Click to see how we keep you safe.",
    keywords:
      "milta privacy policy, security policy, privacy policy, Business security policy",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/privacy-policy",
     ogTitle: "Your Privacy Is Safe With Us | Milta’s Policy",
    ogDescription: "We know trust matters. That’s why Milta is dedicated to protecting your personal and business information. Click to see how we keep you safe.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/privacy-policy",
  });

  return (
    <Box
      sx={{
        py: { xs: 7, md: 8 },
        px: 2,
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md" sx={{ maxWidth: "1100px" }}>
        {/* Page Title */}
        <Typography
          variant="h4"
          component="h1"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 0.5,
            lineHeight: 1.3,
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
          }}
        >
          Privacy Policy
        </Typography>

        {/* Last Modified Date */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            color: "#555",
            fontStyle: "italic",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Last Modified: 24 February 2025
        </Typography>

        {/* Intro */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            lineHeight: 1.3,
          }}
        >
          Your Trusted Partner in Financial Success
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 0,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Milta Accounting Service is more than just an accounting firm; we're
          your financial compass, guiding you towards a future where your
          business thrives. Based in India, we specialize in providing
          comprehensive accounting services to UK clients, ensuring your
          financial operations run smoothly and efficiently.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: 15, sm: 16, md: 17 },
            lineHeight: 1.9,
            textAlign: "justify",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Milta Accounting Service can help your business grow — we are a top
          Outsourcing Solution for your accounting needs in Coimbatore. Our
          services include tax planning & preparation, CPA service, virtual
          assistance, data entry, and more. Let’s look at an overview of our
          outsource accounting services.
        </Typography>

        {/* Why Choose Miltafs */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mt: 4,
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            color: "#97ba3a",
          }}
        >
          Why Choose Miltafs?
        </Typography>

        <List sx={{ mb: 3 }}>
          {[
            {
              title: "UK Expertise",
              desc: "Our team is well-versed in UK accounting standards, regulations, and tax laws, ensuring your compliance and minimizing risks.",
            },
            {
              title: "Personalized Service",
              desc: "We believe in developing strong relationships with our clients. Our dedicated team works closely with you to understand your unique business needs and tailor our services accordingly.",
            },
            {
              title: "Efficiency and Accuracy",
              desc: "We leverage advanced accounting tools and methodologies to streamline processes, reduce errors, and deliver accurate financial reports on time.",
            },
            {
              title: "Cost-Effective Solutions",
              desc: "Our offshore model offers significant cost savings without compromising on quality.",
            },
            {
              title: "Data Security and Privacy",
              desc: "We prioritize the protection of your sensitive financial data. Our robust security measures ensure your information remains confidential.",
            },
          ].map((item, index) => (
            <ListItem key={index} sx={{ alignItems: "flex-start", pl: 0 }}>
              <ListItemIcon sx={{ minWidth: "35px", color: "#97ba3a" }}>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: 600,
                  lineHeight: 1.5,
                  mt: -0.5,
                  color: "#2b6d2a",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: 15, sm: 16, md: 17 },
                }}
                secondaryTypographyProps={{
                  lineHeight: 1.9,
                  color: "#333",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: 14, sm: 15, md: 16 },
                }}
                primary={item.title}
                secondary={item.desc}
              />
            </ListItem>
          ))}
        </List>

        {/* Services */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mt: 0,
            mb: 0,
            fontFamily: "'Poppins', sans-serif",
            color: "#97ba3a",
          }}
        >
          Our Services
        </Typography>

        <List sx={{ mb: 4 }}>
          {[
            "Bookkeeping",
            "Account Payable",
            "Account Receivable",
            "Payroll Processing",
            "Virtual Assistance",
            "Digital Marketing",
            "Data Entry",
          ].map((service, i) => (
            <ListItem key={i} sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: "35px", color: "#97ba3a" }}>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  lineHeight: 1.7,
                  fontWeight: 500,
                  color: "#333",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: 15, sm: 16, md: 17 },
                }}
                primary={service}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 4, borderColor: "#97ba3a" }} />

        {/* Policy Sections */}
        {[
          {
            title: "2. Information We Collect",
            content: [
              "Full names, email addresses, and contact details",
              "Financial data, including tax documents and bank information",
              "Information about business transactions",
              "IP addresses and website usage data",
            ],
          },
          {
            title: "3. How We Use Your Information",
            content: [
              "Provide accounting and financial services",
              "Comply with the UK. tax laws and regulations",
              "Communicate with you about your account and services",
              "Improve and optimize our website and services",
            ],
          },
          {
            title: "4. Data Sharing",
            content: [
              "When required by law (e.g., UK. government authorities)",
              "With service providers, such as cloud storage or accounting software, to fulfill our services",
            ],
          },
          {
            title: "5. Data Storage & Retention",
            content:
              "Personal data is securely stored on servers either in India or the United Kingdom. We retain data for as long as necessary to provide services and comply with legal obligations.",
          },
          {
            title: "6. Security",
            content:
              "Miltafs takes data security seriously. We implement strong encryption protocols and access controls to protect your data against unauthorized access or disclosure.",
          },
          {
            title: "7. Your Rights",
            content:
              "You have the right to request access, correction, or deletion of your personal data at any time. Please contact us at info@miltafs.com to exercise these rights.",
          },
          {
            title: "8. Cookies",
            content:
              "Our website may use cookies to enhance the user experience. You may choose to disable cookies in your browser settings, but this could affect website functionality.",
          },
          {
            title: "9. Changes to this Privacy Policy",
            content:
              "Miltafs maintains the right to make necessary updates to this privacy statement. Any major changes will be communicated to you by email or a notice on our website.",
          },
        ].map((section, i) => (
          <Box key={i} sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "#97ba3a",
                lineHeight: 1.5,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: 16, sm: 17, md: 18 },
              }}
            >
              {section.title}
            </Typography>
            {Array.isArray(section.content) ? (
              <List dense sx={{ pl: 0 }}>
                {section.content.map((point, idx) => (
                  <ListItem key={idx} sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: "35px", color: "#97ba3a" }}>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        lineHeight: 1.9,
                        color: "#333",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: 14, sm: 15, md: 16 },
                      }}
                      primary={point}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.9,
                  textAlign: "justify",
                  color: "#333",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: 14, sm: 15, md: 16 },
                }}
              >
                {section.content}
              </Typography>
            )}
          </Box>
        ))}

        <Divider sx={{ my: 4, borderColor: "#97ba3a" }} />

        {/* Closing */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mt: 2,
            lineHeight: 1.9,
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: 15, sm: 16, md: 17 },
          }}
        >
          Let Miltafs help you achieve your financial goals.{" "}
          <Box component="span" sx={{ color: "#97ba3a" }}>
            Contact us today for a free consultation.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;