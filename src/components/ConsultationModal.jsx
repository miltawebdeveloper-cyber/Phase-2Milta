// src/components/ConsultationModal.jsx
import React, { createContext, useContext, useState, useCallback } from "react";
import { Dialog, Box, IconButton, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "./contactComp/ContactForm";

const ConsultationContext = createContext({ open: () => {}, close: () => {} });

/** Hook used by any button to open the global consultation popup. */
export const useConsultation = () => useContext(ConsultationContext);

/**
 * Provides a single, app-wide "Book a 30 Minutes Free Consultation" modal that
 * reuses the Contact page form. Mount once near the app root; trigger from
 * anywhere via `useConsultation().open()` (see ConsultationButton).
 */
export const ConsultationProvider = ({ children }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <ConsultationContext.Provider value={{ open: openModal, close: closeModal }}>
      {children}

      <Dialog
        open={open}
        onClose={closeModal}
        fullWidth
        maxWidth="sm"
        scroll="body"
        PaperProps={{
          sx: {
            borderRadius: { xs: "20px", sm: "28px" },
            backgroundImage: "none",
            bgcolor: "background.paper",
            border: `1px solid ${alpha(primary, 0.15)}`,
            overflow: "hidden",
          },
        }}
      >
        {/* Close (X) button */}
        <IconButton
          onClick={closeModal}
          aria-label="Close consultation form"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            color: "text.secondary",
            bgcolor: alpha(primary, 0.06),
            "&:hover": { bgcolor: alpha(primary, 0.14) },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          // See the matching comment in ApplyForm.jsx: Framer Motion's inline
          // transform creates its own stacking context, which without an
          // explicit z-index here can paint over the close IconButton
          // (zIndex: 2) in the corner where they overlap and swallow its
          // clicks. Explicit + lower resolves the ambiguity outright.
          sx={{
            position: "relative",
            zIndex: 0,
            p: { xs: 2.5, sm: 3.5 },
            // Compact the shared ContactForm for the modal only
            "& .MuiStack-root > :not(style):not(style) + :not(style):not(style)": {
              marginTop: "14px",
            },
            "& .MuiOutlinedInput-input": { py: 1.35 },
            "& .MuiInputBase-multiline": { py: 1 },
            "& textarea": { height: "64px !important" },
            "& .MuiFormHelperText-root": { mt: 0.25, mb: 0 },
            "& .MuiButton-root": { py: 1.15 },
            // Re-center the floating labels against the reduced field padding
            "& .MuiInputLabel-outlined": {
              transform: "translate(14px, 11px) scale(1)",
              "&.MuiInputLabel-shrink": { transform: "translate(14px, -9px) scale(0.75)" },
            },
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 2.5 } }}>
            <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 0.25 }}>
              FREE CONSULTATION
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.15rem", md: "1.45rem" }, color: "text.primary", mb: 0.75, lineHeight: 1.3 }}
            >
              Save Up to{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                50-60%
              </Box>{" "}
              on Your Outsourcing Costs — Without Reducing Service Quality or Scope.
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: "520px", mx: "auto" }}>
              Discuss With Our Dedicated Accounting Team.
            </Typography>
          </Box>

          <ContactForm />
        </Box>
      </Dialog>
    </ConsultationContext.Provider>
  );
};

export default ConsultationProvider;
