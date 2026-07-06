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
          Boost Your Business with the Best{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Virtual Assistant Services in New Jersey
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          As one of the best virtual assistant companies, we provide dedicated
          support customized for small businesses.
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
          Ready To Take Your Business To The Next Level
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
      title: "Real Estate Virtual Assistant NJ",
      desc: "Manage property listings, client databases, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Accurate and organized data entry for easy access and consistent business records.",
    },
    {
      title: "Event Planning",
      desc: "Handle RSVPs, vendor coordination, scheduling, and logistics for smooth events.",
    },
    {
      title: "Internet Research",
      desc: "Market research, competitor analysis, and trend tracking with actionable insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize, upload, and categorize contacts for a fully updated database.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Manage calendars, set appointments, reminders, and rescheduling across time zones.",
    },
    {
      title: "Accounting & Virtual Bookkeeping Service",
      desc: "Maintain accurate financial records, reconcile accounts, and generate statements.",
    },
    {
      title: "Call Answering",
      desc: "Handle inquiries, appointments, and client interactions professionally.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails, draft messages, and organize communications efficiently.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Create brochures, flyers, newsletters, and professional documents.",
    },
    {
      title: "Presentations & Spreadsheets Creation",
      desc: "Design visually engaging slides and spreadsheets for impactful communication.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Plan flights, hotel bookings, and itineraries seamlessly.",
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
          Our Virtual Assistant Services in New Jersey
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
export default function VirtualAssistantNewJersey() {
  useFullSEO({
  // MAIN SEO
  title: "Your Business Growth with Top Virtual Assistant Services in New Jersey",
  description:
    "Are you looking to optimize your business operations? Our virtual assistant service in New Jersey is here to help!",
  keywords:
    "virtual assistants service in new jersey, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant nj",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-newjersey/",
});

  const highlights = [
    "Cost-Effective Solutions",
    "Enhanced Productivity",
    "Access to Expertise",
    "Flexibility and Scalability",
    "Improved Work-Life Balance",
    "Streamlined Communication and Collaboration",
    "Focus on Core Business Functions",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "A virtual assistant works remotely and provides flexible or part-time support, unlike traditional employees who require physical office space and full-time salaries.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, our virtual assistants follow strict security measures to ensure the confidentiality of your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely! Our services are cost-effective, offering professional support without the high expenses of full-time employees.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "We provide email, video calls, and project management tools for seamless communication.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant services?",
      a: "Yes, all tasks are fully customizable to suit your specific business needs and priorities.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Rewarding Opportunities with Virtual Assistant Services in New Jersey">
        <Typography mb={3}>
          At Milta, we recognize the hurdles small business owners encounter with
          administrative duties, financial management, and daily operations.
          Our virtual assistant service in New Jersey delivers expert support to
          optimize workflows and enhance productivity.
        </Typography>
        <Typography>
          Whether you’re an entrepreneur or managing a growing business, our top
          virtual assistant companies provide tailored solutions to fit your
          specific needs. From virtual bookkeeping services to dedicated
          administrative support, we are your reliable partner in achieving
          success.
        </Typography>
        <Typography mt={2}>
          As one of the best virtual assistant companies in NJ, we pride
          ourselves on delivering personalized service that aligns with your
          business goals. We collaborate closely with our clients to understand
          their unique challenges and develop customized strategies that drive
          results.
        </Typography>
      </Section>
      {WaveDivider && <WaveDivider />}

      <Section title="Benefits of Virtual Assistant Services in New Jersey">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
