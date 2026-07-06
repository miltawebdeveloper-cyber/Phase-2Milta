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
    q: 'Why do nonprofit organizations need bookkeeping services?',
    a: 'Nonprofits must maintain transparent and accurate financial records to ensure compliance with IRS regulations, attract donors, and manage grants effectively. Reliable bookkeeping for nonprofit organizations in the US also supports better decision-making and long-term sustainability.',
  },
  {
    q: 'What are the key differences between nonprofit and for-profit bookkeeping?',
    a: 'While both require accurate tracking of income and expenses, bookkeeping for nonprofit entities focuses on fund accounting, donor restrictions, grant tracking, and tax-exempt compliance. Nonprofits must also prepare specific reports, such as the Statement of Activities and Form 990.',
  },
  {
    q: 'Do I need a nonprofit accountant near me, or can I outsource this service?',
    a: 'You don\'t need to limit your search to a nonprofit accountant near you — you can outsource to trusted firms like Milta, which specializes in bookkeeping for nonprofits in the US. Our cloud-based systems let us serve nonprofits nationwide with real-time access and secure data handling.',
  },
  {
    q: 'Which tax returns are required of nonprofits?',
    a: 'Most nonprofit organizations in the US are required to file IRS Form 990, 990-EZ, or 990-N annually, depending on their revenue. Our nonprofit tax preparation experts specialize in accurate, timely filing for nonprofit corporations, helping you stay compliant and avoid late filing penalties.',
  },
  {
    q: 'Is Milta equipped to track restricted and unrestricted funding separately?',
    a: 'Yes. We specialize in managing restricted, unrestricted, and temporarily restricted funds. Our nonprofit accounting services ensure your donations are categorized and reported correctly according to donor intent and IRS rules.',
  },
  {
    q: 'What if my nonprofit is small and can\'t afford a full-time accountant?',
    a: 'That\'s exactly where we come in. Milta provides scalable solutions for accounting for small nonprofits, giving you expert support without the cost of hiring in-house staff — a smart, budget-friendly way to stay compliant and organized.',
  },
  {
    q: 'Is grant and donation tracking included in your service?',
    a: 'Absolutely. Grant and donation tracking is a core part of our bookkeeping for nonprofit services. We ensure funds are used according to donor restrictions and provide reports that satisfy grantors and auditors alike.',
  },
  {
    q: 'How secure is my nonprofit\'s financial data with Milta?',
    a: 'Your data security is our top priority. We use encrypted, cloud-based accounting systems with secure access controls to protect all client information. Whether you\'re a small nonprofit or a large foundation, your data is safe with Milta.',
  },
  {
    q: 'Can you help with late or missed nonprofit tax filings?',
    a: 'Yes. If you\'ve missed a nonprofit corporation tax filing, we can help you get back on track. Our experts will assess your situation, file the necessary documents, and help restore your organization\'s good standing with the IRS.',
  },
  {
    q: 'How do I get started with Milta\'s nonprofit bookkeeping services?',
    a: 'It\'s easy! Whether you\'re looking for nonprofit tax preparers near you or need help setting up your nonprofit accounting system from scratch, Milta is here to help — contact us to get started.',
  },
];

const NPFAQ = () => {
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

export default NPFAQ;
