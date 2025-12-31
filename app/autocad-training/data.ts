import React from "react";
import {
  Draw as DrawIcon,
  DesignServices as DesignServicesIcon,
  Architecture as ArchitectureIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  Verified as VerifiedIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Home as HomeIcon,
  Engineering as EngineeringIcon,
  Map as MapIcon,
} from "@mui/icons-material";
import { Course, Benefit, Industry } from "./types";

export const courses: Course[] = [
  {
    title: "AutoCAD Essentials",
    level: "Beginner",
    duration: "3 Months",
    icon: React.createElement(DrawIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Fundamental AutoCAD training covering basic commands, drawing tools, and essential features for beginners.",
    objectives: [
      "Interface navigation and workspace setup",
      "Basic drawing and editing commands",
      "Object selection and modification tools",
      "Layer management and properties",
      "Dimensioning and annotation techniques",
      "Plotting and printing drawings",
    ],
    audience: "Architects, Engineers, Drafters, Students, Beginners",
  },
  {
    title: "AutoCAD Intermediate",
    level: "Intermediate",
    duration: "2 Months",
    icon: React.createElement(DesignServicesIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Advanced AutoCAD training focusing on productivity tools, complex drawing techniques, and professional workflows.",
    objectives: [
      "Advanced object creation and editing",
      "Blocks, attributes, and dynamic blocks",
      "External references and sheet sets",
      "Advanced dimensioning and tolerancing",
      "Layouts and paper space management",
      "Data extraction and automation",
    ],
    audience:
      "Professionals seeking to enhance productivity, Experienced users",
  },
  {
    title: "AutoCAD 3D Modeling",
    level: "Intermediate to Advanced",
    duration: "1 Month",
    icon: React.createElement(ArchitectureIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive 3D modeling training covering solid modeling, surface modeling, and visualization techniques.",
    objectives: [
      "3D workspace and navigation tools",
      "Solid modeling and Boolean operations",
      "Surface modeling and mesh editing",
      "3D modification and transformation",
      "Rendering and visualization techniques",
      "3D printing preparation",
    ],
    audience: "Architects, Product Designers, Manufacturing Engineers",
  },
  {
    title: "Specialized AutoCAD Applications",
    level: "Advanced",
    duration: "Varies",
    icon: React.createElement(PrecisionManufacturingIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Industry-specific AutoCAD training for Architecture, Mechanical, Civil, and Electrical applications.",
    objectives: [
      "Architecture-specific tools and workflows",
      "Mechanical drafting and detailing",
      "Civil engineering design and documentation",
      "Electrical schematic creation",
      "Industry standards and best practices",
      "Customization for specific disciplines",
    ],
    audience: "Professionals in specific industries, Advanced users",
  },
];

export const benefits: Benefit[] = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Industry Standard Software",
    description: "Learn the #1 CAD software used by professionals worldwide",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Career Enhancement",
    description:
      "Boost your employability and earning potential in design fields",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with real-world project experience",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Hands-on Projects",
    description: "Work on real-world projects that build your portfolio",
  },
];

export const industries: Industry[] = [
  {
    name: "Architecture",
    icon: React.createElement(HomeIcon, { sx: { fontSize: 40 } }),
    description: "Building design and construction documentation",
  },
  {
    name: "Engineering",
    icon: React.createElement(EngineeringIcon, { sx: { fontSize: 40 } }),
    description: "Mechanical, civil, and structural design",
  },
  {
    name: "Construction",
    icon: React.createElement(ArchitectureIcon, { sx: { fontSize: 40 } }),
    description: "Site planning and project management",
  },
  {
    name: "Manufacturing",
    icon: React.createElement(PrecisionManufacturingIcon, {
      sx: { fontSize: 40 },
    }),
    description: "Product design and prototyping",
  },
  {
    name: "Surveying",
    icon: React.createElement(MapIcon, { sx: { fontSize: 40 } }),
    description: "Land surveying and mapping",
  },
  {
    name: "Interior Design",
    icon: React.createElement(DesignServicesIcon, { sx: { fontSize: 40 } }),
    description: "Space planning and visualization",
  },
];
