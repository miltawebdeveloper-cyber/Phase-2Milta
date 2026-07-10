import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedIcon from '@mui/icons-material/Verified';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { icon: AttachMoneyIcon, title: 'Affordable and Scalable',        desc: 'We offer cost-effective solutions customized to the needs of small and medium-sized businesses. Our services scale seamlessly with your growth, ensuring continuous support at every stage.' },
  { icon: GroupsIcon,      title: 'Experienced Team',               desc: 'Our financial controllers bring extensive experience and a strong understanding of the unique challenges faced by SMBs. They provide strategic insights and practical solutions to help you manage finances with confidence and clarity.', featured: true },
  { icon: BusinessIcon,    title: 'Customized Solutions',           desc: "We customize our services to align with your business's unique needs and goals. This ensures you receive the right level of financial oversight, accuracy, and support at every stage." },
  { icon: VerifiedIcon,    title: 'Focus on Compliance and Accuracy', desc: 'We prioritize regulatory compliance and accuracy in every process to ensure reliable outcomes. Our commitment to financial integrity builds trust and supports your business with confidence.' },
];

const FCWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -160, right: -160, pointerEvents: 'none' }}
      >
        <Box sx={{ width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.07)} 0%, transparent 70%)` }} />
      </motion.div>

      <Container maxWidth={false} sx={{ maxWidth: '1150px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
              WHY MILTAFS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              Why Choose Miltafs for{' '}
              <Box component="span" sx={{ color: primary }}>Financial Controller Services?</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, fontFamily: '"Outfit", sans-serif', maxWidth: 620, mx: 'auto', mt: 2 }}>
              Your Trusted Partner for Effortless Financial Management and Growth.
            </Typography>
          </motion.div>
        </Box>

        {/* Cards row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Box
                key={card.title}
                component={motion.div}
                {...fadeUp(i * 0.09)}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  borderRadius: '20px',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                  ...(card.featured ? {
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
                  width: 58, height: 58, flexShrink: 0, borderRadius: '16px', mb: 2.5,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  ...(card.featured
                    ? { bgcolor: alpha('#fff', 0.1), border: `1px solid ${alpha('#fff', 0.15)}` }
                    : { bgcolor: alpha(primary, 0.09), border: `1px solid ${alpha(primary, 0.16)}` }),
                }}>
                  <Icon sx={{ fontSize: 28, color: card.featured ? alpha('#fff', 0.9) : primary }} />
                </Box>

                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1.1rem', color: card.featured ? '#fff' : primary, mb: 1, lineHeight: 1.3 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', lineHeight: 1.7, color: card.featured ? alpha('#fff', 0.7) : 'text.secondary', flexGrow: 1 }}>
                  {card.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default FCWhyChoose;
