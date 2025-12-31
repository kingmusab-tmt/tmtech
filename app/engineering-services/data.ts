// app/engineering-services/data.ts
import React from "react";
import {
  SolarPower as SolarPowerIcon,
  ElectricBolt as ElectricBoltIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  Engineering as EngineeringIcon,
  Support as SupportIcon,
  Assessment as AssessmentIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Verified as VerifiedIcon,
  Build as BuildIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
} from "@mui/icons-material";

export const services = [
  {
    title: "Solar Power Installation",
    icon: React.createElement(SolarPowerIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Complete solar power system design, installation, and commissioning for residential, commercial, and industrial applications.",
    deliverables: [
      "Solar site assessment and energy audit",
      "System design and engineering",
      "High-quality solar panel installation",
      "Inverter and battery system setup",
      "Grid-tie or off-grid system configuration",
    ],
  },
  {
    title: "Electrical Installation & Maintenance",
    icon: React.createElement(ElectricBoltIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Professional electrical installation, maintenance, and repair services for all types of facilities.",
    deliverables: [
      "Electrical wiring and circuit installation",
      "Panel board and distribution system setup",
      "Lighting system installation and maintenance",
      "Emergency power systems and backup generators",
      "Electrical safety inspections and compliance",
    ],
  },
  {
    title: "Industrial Automation",
    icon: React.createElement(PrecisionManufacturingIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Automation solutions to increase efficiency, productivity, and safety in industrial processes.",
    deliverables: [
      "PLC programming and control system design",
      "SCADA system implementation",
      "Sensor and instrumentation installation",
      "Process automation and optimization",
      "Industrial network integration",
    ],
  },
  {
    title: "Electrical System Design",
    icon: React.createElement(EngineeringIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Custom electrical system design services for new constructions, renovations, and facility expansions.",
    deliverables: [
      "Load calculation and electrical planning",
      "One-line diagrams and electrical layouts",
      "Equipment specification and selection",
      "Energy efficiency optimization",
      "Code compliance and safety standards",
    ],
  },
  {
    title: "Preventive Maintenance Programs",
    icon: React.createElement(SupportIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Scheduled maintenance services to ensure optimal performance and longevity of electrical and solar systems.",
    deliverables: [
      "Regular system inspections and testing",
      "Component cleaning and maintenance",
      "Performance monitoring and reporting",
      "Predictive maintenance strategies",
      "Emergency repair and troubleshooting",
    ],
  },
  {
    title: "Energy Audits & Efficiency",
    icon: React.createElement(AssessmentIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Comprehensive energy audits to identify opportunities for reducing consumption and costs.",
    deliverables: [
      "Energy consumption analysis",
      "Efficiency improvement recommendations",
      "ROI calculations for energy upgrades",
      "Load management strategies",
      "Sustainability reporting",
    ],
  },
  {
    title: "Backup Power Solutions",
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Uninterruptible power supply (UPS) and backup generator systems for critical operations.",
    deliverables: [
      "Power backup system design",
      "UPS and generator installation",
      "Automatic transfer switch setup",
      "Battery system maintenance",
      "Load testing and commissioning",
    ],
  },
  {
    title: "Electrical Safety & Compliance",
    icon: React.createElement(SecurityIcon, {
      sx: { fontSize: 48, color: "#ff0000ff" },
    }),
    description:
      "Electrical safety assessments, compliance audits, and certification services.",
    deliverables: [
      "Electrical safety inspections",
      "Code compliance verification",
      "Risk assessment and mitigation",
      "Safety training programs",
      "Certification and documentation",
    ],
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
    title: "Licensed Engineers",
    description: "Certified professionals with extensive industry experience",
  },
  {
    icon: React.createElement(BuildIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
    title: "Quality Assurance",
    description: "High-quality materials and workmanship guaranteed",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
    title: "Cost Effective",
    description: "Solutions designed to maximize ROI and efficiency",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
    title: "24/7 Support",
    description: "Round-the-clock emergency support and maintenance",
  },
];

export const processSteps = [
  {
    step: "1",
    title: "Consultation & Assessment",
    description:
      "Understanding your requirements and conducting site evaluation",
    icon: React.createElement(AssessmentIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
  },
  {
    step: "2",
    title: "Design & Engineering",
    description: "Creating detailed designs and engineering specifications",
    icon: React.createElement(EngineeringIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
  },
  {
    step: "3",
    title: "Installation & Setup",
    description: "Professional installation with quality assurance",
    icon: React.createElement(BuildIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
  },
  {
    step: "4",
    title: "Testing & Commissioning",
    description: "Comprehensive testing and system optimization",
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 40, color: "#ff0000ff" },
    }),
  },
];
