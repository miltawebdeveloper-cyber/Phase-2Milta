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
          Elite Virtual Assistant Services in Ohio:{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Your Small Business Solution
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Need exceptional virtual assistant services in Ohio? Our reliable,
          cost-effective solutions help small businesses save time and focus on
          growth. Trusted by leading companies.
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
      title: "Real Estate Virtual Assistant OH",
      desc: "Handle property listings, client databases, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Ensure accurate, organized data across spreadsheets and business systems.",
    },
    {
      title: "Event Planning",
      desc: "Manage RSVPs, vendor coordination, scheduling, and on-site support.",
    },
    {
      title: "Internet Research",
      desc: "Market research and competitor analysis with actionable insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize and organize contacts for smooth communication.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Calendar management, reminders, and rescheduling for efficiency.",
    },
    {
      title: "Accounting & Virtual Bookkeeping",
      desc: "Maintain financial records, reconcile accounts, and generate statements.",
    },
    {
      title: "Call Answering",
      desc: "Professional handling of inbound calls and inquiries.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails, draft messages, and organize inboxes efficiently.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Design brochures, flyers, newsletters, and professional documents.",
    },
    {
      title: "Presentations & Spreadsheets Creation",
      desc: "Create engaging presentations and detailed spreadsheets.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Plan flights, hotels, and itineraries for seamless travel.",
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
          Our Virtual Assistant Services in Ohio
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
export default function VirtualAssistantOhio() {
  useFullSEO({
  // MAIN SEO
  title: "Elite Virtual Assistant Services in Ohio, USA | Milta",
  description:
    "Specializing in virtual bookkeeping services, financial management, and operational support, we empower small businesses to thrive.",
  keywords:
    "virtual assistants service in ohio, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant oh",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-ohio/",
});

  const highlights = [
    "Cost Savings",
    "Enhanced Productivity",
    "Flexibility & Scalability",
    "Expert Support in Key Areas",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "A virtual assistant works remotely and provides flexible or part-time support, unlike traditional employees with full-time office requirements.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, strict security measures ensure confidentiality of your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely! You pay only for the services you need without overhead costs.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "Via email, video calls, and project management tools for seamless communication.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant?",
      a: "Yes, all tasks are fully customizable to fit your business needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Dynamic Opportunities with Ohio’s Premier Virtual Assistant Services">
        <Typography mb={3}>
          At Milta, we recognize the complexities small business owners navigate
          juggling administrative demands, financial oversight, and strategic
          priorities. Our virtual assistant service in Ohio delivers
          precision-crafted support to simplify workflows, automate tasks, and
          elevate productivity. Whether scaling a startup or optimizing an
          established enterprise, Milta’s ranks among the best virtual assistant
          companies, offering bespoke solutions for your unique needs.
        </Typography>
        <Typography>
          From virtual bookkeeping services that ensure fiscal clarity to
          strategic administrative support that drives momentum, we empower
          businesses to focus on growth. Partner with virtual assistant OH
          experts trusted by Ohio’s innovators to turn daily challenges into
          opportunities.
        </Typography>
      </Section>
      {WaveDivider && <WaveDivider />}

      <Section title="Advantages of Virtual Assistant Services in Ohio">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
