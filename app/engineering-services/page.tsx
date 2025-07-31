// app/engineering-services/page.tsx
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
  ElectricBolt as ElectricBoltIcon,
  SolarPower as SolarPowerIcon,
  Settings as SettingsIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Build as BuildIcon,
  Engineering as EngineeringIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
} from "@mui/icons-material";

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

export default function EngineeringServices() {
  const services = [
    {
      title: "Solar Power Installation",
      icon: <SolarPowerIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Complete solar power system design, installation, and commissioning for residential, commercial, and industrial applications.",
      deliverables: [
        "Solar site assessment and energy audit",
        "System design and engineering",
        "High-quality solar panel installation",
        "Inverter and battery system setup",
        "Grid-tie or off-grid system configuration",
      ],
    },
    {
      title: "Electrical Installation & Maintenance",
      icon: <ElectricBoltIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Professional electrical installation, maintenance, and repair services for all types of facilities.",
      deliverables: [
        "Electrical wiring and circuit installation",
        "Panel board and distribution system setup",
        "Lighting system installation and maintenance",
        "Emergency power systems and backup generators",
        "Electrical safety inspections and compliance",
      ],
    },
    {
      title: "Industrial Automation",
      icon: (
        <PrecisionManufacturingIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />
      ),
      description:
        "Automation solutions to increase efficiency, productivity, and safety in industrial processes.",
      deliverables: [
        "PLC programming and control system design",
        "SCADA system implementation",
        "Sensor and instrumentation installation",
        "Process automation and optimization",
        "Industrial network integration",
      ],
    },
    {
      title: "Electrical System Design",
      icon: <EngineeringIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Custom electrical system design services for new constructions, renovations, and facility expansions.",
      deliverables: [
        "Load calculation and electrical planning",
        "One-line diagrams and electrical layouts",
        "Equipment specification and selection",
        "Energy efficiency optimization",
        "Code compliance and safety standards",
      ],
    },
    {
      title: "Preventive Maintenance Programs",
      icon: <SupportIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Scheduled maintenance services to ensure optimal performance and longevity of electrical and solar systems.",
      deliverables: [
        "Regular system inspections and testing",
        "Component cleaning and maintenance",
        "Performance monitoring and reporting",
        "Predictive maintenance strategies",
        "Emergency repair and troubleshooting",
      ],
    },
    {
      title: "Energy Audits & Efficiency",
      icon: <AssessmentIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Comprehensive energy audits to identify opportunities for reducing consumption and costs.",
      deliverables: [
        "Energy consumption analysis",
        "Efficiency improvement recommendations",
        "ROI calculations for energy upgrades",
        "Load management strategies",
        "Sustainability reporting",
      ],
    },
    {
      title: "Backup Power Solutions",
      icon: <SpeedIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Uninterruptible power supply (UPS) and backup generator systems for critical operations.",
      deliverables: [
        "Power backup system design",
        "UPS and generator installation",
        "Automatic transfer switch setup",
        "Battery system maintenance",
        "Load testing and commissioning",
      ],
    },
    {
      title: "Electrical Safety & Compliance",
      icon: <SecurityIcon sx={{ fontSize: 48, color: "#ff0000ff" }} />,
      description:
        "Electrical safety assessments, compliance audits, and certification services.",
      deliverables: [
        "Electrical safety inspections",
        "Code compliance verification",
        "Risk assessment and mitigation",
        "Safety training programs",
        "Certification and documentation",
      ],
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />,
      title: "Licensed Engineers",
      description: "Certified professionals with extensive industry experience",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />,
      title: "Quality Assurance",
      description: "High-quality materials and workmanship guaranteed",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />,
      title: "Cost Effective",
      description: "Solutions designed to maximize ROI and efficiency",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and maintenance",
    },
  ];

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
              >
                Engineering Services
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Power Your Future with Reliable Engineering Solutions
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Our comprehensive engineering services provide reliable,
                efficient, and sustainable solutions for electrical, solar, and
                industrial systems. From design to installation and maintenance,
                we deliver excellence in every project.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                <RedButton
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="/consultation"
                >
                  Request Consultation
                </RedButton>
                {/* <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Download Services Brochure
                </Button> */}
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
                >
                  <EngineeringIcon sx={{ fontSize: 150, color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            {[
              {
                step: "1",
                title: "Consultation & Assessment",
                description:
                  "Understanding your requirements and conducting site evaluation",
                icon: (
                  <AssessmentIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />
                ),
              },
              {
                step: "2",
                title: "Design & Engineering",
                description:
                  "Creating detailed designs and engineering specifications",
                icon: (
                  <EngineeringIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />
                ),
              },
              {
                step: "3",
                title: "Installation & Setup",
                description: "Professional installation with quality assurance",
                icon: (
                  <SettingsIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />
                ),
              },
              {
                step: "4",
                title: "Testing & Commissioning",
                description: "Comprehensive testing and system optimization",
                icon: <SpeedIcon sx={{ fontSize: 40, color: "#ff0000ff" }} />,
              },
            ].map((process, index) => (
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
            >
              Schedule a Free Consultation
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
            >
              Request Free Site Assessment
            </RedButton>
            <Button
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
}
