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
    q: 'Why do welders and contractors need bookkeeping services?',
    a: 'Welders and construction professionals manage project-based billing, job costing, and subcontractor payments, making accurate financial tracking essential for staying profitable. Proper bookkeeping for contractors ensures smoother operations, from invoicing to tax filings.',
  },
  {
    q: 'Do you handle job costing and project-based accounting?',
    a: 'Absolutely. Our accounting for construction companies includes detailed tracking of labor, materials, and overhead costs for each project. This allows you to analyze job profitability and stay within budget — crucial for any small construction business.',
  },
  {
    q: 'Can you manage progress billing and retainage tracking?',
    a: 'Yes. We provide support for progress billing, ensuring accurate invoicing based on work completed. We also handle retainage tracking, helping you maintain healthy cash flow until final payments are released.',
  },
  {
    q: 'How do you manage payroll for construction workers?',
    a: 'We offer complete construction payroll services, including calculating union wages, overtime, and handling compliance with federal and state labor laws, giving you peace of mind and accurate pay runs.',
  },
  {
    q: 'Can you track equipment depreciation and maintenance costs?',
    a: 'Yes. Our bookkeeping services include tracking capital equipment purchases, depreciation schedules, and ongoing maintenance expenses — key to understanding your operational costs and managing asset value.',
  },
  {
    q: 'How do you handle materials and inventory tracking?',
    a: 'We monitor material purchases, inventory levels, and job usage. With accurate tracking, you can avoid cost overruns and keep your construction bookkeeping streamlined and audit-ready.',
  },
  {
    q: 'Do you provide cash flow management for construction businesses?',
    a: 'Definitely. We support cash flow forecasting and budget tracking, so your construction company maintains financial stability, even across large or delayed projects.',
  },
];

const CCFAQ = () => {
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

export default CCFAQ;
