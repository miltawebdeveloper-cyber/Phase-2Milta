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
    q: 'Why do law firms need bookkeeping services?',
    a: 'Law firms need specialized bookkeeping to maintain compliance with bar association rules, manage trust accounts, track billable hours, and streamline financial operations — all of which are too complex and time-sensitive for attorneys to handle themselves.',
  },
  {
    q: 'Can you track billable hours and client invoicing?',
    a: 'Yes. We ensure accurate timekeeping and invoicing for every matter, helping your firm capture all billable time, send prompt invoices, and maintain healthy cash flow with minimal administrative burden on attorneys.',
  },
  {
    q: 'Do you handle trust accounting and escrow management?',
    a: 'Absolutely. We specialize in trust and escrow management fully aligned with legal and bar association standards, ensuring client funds are properly separated, reconciled, and reported at all times.',
  },
  {
    q: 'How is payroll for employees of legal firms handled?',
    a: 'We oversee all aspects of payroll — attorney salaries, staff wages, benefits, and tax withholdings — while maintaining full compliance with federal and state labor laws and delivering on-time, accurate pay runs.',
  },
  {
    q: 'Do you help attorneys with tax planning?',
    a: 'Yes. Legal firms benefit from our tailored tax-saving strategies, proactive planning, and year-round support to minimize liability, maximize deductions, and ensure every tax return is filed accurately and on time.',
  },
  {
    q: 'Which accounting program would you suggest for legal firms?',
    a: 'We integrate with and recommend platforms like QuickBooks, Clio, and LEAP depending on your firm\'s size and workflow. We help you choose the right tool and manage the setup and ongoing sync between systems.',
  },
  {
    q: 'Are you able to keep track of case-related costs and payments?',
    a: 'Yes. We ensure all case-related disbursements, court fees, and allowable expenses are properly recorded, reconciled, and billed back to clients where applicable — preventing revenue leakage.',
  },
  {
    q: 'Do you handle financial reporting for multi-partner law firms?',
    a: 'For firms with multiple partners, we offer comprehensive financial reports, profit-and-loss statements, and partner profit-sharing calculations based on your firm\'s custom compensation formulas.',
  },
];

const LFFAQ = () => {
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
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
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

export default LFFAQ;
