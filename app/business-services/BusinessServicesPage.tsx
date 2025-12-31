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
  Chip,
} from "@mui/material";
import {
  TextFields as TextFieldsIcon,
  Print as PrintIcon,
  Translate as TranslateIcon,
  UploadFile as UploadFileIcon,
  School as SchoolIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
  ColorLens as ColorLensIcon,
  Language as LanguageIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Support as SupportIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import { services, benefits } from "./data";
import { Service, Benefit } from "./types";
import HeroSection from "./components/HeroSection";

const RedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #b02727ff, #a21f1fff)",
  color: "white",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  "&:hover": {
    background: "linear-gradient(45deg, #9a1b1bff, #8c1414ff)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(176, 39, 39, 0.3)",
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
    borderColor: "#b02727ff",
    boxShadow: "0 8px 16px rgba(156, 39, 176, 0.1)",
  },
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#f3e5f5",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const BusinessServices = memo(() => {
  const services = [
    {
      title: "Document Typing & Typesetting",
      icon: <TextFieldsIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Convert handwritten documents, images, or any format into professionally formatted digital documents.",
      deliverables: [
        "Handwritten to digital conversion",
        "Image to text transcription",
        "Professional document formatting",
        "Multiple output formats (Word, PDF, etc.)",
        "Custom styling and branding",
      ],
    },
    {
      title: "Multilingual Translation",
      icon: <TranslateIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Accurate translation services between English, Arabic, Hausa, and French with cultural context.",
      deliverables: [
        "English ↔ Arabic translation",
        "English ↔ Hausa translation",
        "English ↔ French translation",
        "Document translation with formatting",
        "Cultural adaptation and localization",
      ],
    },
    {
      title: "Professional Printing Services",
      icon: <PrintIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "High-quality printing services for all your business documents in color or monochrome.",
      deliverables: [
        "Color and black & white printing",
        "Various paper sizes and types",
        "Binding and finishing services",
        "Bulk printing with volume discounts",
        "Express printing options",
      ],
    },
    {
      title: "Academic & Exam Document Services",
      icon: <SchoolIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Specialized typing and formatting services for academic papers, exam questions, and educational materials.",
      deliverables: [
        "Exam question paper formatting",
        "Academic paper typesetting",
        "Thesis and dissertation formatting",
        "Multiple choice question creation",
        "Answer key preparation",
      ],
    },
    {
      title: "Document Scanning & Digitization",
      icon: <UploadFileIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Convert physical documents into searchable digital formats with proper organization.",
      deliverables: [
        "Document scanning and OCR processing",
        "Digital archiving and organization",
        "Searchable PDF creation",
        "Batch processing for large volumes",
        "Cloud storage integration",
      ],
    },
    {
      title: "Desktop Publishing",
      icon: <FormatAlignLeftIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Professional layout and design services for brochures, newsletters, and marketing materials.",
      deliverables: [
        "Brochure and flyer design",
        "Newsletter and magazine layout",
        "Business card and stationery design",
        "Poster and banner creation",
        "Brand-consistent design elements",
      ],
    },
    {
      title: "Data Entry & Processing",
      icon: <SupportIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Accurate data entry and processing services for forms, surveys, and business records.",
      deliverables: [
        "Form data entry and validation",
        "Spreadsheet creation and management",
        "Database population and updates",
        "Survey data processing",
        "Quality assurance and verification",
      ],
    },
    {
      title: "Business Document Solutions",
      icon: <LanguageIcon sx={{ fontSize: 48, color: "#b02727ff" }} />,
      description:
        "Comprehensive document services for contracts, proposals, reports, and business communications.",
      deliverables: [
        "Contract drafting and formatting",
        "Business proposal creation",
        "Report writing and formatting",
        "Presentation slide creation",
        "Letterhead and template design",
      ],
    },
  ];

  const benefits = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#b02727ff" }} />,
      title: "Native Language Experts",
      description:
        "Professional translators with native fluency in all supported languages",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#b02727ff" }} />,
      title: "Fast Turnaround",
      description: "Quick processing with express options for urgent requests",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#b02727ff" }} />,
      title: "Quality Guaranteed",
      description: "Rigorous quality checks and proofreading for accuracy",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#b02727ff" }} />,
      title: "Confidentiality Assured",
      description: "Secure handling of sensitive business documents",
    },
  ];

  const supportedLanguages = [
    { name: "English", flag: "🇬🇧" },
    { name: "Arabic", flag: "🇸🇦" },
    { name: "Hausa", flag: "🇳🇬" },
    { name: "French", flag: "🇫🇷" },
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
                Business Services
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 500, opacity: 0.9 }}
              >
                Transform Your Documents Into Professional Masterpieces
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{ maxWidth: 700, lineHeight: 1.8 }}
              >
                Our comprehensive business services help you convert handwritten
                documents, images, and any format into professionally typed,
                translated, and printed materials. With support for English,
                Arabic, Hausa, and French, we serve diverse business needs with
                precision and quality.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                <RedButton
                  aria-label="Request Service"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Request Service
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
                  <TextFieldsIcon sx={{ fontSize: 150, color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Supported Languages Section */}
      <Box sx={{ py: 6, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Supported Languages
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              We provide professional services in multiple languages to serve
              our diverse clientele
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {supportedLanguages.map((language, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 120,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 16px rgba(176, 39, 39, 0.2)",
                    },
                  }}
                >
                  <Typography variant="h2" sx={{ mb: 1 }}>
                    {language.flag}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {language.name}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Business Services Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Our Business Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Professional document services that save you time, enhance your
              image, and ensure accuracy in all your business communications.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <SpeedIcon sx={{ fontSize: 50, color: "#b02727ff", mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Time Saving
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Focus on your core business while we handle document
                  processing
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <VerifiedIcon
                  sx={{ fontSize: 50, color: "#b02727ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Professional Quality
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Impeccable formatting and presentation that enhances your
                  professional image
                </Typography>
              </BenefitCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BenefitCard>
                <TranslateIcon
                  sx={{ fontSize: 50, color: "#b02727ff", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Multilingual Expertise
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Accurate translation and typing services in multiple languages
                </Typography>
              </BenefitCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Service Statistics
            </Typography>
            <Paper
              sx={{
                p: 4,
                maxWidth: 800,
                mx: "auto",
                backgroundColor: "#f5e5e5ff",
              }}
            >
              <Typography variant="h5" color="text.primary" paragraph>
                "Businesses that invest in professional document services see a
                40% improvement in document processing efficiency and a 60%
                reduction in errors. Our clients report 95% satisfaction with
                translation accuracy."
              </Typography>
              <Typography variant="body1" color="text.secondary">
                - Triple Multipurpose Technology Client Survey 2023
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Business Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Comprehensive document solutions tailored to your specific
              business requirements
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
                              sx={{ fontSize: 16, color: "#b02727ff" }}
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

      {/* Service Process */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Service Process
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Simple and efficient process to get your documents processed
              professionally
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Submit Your Documents",
                description:
                  "Bring or send your handwritten documents, images, or files",
                icon: (
                  <UploadFileIcon sx={{ fontSize: 40, color: "#b02727ff" }} />
                ),
              },
              {
                step: "2",
                title: "Specify Requirements",
                description:
                  "Tell us your preferred format, language, and special instructions",
                icon: (
                  <TextFieldsIcon sx={{ fontSize: 40, color: "#b02727ff" }} />
                ),
              },
              {
                step: "3",
                title: "Professional Processing",
                description:
                  "Our experts process your documents with attention to detail",
                icon: <SupportIcon sx={{ fontSize: 40, color: "#b02727ff" }} />,
              },
              {
                step: "4",
                title: "Delivery & Satisfaction",
                description:
                  "Receive your professionally processed documents and provide feedback",
                icon: (
                  <CheckCircleIcon sx={{ fontSize: 40, color: "#b02727ff" }} />
                ),
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
                      boxShadow: "0 8px 16px rgba(176, 39, 39, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#f3e5f5",
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
                      backgroundColor: "#b02727ff",
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
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Our Business Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Our approach combines expertise, technology, and customer service
              to deliver exceptional results
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
              aria-label="Submit Your Documents Today"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 6, py: 2 }}
              href="/document-submission"
            >
              Submit Your Documents Today
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
            Transform Your Documents Professionally
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
          >
            Whether you need translation, typing, or printing services, our
            expert team is ready to help you present your documents
            professionally in any of our supported languages.
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
              aria-label="Request Free Quote"
              size="large"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.2rem" }}
              href="/consultation"
            >
              Request for Quotation
            </RedButton>
            <Button
              aria-label="Contact Our Service Team"
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
              Contact Our Service Team
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
                        sx={{ color: "#b02727ff", mr: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontStyle: "italic" }}
                  >
                    "Triple Multipurpose Technology's document typing and
                    Arabic-English translation services have been invaluable for
                    our business. Their accuracy and attention to detail are
                    exceptional, and they always deliver on time."
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
                        Fatima Hassan
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Business Owner, Maiduguri Trading Company
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

BusinessServices.displayName = "BusinessServices";

export default BusinessServices;
