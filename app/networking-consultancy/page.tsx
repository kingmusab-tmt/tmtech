// app/networking-consultancy/page.tsx
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
  Hub as HubIcon,
  Settings as SettingsIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Lan as LanIcon,
  Wifi as WifiIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Policy as PolicyIcon,
  Support as SupportIcon,
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

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#d32f2f",
    boxShadow: "0 8px 16px rgba(25, 118, 210, 0.1)",
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#e3f2fd",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

export default function NetworkingConsultancy() {
  const services = [
    {
      title: "Network Assessment & Audit",
      icon: <AssessmentIcon sx={{ fontSize: 48, color: "#d21928ff" }} />,
      description:
        "Comprehensive evaluation of your network infrastructure to identify performance issues, security gaps, and optimization opportunities.",
      deliverables: [
        "Detailed network topology analysis",
        "Performance benchmarking and baselining",
        "Security vulnerability assessment",
        "Bandwidth utilization analysis",
        "Comprehensive audit report with recommendations",
      ],
    },
    {
      title: "Network Design & Architecture",
      icon: <HubIcon sx={{ fontSize: 48, color: "#d2194dff" }} />,
      description:
        "Custom network architecture design tailored to your business requirements and future scalability needs.",
      deliverables: [
        "Scalable network architecture blueprint",
        "Redundancy and failover planning",
        "Quality of Service (QoS) implementation",
        "Network segmentation strategies",
        "Future-proof technology recommendations",
      ],
    },
    {
      title: "Network Implementation & Deployment",
      icon: <SettingsIcon sx={{ fontSize: 48, color: "#d21941ff" }} />,
      description:
        "Professional installation and configuration of network equipment, systems, and services with minimal business disruption.",
      deliverables: [
        "Hardware installation and configuration",
        "Switch and router setup",
        "Wireless network deployment",
        "Firewall and security appliance setup",
        "End-to-end testing and validation",
      ],
    },
    {
      title: "Network Security Services",
      icon: <SecurityIcon sx={{ fontSize: 48, color: "#d21935ff" }} />,
      description:
        "Comprehensive network security solutions to protect your infrastructure from internal and external threats.",
      deliverables: [
        "Firewall configuration and management",
        "Intrusion detection/prevention systems",
        "VPN setup and management",
        "Network access control implementation",
        "Security policy development and enforcement",
      ],
    },
    {
      title: "Cloud Networking Solutions",
      icon: <CloudIcon sx={{ fontSize: 48, color: "#d21982ff" }} />,
      description:
        "Integration of cloud services with your existing network infrastructure for hybrid and multi-cloud environments.",
      deliverables: [
        "Cloud connectivity solutions (AWS, Azure, GCP)",
        "SD-WAN implementation",
        "Hybrid cloud networking",
        "Cloud security integration",
        "Performance optimization for cloud services",
      ],
    },
    {
      title: "Wireless Network Solutions",
      icon: <WifiIcon sx={{ fontSize: 48, color: "#d21922ff" }} />,
      description:
        "Design, deployment, and optimization of enterprise-grade wireless networks for optimal coverage and performance.",
      deliverables: [
        "Wireless site surveys and planning",
        "Access point deployment and configuration",
        "RF optimization and interference mitigation",
        "Guest network implementation",
        "Wireless security and access control",
      ],
    },
    {
      title: "Network Monitoring & Management",
      icon: <SupportIcon sx={{ fontSize: 48, color: "#d21941ff" }} />,
      description:
        "Proactive network monitoring and management services to ensure optimal performance and rapid issue resolution.",
      deliverables: [
        "24/7 network monitoring",
        "Performance analytics and reporting",
        "Automated alerting and notifications",
        "Remote troubleshooting and support",
        "Capacity planning and optimization",
      ],
    },
    {
      title: "Network Optimization & Troubleshooting",
      icon: <SpeedIcon sx={{ fontSize: 48, color: "#d2194dff" }} />,
      description:
        "Performance optimization and expert troubleshooting to resolve network issues and improve efficiency.",
      deliverables: [
        "Network performance analysis",
        "Bottleneck identification and resolution",
        "Traffic optimization strategies",
        "Quality of Service tuning",
        "Root cause analysis and remediation",
      ],
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#d21941ff" }} />,
      title: "Expert Network Engineers",
      description:
        "Certified professionals with extensive real-world experience",
    },
    {
      icon: <HubIcon sx={{ fontSize: 40, color: "#d2193eff" }} />,
      title: "Scalable Solutions",
      description: "Infrastructure designed to grow with your business needs",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#d21954ff" }} />,
      title: "Improved Performance",
      description: "Optimized networks for maximum speed and reliability",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#d21954ff" }} />,
      title: "Proactive Support",
      description: "Preventive maintenance to avoid costly downtime",
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
          background: "linear-gradient(135deg, #d21919ff 0%, #a10d2bff 100%)",
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
                Networking Consultancy & Services
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Build, Secure, and Optimize Your Network Infrastructure
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Our comprehensive networking consultancy services help
                organizations design, implement, and maintain robust, secure,
                and scalable network infrastructures. From assessment to
                optimization, we provide end-to-end networking solutions.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                <RedButton
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="/consultation"
                  aria-label="Request Consultation"
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
                  <HubIcon sx={{ fontSize: 150, color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Networking Consultancy Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Networking Consultancy Matters
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              In today's connected world, a robust and secure network
              infrastructure is critical for business operations, productivity,
              and competitive advantage.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SpeedIcon sx={{ fontSize: 50, color: "#d2192fff", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Enhanced Performance
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Optimized networks for maximum speed, reliability, and user
                  experience
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SecurityIcon
                  sx={{ fontSize: 50, color: "#d2191cff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Robust Security
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Secure network infrastructure protecting your data and systems
                  from threats
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#d2193eff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Business Continuity
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Reliable networks ensuring minimal downtime and maximum
                  productivity
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Network Infrastructure Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#e3f2fd",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "Network downtime costs businesses an average of $5,600 per
                minute. 82% of organizations experienced at least one network
                outage in the past year with an average cost of $972,000."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Ponemon Institute & IDC Research
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
              Our Networking Consultancy Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive networking solutions tailored to your organization's
              specific needs and growth objectives
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
                              sx={{ fontSize: 16, color: "#d21947ff" }}
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

      {/* Consultancy Process */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Consultancy Process
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              A structured approach to delivering effective networking solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "Comprehensive evaluation of your current network infrastructure and identification of gaps",
                icon: (
                  <AssessmentIcon sx={{ fontSize: 40, color: "#d2195aff" }} />
                ),
              },
              {
                step: "2",
                title: "Design",
                description:
                  "Creation of a customized network architecture aligned with your business objectives",
                icon: <HubIcon sx={{ fontSize: 40, color: "#d21944ff" }} />,
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Professional deployment of network solutions with minimal business disruption",
                icon: (
                  <SettingsIcon sx={{ fontSize: 40, color: "#d2194dff" }} />
                ),
              },
              {
                step: "4",
                title: "Optimization",
                description:
                  "Ongoing monitoring, support, and continuous improvement of network performance",
                icon: <SpeedIcon sx={{ fontSize: 40, color: "#d21947ff" }} />,
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
                      boxShadow: "0 8px 16px rgba(210, 25, 74, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#e3f2fd",
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
                      backgroundColor: "#d21944ff",
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
              Why Choose Our Networking Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our approach combines technical expertise with business
              understanding to deliver real value
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
              href="/contact"
              aria-label="Schedule a Consultation"
            >
              Schedule a Network Assessment
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
            Optimize Your Network Infrastructure Today
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Don't let network issues impact your business productivity and
            security. Contact our experts for a comprehensive network assessment
            and tailored solutions.
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
              aria-label="Request Free Network Assessment"
            >
              Request Free Network Assessment
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
              aria-label="Contact Our Networking Team"
              href="/contact"
            >
              Contact Our Networking Team
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
                        sx={{ color: "#d21963ff", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "Triple Multipurpose Technology transformed our network
                    infrastructure. Their assessment identified critical
                    bottlenecks we didn't know existed, and their implementation
                    doubled our network performance while improving security."
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
                        Amina Yusuf
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        IT Manager, TechCorp Nigeria
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
