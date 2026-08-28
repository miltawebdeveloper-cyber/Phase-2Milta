import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

export const FAQS = [
  { q: 'Why should I outsource CPA services?', a: 'Outsourcing helps reduce operational costs, enhances efficiency, and provides access to specialized expertise.' },
  { q: 'Is Milta experienced in handling U.S.-based accounting regulations?', a: 'Yes, our team is well-versed in U.S. tax laws, accounting standards, and regulatory compliance.' },
  { q: 'What accounting software does Milta support?', a: 'We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and other leading accounting platforms.' },
  { q: 'Do you offer consulting for business growth?', a: 'Yes, Milta\'s financial consulting services include growth strategies, budgeting, and profitability analysis.' },
  { q: 'Can Milta assist with international accounting needs?', a: 'Yes, we support businesses with international operations, covering cross-border tax compliance and financial reporting.' },
];

const CPAFAQ = () => {
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

        {/* Accordion single column */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 860, mx: 'auto' }}>
          {FAQS.map((faq, i) => (
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
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default CPAFAQ;
