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
  {
    q: 'What are accounting services for healthcare providers?',
    a: 'Accounting services for healthcare include bookkeeping, payroll, tax planning, financial reporting, budgeting, and compliance support tailored to meet the unique needs of medical professionals and organizations like clinics, hospitals, and pharmacies.',
  },
  {
    q: 'Why do healthcare professionals need specialized accountants?',
    a: 'The healthcare industry has complex billing systems, insurance reimbursements, and regulatory requirements. Accountants for medical professionals understand these nuances and help ensure accurate financial reporting, compliance, and profitability.',
  },
  {
    q: 'What types of healthcare providers does Milta support?',
    a: 'Milta serves a wide range of healthcare professionals, including dentists, physicians, medical clinics, hospitals and healthcare facilities, and pharmacies. Our personalized accounting services for healthcare are designed to help providers of all sizes.',
  },
  {
    q: 'Are you able to assist healthcare professionals with their tax returns?',
    a: 'Absolutely. We specialize in tax returns for healthcare, including Forms 1040, 1120, and 1065. Our experts ensure your practice stays compliant with tax laws and maximizes deductions, especially concerning Medicare and Medicaid reimbursements.',
  },
  {
    q: 'How is Milta different from traditional accounting firms?',
    a: 'As a specialized healthcare accounting firm, Milta offers industry-specific expertise, US GAAP-compliant processes, automation, and cost-effective outsourcing. We assign you a dedicated healthcare accountant and offer real-time support in your time zone.',
  },
  {
    q: 'Is outsourcing healthcare accounting safe and compliant?',
    a: 'Yes. At Milta, we use secure, encrypted, cloud-based systems and follow HIPAA-compliant processes where applicable. We maintain full transparency while ensuring your financial data is protected and fully compliant with industry standards.',
  },
  {
    q: 'Do you assist medical personnel with their payroll processing?',
    a: 'Yes. We offer complete payroll management services tailored for healthcare accounting, ensuring timely, accurate payroll processing while staying compliant with labor and tax laws.',
  },
  {
    q: 'How do you help manage cash flow in a medical practice?',
    a: 'Our team monitors your income and expenses to identify gaps, forecast cash flow, and ensure you have sufficient liquidity to cover operational needs. Accounting in the healthcare industry requires precision, and our tools help you maintain financial stability.',
  },
  {
    q: 'Can you integrate with my existing accounting or EHR software?',
    a: 'Yes, we integrate with popular accounting platforms (like QuickBooks and Xero) and coordinate data with your electronic health records (EHR) or billing software to ensure seamless operations.',
  },
  {
    q: 'How do I get started with Milta\'s healthcare accounting services?',
    a: 'It\'s simple! For a free consultation, get in touch with us through our website or give our support staff a call. To get your accounts and compliance in order, we\'ll evaluate your needs and assign a committed accountant.',
  },
];

const HCFAQ = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  const mid = Math.ceil(FAQS.length / 2);
  const leftCol = FAQS.slice(0, mid);
  const rightCol = FAQS.slice(mid);

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
          {[leftCol, rightCol].map((col, colIdx) => (
            <Box key={colIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {col.map((faq, rowIdx) => {
                const i = colIdx === 0 ? rowIdx : mid + rowIdx;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.05)}>
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

export default HCFAQ;
