import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";


/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at top, #0f3f2f 0%, #071f18 70%)",
        color: white,
        py: { xs: 7, sm: 9, md: 11 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={2}
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          Transforming Business Support in the Digital Era:{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Professional Virtual Assistants in Connecticut
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Connecticut businesses increasingly turn to professional virtual
          assistants to optimize operations and streamline workflow. Our skilled
          virtual professionals offer a wide range of services to support your
          business.
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 700,
            borderRadius: 30,
            fontSize: "1rem",
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": {
              bgcolor: "#ffa726",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Schedule a Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={900} mx="auto">
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gap: 3,
      mt: 2,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          p: 3.5,
          bgcolor: softOrange,
          borderRadius: 3,
          border: `1px solid ${hoverOrange}`,
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
          },
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= SERVICES ================= */
const VirtualAssistantServices = () => {
  const services = [
    {
      title: "Real Estate Virtual Assistant CT",
      desc: "Manage property listings, client databases, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Ensure accurate data entry across spreadsheets and business systems for efficiency and consistency.",
    },
    {
      title: "Event Planning",
      desc: "Coordinate RSVPs, vendors, scheduling, and logistics for smooth events.",
    },
    {
      title: "Internet Research",
      desc: "Provide market trends, competitor analysis, and actionable insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize and organize contacts for easy access and communication.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Calendar management, reminders, and rescheduling made simple.",
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Maintain accurate records, reconcile accounts, and generate financial statements.",
    },
    {
      title: "Call Answering",
      desc: "Handle inbound calls professionally and manage inquiries efficiently.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails and communications promptly and professionally.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Create brochures, flyers, newsletters, and professional documents.",
    },
    {
      title: "Presentations & Spreadsheets",
      desc: "Design presentations and spreadsheets that are clear and professional.",
    },
    {
      title: "Travel & Hotel Reservations",
      desc: "Plan flights, hotels, and itineraries seamlessly.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        py: { xs: 7, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Our Virtual Assistant Services in Connecticut
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: "all 0.35s ease",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <Typography fontWeight={700} mb={2} color={primaryGreen}>
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: 9, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography
        variant="h4"
        fontWeight={800}
        mb={5}
        textAlign="center"
        color={primaryGreen}
      >
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion
          key={i}
          sx={{
            mb: 2,
            borderRadius: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
          >
            <Typography fontWeight={700}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= PAGE ================= */
export default function VirtualAssistantConnecticut() {
  useFullSEO({
  // MAIN SEO
  title: "Professional Virtual Assistants Service in Connecticut, USA",
  description:
    "We understand the daily challenges that small business owners encounter—from juggling administrative responsibilities to managing finances.",
  keywords:
    "virtual assistants service in connecticut, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant ct",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-connecticut/",
});

  const highlights = [
    "Cost Savings",
    "Increased Productivity",
    "Flexibility & Scalability",
    "Expert Support",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "A virtual assistant works remotely and provides flexible support, unlike traditional full-time employees.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, strict security measures are followed to protect your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely. You pay only for the services you need without overhead costs.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "Through email, video calls, and project management tools for seamless communication.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant?",
      a: "Yes. All tasks are fully customizable to fit your business needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Virtual Assistant Services for Small Businesses in Connecticut">
        <Typography mb={3}>
          Becoming a professional virtual assistant in Connecticut offers
          exciting opportunities for individuals seeking a flexible and
          rewarding career. Virtual assistants have become indispensable in
          providing efficient support to help businesses thrive.
        </Typography>
        <Typography>
          At Milta, we handle administrative responsibilities, finances, and
          operational tasks so small business owners can focus on growth and
          efficiency.
        </Typography>
      </Section>
      <WaveDivider />

      <Section title="Benefits of Virtual Assistant Services in Connecticut">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
