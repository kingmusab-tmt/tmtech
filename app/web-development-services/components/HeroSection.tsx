// app/web-development-services/components/HeroSection.tsx
"use client";

import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

const HeroSection: React.FC = () => {
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
            <Typography
              variant="h1"
              component="h1"
              id="web-development-services-heading"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Web Development Services
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 500, opacity: 0.9 }}
            >
              Transform Your Digital Presence with Cutting-Edge Web Solutions
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ maxWidth: 700, lineHeight: 1.8 }}
            >
              From custom websites to complex web applications, we deliver
              high-performance digital solutions that drive business growth. Our
              expert team combines the latest technologies with proven
              development methodologies to create exceptional user experiences.
            </Typography>
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
                aria-labelledby="web-development-services-heading"
              >
                <CodeIcon sx={{ fontSize: 150, color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
