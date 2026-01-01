import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import TimelineIcon from "@mui/icons-material/Timeline";

export const courses = [
  {
    title: "Frontend Development",
    level: "Beginner to Intermediate",
    duration: "6 Weeks",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Master modern frontend technologies including HTML5, CSS3, JavaScript, and React.js to create responsive and interactive user interfaces.",
    objectives: [
      "HTML5 semantic markup and accessibility",
      "CSS3 and responsive design",
      "JavaScript ES6+ fundamentals",
      "React.js framework",
      "State management and hooks",
      "Frontend build tools and deployment",
    ],
    audience:
      "Beginners, designers transitioning to development, frontend developers",
  },
  {
    title: "Backend Development",
    level: "Intermediate",
    duration: "8 Weeks",
    icon: React.createElement(StorageIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Learn server-side development with Node.js, databases, and API creation for robust web applications.",
    objectives: [
      "Node.js and Express framework",
      "Database design and MongoDB/SQL",
      "RESTful API development",
      "Authentication and security",
      "Server deployment and scaling",
      "Testing and debugging techniques",
    ],
    audience: "Frontend developers, IT professionals, software engineers",
  },
  {
    title: "Full Stack Development",
    level: "Intermediate to Advanced",
    duration: "12 Weeks",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive training covering both frontend and backend technologies to build complete web applications.",
    objectives: [
      "Complete MERN stack development",
      "Database integration and management",
      "User authentication and authorization",
      "Cloud deployment and DevOps",
      "Performance optimization",
      "Project management and deployment",
    ],
    audience:
      "Developers seeking full stack skills, entrepreneurs, freelancers",
  },
  {
    title: "Progressive Web Apps (PWA)",
    level: "Advanced",
    duration: "4 Weeks",
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Build modern web applications that work offline and provide native app-like experiences.",
    objectives: [
      "PWA fundamentals and architecture",
      "Service workers and caching strategies",
      "Offline functionality and data synchronization",
      "Push notifications and background sync",
      "Performance optimization techniques",
      "PWA deployment and distribution",
    ],
    audience: "Experienced web developers, mobile app developers",
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Industry Recognized Skills",
    description:
      "Learn technologies used by top tech companies and startups worldwide",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "High-Demand Career",
    description:
      "Web developers are among the most sought-after professionals globally",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Instructors",
    description:
      "Learn from senior developers with real-world project experience",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Project-Based Learning",
    description:
      "Build real applications that you can showcase in your portfolio",
  },
];

export const testimonials = [
  {
    name: "Ahmed Musa",
    role: "Junior Developer",
    company: "Flutterwave",
    content:
      "The Full Stack Development course at Triple Multipurpose Technology transformed my career. I went from zero coding experience to landing my first developer job in just 4 months!",
    rating: 5,
  },
  {
    name: "Ahmed Musa",
    role: "Junior Developer",
    company: "Flutterwave",
    content:
      "The Full Stack Development course at Triple Multipurpose Technology transformed my career. I went from zero coding experience to landing my first developer job in just 4 months!",
    rating: 5,
  },
  {
    name: "Ahmed Musa",
    role: "Junior Developer",
    company: "Flutterwave",
    content:
      "The Full Stack Development course at Triple Multipurpose Technology transformed my career. I went from zero coding experience to landing my first developer job in just 4 months!",
    rating: 5,
  },
];

export const technologies = [
  { name: "HTML5/CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git/Version Control", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS/Cloud", category: "Deployment" },
  { name: "PWA", category: "Mobile" },
];
