// app/components/Footer.tsx
"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Paper,
  Divider,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { text: "Web Development", href: "/web-development-services" },
        { text: "Cybersecurity", href: "/cybersecurity-consultancy" },
        { text: "Networking", href: "/networking-consultancy" },
        { text: "Engineering", href: "/engineering-services" },
        { text: "Business Services", href: "/business-services" },
      ],
    },
    {
      title: "Training",
      links: [
        { text: "Cybersecurity", href: "/security-training" },
        { text: "Networking", href: "/network-training" },
        { text: "Web Development", href: "/web-development-training" },
        { text: "AutoCAD", href: "/autocad-training" },
        { text: "Graphic Design", href: "/graphic-design-training" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/#about" },
        { text: "Contact", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Joint Our Team", href: "/instructor" },
        { text: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#000", color: "white", py: 6, mt: 8 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Company Logo - Replace with your actual logo */}
                <Image
                  src="/images/tmtech.png" // Make sure to add your logo to the public folder
                  alt="Triple Multipurpose Technology Logo"
                  width={70}
                  height={32}
                  style={{
                    marginRight: "4px",
                    marginLeft: "4px",
                  }}
                />
              </Box>
              {/* <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Triple Multipurpose Technology
              </Typography> */}
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "#e0e0e0", maxWidth: 300 }}
            >
              Your trusted technology partner in Maiduguri, delivering
              innovative solutions since 2019. Providing IT, engineering,
              printing, and training services across Nigeria.
            </Typography>
          </Grid>

          {footerLinks.map((section, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
                {section.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      sx={{
                        color: "#e0e0e0",
                        textDecoration: "none",
                        "&:hover": {
                          color: "#d32f2f",
                        },
                      }}
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Paper
                component="a"
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#333",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
                href="https://web.facebook.com/TRIPLEMULTITECH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Paper>
              <Paper
                component="a"
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#333",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
                href="https://www.linkedin.com/company/triple-multipurpose-technology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "#333" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "#9e9e9e" }}>
            &copy; {new Date().getFullYear()} Triple Multipurpose Technology.
            All rights reserved. Maiduguri, Nigeria. CAC BN 2875632
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
