// app/graphic-design-training/data.ts
import React from "react";
import {
  Palette as PaletteIcon,
  Brush as BrushIcon,
  PhotoCamera as PhotoCameraIcon,
  DesignServices as DesignServicesIcon,
  Verified as VerifiedIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";

export const courses = [
  {
    title: "Graphic Design Fundamentals",
    level: "Beginner",
    duration: "6 Weeks",
    icon: React.createElement(PaletteIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive introduction to graphic design principles, color theory, typography, and industry-standard software.",
    objectives: [
      "Design principles and visual hierarchy",
      "Color theory and psychology",
      "Typography fundamentals",
      "Adobe Creative Suite basics (Photoshop, Illustrator, InDesign)",
      "Layout and composition techniques",
      "Brand identity concepts",
    ],
    audience: "Beginners, students, career changers, entrepreneurs",
  },
  {
    title: "Digital Illustration & Vector Art",
    level: "Intermediate",
    duration: "4 Weeks",
    icon: React.createElement(BrushIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Advanced training in digital illustration techniques using Adobe Illustrator and other vector-based tools.",
    objectives: [
      "Advanced vector drawing techniques",
      "Logo design and branding elements",
      "Character and icon design",
      "Illustration styles and workflows",
      "Vector optimization for different media",
      "Creative project development",
    ],
    audience: "Designers seeking illustration skills, artists, freelancers",
  },
  {
    title: "Photo Editing & Retouching",
    level: "Intermediate",
    duration: "4 Weeks",
    icon: React.createElement(PhotoCameraIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Professional photo editing techniques using Adobe Photoshop for commercial and artistic applications.",
    objectives: [
      "Advanced photo retouching techniques",
      "Color correction and enhancement",
      "Composite image creation",
      "Portrait and product photography editing",
      "Creative effects and filters",
      "Batch processing and workflow optimization",
    ],
    audience: "Photographers, designers, content creators, marketers",
  },
  {
    title: "UI/UX Design",
    level: "Intermediate to Advanced",
    duration: "8 Weeks",
    icon: React.createElement(DesignServicesIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "User interface and user experience design for websites, mobile apps, and digital products.",
    objectives: [
      "User research and persona development",
      "Wireframing and prototyping",
      "UI design principles and patterns",
      "Interaction design and micro-interactions",
      "Usability testing and feedback",
      "Design systems and component libraries",
    ],
    audience: "Web designers, product designers, developers, entrepreneurs",
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Industry Standard Tools",
    description:
      "Master Adobe Creative Suite and other professional design software",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "High-Demand Skills",
    description:
      "Freelance and full-time opportunities with excellent earning potential",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Instructors",
    description:
      "Learn from professional designers with real-world project experience",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Portfolio Development",
    description:
      "Build a professional portfolio to showcase your skills to clients",
  },
];

export const softwareList = [
  { name: "Adobe Photoshop", category: "Photo Editing" },
  { name: "Adobe Illustrator", category: "Vector Graphics" },
  { name: "Adobe InDesign", category: "Layout Design" },
  { name: "Adobe XD", category: "UI/UX Design" },
  { name: "Figma", category: "Collaborative Design" },
  { name: "CorelDRAW", category: "Vector Illustration" },
];
