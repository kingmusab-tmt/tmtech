// app/terms/page.tsx
"use client";

import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function TermsOfService() {
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
              Terms of Service
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Terms and conditions for using our services
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Terms Content */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6, borderRadius: 2 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#d32f2f" }}
            >
              Terms of Service
            </Typography>
            <Typography variant="body1" paragraph>
              Last Updated: {new Date().toLocaleDateString()}
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing or using Triple Multipurpose Technology's services,
              you agree to be bound by these Terms of Service and all applicable
              laws and regulations.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              2. Services
            </Typography>
            <Typography variant="body1" paragraph>
              We provide a wide range of technology services including but not
              limited to web development, cybersecurity training and
              consultancy, networking services, engineering services, and
              business document processing.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              3. Use of Services
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You are responsible for maintaining
              the confidentiality of any account information and for all
              activities that occur under your account.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              4. Intellectual Property
            </Typography>
            <Typography variant="body1" paragraph>
              All content, trademarks, and other intellectual property rights in
              our services are owned by Triple Multipurpose Technology or its
              licensors. You may not use our intellectual property without our
              prior written consent.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              To the maximum extent permitted by law, Triple Multipurpose
              Technology shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              6. Termination
            </Typography>
            <Typography variant="body1" paragraph>
              We may terminate or suspend your access to our services
              immediately, without prior notice, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              7. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms shall be governed and construed in accordance with the
              laws of Nigeria, without regard to its conflict of law provisions.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              8. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. By continuing to access or use our
              services after those revisions become effective, you agree to be
              bound by the revised terms.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              9. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about these Terms, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
              Email: terms@triplemtechnology.com
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
