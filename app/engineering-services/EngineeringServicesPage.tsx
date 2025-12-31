// app/engineering-services/EngineeringServicesPage.tsx
"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  ElectricBolt as ElectricBoltIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import { services, benefits, processSteps } from "./data";
import HeroSection from "./components/HeroSection";

const RedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #ff0000e7, #f5000cff)",
  color: "white",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  "&:hover": {
    background: "linear-gradient(45deg, #ef0000ff, #e60000ff)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(255, 152, 0, 0.3)",
  },
  transition: "all 0.3s ease",
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#ff0000ff",
    boxShadow: "0 8px 16px rgba(255, 152, 0, 0.1)",
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#fff3e0",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const EngineeringServicesPage: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: 8,
      }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Why Engineering Services Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Professional Engineering Services Matter
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              In today's energy-conscious world, professional engineering
              services ensure safety, efficiency, and sustainability for your
              electrical and power systems.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <ElectricBoltIcon
                  sx={{ fontSize: 50, color: "#ff9800", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Energy Efficiency
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Optimized systems that reduce energy consumption and costs
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SecurityIcon
                  sx={{ fontSize: 50, color: "#ff3300ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Safety & Compliance
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Systems designed and installed to meet all safety standards
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#ff0000ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Reliability
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Durable installations with minimal downtime and maintenance
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Industry Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#fff3e0",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "Proper electrical maintenance can reduce energy costs by up to
                30% and prevent 85% of electrical failures. Solar energy
                adoption has grown by 42% annually worldwide."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - International Energy Agency & Electrical Safety Foundation
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Engineering Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive engineering solutions tailored to your specific
              requirements and industry standards
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <ServiceCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                    >
                      <Box sx={{ mr: 3 }}>{service.icon}</Box>
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {service.title}
                      </Typography>
                    </Box>

                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>

                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      What We Deliver
                    </Typography>
                    <List dense>
                      {service.deliverables.map((deliverable, delIndex) => (
                        <ListItem key={delIndex} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleIcon
                              sx={{ fontSize: 16, color: "#ff0000ff" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={deliverable} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Process */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Engineering Process
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              A structured approach to delivering exceptional engineering
              solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((process, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 16px rgba(255, 152, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#fff3e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {process.icon}
                  </Box>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "#ff0000ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      {process.step}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {process.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {process.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Our Engineering Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our approach combines technical expertise with practical solutions
              to deliver real value
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <BenefitCard>
                  {benefit.icon}
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mt: 2 }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <RedButton
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 6, py: 2 }}
              aria-label="Schedule a Consultation"
            >
              Schedule a Consultation
            </RedButton>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Power Your Business with Reliable Engineering
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Don't let electrical issues or energy inefficiencies impact your
            operations. Contact our engineering experts for a comprehensive
            assessment and tailored solutions.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <RedButton
              size="large"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.2rem" }}
              href="/consultation"
              aria-label="Request Site Assessment"
            >
              Request Site Assessment
            </RedButton>
            <Button
              aria-label="Contact Our Engineering Team"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Contact Our Engineering Team
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              What Our Clients Say
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item}>
                <Paper sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    {[...Array(5)].map((_, i) => (
                      <CheckCircleIcon
                        key={i}
                        sx={{ color: "#ff0000ff", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "Triple Multipurpose Technology installed a complete solar
                    power system for our manufacturing facility. Their
                    engineering expertise and attention to detail resulted in a
                    60% reduction in our electricity costs and reliable backup
                    power during outages."
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Yusuf Mohammed
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Operations Manager, Industrial Manufacturing Ltd
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
});

EngineeringServicesPage.displayName = "EngineeringServicesPage";

export default EngineeringServicesPage;
