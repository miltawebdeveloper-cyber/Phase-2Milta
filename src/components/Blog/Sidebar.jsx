import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function SidebarLatest({ blogs }) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "background.paper",
        borderRadius: `${24}px`,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
        Latest Posts
      </Typography>

      <Stack spacing={1.5}>
        {blogs.map((b) => (
          <Box
            key={b.id}
            component={Link}
            to={`/us/blogs/${b.slug}`}
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 600,
              transition: "color 0.3s ease",
              "&:hover": { color: "primary.main" },
            }}
          >
            {b.title}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
