"use client";
import React, { memo } from "react";
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
  Draw as DrawIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Architecture as ArchitectureIcon,
  Engineering as EngineeringIcon,
  DesignServices as DesignServicesIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  EmojiEvents as EmojiEventsIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  Home as HomeIcon,
  Map as MapIcon,
} from "@mui/icons-material";
import { courses, benefits, industries } from "./data";
import { Course, Benefit, Industry } from "./types";
import HeroSection from "./components/HeroSection";

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

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
  },
}));

const CourseCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #e0e0e0",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#d32f2f",
    boxShadow: "0 8px 16px rgba(211, 47, 47, 0.1)",
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#fff5f5",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const AutoCADTraining = memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: 8,
      }}
      role="main"
      aria-labelledby="autocad-training-title"
    >
      <HeroSection />

      {/* Why AutoCAD Training Section */}
      <Box
        sx={{ py: 10, backgroundColor: "white" }}
        component="section"
        aria-labelledby="why-autocad-title"
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
              id="why-autocad-title"
            >
              Why AutoCAD Training is Essential
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              AutoCAD is the industry standard for computer-aided design across
              multiple disciplines. Mastering this tool opens doors to numerous
              career opportunities and enhances productivity.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: "#9c27b0", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Industry Standard Tool
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Used by over 2 million professionals worldwide in
                  architecture, engineering, and construction
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <PrecisionManufacturingIcon
                  sx={{ fontSize: 50, color: "#9c27b0", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Enhanced Productivity
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Increase efficiency by up to 70% compared to manual drafting
                  methods
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#9c27b0", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Career Advancement
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  AutoCAD skills can increase earning potential by 25-40% in
                  design-related careers
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Market Demand Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#f3e5f5",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "CAD professionals earn 35% more than those without CAD skills.
                The global CAD market is projected to reach $16.2 billion by
                2026."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Grand View Research Report
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Course Catalog Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our AutoCAD Training Programs
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              From foundational concepts to specialized applications, we offer
              comprehensive training for every skill level and industry
              requirement
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <CourseCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                    >
                      <Box sx={{ mr: 3 }}>{course.icon}</Box>
                      <Box>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {course.title}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <SchoolIcon
                              sx={{ fontSize: 16, color: "#9c27b0" }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {course.level}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <TimelineIcon
                              sx={{ fontSize: 16, color: "#9c27b0" }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {course.duration}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                      {course.description}
                    </Typography>

                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      Learning Objectives
                    </Typography>
                    <List dense>
                      {course.objectives.map((objective, objIndex) => (
                        <ListItem key={objIndex} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleIcon
                              sx={{ fontSize: 16, color: "#9c27b0" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={objective} />
                        </ListItem>
                      ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle2" color="text.secondary">
                      Target Audience: {course.audience}
                    </Typography>
                  </CardContent>
                </CourseCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Industries We Serve */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Industries That Use AutoCAD
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our training prepares you for success in various professional
              fields
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                name: "Architecture",
                icon: <HomeIcon sx={{ fontSize: 40 }} />,
                description: "Building design and construction documentation",
              },
              {
                name: "Engineering",
                icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
                description: "Mechanical, civil, and structural design",
              },
              {
                name: "Construction",
                icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
                description: "Site planning and project management",
              },
              {
                name: "Manufacturing",
                icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
                description: "Product design and prototyping",
              },
              {
                name: "Surveying",
                icon: <MapIcon sx={{ fontSize: 40 }} />,
                description: "Land surveying and mapping",
              },
              {
                name: "Interior Design",
                icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
                description: "Space planning and visualization",
              },
            ].map((industry, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
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
                      boxShadow: "0 8px 16px rgba(156, 39, 176, 0.2)",
                    },
                  }}
                >
                  <Box sx={{ color: "#9c27b0", mb: 2 }}>{industry.icon}</Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {industry.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {industry.description}
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
              What You'll Gain
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our AutoCAD training programs are designed to deliver real-world
              value and professional advancement
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
              aria-label="Enroll in Our Next Training Session"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 6, py: 2 }}
              href="/training/register"
            >
              Enroll in Our Next Training Session
            </RedButton>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",
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
            Ready to Design Your Future?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join hundreds of professionals who have enhanced their design
            capabilities with our comprehensive AutoCAD training programs.
            Limited seats available for the next batch.
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
              aria-label="Register Now"
              size="large"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.2rem" }}
              href="/training/register"
            >
              Register Now
            </RedButton>
          </Box>
          <Typography variant="body1" sx={{ mt: 3, opacity: 0.9 }}>
            Next Training Session: Starts{" "}
            {new Date(
              Date.now() + 14 * 24 * 60 * 60 * 1000
            ).toLocaleDateString()}
          </Typography>
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
              What Our Students Say
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
                        sx={{ color: "#ff9800", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "The AutoCAD Essentials course at Triple Multipurpose
                    Technology transformed my career. I went from struggling
                    with basic commands to creating complex architectural
                    drawings in just one week!"
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
                        Fatima Abdullahi
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Architect, Design Studio Nigeria
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

AutoCADTraining.displayName = "AutoCADTraining";

export default AutoCADTraining;
