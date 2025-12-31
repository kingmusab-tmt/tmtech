// app/web-development-services/data.ts
import React from "react";
import {
  Code as CodeIcon,
  Web as WebIcon,
  Hub as HubIcon,
  ShoppingCart,
  Smartphone as SmartphoneIcon,
  DesignServices as DesignServicesIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  Verified as VerifiedIcon,
  Groups as GroupsIcon,
  Timeline as TimelineIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Support as SupportIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export const services = [
  {
    title: "Custom Website Development",
    icon: React.createElement(WebIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Professional custom website development using modern technologies and frameworks for businesses of all sizes.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Fast loading performance",
      "Cross-browser compatibility",
      "Content management systems",
      "Analytics integration",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "PHP", "WordPress"],
  },
  {
    title: "E-commerce Solutions",
    icon: React.createElement(ShoppingCart, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Complete e-commerce platforms with secure payment processing, inventory management, and customer engagement features.",
    features: [
      "Secure payment gateways",
      "Inventory management system",
      "Order tracking and fulfillment",
      "Customer account management",
      "Multi-currency support",
      "Mobile commerce optimization",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "BigCommerce",
    ],
  },
  {
    title: "Mobile App Development",
    icon: React.createElement(SmartphoneIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces and robust functionality.",
    features: [
      "Native iOS and Android apps",
      "Cross-platform solutions",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
      "Performance monitoring",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Ionic",
      "Xamarin",
    ],
  },
  {
    title: "Web Application Development",
    icon: React.createElement(CodeIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Complex web applications with advanced functionality, real-time features, and scalable architecture.",
    features: [
      "Real-time data processing",
      "User authentication systems",
      "API development and integration",
      "Database design and optimization",
      "Progressive web apps",
      "Microservices architecture",
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "CMS Development & Integration",
    icon: React.createElement(HubIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Content management systems and headless CMS solutions for easy content updates and multi-channel publishing.",
    features: [
      "Custom CMS development",
      "Headless CMS integration",
      "Multi-language support",
      "Content workflow management",
      "SEO-friendly URLs",
      "Version control and backups",
    ],
    technologies: [
      "WordPress",
      "Strapi",
      "Contentful",
      "Sanity",
      "Directus",
      "Ghost",
    ],
  },
  {
    title: "API Development & Integration",
    icon: React.createElement(SettingsIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "RESTful and GraphQL API development with third-party integrations for seamless data exchange and functionality.",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Third-party API integration",
      "API documentation",
      "Rate limiting and security",
      "Performance optimization",
    ],
    technologies: ["Node.js", "Express", "GraphQL", "REST", "OAuth", "JWT"],
  },
  {
    title: "Cloud Solutions & Hosting",
    icon: React.createElement(CloudIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Scalable cloud hosting solutions with automated deployment, monitoring, and maintenance services.",
    features: [
      "Cloud infrastructure setup",
      "Auto-scaling configuration",
      "CDN integration",
      "SSL certificate management",
      "Backup and disaster recovery",
      "24/7 monitoring and support",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Vercel",
      "Netlify",
      "DigitalOcean",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: React.createElement(SupportIcon, {
      sx: { fontSize: 48, color: "#d32f2f" },
    }),
    description:
      "Ongoing website maintenance, updates, security monitoring, and technical support to keep your digital assets running smoothly.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates and backups",
      "Technical support",
      "Bug fixes and improvements",
      "Monthly reporting",
    ],
    technologies: [
      "Monitoring Tools",
      "Security Scanners",
      "Backup Systems",
      "Support Ticketing",
      "Analytics",
      "Reporting",
    ],
  },
];

export const benefits = [
  {
    icon: React.createElement(VerifiedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Expert Development Team",
    description:
      "Certified developers with years of experience in modern web technologies",
  },
  {
    icon: React.createElement(SpeedIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Performance Optimized",
    description:
      "Fast-loading websites that provide excellent user experience and SEO benefits",
  },
  {
    icon: React.createElement(SecurityIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Secure & Reliable",
    description:
      "Built with security best practices and reliable hosting infrastructure",
  },
  {
    icon: React.createElement(TrendingUpIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Scalable Solutions",
    description: "Architectures designed to grow with your business needs",
  },
  {
    icon: React.createElement(GroupsIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Dedicated Support",
    description: "Ongoing technical support and maintenance for peace of mind",
  },
  {
    icon: React.createElement(TimelineIcon, {
      sx: { fontSize: 40, color: "#d32f2f" },
    }),
    title: "Agile Development",
    description:
      "Flexible development process with regular updates and feedback",
  },
];

export const technologies = [
  { name: "React", category: "Frontend Framework" },
  { name: "Next.js", category: "Full-Stack Framework" },
  { name: "Node.js", category: "Backend Runtime" },
  { name: "Python", category: "Backend Language" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud Platform" },
  { name: "Docker", category: "Containerization" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design Tool" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
];
