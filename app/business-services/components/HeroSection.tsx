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
  Business as BusinessIcon,
} from "@mui/icons-material";

const RedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #b02727ff, #a21f1fff)",
  color: "white",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  "&:hover": {
    background: "linear-gradient(45deg, #9a1b1bff, #8c1414ff)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(176, 39, 39, 0.3)",
  },
  transition: "all 0.3s ease",
}));

const HeroSection = memo(() => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #b02727ff 0%, #8c1414ff 100%)",
      color: "white",
      py: { xs: 6, md: 10 },
    }}
    component="section"
    aria-labelledby="business-services-title"
  >
    <Container maxWidth="xl">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
            id="business-services-title"
          >
            Business Services
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 500, opacity: 0.9 }}
          >
            Professional Document Solutions for Your Business
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ maxWidth: 700, lineHeight: 1.8 }}
          >
            Streamline your business operations with our comprehensive document
            services. From multilingual translation to professional printing, we
            provide reliable, high-quality solutions that meet your business
            needs.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
            <RedButton
              aria-label="Get Started Today"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="/contact"
            >
              Get Started Today
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
              aria-label="Business services icon"
            >
              <BusinessIcon sx={{ fontSize: 150, color: "white" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
));

HeroSection.displayName = "HeroSection";

export default HeroSection;
