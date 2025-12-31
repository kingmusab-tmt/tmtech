// contact/ContactPage.tsx
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
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { ContactForm } from "./types";
import { contactInfo, businessHours } from "./data";
import HeroSection from "./components/HeroSection";

const ContactPage: React.FC = React.memo(() => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
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
          subject: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again.");
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
            <EmailIcon sx={{ fontSize: 64, color: "#4caf50", mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Message Sent Successfully!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Thank you for contacting us. Our team will get back to you within
              24-48 hours.
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

      {/* Contact Information */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Ready to start your next project? Contact us today for a
              consultation.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" gutterBottom>
                Contact Information
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}
              >
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Paper
                      sx={{
                        p: 1.5,
                        backgroundColor: "#d32f2f",
                        borderRadius: 1,
                      }}
                    >
                      {info.icon}
                    </Paper>
                    <Box>
                      <Typography variant="h6">{info.title}</Typography>
                      <Typography variant="body1" sx={{ color: "#616161" }}>
                        {info.value}
                      </Typography>
                      {info.additional && (
                        <Typography variant="body1" sx={{ color: "#616161" }}>
                          {info.additional}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom>
                  Business Hours
                </Typography>
                <Typography variant="body1" sx={{ color: "#616161", mb: 1 }}>
                  {businessHours.mondayFriday}
                </Typography>
                <Typography variant="body1" sx={{ color: "#616161", mb: 1 }}>
                  {businessHours.saturday}
                </Typography>
                <Typography variant="body1" sx={{ color: "#616161" }}>
                  {businessHours.sunday}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: "#fafafa" }}>
                <Typography variant="h3" gutterBottom>
                  Send us a Message
                </Typography>
                <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
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
                    <Grid size={{ xs: 12, sm: 6 }}>
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
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        aria-label="Phone Number"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        aria-label="Subject"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={6}
                        required
                        variant="outlined"
                        aria-label="Your Message"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          fontSize: "1.1rem",
                          background:
                            "linear-gradient(45deg, #d32f2f, #ff6659)",
                          color: "white",
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #b71c1c, #e53935)",
                          },
                          "&:disabled": {
                            background: "#cccccc",
                          },
                        }}
                        endIcon={<ArrowForwardIcon />}
                        aria-label={loading ? "Sending..." : "Send Message"}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Visit Our Office
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Located in the heart of Maiduguri, Borno State
            </Typography>
          </Box>

          {/* <Paper
            sx={{
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="text.secondary">
              Map Location (Placeholder)
            </Typography>
          </Paper> */}
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
          {error || "Message sent successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
});

ContactPage.displayName = "ContactPage";

export default ContactPage;
