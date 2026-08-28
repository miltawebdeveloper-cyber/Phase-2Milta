import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { label: 'CLIENTS WORLDWIDE', value: '500+' },
  { label: 'YEARS OF LEGACY', value: '15+' },
  { label: 'STRATEGIC ASSETS', value: '1.2B' },
  { label: 'EXPERT PARTNERS', value: '50+' },
];

const TrustSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        py: 6,
        position: 'relative',
        zIndex: 5,
      }}
    >
      {/* Subtle Full-Width Technical Grid */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundSize: '80px 80px',
          backgroundImage: `linear-gradient(to right, #266929 1px, transparent 1px), linear-gradient(to bottom, #266929 1px, transparent 1px)`,
          zIndex: 0
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: { xs: 6, md: 0 },
          position: 'relative',
          zIndex: 1,
          px: { xs: 4, md: 10 }
        }}
      >
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px 900px 0px' }}
              transition={{ duration: 0.25, delay: Math.min(index * 0.1, 0.15) }}
              style={{ textAlign: 'center' }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 0.5,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  letterSpacing: '-0.05em',
                  color: '#1A1A1A'
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  letterSpacing: 3,
                  fontSize: '0.75rem'
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>

            {index < stats.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: 'none', md: 'block' },
                  height: '60px',
                  alignSelf: 'center',
                  opacity: 0.1,
                  borderColor: 'primary.main'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default TrustSection;
