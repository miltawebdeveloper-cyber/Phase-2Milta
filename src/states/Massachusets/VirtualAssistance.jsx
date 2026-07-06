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
          Supercharge Your Business with{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Premier Virtual Assistant Services in Massachusetts
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Our virtual assistant MA experts streamline workflows, cut costs, and boost productivity.
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
          Partner with Milta To The Next Level
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
      title: "Real Estate Virtual Assistant MA",
      desc: "Manage property listings, client databases, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Accurate data entry across spreadsheets and business systems for organized records.",
    },
    {
      title: "Event Planning",
      desc: "RSVPs, vendor coordination, scheduling, and logistics for seamless events.",
    },
    {
      title: "Internet Research",
      desc: "Market research, competitor analysis, and actionable insights for informed decisions.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize and organize contacts for easy access and communication.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Manage calendar, send reminders, and handle rescheduling across time zones.",
    },
    {
      title: "Accounting & Virtual Bookkeeping",
      desc: "Maintain accurate financial records, reconcile accounts, and generate statements.",
    },
    {
      title: "Call Answering",
      desc: "Professional handling of inbound calls and inquiries efficiently.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails, draft professional messages, and organize communications.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Create brochures, flyers, newsletters, and reports customized to your business needs.",
    },
    {
      title: "Presentations & Spreadsheets",
      desc: "Design clear, visually engaging presentations and detailed spreadsheets.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Plan flights, hotel stays, and itineraries seamlessly for business trips.",
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
          Our Virtual Assistant Services in Massachusetts
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
export default function VirtualAssistantMassachusetts() {
  useFullSEO({
  // MAIN SEO
  title: "Leading Virtual Assistant Services in MA | Milta",
  description:
    "Milta stands among the best virtual assistant companies, offering premium virtual assistants for small business solutions.",
  keywords:
    "virtual assistants service in massachusetts, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant ma",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-massachusetts/",
});

  const highlights = [
    "Smart, Cost-Effective Solutions",
    "Maximize Productivity & Efficiency",
    "Expertise at Your Fingertips",
    "Scalable Support for Business Growth",
    "Achieve Work-Life Balance",
    "Seamless Collaboration & Communication",
    "Refocus on Core Business Growth",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "A virtual assistant works remotely and provides flexible or part-time support, unlike traditional full-time employees.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, strict security measures are followed to ensure confidentiality.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely! You only pay for the services you need without high overhead costs.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "Via email, video calls, and project management tools for seamless interaction.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant services?",
      a: "Yes, our services are fully customizable to suit your business needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Efficiency with Virtual Assistant Services in Massachusetts">
        <Typography mb={3}>
          Running a business comes with endless tasks from administrative overload to complex financial management. Our virtual assistant services in Massachusetts provide expert support to streamline operations, boost productivity, and free up your time for high-value decision-making.
        </Typography>
        <Typography>
          Whether you're a solo entrepreneur or leading a fast-growing company, our virtual assistant companies offer customized solutions tailored to your needs. From virtual bookkeeping services to executive-level administrative support, our skilled professionals help you stay ahead.
        </Typography>
      </Section>
      <WaveDivider />

      <Section title="Harness the Power of Virtual Assistant Services in Massachusetts">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
