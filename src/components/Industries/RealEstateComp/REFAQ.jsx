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
    q: 'What makes Milta the right choice for real estate bookkeeping outsourcing?',
    a: 'We recognize the unique financial requirements of the real estate business. Whether you\'re a real estate agent, investor, or property manager, our bookkeeping solutions are built to scale with your business and streamline complex financial processes.',
  },
  {
    q: 'What are the benefits of outsourcing bookkeeping for my real estate business?',
    a: 'Outsourcing to Milta helps you reduce operational costs, save time, and gain access to expert services such as real estate tax planning, property income tracking, and regulatory compliance. You can skip the headache of recruiting and training internal employees.',
  },
  {
    q: 'Can I trust Milta with my financial information?',
    a: 'Absolutely. We use secure, encrypted, cloud-based systems to protect your data at every stage. Our infrastructure is designed to ensure transparency, reliability, and complete peace of mind.',
  },
  {
    q: 'What if I already use different accounting software?',
    a: 'Milta works seamlessly with a wide range of accounting platforms like QuickBooks, Xero, Sage, and more. Our team adapts quickly to your existing tools to ensure smooth onboarding and ongoing support.',
  },
  {
    q: 'Who can I contact if I need help or have questions?',
    a: 'You\'ll have a dedicated account manager who is readily available through email, phone, or chat to assist with anything you need, ensuring responsive, personalized support.',
  },
  {
    q: 'How much does Milta cost for bookkeeping services for real estate?',
    a: 'Our cost is flexible and customized to your specific business requirements. We provide customized quotes based on the volume, complexity, and nature of your bookkeeping and accounting needs.',
  },
  {
    q: 'How does Milta ensure the security of client data?',
    a: 'We follow strict data protection protocols, including end-to-end encryption, multi-level access control, and routine audits, to keep your data secure, confidential, and fully compliant with industry standards.',
  },
  {
    q: 'Which accounting software platforms do you work with?',
    a: 'Milta supports a wide range of industry-leading software, including QuickBooks, Xero, FreshBooks, Wave, and others, making us a trusted partner for various real estate accounting services.',
  },
  {
    q: 'How do I get started with a free trial?',
    a: 'Getting started is simple. Visit our website or contact us directly to schedule a free consultation or trial, and discover how Milta can transform your real estate financial management.',
  },
];

const REFAQ = () => {
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

export default REFAQ;
