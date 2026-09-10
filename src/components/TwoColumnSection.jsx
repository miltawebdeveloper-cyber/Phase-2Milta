import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const TwoColumnSection = ({
  left,
  right,
  maxWidth = '1100px',
  containerProps = {},
  leftProps = {},
  rightProps = {}
}) => {
  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 4, md: 8 } }}>
      <Container maxWidth={false} sx={{ maxWidth, px: { xs: 2, md: 0 } }} {...containerProps}>
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%' }} {...leftProps}>
              {left}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%' }} {...rightProps}>
              {right}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TwoColumnSection;
