import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CalculateIcon from '@mui/icons-material/Calculate';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import InsightsIcon from '@mui/icons-material/Insights';

const features = [
  {
    title: 'TAX PROFESSIONAL',
    desc: 'Expert support for accurate filings, compliance, and tax savings year-round.',
    icon: <CalculateIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: 'BOOKKEEPING SPECIALIST',
    desc: 'Maintain clean, up-to-date books for smarter financial decisions.',
    icon: <LibraryBooksIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: 'ACCOUNTS PAYABLE SPECIALIST',
    desc: 'Efficient invoice processing and vendor payment management.',
    icon: <PaymentIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: 'FINANCIAL REPORTING ANALYST',
    desc: 'Data-driven reports and insights to accelerate business growth.',
    icon: <InsightsIcon sx={{ fontSize: 22 }} />,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto' }}>
        <Stack 
          direction="row"
          spacing={{ xs: 4, md: 3 }} 
          divider={<Box sx={{ width: '1px', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.05)', flexShrink: 0 }} />}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'stretch',
            overflowX: { xs: 'auto', md: 'visible' },
            pb: { xs: 2, md: 0 },
            py: { xs: 2, md: 5 },
            px: { xs: 2, md: 0 },
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for a cleaner look
            scrollbarWidth: 'none', // Firefox
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={{ flex: 1, display: 'flex' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ minWidth: { xs: '260px', md: '100%' }, width: '100%' }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(38, 105, 41, 0.1)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontWeight: 800, 
                      letterSpacing: 1.5, 
                      display: 'block',
                      mb: 1,
                      color: 'primary.main',
                      lineHeight: 1.4
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '0.85rem', 
                      color: 'text.secondary',
                      fontWeight: 500,
                      lineHeight: 1.6
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
