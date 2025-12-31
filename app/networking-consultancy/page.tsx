// app/networking-consultancy/page.tsx
import { Metadata } from "next";
import NetworkingConsultancyPage from "./NetworkingConsultancyPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { services } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title: "Networking Consultancy & Services | Triple Multipurpose Technology",
  description:
    "Comprehensive networking consultancy services for design, implementation, security, and optimization of enterprise network infrastructures. Expert network engineers providing end-to-end solutions.",
  keywords: [
    "networking consultancy",
    "network design",
    "network security",
    "network infrastructure",
    "IT consulting",
    "network assessment",
    "cloud networking",
    "wireless networks",
    "network monitoring",
    "SD-WAN",
    "VPN setup",
    "firewall management",
    "network optimization",
    "Lagos Nigeria",
    "enterprise networking",
  ],
  authors: [{ name: "Triple Multipurpose Technology" }],
  creator: "Triple Multipurpose Technology",
  publisher: "Triple Multipurpose Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tmttech.com"),
  alternates: {
    canonical: "/networking-consultancy",
  },
  openGraph: {
    title: "Networking Consultancy & Services | Triple Multipurpose Technology",
    description:
      "Expert networking consultancy services for secure, scalable, and high-performance network infrastructures. From assessment to optimization.",
    url: "/networking-consultancy",
    siteName: "Triple Multipurpose Technology",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/networking-consultancy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Networking Consultancy Services - Triple Multipurpose Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Networking Consultancy & Services | TMT",
    description:
      "Expert networking consultancy for secure, scalable network infrastructures. Assessment, design, implementation & optimization.",
    images: ["/images/networking-consultancy-twitter.jpg"],
    creator: "@tmttech",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function NetworkingConsultancy() {
  return (
    <ErrorBoundary>
      <NetworkingConsultancyPage />
    </ErrorBoundary>
  );
}

// Generate structured data for services
export function generateServiceStructuredData() {
  const baseUrl = "https://tmttech.com";

  return services.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/networking-consultancy#service-${index + 1}`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Triple Multipurpose Technology",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressRegion: "Lagos",
        addressLocality: "Lagos",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-XXX-XXXXXXX",
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: "Networking Consultancy",
    offers: {
      "@type": "Offer",
      description: `Professional ${service.title.toLowerCase()} services`,
      availability: "https://schema.org/InStock",
    },
    additionalProperty: service.deliverables.map((deliverable) => ({
      "@type": "PropertyValue",
      name: "Deliverable",
      value: deliverable,
    })),
  }));
}

// Main structured data for the page
export function generatePageStructuredData() {
  const baseUrl = "https://tmttech.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "Triple Multipurpose Technology",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo.png`,
          width: 200,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+234-XXX-XXXXXXX",
          contactType: "customer service",
          availableLanguage: "English",
        },
        sameAs: [
          "https://linkedin.com/company/tmttech",
          "https://twitter.com/tmttech",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/networking-consultancy#webpage`,
        url: `${baseUrl}/networking-consultancy`,
        name: "Networking Consultancy & Services | Triple Multipurpose Technology",
        description:
          "Comprehensive networking consultancy services for design, implementation, security, and optimization of enterprise network infrastructures.",
        isPartOf: {
          "@id": `${baseUrl}#website`,
        },
        about: {
          "@id": `${baseUrl}#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/networking-consultancy-hero.jpg`,
        },
        datePublished: "2024-01-01",
        dateModified: "2024-12-31",
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/networking-consultancy#service`,
        name: "Networking Consultancy Services",
        description:
          "End-to-end networking consultancy including assessment, design, implementation, security, and optimization services.",
        provider: {
          "@id": `${baseUrl}#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        serviceType: "IT Consulting",
        category: "Networking",
        offers: {
          "@type": "Offer",
          description: "Comprehensive networking consultancy services",
          availability: "https://schema.org/InStock",
        },
      },
      ...generateServiceStructuredData(),
    ],
  };
}
