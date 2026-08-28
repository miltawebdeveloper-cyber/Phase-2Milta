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
  {
    q: 'Why is proper bookkeeping so important to manufacturing companies?',
    a: 'Accurate bookkeeping helps manufacturing businesses monitor production costs, manage inventory, prepare for taxes, and make informed financial decisions. It ensures every transaction — whether related to raw materials, payroll, or overhead — is recorded and tracked, providing clear visibility into profitability and compliance.',
  },
  {
    q: 'Can you keep track of raw materials, work in progress (WIP), and finished goods inventory?',
    a: 'Yes. We provide full inventory tracking for all stages of production — raw materials, work-in-progress, and finished goods. This enables precise inventory valuation and helps reduce waste, avoid stockouts, and maintain accurate cost of goods sold (COGS) reporting.',
  },
  {
    q: 'Do you offer job costing and production cost analysis services?',
    a: 'Absolutely. Our services include extensive job costing and cost-of-production analysis. We track direct supplies, labor, and overhead for every project or batch, giving you an accurate picture of real versus planned costs and helping you improve efficiency and pricing strategies.',
  },
  {
    q: 'How do you manage supplier invoices and outgoing payments?',
    a: 'We manage every step of the accounts payable process — recording invoices, confirming them against purchase orders, scheduling payments, and ensuring they are paid on time. This prevents late fees and duplicate payments while preserving positive vendor relationships.',
  },
  {
    q: 'Do you advise manufacturers on tax planning, deductions, and compliance?',
    a: 'Yes, we specialize in manufacturing tax planning. We help identify eligible deductions, manage sales and use taxes, and ensure full compliance with federal and state tax regulations. Reducing your tax liability while maintaining compliance is our aim.',
  },
  {
    q: 'Can you handle payroll processing for factory and production staff?',
    a: 'Yes. We manage payroll tailored for manufacturing environments, including wage calculations, shift differentials, overtime, union rules (if applicable), and benefits. We also ensure timely payroll tax filings and compliance with labor laws.',
  },
  {
    q: 'Which accounting software do you recommend for manufacturing businesses?',
    a: 'We recommend software tailored for manufacturing, such as QuickBooks Desktop Enterprise, Xero, NetSuite, or Sage 100cloud. These platforms offer advanced capabilities including production scheduling, job costing, inventory management, and real-time financial reporting.',
  },
  {
    q: 'Do you track equipment depreciation and maintenance costs accurately?',
    a: 'Yes. We maintain detailed fixed asset records, track depreciation schedules, and record maintenance expenses. This helps with capital budgeting, accurate tax deductions, and long-term asset management.',
  },
];

const MCFAQ = () => {
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

export default MCFAQ;
