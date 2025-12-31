// consultation/components/ErrorBoundary.tsx
"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
            p: 3,
          }}
        >
          <ErrorIcon sx={{ fontSize: 64, color: "#d32f2f", mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ color: "#d32f2f" }}>
            Something went wrong
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
            We apologize for the inconvenience. Please try refreshing the page
            or contact support if the problem persists.
          </Typography>
          <Button
            variant="contained"
            onClick={() => window.location.reload()}
            sx={{
              background: "linear-gradient(45deg, #d32f2f, #ff6659)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(45deg, #b71c1c, #e53935)",
              },
            }}
          >
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
