// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
  styled,
  keyframes,
} from "@mui/material";
import {
  Computer as ComputerIcon,
  Security as SecurityIcon,
  NetworkWifi as NetworkIcon,
  DesignServices as DesignIcon,
  ElectricBolt as ElectricIcon,
  Campaign as CampaignIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  CalendarToday as CalendarIcon,
  DesignServices,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const services = [
  {
    title: "Web Development",
    description: "Custom websites, web applications, and progressive web apps",
    icon: <ComputerIcon sx={{ fontSize: 48 }} />,
    href: "/web-development-services",
    color: "#af4c4cff",
  },
  {
    title: "Cybersecurity",
    description: "Training, consultancy, and security solutions",
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    href: "/cybersecurity-consultancy",
    color: "#d32f2f",
  },
  {
    title: "Networking",
    description: "Network design, implementation, and consultancy",
    icon: <NetworkIcon sx={{ fontSize: 48 }} />,
    href: "/networking-consultancy",
    color: "#d21919ff",
  },
  {
    title: "AutoCAD & Design",
    description: "AutoCAD training and graphic design services",
    icon: <DesignIcon sx={{ fontSize: 48 }} />,
    href: "/autocad-training",
    color: "#b02727ff",
  },
  {
    title: "Engineering",
    description: "Solar, electrical installation and maintenance",
    icon: <ElectricIcon sx={{ fontSize: 48 }} />,
    href: "/engineering-services",
    color: "#ff0000ff",
  },
  {
    title: "Business Services",
    description: "Document typing, translation, and printing",
    icon: <BusinessIcon sx={{ fontSize: 48 }} />,
    href: "/business-services",
    color: "#b02727ff",
  },
];

const trainingPrograms = [
  {
    title: "Cybersecurity Training",
    description: "Essentials, Ethical Hacking, Pen Testing, SOC",
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    href: "/security-training",
  },
  {
    title: "Networking Training",
    description: "Essentials, CCNA, CompTIA Network+",
    icon: <NetworkIcon sx={{ fontSize: 32 }} />,
    href: "/network-training",
  },
  {
    title: "Web Development",
    description: "Frontend, Backend, Full Stack, PWA",
    icon: <ComputerIcon sx={{ fontSize: 32 }} />,
    href: "/web-development-training",
  },
  {
    title: "AutoCAD Training",
    description: "Essentials, Intermediate, 3D Modeling",
    icon: <DesignIcon sx={{ fontSize: 32 }} />,
    href: "/autocad-training",
  },
  {
    title: "Graphic Design",
    description: "Fundamentals, Illustration, UI/UX",
    icon: <DesignServices sx={{ fontSize: 32 }} />,
    href: "/graphic-design-training",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: "linear-gradient(90deg, #d32f2f, #d26f19ff, #af864cff)",
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease",
  },
  "&:hover::before": {
    transform: "translateX(0)",
  },
}));

