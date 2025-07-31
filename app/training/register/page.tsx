// app/training/register/page.tsx
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
  Chip,
} from "@mui/material";
import {
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

export default function TrainingRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    trainingProgram: "",
    experienceLevel: "",
    startDate: "",
    specialRequirements: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const trainingPrograms = [
    {
      id: "cybersecurity-essentials",
      name: "Cybersecurity Essentials",
      category: "Cybersecurity",
      duration: "12 Weeks",
      level: "Beginner",
    },
    {
      id: "ethical-hacking",
      name: "Ethical Hacking & Penetration Testing",
      category: "Cybersecurity",
      duration: "8 Weeks",
      level: "Intermediate",
    },
    {
      id: "web-app-pen-testing",
      name: "Web Application Penetration Testing",
      category: "Cybersecurity",
      duration: "8 Weeks",
      level: "Intermediate",
    },
    {
      id: "soc",
      name: "Security Operations Center (SOC)",
      category: "Cybersecurity",
      duration: "12 Weeks",
      level: "Intermediate",
    },
    {
      id: "networking-essentials",
      name: "Networking Essentials",
      category: "Networking",
      duration: "8 Weeks",
      level: "Beginner",
    },
    {
      id: "ccna",
      name: "Cisco CCNA (200-301)",
      category: "Networking",
      duration: "12 Weeks",
      level: "Intermediate",
    },
    {
      id: "network-plus",
      name: "CompTIA Network+ (N10-008)",
      category: "Networking",
      duration: "8 Weeks",
      level: "Intermediate",
    },
    {
      id: "web-dev-fundamentals",
      name: "Web Development Fundamentals",
      category: "Web Development",
      duration: "8 Weeks",
      level: "Beginner",
    },
    {
      id: "full-stack",
      name: "Full Stack Development",
      category: "Web Development",
      duration: "16 Weeks",
      level: "Intermediate",
    },
    {
      id: "pwa",
      name: "Progressive Web Apps (PWA)",
      category: "Web Development",
      duration: "4 Weeks",
      level: "Advanced",
    },
    {
      id: "autocad-essentials",
      name: "AutoCAD Essentials",
      category: "AutoCAD",
      duration: "12 Weeks",
      level: "Beginner",
    },
    {
      id: "autocad-intermediate",
      name: "AutoCAD Intermediate",
      category: "AutoCAD",
      duration: "8 Weeks",
      level: "Intermediate",
    },
    {
      id: "autocad-advanced",
      name: "AutoCAD 3D Modeling",
      category: "AutoCAD",
      duration: "4 Weeks",
      level: "Intermediate",
    },
    {
      id: "graphic-design",
      name: "Graphic Design Fundamentals",
      category: "Graphic Design",
      duration: "6 Weeks",
      level: "Beginner",
    },
    {
      id: "graphic-advance",
      name: "Graphic Design Advanced",
      category: "Graphic Design",
      duration: "6 Weeks",
      level: "Intermediate",
    },
  ];

  const experienceLevels = [
    "Beginner (0-1 years)",
    "Intermediate (1-3 years)",
    "Advanced (3-5 years)",
    "Expert (5+ years)",
    "No technical background",
  ];

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

    if (!formData.trainingProgram) {
      setError("Please select a training program");
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/training-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          trainingDetails: trainingPrograms.find(
            (p) => p.id === formData.trainingProgram
          ),
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          trainingProgram: "",
          experienceLevel: "",
          startDate: "",
          specialRequirements: "",
          termsAccepted: false,
        });
      } else {
        setError("Failed to submit registration. Please try again.");
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

  const selectedProgram = trainingPrograms.find(
    (program) => program.id === formData.trainingProgram
  );

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
              Registration Submitted Successfully!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Thank you for registering for our training program. Our team will
              contact you within 1-2 business days to confirm your enrollment
              and provide payment details.
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
              Training Registration
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Register for our comprehensive professional training programs
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Registration Form */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#d32f2f", mb: 4 }}
            >
              Training Registration Form
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 4, color: "text.secondary" }}
            >
              Fill out this form to register for any of our professional
              training programs. Our team will contact you to confirm your
              enrollment and provide payment details.
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

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Company/Organization"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Experience Level</InputLabel>
                    <Select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleSelectChange}
                      label="Experience Level"
                    >
                      {experienceLevels.map((level, index) => (
                        <MenuItem key={index} value={level}>
                          {level}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Select Training Program</InputLabel>
                    <Select
                      name="trainingProgram"
                      value={formData.trainingProgram}
                      onChange={handleSelectChange}
                      label="Select Training Program"
                    >
                      {trainingPrograms.map((program) => (
                        <MenuItem key={program.id} value={program.id}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Box>
                              <Typography variant="body1">
                                {program.name}
                              </Typography>
                              <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                                <Chip
                                  label={program.category}
                                  size="small"
                                  sx={{
                                    backgroundColor: "#e3f2fd",
                                    color: "#1976d2",
                                    height: 20,
                                    "& .MuiChip-label": {
                                      fontSize: "0.7rem",
                                    },
                                  }}
                                />
                                <Chip
                                  label={program.duration}
                                  size="small"
                                  sx={{
                                    backgroundColor: "#e8f5e9",
                                    color: "#388e3c",
                                    height: 20,
                                    "& .MuiChip-label": {
                                      fontSize: "0.7rem",
                                    },
                                  }}
                                />
                                <Chip
                                  label={program.level}
                                  size="small"
                                  sx={{
                                    backgroundColor: "#fff3e0",
                                    color: "#f57c00",
                                    height: 20,
                                    "& .MuiChip-label": {
                                      fontSize: "0.7rem",
                                    },
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {selectedProgram && (
                  <Grid size={{ xs: 12 }}>
                    <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        Selected Program Details:
                      </Typography>
                      <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <SchoolIcon sx={{ fontSize: 20, color: "#d32f2f" }} />
                          <Typography variant="body2">
                            {selectedProgram.name}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CalendarIcon
                            sx={{ fontSize: 20, color: "#d32f2f" }}
                          />
                          <Typography variant="body2">
                            {selectedProgram.duration}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <PeopleIcon sx={{ fontSize: 20, color: "#d32f2f" }} />
                          <Typography variant="body2">
                            {selectedProgram.level}
                          </Typography>
                        </Box>
                        {/* <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <AttachMoneyIcon
                            sx={{ fontSize: 20, color: "#d32f2f" }}
                          />
                          <Typography variant="body2">
                            ₦
                            {selectedProgram.category === "Cybersecurity"
                              ? "150,000"
                              : selectedProgram.category === "Networking"
                              ? "150,000"
                              : selectedProgram.category === "Web Development"
                              ? "200,000"
                              : selectedProgram.category === "AutoCAD"
                              ? "100,000"
                              : "80,000"}
                          </Typography>
                        </Box> */}
                      </Box>
                    </Paper>
                  </Grid>
                )}

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Preferred Start Date"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Special Requirements or Questions"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    variant="outlined"
                    placeholder="Any dietary restrictions, accessibility needs, or specific questions about the training?"
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
                        information being used for the purpose of this training
                        registration. I understand that submitting this form
                        does not guarantee enrollment and that payment will be
                        required to confirm my spot.
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
                    {loading ? "Processing..." : "Register for Training"}
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
          {error || "Registration submitted successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
