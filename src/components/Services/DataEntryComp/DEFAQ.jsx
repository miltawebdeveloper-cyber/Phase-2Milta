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
  { q: 'What is accounting data entry, and why does my business need it?', a: 'Accounting data entry is the systematic recording of all financial transactions — invoices, receipts, payroll, bank activity — into your accounting system. Accurate data entry is the foundation of reliable financial reporting, US GAAP compliance, and sound business decision-making.' },
  { q: 'How do you ensure accuracy in data entry?', a: 'We use a double-entry verification process where every transaction is reviewed and matched against source documents before being posted. Our reconciliation step catches any discrepancies before they reach your financial statements.' },
  { q: 'What accounting software do you work with?', a: 'We support QuickBooks (Online and Desktop), Xero, Sage, FreshBooks, and most other major platforms. We also offer custom data entry solutions for businesses using proprietary or industry-specific software.' },
  { q: 'How long does it take to process data entry tasks?', a: 'Standard turnaround is within 24–48 hours for regular monthly volumes. For catch-up bookkeeping or high-volume projects, we agree on a timeline upfront and provide regular progress updates.' },
  { q: 'Is my financial data secure with your service?', a: 'Yes. We use advanced encryption, secure file-transfer protocols, and strict access controls. All data is handled under confidentiality agreements and stored in compliance with US data protection standards.' },
  { q: 'Can you handle large or seasonal spikes in data volume?', a: 'Absolutely. Our team is designed to scale — whether you have a seasonal surge, a large catch-up project, or rapid business growth, we allocate additional resources to meet your deadlines without compromising accuracy.' },
  { q: 'What types of businesses do you serve?', a: 'We work with small and medium-sized businesses across retail, e-commerce, professional services, hospitality, healthcare, and more. Our services are tailored to each industry\'s specific data entry and compliance requirements.' },
  { q: 'How do I get started with your data entry services?', a: 'Simply reach out via our contact page to schedule a free consultation. We will assess your current workflow, discuss your needs, and propose a customized data entry plan that fits your budget and timeline.' },
];

const DEFAQ = () => {
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
          {[FAQS.slice(0, Math.ceil(FAQS.length / 2)), FAQS.slice(Math.ceil(FAQS.length / 2))].map((col, colIdx) => (
            <Box key={colIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {col.map((faq, rowIdx) => {
                const i = colIdx === 0 ? rowIdx : Math.ceil(FAQS.length / 2) + rowIdx;
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

export default DEFAQ;
