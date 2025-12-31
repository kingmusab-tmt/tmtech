// app/web-development-services/page.tsx
import React from "react";
import { Metadata } from "next";
import WebDevelopmentServicesPage from "./WebDevelopmentServicesPage";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  servicesWithoutIcons as services,
  benefitsWithoutIcons as benefits,
} from "./dataWithoutIcons";

export const metadata: Metadata = {
  title:
    "Professional Web Development Services | Custom Web Applications & Solutions",
  description:
    "Expert web development services including custom web applications, e-commerce platforms, CMS solutions, and PWAs. Build scalable, secure web solutions with modern technologies.",
  keywords: [
    "web development services",
    "custom web applications",
    "e-commerce development",
    "CMS development",
    "progressive web apps",
    "web portal development",
    "API development",
    "web application security",
    "React development",
    "Node.js development",
    "full-stack development",
    "web development company Nigeria",
    "professional web development",
    "scalable web solutions",
    "secure web applications",
    "modern web technologies",
    "web development consulting",
    "digital transformation",
    "enterprise web solutions",
  ],
  authors: [{ name: "Triple Multipurpose Technology" }],
  creator: "Triple Multipurpose Technology",
  publisher: "Triple Multipurpose Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://triplemultipurposetechnology.com"),
  alternates: {
    canonical: "/web-development-services",
  },
  openGraph: {
    title:
      "Professional Web Development Services | Custom Web Applications & Solutions",
    description:
      "Expert web development services including custom web applications, e-commerce platforms, CMS solutions, and PWAs. Build scalable, secure web solutions with modern technologies.",
    url: "/web-development-services",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/web-development-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services - Triple Multipurpose Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Web Development Services | Custom Web Applications & Solutions",
    description:
      "Expert web development services including custom web applications, e-commerce platforms, CMS solutions, and PWAs. Build scalable, secure web solutions with modern technologies.",
    images: ["/images/web-development-services-twitter.jpg"],
    creator: "@triplemultipurpose",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function WebDevelopmentServices() {
  // Generate structured data for services
  const serviceStructuredData = services.map((service, index) => ({
    "@type": "Service",
    "@id": `https://triplemultipurposetechnology.com/web-development-services#service-${index}`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Triple Multipurpose Technology",
      url: "https://triplemultipurposetechnology.com",
      logo: {
        "@type": "ImageObject",
        url: "https://triplemultipurposetechnology.com/images/logo.png",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressLocality: "Lagos",
        addressRegion: "Lagos",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-XXX-XXX-XXXX",
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    serviceType: "Web Development",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Offerings`,
      itemListElement: service.features.map((feature, featureIndex) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
          description: feature,
        },
      })),
    },
    additionalProperty: service.technologies.map((tech) => ({
      "@type": "PropertyValue",
      name: "Technology Used",
      value: tech,
    })),
  }));

  // Generate structured data for benefits
  const benefitStructuredData = benefits.map((benefit, index) => ({
    "@type": "PropertyValue",
    name: benefit.title,
    value: benefit.description,
  }));

  // Main structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://triplemultipurposetechnology.com/web-development-services",
        url: "https://triplemultipurposetechnology.com/web-development-services",
        name: "Professional Web Development Services | Custom Web Applications & Solutions",
        description:
          "Expert web development services including custom web applications, e-commerce platforms, CMS solutions, and PWAs. Build scalable, secure web solutions with modern technologies.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://triplemultipurposetechnology.com#website",
          url: "https://triplemultipurposetechnology.com",
          name: "Triple Multipurpose Technology",
          publisher: {
            "@type": "Organization",
            "@id": "https://triplemultipurposetechnology.com#organization",
          },
        },
        about: {
          "@type": "Organization",
          "@id": "https://triplemultipurposetechnology.com#organization",
          name: "Triple Multipurpose Technology",
          url: "https://triplemultipurposetechnology.com",
          logo: {
            "@type": "ImageObject",
            url: "https://triplemultipurposetechnology.com/images/logo.png",
          },
          description:
            "Leading technology company providing comprehensive IT solutions, training, and consulting services in Nigeria.",
          foundingDate: "2020",
          address: {
            "@type": "PostalAddress",
            addressCountry: "NG",
            addressLocality: "Lagos",
            addressRegion: "Lagos",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234-XXX-XXX-XXXX",
            contactType: "customer service",
            availableLanguage: "English",
            email: "info@triplemultipurposetechnology.com",
          },
          sameAs: [
            "https://www.linkedin.com/company/triple-multipurpose-technology",
            "https://twitter.com/triplemultipurpose",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://triplemultipurposetechnology.com/images/web-development-services-hero.jpg",
          width: 1200,
          height: 630,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
      },
      {
        "@type": "Organization",
        "@id": "https://triplemultipurposetechnology.com#organization",
        name: "Triple Multipurpose Technology",
        url: "https://triplemultipurposetechnology.com",
        logo: {
          "@type": "ImageObject",
          url: "https://triplemultipurposetechnology.com/images/logo.png",
          width: 200,
          height: 60,
        },
        description:
          "Leading technology company providing comprehensive IT solutions, training, and consulting services in Nigeria.",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Technology Street",
          addressLocality: "Lagos",
          addressRegion: "Lagos",
          postalCode: "100001",
          addressCountry: "NG",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+234-XXX-XXX-XXXX",
            contactType: "customer service",
            availableLanguage: "English",
            email: "info@triplemultipurposetechnology.com",
          },
          {
            "@type": "ContactPoint",
            telephone: "+234-XXX-XXX-XXXX",
            contactType: "technical support",
            availableLanguage: "English",
            email: "support@triplemultipurposetechnology.com",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/triple-multipurpose-technology",
          "https://twitter.com/triplemultipurpose",
          "https://www.facebook.com/triplemultipurposetechnology",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: serviceStructuredData,
        },
        additionalProperty: benefitStructuredData,
      },
      ...serviceStructuredData,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://triplemultipurposetechnology.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Web Development Services",
            item: "https://triplemultipurposetechnology.com/web-development-services",
          },
        ],
      },
    ],
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
        <WebDevelopmentServicesPage />
      </ErrorBoundary>
    </>
  );
}
