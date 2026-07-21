import React from 'react';
import { Box, Button, Typography } from '@mui/material';

// Backstop for the lazily-loaded routes. If a route chunk fails to load (and
// lazyWithRetry's one-time reload didn't resolve it) or a page throws while
// rendering, this catches it instead of unmounting the whole app and leaving a
// blank screen. It shows a friendly message with a reload action.
class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Surface in the console so real errors are still debuggable in production.
    console.error('Route render error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            px: 3,
            textAlign: 'center',
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            This page didn&apos;t load correctly
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 460 }}>
            The site may have just been updated. Please reload to get the latest version.
          </Typography>
          <Button variant="contained" onClick={this.handleReload} sx={{ mt: 1 }}>
            Reload page
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default RouteErrorBoundary;
