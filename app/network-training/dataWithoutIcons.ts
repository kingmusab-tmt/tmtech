// app/network-training/dataWithoutIcons.ts
import { CourseWithoutIcons, BenefitWithoutIcons } from "./types";

export const coursesWithoutIcons: CourseWithoutIcons[] = [
  {
    title: "Networking Essentials",
    level: "Beginner",
    duration: "12 Weeks",
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

export const benefitsWithoutIcons: BenefitWithoutIcons[] = [
  {
    title: "Industry Recognized Certifications",
    description:
      "Earn globally recognized certifications that boost your career prospects",
  },
  {
    title: "Career Advancement",
    description:
      "High-demand skills with excellent salary potential in the IT industry",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with real-world networking experience",
  },
  {
    title: "Hands-on Labs",
    description:
      "Practical exercises using real networking equipment and simulators",
  },
];
