// app/instructor/apply/page.tsx
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
  Checkbox,
  FormControlLabel,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  School as SchoolIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

export default function InstructorApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    certifications: "",
    teachingExperience: "",
    availability: "",
    motivation: "",
    termsAccepted: false,
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions");
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/instructor-application", {
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
          expertise: "",
          experience: "",
          certifications: "",
          teachingExperience: "",
          availability: "",
          motivation: "",
          termsAccepted: false,
        });
      } else {
        setError("Failed to submit application. Please try again.");
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
            <SchoolIcon sx={{ fontSize: 64, color: "#4caf50", mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Application Submitted Successfully!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Thank you for your interest with Triple Multipurpose Technology.
              Our team will review your application and contact you within 3-5
              business days.
            </Typography>
            <Button
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
              Job Application Form
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Join our team of expert and help shape the future of technology
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Application Form */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Paper sx={{ p: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#d32f2f", mb: 4 }}
            >
              Application Form
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    variant="outlined"
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
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Area of Expertise</InputLabel>
                    <Select
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleSelectChange}
                      label="Area of Expertise"
                    >
                      <MenuItem value="cybersecurity">Cybersecurity</MenuItem>
                      <MenuItem value="web-development">
                        Web Development
                      </MenuItem>
                      <MenuItem value="networking">Networking</MenuItem>
                      <MenuItem value="engineering">Engineering</MenuItem>
                      <MenuItem value="graphic-design">Graphic Design</MenuItem>
                      <MenuItem value="autocad">AutoCAD</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Years of Professional Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    type="number"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Relevant Certifications"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    variant="outlined"
                    placeholder="e.g., CCNA, CISSP, AWS, etc."
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Teaching/Training/Working Experience"
                    name="teachingExperience"
                    value={formData.teachingExperience}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    variant="outlined"
                    placeholder="Please describe any previous experience"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Availability</InputLabel>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onChange={handleSelectChange}
                      label="Availability"
                    >
                      <MenuItem value="full-time">Full-time</MenuItem>
                      <MenuItem value="part-time">Part-time</MenuItem>
                      <MenuItem value="weekends">Weekends Only</MenuItem>
                      <MenuItem value="evenings">Evenings Only</MenuItem>
                      <MenuItem value="flexible">Flexible</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Why do you like the role you choose?"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
                        name="termsAccepted"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the terms and conditions and consent to my
                        information being used for the purpose of this
                        application. I understand that submitting this form does
                        not guarantee employment.
                      </Typography>
                    }
                  />
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
                  >
                    {loading ? "Submitting..." : "Submit Application"}
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
          {error || "Form submitted successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
