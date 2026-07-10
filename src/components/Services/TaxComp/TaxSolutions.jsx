import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const SERVICES = [
  {
    icon: WorkspacePremiumIcon,
    title: 'Expert Knowledge and Experience',
    desc: 'At Milta, our team of tax professionals has extensive experience handling complex tax scenarios. We stay updated on the latest tax laws and regulations to ensure compliance and optimal results for our clients.',
    points: [
      'Minimized risk of errors or audits.',
      'Accurate application of deductions and credits.',
      'Strategic tax planning and preparation services for future savings.',
    ],
  },
  {
    icon: AccessTimeIcon,
    title: 'Time and Cost Efficiency',
    desc: 'Filing taxes can be time-consuming and stressful. Milta streamlines the process, saving you valuable time and reducing costs associated with errors or penalties.',
    points: [
      'Hassle-free tax filing service.',
      'Timely reminders and follow-ups to avoid missed deadlines.',
      'Competitive pricing without compromising quality.',
    ],
  },
  {
    icon: SavingsIcon,
    title: 'Maximum Refunds and Minimized Liabilities',
    desc: 'Our experts work tirelessly to identify every eligible deduction and credit, ensuring you pay only what you owe and get the maximum refund possible.',
    points: [
      'In-depth analysis of your financial data.',
      'Strategic planning to reduce taxable income.',
      'Application of industry-specific tax benefits.',
    ],
  },
  {
    icon: SecurityIcon,
    title: 'Secure and Confidential',
    desc: 'We prioritize safeguarding the security and confidentiality of your financial information. With advanced encryption, we ensure your data is protected throughout the preparation and filing process.',
    points: [
      'End-to-end data encryption.',
      'Compliance with data protection laws.',
      'Trusted by clients across industries.',
    ],
  },
  {
    icon: SupportAgentIcon,
    title: 'Personalized Attention',
    desc: 'Every client is unique. We provide dedicated, one-on-one support with customized strategies tailored to your financial goals.',
    points: [
      'Dedicated account managers.',
      'Goal-based personalized plans.',
      'Clear and transparent communication.',
    ],
  },
  {
    icon: EventAvailableIcon,
    title: 'Year-Round Support',
    desc: "Tax planning doesn't end after filing season. Milta offers year-round support to help you stay on top of your financial obligations and plan for the future.",
    points: [
      'Quarterly estimated tax payments.',
      'Tax planning and consultation.',
      'Ongoing IRS/state correspondence assistance.',
    ],
  },
];

const TaxSolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, ${alpha(
            primary,
            0.05
          )} 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 3, md: 4 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 900,
                letterSpacing: 6,
                color: primary,
                fontSize: '0.75rem',
                mb: 2,
                display: 'block',
              }}
            >
              WHY CHOOSE MILTA
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2,
                fontWeight: 700,
              }}
            >
              Benefits of Choosing{' '}
              <Box component="span" sx={{ color: primary }}>
                Tax Services in the USA
              </Box>
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.18)}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: 700,
                mx: 'auto',
                mt: 2,
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              When you choose Milta for your tax preparation service and filing
              needs, you gain access to a wealth of benefits designed to make
              tax season stress-free and financially rewarding.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2,1fr)',
              md: 'repeat(3,1fr)',
            },
            gap: 3,
          }}
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;

            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  p: 3.5,
                  borderRadius: '20px',
                  bgcolor: 'background.paper',
                  border: (t) =>
                    `1px solid ${
                      t.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.07)'
                        : 'rgba(0,0,0,0.07)'
                    }`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all .3s ease',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: alpha(primary, 0.03),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 24px 56px ${alpha(
                      primary,
                      0.13
                    )},0 4px 16px rgba(0,0,0,.06)`,

                    '& .icon-wrap': {
                      bgcolor: primary,
                    },

                    '& .icon-svg': {
                      color: '#fff',
                    },

                    '& .card-title': {
                      color: primary,
                    },
                  },
                }}
              >
                <Box
                  className="icon-wrap"
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    bgcolor: alpha(primary, 0.08),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2.5,
                    transition: '.3s',
                  }}
                >
                  <Icon
                    className="icon-svg"
                    sx={{
                      color: primary,
                      fontSize: 28,
                      transition: '.3s',
                    }}
                  />
                </Box>

                <Typography
                  className="card-title"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    mb: 2,
                  }}
                >
                  {svc.title}
                </Typography>

                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: '.92rem',
                    lineHeight: 1.8,
                    mb: 2.5,
                  }}
                >
                  {svc.desc}
                </Typography>

                {svc.points.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.2,
                      mb: 1.2,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: primary,
                        fontSize: 18,
                        mt: '2px',
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: '.88rem',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TaxSolutions;