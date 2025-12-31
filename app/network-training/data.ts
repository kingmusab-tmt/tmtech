// app/network-training/data.ts
import React from "react";
import {
  Lan as LanIcon,
  Hub as HubIcon,
  SettingsEthernet as SettingsEthernetIcon,
  Verified as VerifiedIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";
import { Course, Benefit, Technology } from "./types";

export const courses: Course[] = [
  {
    title: "Networking Essentials",
    level: "Beginner",
    duration: "12 Weeks",
    icon: React.createElement(LanIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Foundational course covering the basics of computer networking, protocols, and network infrastructure.",
    objectives: [
      "Understanding network topologies and architectures",
      "TCP/IP protocol suite fundamentals",
      "Network hardware components and functions",
      "Basic network troubleshooting techniques",
      "Introduction to network security concepts",
    ],
    audience: "IT beginners, non-technical staff transitioning to IT",
  },
  {
    title: "Cisco CCNA (200-301)",
    level: "Intermediate",
    duration: "12 Weeks",
    icon: React.createElement(HubIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive preparation for Cisco Certified Network Associate certification covering modern networking technologies.",
    objectives: [
      "Network fundamentals and access technologies",
      "IP services, security fundamentals, and automation",
      "LAN switching technologies and routing concepts",
      "WAN technologies and infrastructure services",
      "Network management and troubleshooting",
    ],
    audience:
      "Network administrators, IT professionals seeking CCNA certification",
  },
  {
    title: "CompTIA Network+ (N10-008)",
    level: "Intermediate",
    duration: "8 Weeks",
    icon: React.createElement(SettingsEthernetIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Industry-standard certification covering networking concepts, infrastructure, network operations, and security.",
    objectives: [
      "Networking concepts and protocols",
      "Network infrastructure and components",
      "Network operations and monitoring",
      "Network security and troubleshooting",
      "Network policies and best practices",
    ],
    audience:
      "IT support technicians, network administrators, help desk technicians",
  },
];

export const benefits: Benefit[] = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Industry Recognized Certifications",
    description:
      "Earn globally recognized certifications that boost your career prospects",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Career Advancement",
    description:
      "High-demand skills with excellent salary potential in the IT industry",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with real-world networking experience",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Hands-on Labs",
    description:
      "Practical exercises using real networking equipment and simulators",
  },
];

export const technologies: Technology[] = [
  { name: "Cisco IOS", category: "Network OS" },
  { name: "TCP/IP", category: "Protocols" },
  { name: "Ethernet", category: "Network Technology" },
  { name: "Wi-Fi Standards", category: "Wireless" },
  { name: "VLANs", category: "Network Design" },
  { name: "Routing Protocols", category: "Network Routing" },
  { name: "Network Security", category: "Security" },
  { name: "Cloud Networking", category: "Cloud" },
  { name: "SDN", category: "Software Defined" },
  { name: "Network Monitoring", category: "Operations" },
  { name: "Packet Tracer", category: "Simulation" },
  { name: "Wireshark", category: "Analysis" },
];
