import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

export default function SidebarLatest({ blogs_uk }) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#ffffff",
        borderRadius: 3,
        border: "1px solid #eee",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          mb: 2,
          color: "#2b6d2a",
        }}
      >
        Latest Posts
      </Typography>

      {/* Blog List */}
      <List sx={{ p: 0 }}>
        {blogs_uk.map((b) => (
          <ListItem
            key={b.id}
            disablePadding
            sx={{
              mb: 1,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <ListItemButton
              sx={{
                fontSize: "14px",
                color: "#1a1a1a",
                fontFamily: "'Poppins', sans-serif",
                borderRadius: 2,
                transition: "0.3s ease",

                "&:hover": {
                  bgcolor: "#97ba3a",
                  color: "#2b6d2a",
                  transform: "translateX(4px)",
                },
              }}
            >
              {b.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
