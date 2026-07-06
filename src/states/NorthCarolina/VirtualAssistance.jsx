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
            Virtual Assistant Services in North Carolina
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Our virtual assistant services in North Carolina offer expert support, 
          helping small businesses save time and boost efficiency.
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
          Book a Free Consultation Today!
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
      title: "Real Estate Virtual Assistant NC",
      desc: "Manage property listings, client database updates, virtual tours, showings, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Ensure accurate data entry for organized and accessible business records, maintaining consistency and minimizing errors.",
    },
    {
      title: "Event Planning",
      desc: "Coordinate RSVPs, vendors, schedules, and logistics for seamless virtual or in-person events.",
    },
    {
      title: "Internet Research",
      desc: "Conduct market research, competitor analysis, and trend tracking to provide actionable insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize, upload, and organize contacts to keep your database updated and accessible.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Manage calendars, appointments, reminders, and rescheduling across time zones.",
    },
    {
      title: "Accounting & Virtual Bookkeeping",
      desc: "Maintain financial records, reconcile accounts, and generate statements for compliance and accuracy.",
    },
    {
      title: "Call Answering",
      desc: "Handle inbound calls professionally, schedule appointments, and manage client interactions.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails and communications efficiently, ensuring timely and professional responses.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Design brochures, flyers, newsletters, and reports, tailored to your branding and business needs.",
    },
    {
      title: "Presentations & Spreadsheets Creation",
      desc: "Create visually appealing presentations and detailed spreadsheets for impactful communication.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Handle flights, hotels, and itineraries for hassle-free business travel.",
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
          Our Virtual Assistant Services in North Carolina
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
export default function VirtualAssistantNorthCarolina() {
  useFullSEO({
  // MAIN SEO
  title: "Boost Your Business with the Best Virtual Assistant Services in North Carolina",
  description:
    "Searching for a virtual assistant service to streamline your operations? Our virtual assistants service in North Carolina offers expert support.",
  keywords:
    "virtual assistants service in north carolina, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant nc",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-northcarolina/",
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
      a: "A virtual assistant works remotely and provides services on a flexible or part-time basis, unlike traditional employees with full-time office requirements.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes, our virtual assistants follow strict security measures to protect your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely! You pay only for the services needed without the high overhead of full-time employees.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "Through email, video calls, and project management tools for seamless communication.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant services?",
      a: "Yes, all tasks are fully customizable to meet your specific business needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Rewarding Opportunities with Virtual Assistant Services in North Carolina">
        <Typography mb={3}>
          Exploring a career in virtual assistant service in North Carolina opens doors to flexible and rewarding opportunities. As remote work becomes the norm, virtual assistants for small businesses play a vital role in enhancing efficiency and driving business growth.
        </Typography>
        <Typography>
          At Milta, we understand the challenges small business owners face with administrative tasks, finances, and daily operations. Our virtual assistants service in North Carolina provides expert support to streamline workflows and maximize productivity.
        </Typography>
      </Section>
      {WaveDivider && <WaveDivider />}

      <Section title="Benefits of Virtual Assistant Services in North Carolina">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
