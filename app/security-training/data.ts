// app/security-training/data.ts
import React from "react";
import {
  Shield as ShieldIcon,
  Code as CodeIcon,
  Analytics as AnalyticsIcon,
  Verified as VerifiedIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";

export const courses = [
  {
    title: "Cybersecurity Essentials",
    level: "Beginner",
    duration: "12 weeks",
    icon: React.createElement(ShieldIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Foundational knowledge for understanding cybersecurity threats, risks, and basic protection measures.",
    objectives: [
      "Understanding cyber threats and attack vectors",
      "Implementing basic security controls",
      "Creating security awareness culture",
      "Incident response fundamentals",
    ],
    audience: "All employees, especially non-technical staff",
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    level: "Advanced",
    duration: "8 Weeks",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Hands-on training in ethical hacking techniques to identify vulnerabilities before malicious hackers do.",
    objectives: [
      "Reconnaissance and information gathering",
      "Vulnerability scanning and analysis",
      "Exploitation techniques and tools",
      "Post-exploitation and reporting",
    ],
    audience: "IT Security Professionals, Network Admins",
  },
  {
    title: "Web Application Penetration Testing",
    level: "Intermediate",
    duration: "8 Weeks",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Specialized training focused on identifying and exploiting vulnerabilities in web applications.",
    objectives: [
      "OWASP Top 10 vulnerabilities",
      "Web application reconnaissance",
      "SQL injection and XSS attacks",
      "Authentication and session management flaws",
    ],
    audience: "Web Developers, Security Analysts",
  },
  {
    title: "Security Operations Center (SOC)",
    level: "Professional",
    duration: "12 Weeks",
    icon: React.createElement(AnalyticsIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive training on SOC operations, threat detection, and incident response procedures.",
    objectives: [
      "SOC architecture and operations",
      "Threat intelligence and analysis",
      "SIEM tools and log analysis",
      "Incident response and forensics",
    ],
    audience: "Security Analysts, SOC Teams",
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Industry Recognized Certification",
    description:
      "Earn globally recognized certifications upon course completion",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Career Advancement",
    description:
      "Boost your career prospects with in-demand cybersecurity skills",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with real-world experience",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Hands-on Labs",
    description: "Practical exercises in realistic cyber environments",
  },
];

export const testimonials = [
  {
    quote:
      "The cybersecurity training at TMT completely transformed my understanding of digital security. The hands-on approach made complex concepts accessible and practical.",
    author: "Sarah Johnson",
    position: "IT Security Specialist, TechSecure Ltd",
  },
  {
    quote:
      "As someone new to cybersecurity, this training provided the perfect foundation. The instructors were knowledgeable and the labs were incredibly realistic.",
    author: "Michael Adebayo",
    position: "Security Analyst, DataGuard Nigeria",
  },
  {
    quote:
      "The SOC training was intensive but rewarding. I now feel confident handling real-world security incidents and threat analysis.",
    author: "Grace Okafor",
    position: "SOC Analyst, SecureNet Solutions",
  },
];
