import React from "react";
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
import { Service, Benefit } from "./types";

export const services: Service[] = [
  {
    title: "Document Typing & Typesetting",
    icon: React.createElement(TextFieldsIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(TranslateIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(PrintIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(SchoolIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(UploadFileIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(FormatAlignLeftIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(SupportIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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
    icon: React.createElement(LanguageIcon, {
      sx: { fontSize: 48, color: "#b02727ff" },
    }),
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

export const benefits: Benefit[] = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#b02727ff" },
    }),
    title: "Native Language Experts",
    description:
      "Professional translators with native fluency in all supported languages",
  },
  {
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 40, color: "#b02727ff" },
    }),
    title: "Fast Turnaround",
    description: "Quick processing with express options for urgent requests",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#b02727ff" },
    }),
    title: "Quality Assurance",
    description: "Rigorous quality checks and proofreading by expert reviewers",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#b02727ff" },
    }),
    title: "Expert Team",
    description:
      "Skilled professionals with years of experience in document services",
  },
];
