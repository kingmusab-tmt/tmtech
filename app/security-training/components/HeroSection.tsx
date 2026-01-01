// app/security-training/components/HeroSection.tsx
"use client";

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Security as SecurityIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const RedButton = ({ children, ...props }: any) => (
  <Button
    sx={{
      background: "linear-gradient(45deg, #d32f2f, #ff6659)",
      color: "white",
      padding: "12px 32px",
      fontSize: "1.1rem",
      fontWeight: 600,
      "&:hover": {
        background: "linear-gradient(45deg, #b71c1c, #e53935)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(211, 47, 47, 0.3)",
      },
      transition: "all 0.3s ease",
    }}
    {...props}
  >
    {children}
  </Button>
);

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = React.memo(({
  title,
  subtitle,
  description,
}) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
        color: "white",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "xl", mx: "auto", px: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
              id="hero-title"
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 500, opacity: 0.9 }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ maxWidth: 700, lineHeight: 1.8 }}
            >
              {description}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
              <RedButton
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="/training/register"
                aria-label="Enroll in Training"
              >
                Enroll in Training
              </RedButton>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px dashed rgba(255,255,255,0.3)",
                }}
                aria-labelledby="hero-title"
              >
                <SecurityIcon sx={{ fontSize: 150, color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;