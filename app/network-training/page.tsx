// app/network-training/page.tsx
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
  Lan as LanIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  SettingsEthernet as SettingsEthernetIcon,
  Hub as HubIcon,
  Cloud as CloudIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  EmojiEvents as EmojiEventsIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Wifi as WifiIcon,
  Router as RouterIcon,
  Storage as StorageIcon,
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

export default function NetworkTraining() {
  const courses = [
    {
      title: "Networking Essentials",
      level: "Beginner",
      duration: "12 Weeks",
      icon: <LanIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Foundational course covering the basics of computer networking, protocols, and network infrastructure.",
      objectives: [
        "Understanding network topologies and architectures",
        "TCP/IP protocol suite fundamentals",
        "Network hardware components and functions",
        "Basic network troubleshooting techniques",
        "Introduction to network security concepts",
      ],
      audience: "IT beginners, non-technical staff transitioning to IT",
    },
    {
      title: "Cisco CCNA (200-301)",
      level: "Intermediate",
      duration: "12 Weeks",
      icon: <HubIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Comprehensive preparation for Cisco Certified Network Associate certification covering modern networking technologies.",
      objectives: [
        "Network fundamentals and access technologies",
        "IP services, security fundamentals, and automation",
        "LAN switching technologies and routing concepts",
        "WAN technologies and infrastructure services",
        "Network management and troubleshooting",
      ],
      audience:
        "Network administrators, IT professionals seeking CCNA certification",
    },
    {
      title: "CompTIA Network+ (N10-008)",
      level: "Intermediate",
      duration: "8 Weeks",
      icon: <SettingsEthernetIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Industry-standard certification covering networking concepts, infrastructure, network operations, and security.",
      objectives: [
        "Networking concepts and protocols",
        "Network infrastructure and components",
        "Network operations and monitoring",
        "Network security and troubleshooting",
        "Network policies and best practices",
      ],
      audience:
        "IT support technicians, network administrators, help desk technicians",
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Industry Recognized Certifications",
      description:
        "Earn globally recognized certifications that boost your career prospects",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Career Advancement",
      description:
        "High-demand skills with excellent salary potential in the IT industry",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with real-world networking experience",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Hands-on Labs",
      description:
        "Practical exercises using real networking equipment and simulators",
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
                Network Training
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Build and Secure Modern Network Infrastructures
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Master the fundamentals and advanced concepts of computer
                networking with our comprehensive training programs. From
                networking essentials to industry certifications, we prepare you
                for success in the networking field.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                <RedButton
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="/training/register"
                  aria-label="Register Now"
                >
                  Register Now
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
                  Download Brochure
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

      {/* Why Network Training Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Network Training is Essential
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              As businesses become increasingly connected, skilled network
              professionals are in high demand. Our training programs prepare
              you for the challenges of modern networking.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: "#d21919ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  High Demand Careers
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Network professionals are among the most sought-after IT roles
                  with excellent growth prospects
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <WifiIcon sx={{ fontSize: 50, color: "#d21919ff", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Critical Infrastructure
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Networks are the backbone of modern business operations and
                  digital transformation
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#d21919ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Lucrative Salaries
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Network professionals earn significantly higher salaries
                  compared to other IT roles
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
                backgroundColor: "#e3f2fd",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "Employment of network and computer systems administrators is
                projected to grow 5% from 2022 to 2032, faster than the average
                for all occupations."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - U.S. Bureau of Labor Statistics
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
              Our Network Training Programs
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              From foundational networking concepts to advanced certification
              preparation, we offer comprehensive training for every skill level
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
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
                              sx={{ fontSize: 16, color: "#d21919ff" }}
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
                              sx={{ fontSize: 16, color: "#d21919ff" }}
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

      {/* Detailed Course Comparison */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Course Comparison
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Choose the right path for your networking career
            </Typography>
          </Box>

          <Paper sx={{ overflow: "hidden" }}>
            <Box sx={{ overflowX: "auto" }}>
              <Box sx={{ minWidth: 800 }}>
                <Box
                  sx={{ display: "flex", borderBottom: "1px solid #e0e0e0" }}
                >
                  <Box sx={{ flex: 1, p: 3, fontWeight: 600 }}>Feature</Box>
                  <Box
                    sx={{ flex: 1, p: 3, fontWeight: 600, textAlign: "center" }}
                  >
                    Networking Essentials
                  </Box>
                  <Box
                    sx={{ flex: 1, p: 3, fontWeight: 600, textAlign: "center" }}
                  >
                    CCNA
                  </Box>
                  <Box
                    sx={{ flex: 1, p: 3, fontWeight: 600, textAlign: "center" }}
                  >
                    CompTIA Network+
                  </Box>
                </Box>
                {[
                  {
                    feature: "Prerequisites",
                    essentials: "Basic computer skills",
                    ccna: "Networking Essentials",
                    network: "CompTIA A+ recommended",
                  },
                  {
                    feature: "Certification Provided",
                    essentials: "CCST(Networking)",
                    ccna: "Cisco CCNA",
                    network: "CompTIA Network+",
                  },
                  {
                    feature: "Exam Included",
                    essentials: "Yes",
                    ccna: "Yes",
                    network: "Yes",
                  },
                  {
                    feature: "Hands-on Labs",
                    essentials: "Basic-Intermediate",
                    ccna: "Extensive",
                    network: "Comprehensive",
                  },
                  {
                    feature: "Career Focus",
                    essentials: "Foundation",
                    ccna: "Cisco Networking",
                    network: "General Networking",
                  },
                  {
                    feature: "Duration",
                    essentials: "4 Weeks",
                    ccna: "12 Weeks",
                    network: "8 Weeks",
                  },
                ].map((row, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      borderBottom: index < 6 ? "1px solid #e0e0e0" : "none",
                      backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                    }}
                  >
                    <Box sx={{ flex: 1, p: 3, fontWeight: 500 }}>
                      {row.feature}
                    </Box>
                    <Box sx={{ flex: 1, p: 3, textAlign: "center" }}>
                      {row.essentials}
                    </Box>
                    <Box sx={{ flex: 1, p: 3, textAlign: "center" }}>
                      {row.ccna}
                    </Box>
                    <Box sx={{ flex: 1, p: 3, textAlign: "center" }}>
                      {row.network}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
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
              Our network training programs are designed to deliver real-world
              value and career advancement
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 5 }} key={index}>
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
          background: "linear-gradient(135deg, #d21919ff 0%, #a10d0dff 100%)",
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
            Ready to Connect Your Future?
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Join hundreds of professionals who have advanced their networking
            careers with our comprehensive training programs. Limited seats
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
              aria-label="Enroll Now"
            >
              Register Now
            </RedButton>
            {/*<Button
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
              Request Custom Training
            </Button> */}
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
                        sx={{ color: "#ff0000ff", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "The CCNA training at Triple Multipurpose Technology
                    completely transformed my understanding of networking. The
                    hands-on labs were incredibly valuable for my career
                    advancement."
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
                        Sarah Mohammed
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Network Engineer, MTN Nigeria
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
