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
        background: "radial-gradient(circle at top, #0f3f2f 0%, #071f18 70%)",
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
          Elite Virtual Assistant Services in Texas:{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Your Small Business Solution
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Need exceptional virtual assistant services in Texas? Our reliable,
          cost-effective solutions help small businesses save time and focus on growth.
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
          Get Started Today
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
      title: "Real Estate Virtual Assistant Texas",
      desc: "Property listings, client database management, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Accurate and error-free data entry across spreadsheets and business software.",
    },
    {
      title: "Event Planning",
      desc: "RSVP handling, vendor coordination, scheduling, and event logistics support.",
    },
    {
      title: "Internet Research",
      desc: "Market trends, competitor analysis, and actionable business insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize and organize contacts for seamless communication.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Calendar management, reminders, and rescheduling services.",
    },
    {
      title: "Accounting & Virtual Bookkeeping Service",
      desc: "Account reconciliation, financial statements, and compliance support.",
    },
    {
      title: "Call Answering",
      desc: "Professional inbound call handling and customer inquiry management.",
    },
    {
      title: "Correspondence Management",
      desc: "Email handling, professional drafting, and inbox organization.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Brochures, flyers, newsletters, and professional document design.",
    },
    {
      title: "Presentations & Spreadsheets Creation",
      desc: "Engaging presentations and structured spreadsheet reporting.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Flight bookings, hotel arrangements, and itinerary planning.",
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
          Our Virtual Assistant Services in Texas
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
export default function VirtualAssistantTexas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What distinguishes a typical employee from a virtual assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A virtual assistant works remotely and provides services on a flexible or part-time basis, unlike traditional employees who require physical office space and full-time salaries.",
        },
      },
      {
        "@type": "Question",
        name: "Can virtual assistants handle confidential data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our virtual assistants follow strict security measures to ensure the confidentiality of your business data.",
        },
      },
      {
        "@type": "Question",
        name: "Are virtual assistant services affordable for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Our services are cost-effective, offering professional support without the high expenses associated with full-time employees.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact my virtual assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide multiple communication channels, including email, video calls, and project management tools.",
        },
      },
    ],
  };

  useFullSEO({
    title: "Virtual Assistant Services in Texas, USA for Small Businesses",
    description:
      "Milta delivers virtual assistant support in Texas, including bookkeeping, financial coordination, and daily operations.",
    keywords:
      "virtual assistants service in texas, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant texas",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/virtual-assistant-service-in-texas/",
    schema: faqSchema,
  });

  const highlights = [
    "Cost Savings",
    "Enhanced Productivity",
    "Flexibility & Scalability",
    "Expert Support",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "A virtual assistant works remotely and provides services on a flexible or part-time basis, unlike traditional employees who require physical office space and full-time salaries.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, our virtual assistants follow strict security measures to ensure the confidentiality of your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely! Our services are cost-effective, offering professional support without the high expenses associated with full-time employees.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "We provide multiple communication channels, including email, video calls, and project management tools.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant services?",
      a: "Yes, our services are entirely customizable to suit your specific business needs and priorities.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Dynamic Opportunities with Texas’s Premier Virtual Assistant Services">
        <Typography mb={3}>
          At Milta, we understand the challenges small business owners face in balancing daily
          operations, financial responsibilities, and long-term strategy. Our virtual
          assistant service in Texas is designed to streamline processes, reduce manual
          workload, and enhance efficiency.
        </Typography>
        <Typography>
          From reliable virtual bookkeeping that maintains financial accuracy to proactive
          administrative assistance, our experts help Texas businesses stay focused on
          sustainable growth.
        </Typography>
      </Section>

      {WaveDivider && <WaveDivider />}

      <Section title="Advantages of Virtual Assistant Services in Texas">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
