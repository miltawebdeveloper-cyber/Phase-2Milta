// src/components/UKButton.jsx
import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const UKButton = ({ variant, colorType, children, ...props }) => {
  // Determine background and text colors based on variant
  const getStyles = () => {
    if (colorType === "primary") {
      return {
        bgcolor: "#2b6d2a",
        color: "#fff",
        "&:hover": { bgcolor: "#112613" },
      };
    } else if (colorType === "secondary") {
      return {
        bgcolor: "#97ba3a",
        color: "#1a1a1a",
        "&:hover": { bgcolor: "#ffb04d" },
      };
    } else {
      return {};
    }
  };

  return (
    <Button
      variant={variant || "contained"}
      sx={{
        borderRadius: 6,
        px: { xs: 2.5, sm: 3 },
        py: { xs: 1, sm: 1.2 },
        fontSize: { xs: "0.75rem", sm: "0.875rem" },
        textTransform: "none",
        ...getStyles(),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

UKButton.propTypes = {
  variant: PropTypes.string,
  colorType: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

export default UKButton;
