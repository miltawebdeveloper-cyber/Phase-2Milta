import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const FAQS = [
  { q: 'What is bookkeeping, and why do I need it for my small business?', a: "Bookkeeping involves recording, organizing, and managing your business's financial transactions. It helps you maintain accurate financial records, make informed decisions, and ensure compliance with U.S. tax laws and regulations. Proper bookkeeping is essential for tracking cash flow, preparing for tax season, and growing your business." },
  { q: 'Can I handle bookkeeping myself, or should I hire a professional?', a: 'While some small business owners manage their bookkeeping, hiring a professional ensures accuracy and saves time. Professionals are well-versed in U.S. tax laws, payroll management, and financial reporting, giving you peace of mind and allowing you to focus on your business.' },
  { q: 'What types of bookkeeping services do you offer?', a: 'We provide a wide range of services, including bank and credit card reconciliation, accounts receivable and payable management, payroll processing, invoice generation, financial reporting, and tax preparation support. Our services are tailored to meet the unique needs of small businesses in the USA.' },
  { q: 'How do your bookkeeping services benefit my small business?', a: "Our services streamline your financial operations, prevent errors, and help you save time. You'll gain clear insights into your financial health and ensure compliance with legal requirements, which is crucial for making strategic decisions and achieving business growth." },
  { q: 'Do you offer payroll and bookkeeping services together?', a: 'Yes, we provide comprehensive payroll and bookkeeping services in the USA, ensuring your employees are paid accurately and on time while keeping your financial records organized and up-to-date.' },
  { q: 'How do I find the best bookkeeping services for small businesses near me?', a: 'Look for providers with experience, expertise, and a track record of serving small businesses in the USA. Reviews, referrals, and transparency in pricing are key indicators. We pride ourselves on being one of the best bookkeeping services for small businesses in the USA, offering personalized support.' },
  { q: 'Is my business too small to hire a bookkeeping company?', a: "No business is too small for bookkeeping services. Accurate financial management is especially important for small businesses to monitor cash flow, prepare for taxes, and plan for growth. Our services are designed to be affordable and scalable to meet your needs." },
  { q: 'What industries do you work with?', a: 'We work with a variety of industries, including retail, hospitality, professional services, e-commerce, and more. No matter your industry, our team tailors our bookkeeping solutions to fit your business.' },
  { q: 'How do you ensure data security?', a: 'To keep your financial information safe, we employ secure systems and adhere to industry best practices. Your information is handled with maximum confidentiality and care.' },
  { q: 'How can I get started with your bookkeeping services in the USA?', a: "Contact us today to schedule a consultation. Whether you're searching for bookkeeping services near me or need help managing your payroll, our team is ready to support your small business." },
];

const BKFAQ = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
              FAQ
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              Frequently Asked{' '}
              <Box component="span" sx={{ color: primary }}>Questions</Box>
            </Typography>
          </motion.div>
        </Box>

        {/* Accordion 2-column grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 3 }, alignItems: 'start' }}>
          {[FAQS.slice(0, 5), FAQS.slice(5)].map((col, colIdx) => (
            <Box key={colIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {col.map((faq, rowIdx) => {
                const i = colIdx * 5 + rowIdx;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.04)}>
                    <Accordion
                      expanded={expanded === `faq-${i}`}
                      onChange={handleChange(`faq-${i}`)}
                      elevation={0}
                      sx={{
                        borderRadius: '14px !important',
                        border: `1px solid ${expanded === `faq-${i}` ? alpha(primary, 0.3) : 'rgba(0,0,0,0.07)'}`,
                        bgcolor: expanded === `faq-${i}` ? alpha(primary, 0.06) : 'background.default',
                        transition: 'all 0.25s ease',
                        '&:before': { display: 'none' },
                        overflow: 'hidden',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: primary }} />}
                        sx={{ px: 3, py: 0.5, '& .MuiAccordionSummary-content': { my: 1.5 } }}
                      >
                        <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: { xs: '0.9rem', md: '0.97rem' }, color: 'text.primary', lineHeight: 1.4 }}>
                          {faq.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'text.secondary' }}>
                          {faq.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                );
              })}
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default BKFAQ;
