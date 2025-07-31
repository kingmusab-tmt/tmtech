// app/web-development-services/portfolio/page.tsx
"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Chip,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Web as WebIcon,
  ShoppingCart as ShoppingCartIcon,
  Dashboard as DashboardIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Language as LanguageIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

const portfolioItems = [
  {
    id: 1,
    title: "VTU Platform",
    category: "E-Commerce",
    description:
      "Full-featured online VTU vending platform with payment integration, and analytics dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Monnify"],
    image: "/images/vtu.png",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Order Management",
      "SEO Optimized",
    ],
    webiste: "https://sabamuent.com/",
  },
  {
    id: 2,
    title: "Lead Management System",
    category: "Corporate",
    description:
      "Modern responsive website for a lead Management with market place, Stripe and Paypal Payment Integration.",
    technologies: ["Next.js", "Tailwind CSS", "Contentful", "i18next"],
    image: "/images/lead.PNG",
    features: [
      "Responsive Design",
      "Payment Integration",
      "Multilingual",
      "SEO Optimized",
    ],
    webiste: "https://lead-generation-wep-app.vercel.app/",
  },
  {
    id: 3,
    title: "Business Website",
    category: "Enterprise",
    description:
      "Comprehensive business management system with appointment scheduling.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "JWT Auth"],
    image: "/images/orion.PNG",
    features: [
      "SEO Optimized",
      "Appointment Scheduling",
      "Multiple Pages",
      "Secure Access",
    ],
    webiste: "https://orionitservice.com",
  },
  {
    id: 4,
    title: "Beauty Salon Website",
    category: "Enterprise",
    description:
      "Comprehensive and responsive website for a beauty salon with booking system and service showcase.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "JWT Auth"],
    image: "/images/bare.png",
    features: [
      "SEO Optimized",
      "Appointment Scheduling",
      "Multiple Pages",
      "Secure Access",
    ],
    webiste: "https://barebykristen.com/",
  },
  //   {
  //     id: 4,
  //     title: "Mobile Banking App",
  //     category: "Mobile",
  //     description:
  //       "Progressive Web App for mobile banking with biometric authentication and real-time transactions.",
  //     technologies: ["React Native", "Firebase", "Node.js", "Biometric API"],
  //     image: "/placeholder-banking.jpg",
  //     features: [
  //       "Biometric Auth",
  //       "Real-time Transactions",
  //       "Push Notifications",
  //       "Offline Mode",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Educational Portal",
  //     category: "Education",
  //     description:
  //       "Learning management system with course creation, student tracking, and interactive assessments.",
  //     technologies: ["Angular", "NestJS", "MySQL", "AWS S3"],
  //     image: "/placeholder-education.jpg",
  //     features: [
  //       "Course Management",
  //       "Student Tracking",
  //       "Assessments",
  //       "Video Streaming",
  //     ],
  //   },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Marketplace",
    description:
      "Property listing platform with advanced search, virtual tours, and agent management system.",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Mapbox API"],
    image: "/images/realestate.PNG",
    features: [
      "Property Search",
      "Virtual Tours",
      "Payment Integration",
      "Agent Profiles",
      "Lead Management",
    ],
    website: "https://ajibest.vercel.app/",
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Corporate",
  "Enterprise",
  "Mobile",
  "Education",
  "Marketplace",
];

export default function WebDevelopmentPortfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filteredItems =
    activeTab === 0
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === categories[activeTab]
        );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

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
          background: "linear-gradient(135deg, #af4c4cff 0%, #7d2e2eff 100%)",
          color: "white",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Web Development Portfolio
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Showcasing our exceptional web development projects and client
              success stories
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Portfolio Stats */}
      <Box sx={{ py: 6, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[
              {
                number: "5+",
                label: "Projects Completed",
                icon: <CodeIcon />,
              },
              { number: "5+", label: "Happy Clients", icon: <WebIcon /> },
              {
                number: "10+",
                label: "Technologies Used",
                icon: <LanguageIcon />,
              },
              {
                number: "5+",
                label: "Years Experience",
                icon: <DashboardIcon />,
              },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
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
                  <Box sx={{ color: "#af4c4cff", mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Filter */}
      <Box sx={{ py: 6, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Work
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
            >
              Explore our diverse portfolio of web development projects across
              various industries
            </Typography>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              sx={{
                "& .MuiTab-root": {
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  minWidth: { xs: "auto", md: "120px" },
                },
                "& .Mui-selected": {
                  color: "#af4c4cff",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#af4c4cff",
                },
              }}
            >
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  label={category}
                  sx={{
                    textTransform: "none",
                    fontWeight: activeTab === index ? 600 : 400,
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Portfolio Grid */}
          <Grid container spacing={4}>
            {filteredItems.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          backgroundColor: "#f5e8e8ff",
                          color: "#7d2e2eff",
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {item.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Key Features:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {item.features.slice(0, 3).map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "#af4c4c30",
                              color: "#af4c4cff",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                        {item.features.length > 3 && (
                          <Chip
                            label={`+${item.features.length - 3} more`}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "#af4c4c30",
                              color: "#af4c4cff",
                              fontSize: "0.75rem",
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Technologies:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {item.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: "#af4c4c10",
                              color: "#af4c4cff",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: "auto",
                        color: "#af4c4cff",
                        borderColor: "#af4c4cff",
                        "&:hover": {
                          backgroundColor: "#4caf5010",
                          borderColor: "#af4c4cff",
                        },
                      }}
                      component="a"
                      href={item.website ?? item.webiste ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #af4c4cff 0%, #7d3a2eff 100%)",
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
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Let's discuss how we can bring your web development vision to life
            with our expert team.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="/consultation"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "white",
                color: "#af4c4cff",
                px: 4,
                py: 1.5,
                fontSize: "1.2rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Request Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                borderColor: "white",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1.2rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Client Testimonials
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              What our clients say about our web development services
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                name: "Ahmed Musa",
                company: "TechStart Nigeria",
                role: "CEO",
                quote:
                  "Triple Multipurpose Technology delivered an exceptional e-commerce platform that transformed our online business. Their attention to detail and technical expertise exceeded our expectations.",
                project: "E-Commerce Platform",
              },
              {
                name: "Fatima Hassan",
                company: "HealthPlus Clinic",
                role: "Director",
                quote:
                  "The healthcare management system developed by Triple Multipurpose Technology has streamlined our operations and improved patient care. The team was professional and delivered on time.",
                project: "Healthcare Management System",
              },
              {
                name: "Yusuf Mohammed",
                company: "RealEstate Pro",
                role: "CTO",
                quote:
                  "Our real estate platform has received outstanding feedback from agents and clients. The virtual tour feature and advanced search capabilities have set us apart from competitors.",
                project: "Real Estate Platform",
              },
            ].map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    {[...Array(5)].map((_, i) => (
                      <WebIcon key={i} sx={{ color: "#af4c4cff", mr: 0.5 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic", mb: 3 }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
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
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}, {testimonial.company}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#af4c4cff", fontWeight: 500 }}
                      >
                        {testimonial.project}
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
