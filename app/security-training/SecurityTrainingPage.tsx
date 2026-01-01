// app/security-training/SecurityTrainingPage.tsx
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
  Chip,
  styled,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  AccessTime as AccessTimeIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import HeroSection from "./components/HeroSection";
import { courses, benefits, testimonials } from "./data";

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

const SecurityTrainingPage: React.FC = React.memo(() => {
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
      <HeroSection
        title="Cybersecurity Training Programs"
        subtitle="Master the Skills to Protect Digital Assets"
        description="Comprehensive cybersecurity training programs designed to equip professionals with the knowledge and skills needed to defend against evolving cyber threats. From foundational concepts to advanced techniques."
      />

      {/* Why Choose Our Training Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Our Cybersecurity Training
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Industry-leading cybersecurity education with practical, hands-on
              learning experiences that prepare you for real-world challenges.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <CheckCircleIcon
                  sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Practical Learning
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Hands-on labs and real-world scenarios to build practical
                  cybersecurity skills
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <PeopleIcon sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Expert Instructors
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Learn from certified cybersecurity professionals with years of
                  industry experience
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <AccessTimeIcon
                  sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Flexible Schedule
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Multiple training formats including online, in-person, and
                  hybrid options
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Cybersecurity Career Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#fff5f5",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "The global cybersecurity workforce gap is expected to reach 3.5
                million by 2025. Cybersecurity jobs pay an average of $116,000
                annually, 28% higher than other IT roles."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - ISC² Cybersecurity Workforce Study
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
              Our Cybersecurity Training Programs
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive courses from beginner to advanced levels, designed
              to meet industry standards and certification requirements
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <CourseCard>
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ mr: 3 }}>{course.icon}</Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {course.title}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                          <Chip
                            label={course.level}
                            color="primary"
                            size="small"
                          />
                          <Chip
                            label={course.duration}
                            variant="outlined"
                            size="small"
                            icon={<AccessTimeIcon />}
                          />
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
                              sx={{ fontSize: 16, color: "#d32f2f" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={objective} />
                        </ListItem>
                      ))}
                    </List>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2, fontStyle: "italic" }}
                    >
                      Target Audience: {course.audience}
                    </Typography>
                  </CardContent>
                </CourseCard>
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
              Why Train with Us
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our training approach combines theoretical knowledge with
              practical application to ensure you gain real-world cybersecurity
              skills
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
              aria-label="Get Training Information"
            >
              Get Training Information
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
            Ready to Secure Your Future?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join hundreds of professionals who have enhanced their cybersecurity
            skills with our comprehensive training programs. Limited seats
            available for the next batch.
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
              aria-label="Register Now"
            >
              Register Now
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
              aria-label="Contact Our Training Team"
              href="/contact"
            >
              Contact Our Training Team
            </Button>
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
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
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
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    {[...Array(5)].map((_, i) => (
                      <CheckCircleIcon
                        key={i}
                        sx={{ color: "#d32f2f", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "{testimonial.quote}"
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
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
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

SecurityTrainingPage.displayName = "SecurityTrainingPage";

export default SecurityTrainingPage;
