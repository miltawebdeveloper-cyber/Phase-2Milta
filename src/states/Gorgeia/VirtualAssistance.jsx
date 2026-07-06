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
          Transforming Business Support in the Digital Era:{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Best Virtual Assistant Companies in Georgia
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Businesses in Georgia are embracing virtual assistant services to
          enhance efficiency and streamline operations. Our skilled virtual
          assistants for small businesses provide expert support tailored to
          your needs.
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
          Schedule a Free Consultation with Our Experts Today!
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
      title: "Real Estate Virtual Assistant GA",
      desc: "Manage property listings, client database updates, virtual tours, scheduling, market research, and reporting.",
    },
    {
      title: "Data Entry",
      desc: "Ensure accurate data entry across spreadsheets and business systems for organized, error-free records.",
    },
    {
      title: "Event Planning",
      desc: "Coordinate RSVPs, vendors, scheduling, and logistics for smooth events.",
    },
    {
      title: "Internet Research",
      desc: "Conduct market research, competitor analysis, and trend tracking for actionable insights.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize and organize contacts for easy access and seamless communication.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Manage calendars, set up appointments, send reminders, and handle rescheduling across time zones.",
    },
    {
      title: "Accounting & Virtual Bookkeeping",
      desc: "Maintain financial records, reconcile accounts, and generate statements for tax and business compliance.",
    },
    {
      title: "Call Answering",
      desc: "Handle inbound calls professionally and manage inquiries efficiently.",
    },
    {
      title: "Correspondence Management",
      desc: "Manage emails and communications promptly, ensuring organized and timely responses.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Create brochures, flyers, newsletters, and reports with polished, professional design.",
    },
    {
      title: "Presentations & Spreadsheets",
      desc: "Design visually appealing presentations and detailed spreadsheets for effective business communication.",
    },
    {
      title: "Travel & Hotel Reservations",
      desc: "Plan flights, hotels, and itineraries seamlessly for hassle-free business travel.",
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
          Our Virtual Assistant Services in Georgia
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
export default function VirtualAssistantGeorgia() {
  useFullSEO({
  // MAIN SEO
  title: "Professional Virtual Assistants Service in Georgia, USA",
  description:
    "Struggling with admin tasks? Our virtual assistant service helps with finances and more! Trusted virtual assistant for small businesses in GA.",
  keywords:
    "virtual assistants service in georgia, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant ga",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-georgia/",
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
      a: "We provide multiple communication channels, including email, video calls, and project management tools, ensuring seamless interaction.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant services?",
      a: "Yes, our services are entirely customizable to suit your specific business needs and priorities.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Rewarding Opportunities with Virtual Assistant Services in Georgia">
        <Typography mb={3}>
          Pursuing a career in virtual assistant service in Georgia offers flexible and fulfilling opportunities. As businesses embrace remote work, virtual assistants for small businesses play a key role in improving efficiency and growth.
        </Typography>
        <Typography>
          At Milta, we understand the challenges small business owners face in managing administrative tasks, finances, and daily operations. Our virtual assistant service in Georgia provides expert support to streamline workflows and boost productivity.
        </Typography>
      </Section>
      {WaveDivider && <WaveDivider />}

      <Section title="Benefits of Virtual Assistant Services in Georgia">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
