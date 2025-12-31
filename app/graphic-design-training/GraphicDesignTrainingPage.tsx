// app/graphic-design-training/GraphicDesignTrainingPage.tsx
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
  School as SchoolIcon,
  Timeline as TimelineIcon,
  DesignServices as DesignServicesIcon,
  EmojiEvents as EmojiEventsIcon,
  ColorLens as ColorLensIcon,
} from "@mui/icons-material";
import { courses, benefits, softwareList } from "./data";
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

const GraphicDesignTrainingPage: React.FC = React.memo(() => {
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

      {/* Why Graphic Design Training Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Graphic Design Skills Matter
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              In today's visual world, graphic design skills are essential for
              personal branding, business marketing, and creative expression.
              Our training programs prepare you for success in this high-demand
              field.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: "#ff0000ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Lucrative Career Opportunities
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Graphic designers earn competitive salaries with freelance and
                  full-time options
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <ColorLensIcon sx={{ fontSize: 50, color: "#ff9800", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Creative Expression
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Turn your artistic vision into impactful visual communications
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <ColorLensIcon sx={{ fontSize: 50, color: "#ff9800", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Entrepreneurial Freedom
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Start your own design business or work with clients worldwide
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Industry Growth Statistics
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
                "The global graphic design software market is expected to reach
                $4.3 billion by 2027, with a CAGR of 5.2%. Employment of graphic
                designers is projected to grow 3% from 2022 to 2032."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Bureau of Labor Statistics & Market Research Reports
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
              Our Graphic Design Training Programs
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              From foundational design principles to specialized digital skills,
              we offer comprehensive training for every creative ambition
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
                              sx={{ fontSize: 16, color: "#ff9800" }}
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
                              sx={{ fontSize: 16, color: "#ff9800" }}
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
                              sx={{ fontSize: 16, color: "#ff9800" }}
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

      {/* Software We Teach */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Industry-Standard Software
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Master the tools used by professional designers worldwide
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {softwareList.map((software, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                    <DesignServicesIcon sx={{ color: "#ff9800" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {software.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {software.category}
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
              Our graphic design training programs are designed to deliver
              real-world value and creative advancement
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
              href="/training/register"
              aria-label="Enroll in Our Next Training Session"
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
          background: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
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
            Join hundreds of creatives who have launched successful design
            careers with our comprehensive graphic design training programs.
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
                    "The Graphic Design Fundamentals course at Triple M
                    Technology completely transformed my approach to design. I
                    went from zero experience to landing freelance clients
                    within 3 months of completing the course!"
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
                        Maryam Bello
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Freelance Designer, Lagos
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

GraphicDesignTrainingPage.displayName = "GraphicDesignTrainingPage";

export default GraphicDesignTrainingPage;
