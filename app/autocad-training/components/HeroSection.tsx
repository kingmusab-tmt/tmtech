import React, { memo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  styled,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Draw as DrawIcon,
} from "@mui/icons-material";

const RedButton = styled(Button)(({ theme }) => ({
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
}));

const HeroSection = memo(() => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
      color: "white",
      py: { xs: 6, md: 10 },
    }}
    component="section"
    aria-labelledby="hero-title"
  >
    <Container maxWidth="xl">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
            id="autocad-training-title"
          >
            AutoCAD Training
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 500, opacity: 0.9 }}
          >
            Master Precision Design and Drafting
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ maxWidth: 700, lineHeight: 1.8 }}
          >
            Transform your design ideas into precise technical drawings with our
            comprehensive AutoCAD training programs. From basic 2D drafting to
            advanced 3D modeling, we cover everything you need to become
            proficient in industry-standard CAD software.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
            <RedButton
              aria-label="Register Now"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="/training/register"
            >
              Register Now
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
              role="img"
              aria-label="AutoCAD software icon"
            >
              <DrawIcon sx={{ fontSize: 150, color: "white" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
));

HeroSection.displayName = "HeroSection";

export default HeroSection;
