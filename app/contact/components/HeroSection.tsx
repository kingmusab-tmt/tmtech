// contact/components/HeroSection.tsx
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ContactMail as ContactMailIcon } from "@mui/icons-material";

const HeroSection: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
        color: "white",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <ContactMailIcon
            sx={{ fontSize: { xs: 48, md: 64 }, mb: 3 }}
            aria-hidden="false"
            role="img"
            aria-label="Contact Mail Icon"
          />
          <Typography
            variant="h1"
            component="h1"
            id="contact-hero-title"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              opacity: 0.9,
              maxWidth: 700,
              mx: "auto",
              "aria-labelledby": "contact-hero-title",
            }}
          >
            Get in touch with our team for consultations, services, or any
            inquiries
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
