// cybersecurity-consultancy/data.ts
import React from "react";
import {
  Assessment as AssessmentIcon,
  Code as CodeIcon,
  Settings as SettingsIcon,
  Warning as WarningIcon,
  BarChart as BarChartIcon,
  Gavel as GavelIcon,
  Cloud as CloudIcon,
  School as SchoolIcon,
  Verified as VerifiedIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
} from "@mui/icons-material";

export const services = [
  {
    title: "Security Risk Assessment",
    icon: React.createElement(AssessmentIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Comprehensive evaluation of your organization's security posture to identify vulnerabilities and threats.",
    deliverables: [
      "Detailed risk assessment report",
      "Risk prioritization matrix",
      "Remediation recommendations",
      "Compliance gap analysis",
      "Executive summary for stakeholders",
    ],
  },
  {
    title: "Penetration Testing",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Simulated cyber attacks to identify security weaknesses in your systems, networks, and applications.",
    deliverables: [
      "External and internal penetration testing",
      "Web application security testing",
      "Mobile app security assessment",
      "Wireless network testing",
      "Detailed findings report with remediation steps",
    ],
  },
  {
    title: "Security Architecture Design",
    icon: React.createElement(SettingsIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Design and implementation of secure network and system architectures tailored to your business needs.",
    deliverables: [
      "Network security architecture blueprint",
      "Zero trust implementation strategy",
      "Cloud security architecture design",
      "Security controls implementation roadmap",
      "Integration with existing infrastructure",
    ],
  },
  {
    title: "Incident Response & Forensics",
    icon: React.createElement(WarningIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Rapid response to security incidents and forensic analysis to minimize damage and prevent recurrence.",
    deliverables: [
      "Incident response plan development",
      "24/7 incident response service",
      "Digital forensics investigation",
      "Root cause analysis",
      "Post-incident recovery recommendations",
    ],
  },
  {
    title: "Security Operations Center (SOC) Setup",
    icon: React.createElement(BarChartIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Establishment and management of a Security Operations Center for continuous monitoring and threat detection.",
    deliverables: [
      "SOC design and implementation",
      "SIEM solution deployment",
      "Threat intelligence integration",
      "Monitoring dashboard setup",
      "Staff training and knowledge transfer",
    ],
  },
  {
    title: "Compliance & Governance",
    icon: React.createElement(GavelIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Ensure your organization meets industry standards and regulatory requirements for cybersecurity.",
    deliverables: [
      "ISO 27001 implementation support",
      "GDPR compliance assessment",
      "PCI DSS compliance services",
      "NIST framework alignment",
      "Audit preparation and support",
    ],
  },
  {
    title: "Cloud Security Assessment",
    icon: React.createElement(CloudIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Evaluation and hardening of cloud environments to protect data and applications in the cloud.",
    deliverables: [
      "Cloud security posture assessment",
      "AWS/Azure/GCP security review",
      "Container and Kubernetes security",
      "Cloud access control evaluation",
      "Data protection in cloud environments",
    ],
  },
  {
    title: "Security Awareness Training",
    icon: React.createElement(SchoolIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Customized training programs to educate employees about cybersecurity best practices and threats.",
    deliverables: [
      "Phishing simulation campaigns",
      "Role-based security training",
      "Security awareness workshops",
      "Training effectiveness metrics",
      "Continuous education programs",
    ],
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Security Team",
    description: "Certified security professionals with real-world experience",
  },
  {
    icon: React.createElement(ShieldIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Proactive Protection",
    description:
      "Identify and mitigate threats before they impact your business",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "ROI Focused",
    description: "Cost-effective solutions that protect your bottom line",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Compliance Ready",
    description: "Meet regulatory requirements and industry standards",
  },
];
