// app/web-development-services/page.tsx
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
  Code as CodeIcon,
  Web as WebIcon,
  Hub as HubIcon,
  ShoppingCart,
  Smartphone as SmartphoneIcon,
  DesignServices as DesignServicesIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Support as SupportIcon,
  Settings as SettingsIcon,
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
  border: "1px solid #e0e0e0ff",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#af4c51ff",
    boxShadow: "0 8px 16px rgba(175, 76, 76, 0.1)",
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#f5e8e8ff",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

export default function WebDevelopmentServices() {
  const services = [
    {
      title: "Custom Web Application Development",
      icon: <WebIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Bespoke web applications tailored to your specific business requirements and workflows.",
      deliverables: [
        "Full-stack web application development",
        "Database design and implementation",
        "API development and integration",
        "User authentication and authorization",
        "Scalable and maintainable codebase",
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: <ShoppingCart sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Complete e-commerce platforms with secure payment processing, inventory management, and analytics.",
      deliverables: [
        "Custom e-commerce platform development",
        "Payment gateway integration",
        "Inventory and order management",
        "Product catalog management",
        "Analytics and reporting dashboard",
      ],
    },
    {
      title: "Content Management Systems (CMS)",
      icon: <DesignServicesIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Custom CMS solutions that empower you to easily manage and update your website content.",
      deliverables: [
        "Custom CMS development",
        "User role and permission management",
        "Content creation and editing tools",
        "Media library and file management",
        "SEO-friendly content structure",
      ],
    },
    {
      title: "Progressive Web Apps (PWA)",
      icon: <SmartphoneIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Modern web applications that work offline and provide native app-like experiences across devices.",
      deliverables: [
        "PWA development and deployment",
        "Offline functionality implementation",
        "Push notifications integration",
        "Responsive design for all devices",
        "Performance optimization",
      ],
    },
    {
      title: "Web Portal Development",
      icon: <HubIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Secure and scalable web portals for businesses, communities, and organizations.",
      deliverables: [
        "Custom portal development",
        "User management and authentication",
        "Dashboard and reporting features",
        "Data visualization and analytics",
        "Multi-tenant architecture support",
      ],
    },
    {
      title: "API Development & Integration",
      icon: <SettingsIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Robust API development and integration services to connect your systems and enable seamless data flow.",
      deliverables: [
        "RESTful and GraphQL API development",
        "Third-party API integration",
        "Microservices architecture",
        "API documentation and testing",
        "Security and rate limiting implementation",
      ],
    },
    {
      title: "Website Maintenance & Support",
      icon: <SupportIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Ongoing maintenance, updates, and technical support to keep your web applications running smoothly.",
      deliverables: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Bug fixes and troubleshooting",
        "Content updates and feature enhancements",
        "24/7 technical support",
      ],
    },
    {
      title: "Web Application Security",
      icon: <SecurityIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />,
      description:
        "Comprehensive security solutions to protect your web applications from cyber threats and vulnerabilities.",
      deliverables: [
        "Security audit and penetration testing",
        "OWASP compliance implementation",
        "Data encryption and protection",
        "Authentication and authorization systems",
        "Security monitoring and incident response",
      ],
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
      title: "Expert Development Team",
      description:
        "Experienced developers with expertise in modern web technologies",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
      title: "High Performance",
      description:
        "Optimized applications for speed, scalability, and user experience",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
      title: "Secure Solutions",
      description:
        "Robust security measures to protect your data and applications",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
      title: "Ongoing Support",
      description: "Continuous maintenance and support for long-term success",
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
                Web Development Services
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Build Powerful, Scalable Web Solutions
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Our comprehensive web development services help businesses
                create stunning, functional, and secure web applications that
                drive growth and enhance user engagement. From concept to
                deployment, we deliver exceptional digital experiences.
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
                  <CodeIcon sx={{ fontSize: 150, color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Web Development Services Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Professional Web Development Matters
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              In today's digital-first world, a well-designed, high-performing
              website or web application is essential for business success,
              customer engagement, and competitive advantage.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SpeedIcon sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Enhanced User Experience
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Intuitive interfaces and seamless navigation that keep users
                  engaged
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Business Growth
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Professional web solutions that drive conversions and revenue
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SecurityIcon
                  sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Robust Security
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Secure applications that protect your data and customer
                  information
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Web Development Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#f5e8e8ff",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "47% of consumers expect a web page to load in 2 seconds or
                less. 79% of users who experience website performance issues are
                less likely to purchase from that site again."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Akamai & Kissmetrics Research
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
              Our Web Development Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive web development solutions tailored to your business
              needs and objectives
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
                              sx={{ fontSize: 16, color: "#af4c4cff" }}
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

      {/* Development Process */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Development Process
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              A structured approach to delivering exceptional web solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description:
                  "Understanding your requirements, goals, and target audience",
                icon: <WebIcon sx={{ fontSize: 40, color: "#af544cff" }} />,
              },
              {
                step: "2",
                title: "Design & Prototyping",
                description:
                  "Creating wireframes, mockups, and interactive prototypes",
                icon: (
                  <DesignServicesIcon
                    sx={{ fontSize: 40, color: "#af4c4cff" }}
                  />
                ),
              },
              {
                step: "3",
                title: "Development",
                description:
                  "Building your solution with clean, efficient, and secure code",
                icon: <CodeIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
              },
              {
                step: "4",
                title: "Testing & Deployment",
                description:
                  "Rigorous testing and seamless deployment to production",
                icon: <SpeedIcon sx={{ fontSize: 40, color: "#af4c4cff" }} />,
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
                      boxShadow: "0 8px 16px rgba(76, 175, 80, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#f5e8e8ff",
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
                      backgroundColor: "#af4c4cff",
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

      {/* Technologies We Use */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Technologies We Work With
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Cutting-edge technologies and frameworks for modern web
              development
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { name: "React.js", category: "Frontend" },
              { name: "Vue.js", category: "Frontend" },
              { name: "Angular", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "Python/Django", category: "Backend" },
              { name: "PHP/Laravel", category: "Backend" },
              { name: "MongoDB", category: "Database" },
              { name: "PostgreSQL", category: "Database" },
              { name: "AWS/Cloud", category: "Deployment" },
              { name: "Docker", category: "DevOps" },
              { name: "Git", category: "Version Control" },
              { name: "Jest", category: "Testing" },
            ].map((tech, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 16px rgba(76, 175, 80, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#e8f5e9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <CodeIcon sx={{ color: "#af4c4cff" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tech.category}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Our Web Development Services
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
              Start Your Project Today
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
            Ready to Build Your Digital Presence?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Transform your business with a custom web solution that drives
            results. Contact our experts for a free consultation and project
            estimate.
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
              aria-label="Request Free Consultation"
            >
              Request Free Consultation
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
              href="/web-development-services/portfolio"
              aria-label="View Our Portfolio"
            >
              View Our Portfolio
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
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
                        sx={{ color: "#af4c4cff", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "Triple Multipurpose Technology delivered an exceptional
                    e-commerce platform that has transformed our online
                    business. Their attention to detail, technical expertise,
                    and commitment to quality exceeded our expectations."
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
                        Chinedu Okonkwo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        CEO, Retail Solutions Nigeria
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
