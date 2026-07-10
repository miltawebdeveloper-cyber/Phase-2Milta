import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { icon: AttachMoneyIcon, title: 'Cost Efficiency',       desc: 'Outsourcing eliminates the need for in-house staff and infrastructure, saving you money on salaries, training, and technology.' },
  { icon: SchoolIcon,      title: 'Expertise on Demand',    desc: 'Access experienced professionals who specialize in accounting data entry management services — without recruitment hassles.' },
  { icon: TrendingUpIcon,  title: 'Scalability',            desc: "Whether you're managing a seasonal surge or expanding operations, our services scale seamlessly with your needs." },
  { icon: AccessTimeIcon,  title: 'Time Savings',           desc: "Outsourcing frees up your team's valuable time, allowing you to focus on core business operations.", featured: true },
  { icon: VerifiedIcon,    title: 'Accuracy & Compliance',  desc: 'Ensure your records are error-free and compliant with US accounting standards.' },
  { icon: LockIcon,        title: 'Secure Data Handling',   desc: 'We prioritize your data safety through advanced encryption and secure file transfer protocols.' },
];

const DEAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, lineHeight: 1.2 }}>
              Advantages of Outsourcing Accounting Data Entry Services in{' '}
              <Box component="span" sx={{ color: primary }}>USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, fontFamily: '"Outfit", sans-serif', maxWidth: 720, mx: 'auto', mt: 2 }}>
              Discover how outsourcing your accounting data entry processes enhances efficiency, reduces costs, and ensures compliance while maintaining data security.
            </Typography>
          </motion.div>
        </Box>

        {/* Advantage cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <Box
                key={adv.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: '20px',
                  display: 'flex', alignItems: 'flex-start', gap: 2.5,
                  transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                  ...(adv.featured ? {
                    background: 'linear-gradient(155deg, #0d1f0e 0%, #163018 55%, #1e4020 100%)',
                    boxShadow: `0 8px 32px ${alpha(primary, 0.25)}`,
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: `0 20px 52px ${alpha(primary, 0.35)}` },
                  } : {
                    bgcolor: 'background.default',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 16px 44px ${alpha(primary, 0.12)}`,
                      border: `1px solid ${alpha(primary, 0.25)}`,
                    },
                  }),
                }}
              >
                <Box sx={{
                  width: 54, height: 54, flexShrink: 0, borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  ...(adv.featured
                    ? { bgcolor: alpha('#fff', 0.1), border: `1px solid ${alpha('#fff', 0.15)}` }
                    : { bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}` }),
                }}>
                  <Icon sx={{ fontSize: 26, color: adv.featured ? alpha('#fff', 0.9) : primary }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.05rem', color: primary, mb: 0.75, lineHeight: 1.3 }}>
                    {adv.title}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', lineHeight: 1.7, color: adv.featured ? alpha('#fff', 0.7) : 'text.secondary' }}>
                    {adv.desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default DEAdvantages;
