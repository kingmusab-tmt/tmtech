// app/networking-consultancy/data.ts
import React from "react";
import {
  Assessment as AssessmentIcon,
  Hub as HubIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  Wifi as WifiIcon,
  Support as SupportIcon,
  Speed as SpeedIcon,
  Verified as VerifiedIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
} from "@mui/icons-material";

export const services = [
  {
    title: "Network Assessment & Audit",
    icon: React.createElement(AssessmentIcon, {
      sx: { fontSize: 48, color: "#d21928ff" },
    }),
    description:
      "Comprehensive evaluation of your network infrastructure to identify performance issues, security gaps, and optimization opportunities.",
    deliverables: [
      "Detailed network topology analysis",
      "Performance benchmarking and baselining",
      "Security vulnerability assessment",
      "Bandwidth utilization analysis",
      "Comprehensive audit report with recommendations",
    ],
  },
  {
    title: "Network Design & Architecture",
    icon: React.createElement(HubIcon, {
      sx: { fontSize: 48, color: "#d2194dff" },
    }),
    description:
      "Custom network architecture design tailored to your business requirements and future scalability needs.",
    deliverables: [
      "Scalable network architecture blueprint",
      "Redundancy and failover planning",
      "Quality of Service (QoS) implementation",
      "Network segmentation strategies",
      "Future-proof technology recommendations",
    ],
  },
  {
    title: "Network Implementation & Deployment",
    icon: React.createElement(SettingsIcon, {
      sx: { fontSize: 48, color: "#d21941ff" },
    }),
    description:
      "Professional installation and configuration of network equipment, systems, and services with minimal business disruption.",
    deliverables: [
      "Hardware installation and configuration",
      "Switch and router setup",
      "Wireless network deployment",
      "Firewall and security appliance setup",
      "End-to-end testing and validation",
    ],
  },
  {
    title: "Network Security Services",
    icon: React.createElement(SecurityIcon, {
      sx: { fontSize: 48, color: "#d21935ff" },
    }),
    description:
      "Comprehensive network security solutions to protect your infrastructure from internal and external threats.",
    deliverables: [
      "Firewall configuration and management",
      "Intrusion detection/prevention systems",
      "VPN setup and management",
      "Network access control implementation",
      "Security policy development and enforcement",
    ],
  },
  {
    title: "Cloud Networking Solutions",
    icon: React.createElement(CloudIcon, {
      sx: { fontSize: 48, color: "#d21982ff" },
    }),
    description:
      "Integration of cloud services with your existing network infrastructure for hybrid and multi-cloud environments.",
    deliverables: [
      "Cloud connectivity solutions (AWS, Azure, GCP)",
      "SD-WAN implementation",
      "Hybrid cloud networking",
      "Cloud security integration",
      "Performance optimization for cloud services",
    ],
  },
  {
    title: "Wireless Network Solutions",
    icon: React.createElement(WifiIcon, {
      sx: { fontSize: 48, color: "#d21922ff" },
    }),
    description:
      "Design, deployment, and optimization of enterprise-grade wireless networks for optimal coverage and performance.",
    deliverables: [
      "Wireless site surveys and planning",
      "Access point deployment and configuration",
      "RF optimization and interference mitigation",
      "Guest network implementation",
      "Wireless security and access control",
    ],
  },
  {
    title: "Network Monitoring & Management",
    icon: React.createElement(SupportIcon, {
      sx: { fontSize: 48, color: "#d21941ff" },
    }),
    description:
      "Proactive network monitoring and management services to ensure optimal performance and rapid issue resolution.",
    deliverables: [
      "24/7 network monitoring",
      "Performance analytics and reporting",
      "Automated alerting and notifications",
      "Remote troubleshooting and support",
      "Capacity planning and optimization",
    ],
  },
  {
    title: "Network Optimization & Troubleshooting",
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 48, color: "#d2194dff" },
    }),
    description:
      "Performance optimization and expert troubleshooting to resolve network issues and improve efficiency.",
    deliverables: [
      "Network performance analysis",
      "Bottleneck identification and resolution",
      "Traffic optimization strategies",
      "Quality of Service tuning",
      "Root cause analysis and remediation",
    ],
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d21941ff" },
    }),
    title: "Expert Network Engineers",
    description: "Certified professionals with extensive real-world experience",
  },
  {
    icon: React.createElement(HubIcon, {
      sx: { fontSize: 40, color: "#d2193eff" },
    }),
    title: "Scalable Solutions",
    description: "Infrastructure designed to grow with your business needs",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d21954ff" },
    }),
    title: "Improved Performance",
    description: "Optimized networks for maximum speed and reliability",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d21954ff" },
    }),
    title: "Proactive Support",
    description: "Preventive maintenance to avoid costly downtime",
  },
];

export const processes = [
  {
    step: "1",
    title: "Assessment",
    description:
      "Comprehensive evaluation of your current network infrastructure and identification of gaps",
    icon: React.createElement(AssessmentIcon, {
      sx: { fontSize: 40, color: "#d2195aff" },
    }),
  },
  {
    step: "2",
    title: "Design",
    description:
      "Creation of a customized network architecture aligned with your business objectives",
    icon: React.createElement(HubIcon, {
      sx: { fontSize: 40, color: "#d21944ff" },
    }),
  },
  {
    step: "3",
    title: "Implementation",
    description:
      "Professional deployment of network solutions with minimal business disruption",
    icon: React.createElement(SettingsIcon, {
      sx: { fontSize: 40, color: "#d2194dff" },
    }),
  },
  {
    step: "4",
    title: "Optimization",
    description:
      "Ongoing monitoring, support, and continuous improvement of network performance",
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 40, color: "#d21947ff" },
    }),
  },
];

export const testimonials = [
  {
    quote:
      "Triple Multipurpose Technology transformed our network infrastructure. Their assessment identified critical bottlenecks we didn't know existed, and their implementation doubled our network performance while improving security.",
    author: "Amina Yusuf",
    position: "IT Manager, TechCorp Nigeria",
  },
  {
    quote:
      "The networking consultancy services provided by TMT were exceptional. They designed a scalable solution that has grown with our business and maintained excellent performance throughout.",
    author: "Emeka Okafor",
    position: "CTO, Innovate Solutions",
  },
  {
    quote:
      "Outstanding network security implementation. Their proactive approach prevented potential breaches and ensured our data remained secure during the transition to cloud infrastructure.",
    author: "Ngozi Adebayo",
    position: "Security Director, DataSecure Ltd",
  },
];
