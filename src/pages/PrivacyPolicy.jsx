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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
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
    ogDescription:
      "We know trust matters. That’s why Milta is dedicated to protecting your personal and business information. Click to see how we keep you safe.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/privacy-policy",
  });

  const highlights = [
    {
      title: "US Expertise",
      desc: "Our team is well-versed in US accounting standards, regulations, and tax laws, ensuring compliance and minimizing risks.",
    },
    {
      title: "Personalized Service",
      desc: "We build strong client relationships and tailor our services to your unique business needs.",
    },
    {
      title: "Efficiency and Accuracy",
      desc: "We use advanced tools to streamline processes, reduce errors, and deliver timely, accurate reports.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "Our offshore model offers significant cost savings without compromising quality.",
    },
    {
      title: "Data Security and Privacy",
      desc: "We prioritize your financial data protection with robust encryption and security protocols.",
    },
  ];

  const services = [
    "Bookkeeping",
    "Tax Planning & Preparations",
    "Payroll Processing",
    "CPA Service",
    "Virtual Assistance",
    "Digital Marketing",
    "Data Entry",
    "Controller Service",
  ];

  const sections = [
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
        "Comply with U.S. tax laws and regulations",
        "Communicate with you about your account and services",
        "Improve and optimize our website and services",
      ],
    },
    {
      title: "4. Data Sharing",
      content: [
        "When required by law (e.g., IRS or U.S. government authorities)",
        "With trusted service providers (e.g., cloud storage or accounting software) to fulfill our services",
      ],
    },
    {
      title: "5. Data Storage & Retention",
      content:
        "Personal data is securely stored on servers in India or the United States. We retain data as long as necessary to provide services and comply with legal obligations.",
    },
    {
      title: "6. Security",
      content:
        "Miltafs implements strong encryption and access controls to protect your data against unauthorized access or disclosure.",
    },
    {
      title: "7. Your Rights",
      content:
        "You may request access, correction, or deletion of your personal data at any time. Contact us at info@miltafs.com to exercise these rights.",
    },
    {
      title: "8. Cookies",
      content:
        "Our website uses cookies to enhance your experience. You may disable cookies in your browser settings, but this may affect functionality.",
    },
    {
      title: "9. Changes to this Privacy Policy",
      content:
        "Miltafs reserves the right to update this privacy statement. Major changes will be communicated via email or website notice.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
            }}
          >
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.24em" }}>
              Legal Information
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "text.primary",
                mb: 3,
              }}
            >
              Privacy Policy
            </Typography>

            <Typography variant="h5" sx={{ color: "primary.main", fontWeight: 700, mb: 2 }}>
              Your Trusted Partner in Financial Success
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2, textAlign: "justify" }}>
              Milta Accounting Service is more than just an accounting firm; we're your financial compass, guiding you towards a future where your business thrives. Based in India, we specialize in providing comprehensive accounting services to US clients, ensuring your financial operations run smoothly and efficiently.
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, textAlign: "justify" }}>
              Milta Accounting Service can help your business grow — we are a top Outsourcing Solution for your accounting needs in Coimbatore. Our services include tax planning & preparation, CPA service, virtual assistance, data entry, and more. Let’s look at an overview of our outsource accounting services.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2, color: "primary.main" }}>
              Why Choose Miltafs?
            </Typography>

            <List sx={{ mb: 3 }}>
              {highlights.map((item, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start", pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: "35px", color: "primary.main" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 600,
                      lineHeight: 1.5,
                      mt: -0.5,
                      color: "text.primary",
                    }}
                    secondaryTypographyProps={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                    primary={item.title}
                    secondary={item.desc}
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}>
              Our Services
            </Typography>

            <List sx={{ mb: 4 }}>
              {services.map((service, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: "35px", color: "primary.main" }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      lineHeight: 1.7,
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                    primary={service}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 4, borderColor: "primary.main" }} />

            {sections.map((section, i) => (
              <Box key={i} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "primary.main", lineHeight: 1.5 }}>
                  {section.title}
                </Typography>
                {Array.isArray(section.content) ? (
                  <List dense sx={{ pl: 0 }}>
                    {section.content.map((point, idx) => (
                      <ListItem key={idx} sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: "35px", color: "primary.main" }}>
                          <ArrowRightAltIcon />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            lineHeight: 1.8,
                            color: "text.primary",
                          }}
                          primary={point}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: "justify", color: "text.primary" }}>
                    {section.content}
                  </Typography>
                )}
              </Box>
            ))}

            <Divider sx={{ my: 4, borderColor: "primary.main" }} />

            <Typography variant="body1" sx={{ textAlign: "center", fontWeight: 600, mt: 2, lineHeight: 1.8, color: "text.primary" }}>
              Let Miltafs help you achieve your financial goals. {" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Contact us today for a free consultation.
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default PrivacyPolicy;
