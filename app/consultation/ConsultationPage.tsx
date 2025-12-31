// consultation/ConsultationPage.tsx
"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  SupportAgent as SupportAgentIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { FormData } from "./types";
import { serviceOptions, timelineOptions, budgetOptions } from "./data";
import HeroSection from "./components/HeroSection";

const ConsultationPage: React.FC = React.memo(() => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/consultation-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          projectDetails: "",
          timeline: "",
          budget: "",
        });
      } else {
        setError("Failed to submit request. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (success) {
    return (
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          pt: { xs: 12, md: 16 },
          pb: 8,
        }}
      >
        <Container maxWidth="md">
          <Paper sx={{ p: 6, textAlign: "center" }}>
            <SupportAgentIcon sx={{ fontSize: 64, color: "#4caf50", mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Consultation Request Submitted!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Thank you for your interest in our services. Our team will review
              your request and contact you within 1-2 business days to schedule
              your consultation.
            </Typography>
            <Button
              aria-label="Return to Home"
              variant="contained"
              size="large"
              href="/"
              sx={{
                background: "linear-gradient(45deg, #d32f2f, #ff6659)",
                color: "white",
                px: 4,
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(45deg, #b71c1c, #e53935)",
                },
              }}
            >
              Return to Home
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

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

      {/* Consultation Request Form */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Paper sx={{ p: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#d32f2f", mb: 4 }}
            >
              Consultation Request Form
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 4, color: "text.secondary" }}
            >
              Fill out this form to request a consultation with our experts.
              We'll get back to you within 1-2 business days to discuss your
              project and how we can help.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    aria-label="Full Name"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    aria-label="Email Address"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    aria-label="Phone Number"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Company/Organization"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                    aria-label="Company/Organization"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Service Type</InputLabel>
                    <Select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleSelectChange}
                      label="Service Type"
                      aria-label="Service Type"
                    >
                      {serviceOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Project Details"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    placeholder="Please describe your project requirements, goals, and any specific challenges you're facing"
                    aria-label="Project Details"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Project Timeline</InputLabel>
                    <Select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleSelectChange}
                      label="Project Timeline"
                      aria-label="Project Timeline"
                    >
                      {timelineOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Budget Range</InputLabel>
                    <Select
                      name="budget"
                      value={formData.budget}
                      onChange={handleSelectChange}
                      label="Budget Range"
                      aria-label="Budget Range"
                    >
                      {budgetOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: "linear-gradient(45deg, #d32f2f, #ff6659)",
                      color: "white",
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        background: "linear-gradient(45deg, #b71c1c, #e53935)",
                      },
                      "&:disabled": {
                        background: "#cccccc",
                      },
                    }}
                    aria-label={
                      loading ? "Submitting..." : "Request Consultation"
                    }
                  >
                    {loading ? "Submitting..." : "Request Consultation"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error || "Request submitted successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
});

ConsultationPage.displayName = "ConsultationPage";

export default ConsultationPage;
