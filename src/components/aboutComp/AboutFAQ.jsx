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

// Exported so the About page can build FAQPage JSON-LD from the exact copy shown.
export const FAQS = [
  {
    q: 'What services does Milta provide to US businesses?',
    a: 'Milta provides a complete range of outsourcing services for US small and medium-sized businesses, including bookkeeping, accounts payable and receivable, payroll outsourcing, virtual assistant services, digital marketing, and back-office support. Our goal is to help businesses streamline operations while maintaining compliance and accuracy.',
  },
  {
    q: 'Does Milta specialize in supporting US businesses?',
    a: 'Yes. Milta is specifically structured to support US-based businesses. Our teams are trained in US accounting standards, IRS regulations, sales tax compliance, payroll processing, and federal and state reporting requirements.',
  },
  {
    q: 'How does outsourcing with Milta help reduce business costs?',
    a: 'Outsourcing with Milta allows businesses to access experienced professionals without the cost of hiring full-time in-house staff. This reduces expenses related to salaries, office space, training, and software while still ensuring high-quality service delivery.',
  },
  {
    q: 'Can Milta scale services as my business grows?',
    a: 'Yes. Milta offers flexible and scalable service models. Businesses can increase or reduce services depending on their operational needs, ensuring support that adapts as the company grows.',
  },
  {
    q: 'How does Milta ensure compliance with US regulations?',
    a: 'Milta follows structured processes aligned with US compliance requirements, including sales tax reporting, payroll regulations, federal and state filings, and IRS reporting. Our teams regularly monitor compliance standards to maintain accuracy and reliability.',
  },
  {
    q: 'Will I have a dedicated team or point of contact?',
    a: 'Yes. Each client is assigned dedicated professionals along with a consistent account management process. This ensures clear communication, reliable service delivery, and a strong understanding of your business operations.',
  },
  {
    q: 'How secure is my financial and business data with Milta?',
    a: 'Milta follows strict data security practices aligned with US data protection standards. We use secure systems, restricted access controls, documented workflows, and confidentiality protocols to protect all client information.',
  },
  {
    q: 'What tasks can a Milta virtual assistant handle?',
    a: 'Milta virtual assistants support a variety of administrative and operational tasks such as email management, appointment scheduling, document handling, data entry, accounting support tasks, and other business administration activities.',
  },
  {
    q: 'Does Milta provide digital marketing support for US businesses?',
    a: 'Yes. Milta offers digital marketing services designed for the US market, including SEO, paid advertising, social media management, and content marketing. These services help businesses improve online visibility, attract leads, and strengthen brand credibility.',
  },
  {
    q: 'How does Milta communicate progress and updates?',
    a: 'Milta maintains transparent communication through structured onboarding, regular reports, progress updates, and a dedicated point of contact. Clients always know the status of their tasks and service delivery.',
  },
  {
    q: 'Is Milta suitable for small businesses or startups?',
    a: 'Yes. Milta’s services are specifically designed for small and medium-sized businesses that require professional support without the complexity or cost of building large internal teams.',
  },
  {
    q: "How can I begin using Milta's services?",
    a: 'Getting started is simple. You can book a consultation with the Milta team to discuss your business needs, after which we recommend a suitable service model and onboarding process.',
  },
];

const AboutFAQ = () => {
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
                          <Box component="span" sx={{ color: primary, mr: 1 }}>
                            {String(i + 1).padStart(2, '0')}.
                          </Box>
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

export default AboutFAQ;
