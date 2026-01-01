"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import {
  School as SchoolIcon,
  Timeline as TimelineIcon,
  CheckCircle as CheckCircleIcon,
  EmojiEvents as EmojiEventsIcon,
  Laptop as LaptopIcon,
  TrendingUp as TrendingUpIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { courses, benefits, testimonials, technologies } from "./data";

const CourseCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[8],
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const RedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#d32f2f",
  color: "white",
  "&:hover": {
    backgroundColor: "#b71c1c",
  },
}));

const WebDevelopmentTrainingPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: 8,
      }}
    >
      {/* Why Web Development Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Web Development Skills Matter
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              The digital economy is growing rapidly, and web development skills
              are essential for businesses and individuals to thrive in the
              modern world.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Lucrative Career Opportunities
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Web developers earn competitive salaries with excellent growth
                  potential
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <LaptopIcon sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  High Demand Skills
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Over 1.7 million web development jobs available globally with
                  continuous growth
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#af4c4cff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Entrepreneurial Freedom
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Build your own products, freelance, or start a web development
                  agency
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Market Growth Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#e8f5e9",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "The global web development market is expected to reach $131.7
                billion by 2026, growing at a CAGR of 13.7% from 2021 to 2026."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Research and Markets Report
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
              Our Web Development Programs
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              From frontend design to full stack development, we offer
              comprehensive training for every skill level and career goal
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
                              sx={{ fontSize: 16, color: "#af4c4cff" }}
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
                              sx={{ fontSize: 16, color: "#af4c4cff" }}
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
                              sx={{ fontSize: 16, color: "#af4c4cff" }}
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

      {/* Technologies We Teach */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Technologies You'll Master
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our curriculum covers the most in-demand technologies and
              frameworks used by leading companies
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {technologies.map((tech, index) => (
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
                      boxShadow: "0 8px 16px rgba(175, 76, 76, 0.2)",
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
                    <SchoolIcon sx={{ color: "#af4c4cff" }} />
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
              Our web development training programs are designed to deliver
              real-world value and career advancement
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
            Ready to Code Your Future?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join hundreds of developers who have launched successful careers
            with our comprehensive web development training programs. Limited
            seats available for the next batch.
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
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                    "{testimonial.content}"
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
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}, {testimonial.company}
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
};

export default React.memo(WebDevelopmentTrainingPage);
