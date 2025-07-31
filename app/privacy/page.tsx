// app/privacy/page.tsx
"use client";

import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Your privacy is important to us
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Privacy Content */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6, borderRadius: 2 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#d32f2f" }}
            >
              Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              Last Updated: {new Date().toLocaleDateString()}
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We collect information you provide directly to us, such as when
              you contact us, request services, or communicate with us. This may
              include your name, email address, phone number, business
              information, and any other information you choose to provide.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the information we collect to:
            </Typography>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              3. Information Sharing
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties without your consent,
              except as described in this policy or when required by law.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              4. Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing and against accidental loss, destruction, or damage.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              5. Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to access, update, or delete your personal
              information. You may also have the right to object to or restrict
              certain processing of your data.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              6. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
              Email: privacy@triplemtechnology.com
              <br />
              Phone: +234 816 255 2901
              <br />
              Address: BM39 Baba Musami Plaza, Post Office, Maiduguri, Borno
              State, Nigeria
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
