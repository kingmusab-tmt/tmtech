// app/document-submission/page.tsx
"use client";

import React, { useState, useRef } from "react";
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
  Card,
  CardContent,
  CardActions,
  IconButton,
  Chip,
  LinearProgress,
  MenuItem,
} from "@mui/material";
import {
  UploadFile as UploadFileIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  CloudUpload as CloudUploadIcon,
  Description as DescriptionIcon,
  Image as ImageIcon,
  PictureAsPdf as PictureAsPdfIcon,
  TextFields as TextFieldsIcon,
} from "@mui/icons-material";

export default function DocumentSubmission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    specialInstructions: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const maxFiles = 10;

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      validateAndAddFiles(newFiles);
    }
  };

  const validateAndAddFiles = (newFiles: File[]) => {
    // Check file count limit
    if (files.length + newFiles.length > maxFiles) {
      setError(`You can upload a maximum of ${maxFiles} files`);
      setSnackbarOpen(true);
      return;
    }

    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    newFiles.forEach((file) => {
      // Check file size
      if (file.size > maxFileSize) {
        invalidFiles.push(`${file.name} (too large - max 10MB)`);
        return;
      }

      // Check file type
      if (!acceptedFileTypes.includes(file.type)) {
        invalidFiles.push(`${file.name} (unsupported file type)`);
        return;
      }

      validFiles.push(file);
    });

    if (invalidFiles.length > 0) {
      setError(`Invalid files: ${invalidFiles.join(", ")}`);
      setSnackbarOpen(true);
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) {
      setError("Please upload at least one document");
      setSnackbarOpen(true);
      return;
    }

    if (!formData.serviceType) {
      setError("Please select a service type");
      setSnackbarOpen(true);
      return;
    }

    setUploading(true);
    setError("");
    setUploadProgress(0);

    try {
      // Create FormData object
      const formDataObj = new FormData();

      // Append form fields
      formDataObj.append("fullName", formData.fullName);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("serviceType", formData.serviceType);
      formDataObj.append("specialInstructions", formData.specialInstructions);

      // Append files
      files.forEach((file, index) => {
        formDataObj.append(`file${index}`, file);
      });

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Send request
      const response = await fetch("/api/document-submission", {
        method: "POST",
        body: formDataObj,
      });

      clearInterval(interval);
      setUploadProgress(100);

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "",
          specialInstructions: "",
        });
        setFiles([]);
      } else {
        setError("Failed to submit documents. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSnackbarOpen(true);
    } finally {
      setUploading(false);
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("image"))
      return <ImageIcon sx={{ color: "#4caf50" }} />;
    if (fileType.includes("pdf"))
      return <PictureAsPdfIcon sx={{ color: "#f44336" }} />;
    if (fileType.includes("word") || fileType.includes("text"))
      return <TextFieldsIcon sx={{ color: "#2196f3" }} />;
    return <DescriptionIcon sx={{ color: "#9e9e9e" }} />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
            <CheckCircleIcon sx={{ fontSize: 64, color: "#4caf50", mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Documents Submitted Successfully!
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Thank you for submitting your documents. Our team will process
              them and contact you within 1-2 business days with the results.
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
          background: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",
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
              Document Submission
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, opacity: 0.9, maxWidth: 700, mx: "auto" }}
            >
              Upload your documents for professional typing, translation, or
              printing services
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Document Submission Form */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, color: "#9c27b0", mb: 4 }}
            >
              Submit Your Documents
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 4, color: "text.secondary" }}
            >
              Upload your handwritten documents, images, or any files you need
              processed. Our team will convert them to your preferred digital
              format.
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
                  <TextField
                    fullWidth
                    select
                    label="Service Type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleSelectChange}
                    required
                    variant="outlined"
                  >
                    <MenuItem value="document-typing">
                      Document Typing & Typesetting
                    </MenuItem>
                    <MenuItem value="translation">
                      Translation (English ↔ Arabic/Hausa/French)
                    </MenuItem>
                    <MenuItem value="printing">Professional Printing</MenuItem>
                    <MenuItem value="scanning">
                      Document Scanning & Digitization
                    </MenuItem>
                    <MenuItem value="desktop-publishing">
                      Desktop Publishing
                    </MenuItem>
                    <MenuItem value="other">Other Services</MenuItem>
                  </TextField>
                </Grid>

                {/* File Upload Section */}
                <Grid size={{ xs: 12 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 4,
                      border: "2px dashed #9c27b0",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <CloudUploadIcon
                      sx={{ fontSize: 64, color: "#9c27b0", mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                      Upload Your Documents
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      Drag & drop files here or click to browse
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Supported formats: JPG, PNG, PDF, DOC, DOCX, TXT (Max 10MB
                      each, up to 10 files)
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={triggerFileInput}
                      disabled={uploading}
                      sx={{
                        background: "linear-gradient(45deg, #9c27b0, #7b1fa2)",
                        color: "white",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #6a1b9a, #4a148c)",
                        },
                      }}
                    >
                      Choose Files
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      accept={acceptedFileTypes.join(",")}
                      style={{ display: "none" }}
                    />
                  </Box>

                  {uploading && (
                    <Box sx={{ mb: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={uploadProgress}
                      />
                      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                        Uploading... {uploadProgress}%
                      </Typography>
                    </Box>
                  )}

                  {files.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Uploaded Files ({files.length})
                      </Typography>
                      <Grid container spacing={2}>
                        {files.map((file, index) => (
                          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card>
                              <CardContent
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 2,
                                }}
                              >
                                {getFileIcon(file.type)}
                                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                  <Typography
                                    variant="body2"
                                    noWrap
                                    sx={{ fontWeight: 500 }}
                                  >
                                    {file.name}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    {formatFileSize(file.size)}
                                  </Typography>
                                  <Chip
                                    label={file.type
                                      .split("/")[1]
                                      .toUpperCase()}
                                    size="small"
                                    sx={{
                                      mt: 0.5,
                                      backgroundColor: "#f3e5f5",
                                      color: "#7b1fa2",
                                      height: 20,
                                      "& .MuiChip-label": {
                                        fontSize: "0.6rem",
                                      },
                                    }}
                                  />
                                </Box>
                              </CardContent>
                              <CardActions
                                sx={{ pt: 0, justifyContent: "flex-end" }}
                              >
                                <IconButton
                                  size="small"
                                  onClick={() => removeFile(index)}
                                  sx={{ color: "#f44336" }}
                                >
                                  <DeleteIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                              </CardActions>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Special Instructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Any specific requirements, preferred output format, or special instructions for processing your documents?"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={uploading}
                    sx={{
                      background: "linear-gradient(45deg, #9c27b0, #7b1fa2)",
                      color: "white",
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        background: "linear-gradient(45deg, #6a1b9a, #4a148c)",
                      },
                      "&:disabled": {
                        background: "#cccccc",
                      },
                    }}
                  >
                    {uploading ? "Submitting Documents..." : "Submit Documents"}
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
          {error || "Documents submitted successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
