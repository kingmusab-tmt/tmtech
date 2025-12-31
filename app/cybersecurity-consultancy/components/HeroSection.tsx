// cybersecurity-consultancy/components/HeroSection.tsx
"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Security as SecurityIcon } from "@mui/icons-material";

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
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <SecurityIcon
              sx={{ fontSize: { xs: 48, md: 64 }, mb: 3 }}
              aria-hidden="false"
              role="img"
              aria-label="Security Icon"
            />
            <Typography
              variant="h1"
              component="h1"
              id="cybersecurity-hero-title"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Cybersecurity Consultancy
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 500,
                opacity: 0.9,
                "aria-labelledby": "cybersecurity-hero-title",
              }}
            >
              Protect Your Digital Assets with Expert Security Solutions
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", textAlign: "center" }}
              >
                Advanced Security Solutions for Modern Businesses
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
