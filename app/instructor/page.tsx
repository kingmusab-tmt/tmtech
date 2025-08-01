// app/instructor/page.tsx
"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  styled,
} from "@mui/material";
import {
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  EmojiEvents as EmojiEventsIcon,
  ArrowForward as ArrowForwardIcon,
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

export default function BecomeInstructor() {
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Join Our Team and help shape the next generation of technology
              professionals
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Why Become an Instructor */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Teach With Us?
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Join our team of experts and make a meaningful impact in the
              technology education space
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <SchoolIcon sx={{ fontSize: 48, color: "#d32f2f", mr: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Share Your Knowledge
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Transform your industry experience into valuable learning
                  experiences for aspiring professionals. Help students master
                  the skills they need to succeed in today's competitive
                  technology landscape.
                </Typography>
                <Typography variant="body1">
                  Whether you're an expert in cybersecurity, web development,
                  networking, or engineering, we provide the platform for you to
                  share your expertise.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <TrendingUpIcon
                    sx={{ fontSize: 48, color: "#d32f2f", mr: 2 }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Professional Growth
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Enhance your own skills while working on projects or Teachings
                  others. Our Business provides opportunities for continuous
                  learning, professional development, and networking with other
                  industry experts.
                </Typography>
                <Typography variant="body1">
                  Stay current with the latest technologies and teaching
                  methodologies while building your reputation as a thought
                  leader in your field.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <EmojiEventsIcon
                    sx={{ fontSize: 48, color: "#d32f2f", mr: 2 }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Make an Impact
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Contribute to the development of technology talent in Nigeria
                  and beyond. Your teaching can transform careers and help
                  bridge the skills gap in the industry.
                </Typography>
                <Typography variant="body1">
                  Join a community of passionate educators who are shaping the
                  future of technology education in Northern Nigeria and across
                  the continent.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <GroupsIcon sx={{ fontSize: 48, color: "#d32f2f", mr: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Competitive Benefits
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Enjoy competitive compensation, flexible scheduling, and
                  access to our state-of-the-art training facilities and
                  learning management systems.
                </Typography>
                <Typography variant="body1">
                  We provide ongoing support, curriculum development assistance,
                  and opportunities for career advancement within our
                  organization.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Requirements Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Requirements
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              What we look for in our Team Members
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: "Industry Experience",
                description:
                  "Minimum 3-5 years of hands-on experience in your area of expertise",
              },
              {
                title: "Technical Skills",
                description:
                  "Current knowledge of industry tools, technologies, and best practices",
              },
              {
                title: "Communication Skills",
                description:
                  "Ability to explain complex concepts clearly and engage learners effectively",
              },
              {
                title: "Teaching Passion",
                description:
                  "Genuine interest in education and mentoring the next generation of professionals",
              },
              {
                title: "Professional Certifications",
                description:
                  "Relevant certifications (e.g., CCNA, CISSP, AWS, etc.) are highly valued",
              },
              {
                title: "Continuous Learning",
                description:
                  "Commitment to staying current with industry trends and technological advances",
              },
            ].map((requirement, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper sx={{ p: 3, height: "100%", textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#d32f2f" }}
                  >
                    {requirement.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {requirement.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Application Process */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              How to Apply
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Simple steps to join our team of expert instructors
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Complete our online application form with your details and expertise",
              },
              {
                step: "2",
                title: "Initial Review",
                description:
                  "Our team will review your qualifications and experience",
              },
              {
                step: "3",
                title: "Interview Process",
                description:
                  "Participate in interviews to discuss your working or teaching approach and expertise",
              },
              {
                step: "4",
                title: "Demo Session",
                description:
                  "Conduct a sample teaching session or exercise to demonstrate your skills",
              },
              {
                step: "5",
                title: "Onboarding",
                description:
                  "Complete our instructor training program, or a mini project and get started",
              },
            ].map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "#d32f2f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      {step.step}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 8 }}>
            <RedButton
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 6, py: 2 }}
              href="/instructor/apply"
              aria-label="Apply to Join Our Team"
            >
              Apply to Join Our Team
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
            Ready to Inspire the Next Generation?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join our team of experts and help shape the future of technology
            education in Nigeria.
          </Typography>
          <RedButton
            size="large"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.5, fontSize: "1.2rem" }}
            href="/instructor/apply"
            aria-label="Start Your Application Today"
          >
            Start Your Application Today
          </RedButton>
        </Container>
      </Box>
    </Box>
  );
}
