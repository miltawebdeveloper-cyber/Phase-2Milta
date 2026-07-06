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
          Maximize Productivity with{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Expert Virtual Assistant Services
          </Box>{" "}
          in Virginia
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Reliable, cost-effective virtual assistant solutions helping small
          businesses save time and focus on growth.
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
    { title: "Real Estate Virtual Assistant VA", desc: "Property listings, client database management, virtual tours, scheduling showings, market research, and reporting." },
    { title: "Data Entry", desc: "Accurate and organized data entry across spreadsheets and business systems." },
    { title: "Event Planning", desc: "RSVPs, vendor coordination, scheduling, and logistics management." },
    { title: "Internet Research", desc: "Market research and competitor analysis with actionable insights." },
    { title: "Business Card Scanning", desc: "Digitizing and organizing contacts for easy access." },
    { title: "Appointment Scheduling", desc: "Calendar management, reminders, and rescheduling." },
    { title: "Accounting & Virtual Bookkeeping", desc: "Reconciliations, financial reports, and tax-ready records." },
    { title: "Call Answering", desc: "Professional call handling and inquiry management." },
    { title: "Correspondence Management", desc: "Email handling and inbox organization." },
    { title: "Desktop Publishing Services", desc: "Brochures, flyers, newsletters, and documents." },
    { title: "Presentations & Spreadsheets", desc: "Professional slides and structured reports." },
    { title: "Travel & Hotel Reservations", desc: "Flights, hotels, and itinerary planning." },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
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
          Our Virtual Assistant Services in Virginia
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
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Typography
                fontWeight={700}
                mb={2}
                color={primaryGreen}
              >
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">
                {item.desc}
              </Typography>
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
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}>
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
export default function VirtualAssistantVirginia() {
  useFullSEO({
  // MAIN SEO
  title: "Client Satisfaction Based Virtual Assistant Services in Virginia",
  description:
    "Our virtual assistant service in Virginia handles finances & more, providing trusted support for all types of business needs.",
  keywords:
    "virtual assistants service in virginia, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant va",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-virginia/",
});

  const highlights = [
    "Minimize hiring and operational costs",
    "Boost productivity with expert support",
    "Flexible and scalable virtual assistant services",
    "Focus on growth while we handle daily tasks",
  ];

  const faqData = [
    {
      q: "What distinguishes a virtual assistant from a traditional employee?",
      a: "Virtual assistants work remotely and provide flexible, cost-effective support without office space or full-time salaries.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, strict confidentiality and security protocols are followed.",
    },
    {
      q: "Are virtual assistant services affordable?",
      a: "Yes, you only pay for the services you need.",
    },
    {
      q: "How do I communicate with my virtual assistant?",
      a: "Via email, video calls, and project management tools.",
    },
    {
      q: "Can I customize assigned tasks?",
      a: "Absolutely. Services are fully customizable.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Exciting Opportunities with Virtual Assistant Services in Virginia">
        <Typography mb={3}>
          A career in virtual assistant services in Virginia offers flexibility
          and rewarding growth opportunities. Virtual assistants help businesses
          improve efficiency and drive success.
        </Typography>
        <Typography>
          At Milta, we support small businesses by managing administrative,
          financial, and operational tasks so you can scale confidently.
        </Typography>
      </Section>
      <WaveDivider />

      <Section title="Advantages of Virtual Assistant Services in Virginia">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
