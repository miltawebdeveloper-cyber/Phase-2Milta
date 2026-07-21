import React from "react";
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";

const SidebarMenu = ({
  title = "Menu",
  items = [],
  onItemClick = () => { },
  accentColor = "#ff9401",
  activeColor = "#1d4230",
  bgColor = "#f9fafb",
  width = 300,
}) => {
  return (
    <Box
      sx={{
        width,
        bgcolor: bgColor,
        borderRadius: 2,
        py: 7,
        px: 2,
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      <List disablePadding>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => onItemClick(item)}
              sx={{
                color: "#333",
                borderLeft: `3px solid transparent`,
                "&:hover": {
                  color: accentColor,
                  borderLeft: `3px solid ${accentColor}`,
                  backgroundColor: "#fff",
                },
              }}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
