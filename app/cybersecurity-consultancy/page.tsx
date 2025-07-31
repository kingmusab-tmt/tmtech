// app/cybersecurity-consultancy/page.tsx
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
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Shield as ShieldIcon,
  Code as CodeIcon,
  Settings as SettingsIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Lock as LockIcon,
  Gavel as GavelIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  NetworkWifi as NetworkWifiIcon,
  Warning as WarningIcon,
  BarChart as BarChartIcon,
  Policy as PolicyIcon,
  School as SchoolIcon,
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

export default function CybersecurityConsultancy() {
  const services = [
    {
      title: "Security Risk Assessment",
      icon: <AssessmentIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Comprehensive evaluation of your organization's security posture to identify vulnerabilities and threats.",
      deliverables: [
        "Detailed risk assessment report",
        "Risk prioritization matrix",
        "Remediation recommendations",
        "Compliance gap analysis",
        "Executive summary for stakeholders",
      ],
    },
    {
      title: "Penetration Testing",
      icon: <CodeIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Simulated cyber attacks to identify security weaknesses in your systems, networks, and applications.",
      deliverables: [
        "External and internal penetration testing",
        "Web application security testing",
        "Mobile app security assessment",
        "Wireless network testing",
        "Detailed findings report with remediation steps",
      ],
    },
    {
      title: "Security Architecture Design",
      icon: <SettingsIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Design and implementation of secure network and system architectures tailored to your business needs.",
      deliverables: [
        "Network security architecture blueprint",
        "Zero trust implementation strategy",
        "Cloud security architecture design",
        "Security controls implementation roadmap",
        "Integration with existing infrastructure",
      ],
    },
    {
      title: "Incident Response & Forensics",
      icon: <WarningIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Rapid response to security incidents and forensic analysis to minimize damage and prevent recurrence.",
      deliverables: [
        "Incident response plan development",
        "24/7 incident response service",
        "Digital forensics investigation",
        "Root cause analysis",
        "Post-incident recovery recommendations",
      ],
    },
    {
      title: "Security Operations Center (SOC) Setup",
      icon: <BarChartIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Establishment and management of a Security Operations Center for continuous monitoring and threat detection.",
      deliverables: [
        "SOC design and implementation",
        "SIEM solution deployment",
        "Threat intelligence integration",
        "Monitoring dashboard setup",
        "Staff training and knowledge transfer",
      ],
    },
    {
      title: "Compliance & Governance",
      icon: <GavelIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Ensure your organization meets industry standards and regulatory requirements for cybersecurity.",
      deliverables: [
        "ISO 27001 implementation support",
        "GDPR compliance assessment",
        "PCI DSS compliance services",
        "NIST framework alignment",
        "Audit preparation and support",
      ],
    },
    {
      title: "Cloud Security Assessment",
      icon: <CloudIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Evaluation and hardening of cloud environments to protect data and applications in the cloud.",
      deliverables: [
        "Cloud security posture assessment",
        "AWS/Azure/GCP security review",
        "Container and Kubernetes security",
        "Cloud access control evaluation",
        "Data protection in cloud environments",
      ],
    },
    {
      title: "Security Awareness Training",
      icon: <SchoolIcon sx={{ fontSize: 48, color: "#d32f2f" }} />,
      description:
        "Customized training programs to educate employees about cybersecurity best practices and threats.",
      deliverables: [
        "Phishing simulation campaigns",
        "Role-based security training",
        "Security awareness workshops",
        "Training effectiveness metrics",
        "Continuous education programs",
      ],
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Expert Security Team",
      description:
        "Certified security professionals with real-world experience",
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Proactive Protection",
      description:
        "Identify and mitigate threats before they impact your business",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "ROI Focused",
      description: "Cost-effective solutions that protect your bottom line",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
      title: "Compliance Ready",
      description: "Meet regulatory requirements and industry standards",
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
                Cybersecurity Consultancy
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Protect Your Digital Assets with Expert Security Solutions
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Our comprehensive cybersecurity consultancy services help
                organizations identify, assess, and mitigate security risks
                while building robust defense strategies. From risk assessments
                to incident response, we provide end-to-end security solutions.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                <RedButton
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="/consultation"
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
                  <SecurityIcon sx={{ fontSize: 150, color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Cybersecurity Consultancy Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Cybersecurity Consultancy Matters
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              In today's threat landscape, organizations need expert guidance to
              navigate complex security challenges and protect their critical
              assets from evolving cyber threats.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <ShieldIcon sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Reduce Security Risks
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Proactive identification and mitigation of vulnerabilities
                  before exploitation
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <LockIcon sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Protect Your Reputation
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Prevent costly data breaches that can damage your brand and
                  customer trust
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TrendingUpIcon
                  sx={{ fontSize: 50, color: "#d32f2f", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Ensure Compliance
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Meet regulatory requirements and avoid costly penalties and
                  fines
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              The Cost of Inaction
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#ffebee",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "The average cost of a data breach is $4.45 million globally.
                Organizations with mature security postures save an average of
                $3.05 million compared to those without."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - IBM Security Report 2023
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
              Our Cybersecurity Consultancy Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive security solutions tailored to your organization's
              specific needs and challenges
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
                              sx={{ fontSize: 16, color: "#d32f2f" }}
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
              A structured approach to delivering effective cybersecurity
              solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "Comprehensive evaluation of your current security posture and identification of gaps",
                icon: (
                  <AssessmentIcon sx={{ fontSize: 40, color: "#d32f2f" }} />
                ),
              },
              {
                step: "2",
                title: "Strategy Development",
                description:
                  "Creation of a customized security roadmap aligned with your business objectives",
                icon: <PolicyIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Deployment of security solutions and controls with minimal business disruption",
                icon: <SettingsIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
              },
              {
                step: "4",
                title: "Monitoring & Optimization",
                description:
                  "Ongoing support, monitoring, and continuous improvement of security measures",
                icon: <BarChartIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
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
                      boxShadow: "0 8px 16px rgba(211, 47, 47, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#ffebee",
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
                      backgroundColor: "#d32f2f",
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
              Why Choose Our Cybersecurity Consultancy
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
            >
              Schedule a Security Assessment
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
            Secure Your Organization Today
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Don't wait for a security incident to realize the importance of
            robust cybersecurity. Contact our experts for a comprehensive
            security assessment and tailored protection strategy.
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
            >
              Request Free Security Assessment
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
              href="/contact"
            >
              Contact Our Security Team
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
                        sx={{ color: "#ff9800", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "Triple Multipurpose Technology's cybersecurity consultancy
                    helped us identify critical vulnerabilities we didn't even
                    know existed. Their penetration testing and remediation
                    guidance saved us from potential breaches and regulatory
                    fines."
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
                        Ibrahim Ali
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        CTO, FinTech Solutions Nigeria
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
