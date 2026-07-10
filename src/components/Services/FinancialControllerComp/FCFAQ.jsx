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
  { q: 'What is a Financial Controller?',                                          a: 'A financial controller is in charge of the accounting department of your business, guaranteeing compliance, accurate financial reporting, and strategic financial management.' },
  { q: 'Why should I outsource Financial Controller Services?',                    a: 'Outsourcing provides access to experienced professionals without the cost of a full-time hire, helping you save money while maintaining high-quality financial oversight.' },
  { q: 'What types of businesses benefit from Financial Controller Services?',     a: 'Small and medium-sized businesses, startups, and growing companies that need expert financial management but are not ready for a full-time hire can greatly benefit.' },
  { q: 'What services does a Financial Controller provide?',                       a: 'A Financial Controller manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits.' },
  { q: 'How can outsourced Financial Controller Services help my business?',       a: 'Of course! At a fraction of the price of employing a controller on a full-time basis, outsourcing gives you access to elite experience.' },
  { q: 'How does Miltafs customize Financial Controller Services to my business?', a: 'Miltafs customizes its services to match your business size, industry, and specific financial goals, ensuring personalized solutions that meet your needs.' },
  { q: "What's the difference between a Financial Controller and a CFO?",         a: 'A Financial Controller focuses on accounting and financial management, while a CFO develops long-term financial strategies and oversees the company\'s overall financial health.' },
  { q: 'Can a Financial Controller help with audits?',                             a: 'Yes, Financial Controllers assist with audit preparation by organizing documentation, ensuring compliance, and providing support throughout the audit process.' },
  { q: 'How often will I receive financial reports?',                              a: 'Miltafs provides regular financial reports, including monthly, quarterly, and annual updates, depending on your business requirements.' },
  { q: 'Is outsourcing a cost-effective solution for Financial Controller Services?', a: 'Absolutely. At a fraction of the cost of employing a controller on a full-time basis, outsourcing gives you access to elite expertise and senior-level financial management.' },
  { q: 'Can Miltafs handle compliance with federal and state regulations?',        a: 'Yes, Miltafs ensures that all financial reporting complies with federal and state regulations, minimizing risks and penalties for your business.' },
  { q: 'How do I get started with Miltafs Financial Controller Services?',         a: 'Contact Miltafs today for a free consultation to assess your needs and discuss customized financial controller solutions for your business.' },
];

const FCFAQ = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

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

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 3 }, alignItems: 'start' }}>
          {[FAQS.slice(0, 6), FAQS.slice(6)].map((col, colIdx) => (
            <Box key={colIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {col.map((faq, rowIdx) => {
                const i = colIdx * 6 + rowIdx;
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

export default FCFAQ;