const GradientText = styled("span")(({ theme }) => ({
  background: "linear-gradient(45deg, #d32f2f, #ff6659)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const RedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #d32f2f, #ff6659)",
  color: "white",
  "&:hover": {
    background: "linear-gradient(45deg, #b71c1c, #e53935)",
  },
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "training", "consultancy"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: 12,
          background:
            "linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #f0f4c3 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  color="#d32f2f"
                >
                  Triple Multipurpose
                  <GradientText> Technology</GradientText>
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Your trusted technology partner in Maiduguri, Borno State,
                  Nigeria. Delivering innovative solutions across IT,
                  Engineering, Printing, and Training since 2019.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                  <RedButton
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection("services")}
                  >
                    Explore Services
                  </RedButton>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => router.push("/contact")}
                    sx={{ borderColor: "#d32f2f", color: "#d32f2f" }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    background: "linear-gradient(135deg, #d32f2f, #ff6659)",
                    color: "white",
                    borderRadius: 3,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 6 }} sx={{ textAlign: "center" }}>
                      <Typography variant="h3">🇳🇬</Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mt: 1 }}
                      >
                        Nigerian Company
                      </Typography>
                      <Typography variant="body2">CAC BN 2875632</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }} sx={{ textAlign: "center" }}>
                      <Typography variant="h3">📍</Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mt: 1 }}
                      >
                        Maiduguri
                      </Typography>
                      <Typography variant="body2">Borno State</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }} sx={{ textAlign: "center" }}>
                      <Typography variant="h3">📅</Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mt: 1 }}
                      >
                        Since 2019
                      </Typography>
                      <Typography variant="body2">April 29</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }} sx={{ textAlign: "center" }}>
                      <Typography variant="h3">🌐</Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mt: 1 }}
                      >
                        Multi-service
                      </Typography>
                      <Typography variant="body2">IT & Engineering</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[
              { number: "2019", label: "Founded", icon: <CalendarIcon /> },
              {
                number: "500+",
                label: "Clients Served",
                icon: <CheckCircleIcon />,
              },
              {
                number: "50+",
                label: "Projects Completed",
                icon: <CheckCircleIcon />,
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                icon: <CheckCircleIcon />,
              },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ color: "#d32f2f", mb: 1 }}>{stat.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 12, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                color="#d32f2f"
              >
                About Triple Multipurpose Technology
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800, mx: "auto" }}
              >
                Nigerian indigenous Business duly registered with the Cooperate
                Affairs Commission of Nigeria under COMPANIES AND ALLIED MATTER
                ACT 1990, on the 29th Day of April, 2019 with registration
                number BN: 2875632. We are committed to delivering excellence
                across multiple technology domains.
              </Typography>
            </Box>

            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" gutterBottom color="#d32f2f">
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                  To empower businesses and individuals in Nigeria with
                  cutting-edge technology solutions that drive growth,
                  innovation, and sustainable development so as to Boost the
                  Nation’s Economy in aspect of IT and Engineering Service.
                </Typography>
                <Typography variant="h3" gutterBottom color="#d32f2f">
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  To become the leading technology company in Nigeria,
                  recognized for our comprehensive service portfolio and
                  exceptional client satisfaction.
                </Typography>
                <Typography variant="h3" gutterBottom color="#d32f2f">
                  Value Preposition
                </Typography>
                <Typography variant="body1" paragraph color="#d32f2f">
                  To provide Services That Touch Customer's Heart and Meet Their
                  Demand.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 2, borderRadius: 3, mb: 4 }}>
                  <Typography variant="h3" gutterBottom color="#d32f2f">
                    Business Objective
                  </Typography>
                  <Typography variant="body1" paragraph>
                    To Provide Employment/Investment Opportunity for Technology
                    Enthusiasm within the Nations
                  </Typography>
                </Paper>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h3" gutterBottom color="#d32f2f">
                    Core Values
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {[
                      "Innovation & Excellence",
                      "Client-Centric Approach",
                      "Integrity & Transparency",
                      "Continuous Learning",
                      "Community Impact",
                    ].map((value, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <CheckCircleIcon sx={{ color: "#af4c4cff" }} />
                        <Typography variant="body1">{value}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 12, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                color="#d32f2f"
              >
                Our Comprehensive Services
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800, mx: "auto" }}
              >
                A broad portfolio of services designed to meet your technology
                and business needs
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <StyledCard
                      onClick={() => router.push(service.href)}
                      sx={{ cursor: "pointer" }}
                    >
                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        <Box
                          sx={{
                            mb: 3,
                            color: service.color,
                            display: "flex",
                            justifyContent: "center",
                            animation: `${bounce} 2s infinite`,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                        >
                          {service.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            mt: 2,
                            color: service.color,
                            borderColor: service.color,
                            "&:hover": {
                              backgroundColor: `${service.color}10`,
                              borderColor: service.color,
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Training Programs Section */}
      <Box id="training" sx={{ py: 12, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                color="#d32f2f"
              >
                Training Programs
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800, mx: "auto" }}
              >
                Professional training courses to enhance your skills and advance
                your career
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {trainingPrograms.map((program, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Paper
                      onClick={() => router.push(program.href)}
                      sx={{
                        p: 3,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                          borderColor: "#d32f2f",
                        },
                      }}
                    >
                      <Box sx={{ color: "#d32f2f", mb: 2 }}>{program.icon}</Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {program.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {program.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 6 }}>
              <RedButton
                variant="contained"
                size="large"
                endIcon={<SchoolIcon />}
                onClick={() => router.push("/#training")}
              >
                View All Training Programs
              </RedButton>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Consultancy Services Section */}
      <Box id="consultancy" sx={{ py: 12, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                color="#d32f2f"
              >
                Professional Consultancy Services
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800, mx: "auto" }}
              >
                Expert guidance and solutions for your technology challenges
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  title: "Cybersecurity Consultancy",
                  description:
                    "Risk assessment, penetration testing, security architecture",
                  icon: (
                    <SecurityIcon sx={{ fontSize: 48, color: "#d32f2f" }} />
                  ),
                  href: "/cybersecurity-consultancy",
                },
                {
                  title: "Networking Consultancy",
                  description:
                    "Network design, implementation, optimization services",
                  icon: (
                    <NetworkIcon sx={{ fontSize: 48, color: "#d21919ff" }} />
                  ),
                  href: "/networking-consultancy",
                },
                {
                  title: "Web Development Consultancy",
                  description:
                    "Technical architecture, development strategy, optimization",
                  icon: (
                    <ComputerIcon sx={{ fontSize: 48, color: "#af4c4cff" }} />
                  ),
                  href: "/web-development-services",
                },
              ].map((service, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StyledCard
                      onClick={() => router.push(service.href)}
                      sx={{ cursor: "pointer" }}
                    >
                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        <Box sx={{ mb: 3 }}>{service.icon}</Box>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                        >
                          {service.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            mt: 2,
                            color: "#d32f2f",
                            borderColor: "#d32f2f",
                            "&:hover": {
                              backgroundColor: "#d32f2f10",
                              borderColor: "#d32f2f",
                            },
                          }}
                        >
                          Explore Services
                        </Button>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
            >
              Join hundreds of satisfied clients who have enhanced their
              operations with our comprehensive technology solutions and
              professional services.
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
                onClick={() => router.push("/contact")}
              >
                Get Started Today
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
                onClick={() => scrollToSection("services")}
              >
                View Our Services
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
