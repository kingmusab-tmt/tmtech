import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
              gutterBottom
              sx={{ fontWeight: 700 }}
              id="web-development-training-hero-title"
            >
              Web Development
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 500, opacity: 0.9 }}
            >
              Build Modern Web Applications That Stand Out
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ maxWidth: 700, lineHeight: 1.8 }}
            >
              Master the skills to create stunning websites and powerful web
              applications with our comprehensive web development training
              programs. From frontend design to backend logic, we cover
              everything you need to succeed.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="/training/register"
                aria-label="Register Now"
                sx={{
                  backgroundColor: "white",
                  color: "#d32f2f",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                Register Now
              </Button>
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
                role="img"
                aria-label="Web development training illustration"
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

export default React.memo(HeroSection);
