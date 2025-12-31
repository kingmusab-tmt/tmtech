// app/cybersecurity-consultancy/page.tsx
import { Metadata } from "next";
import CybersecurityConsultancyPageClient from "./CybersecurityConsultancyPage";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata: Metadata = {
  title:
    "Cybersecurity Consultancy | Expert Security Solutions - TMT Tech Solutions",
  description:
    "Professional cybersecurity consultancy services including risk assessment, penetration testing, security architecture, incident response, SOC setup, compliance, and cloud security. Protect your organization with expert guidance.",
  keywords: [
    "cybersecurity consultancy",
    "security risk assessment",
    "penetration testing",
    "security architecture design",
    "incident response",
    "SOC setup",
    "compliance governance",
    "cloud security assessment",
    "security awareness training",
    "cybersecurity services Nigeria",
    "IT security consulting",
    "data protection",
    "threat assessment",
    "security audit",
    "cyber defense",
  ],
  authors: [{ name: "TMT Tech Solutions" }],
  creator: "TMT Tech Solutions",
  publisher: "TMT Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Cybersecurity Consultancy | Expert Security Solutions - TMT Tech Solutions",
    description:
      "Professional cybersecurity consultancy services including risk assessment, penetration testing, and comprehensive security solutions for Nigerian businesses.",
    url: "https://tmttechsolutions.com/cybersecurity-consultancy",
    siteName: "TMT Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/cybersecurity-og.jpg",
        width: 1200,
        height: 630,
        alt: "TMT Tech Solutions Cybersecurity Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Consultancy | TMT Tech Solutions",
    description:
      "Expert cybersecurity consultancy services for comprehensive security solutions and risk management.",
    images: ["/images/cybersecurity-twitter.jpg"],
    creator: "@tmttechsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tmttechsolutions.com/cybersecurity-consultancy",
  },
};

export default function CybersecurityConsultancy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cybersecurity Consultancy",
    description:
      "Comprehensive cybersecurity consultancy services including risk assessment, penetration testing, security architecture design, incident response, and compliance support.",
    provider: {
      "@type": "Organization",
      name: "TMT Tech Solutions",
      url: "https://tmttechsolutions.com",
      logo: "https://tmttechsolutions.com/images/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BM39 Baba Musami Plaza, Post Office",
        addressLocality: "Maiduguri",
        addressRegion: "Borno State",
        addressCountry: "NG",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2348162552901",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
    },
    serviceType: "Cybersecurity Consultancy",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Security Risk Assessment",
        description:
          "Comprehensive evaluation of security posture and vulnerability identification",
      },
      {
        "@type": "Offer",
        name: "Penetration Testing",
        description: "Simulated cyber attacks to identify security weaknesses",
      },
      {
        "@type": "Offer",
        name: "Security Architecture Design",
        description:
          "Design and implementation of secure network architectures",
      },
      {
        "@type": "Offer",
        name: "Incident Response & Forensics",
        description:
          "Rapid response to security incidents and forensic analysis",
      },
      {
        "@type": "Offer",
        name: "SOC Setup",
        description: "Security Operations Center establishment and management",
      },
      {
        "@type": "Offer",
        name: "Compliance & Governance",
        description: "Regulatory compliance and security governance support",
      },
      {
        "@type": "Offer",
        name: "Cloud Security Assessment",
        description: "Cloud environment security evaluation and hardening",
      },
      {
        "@type": "Offer",
        name: "Security Awareness Training",
        description: "Employee cybersecurity training and awareness programs",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ErrorBoundary>
        <CybersecurityConsultancyPageClient />
      </ErrorBoundary>
    </>
  );
}
