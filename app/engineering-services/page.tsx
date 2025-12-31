// app/engineering-services/page.tsx
import { Metadata } from "next";
import EngineeringServicesPageClient from "./EngineeringServicesPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { servicesWithoutIcons } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title:
    "Engineering Services | Electrical, Solar & Industrial Solutions - TMT Tech Solutions",
  description:
    "Professional engineering services including solar power installation, electrical systems, industrial automation, energy audits, and preventive maintenance. Licensed engineers delivering reliable, efficient, and sustainable solutions.",
  keywords: [
    "engineering services",
    "solar power installation",
    "electrical installation",
    "industrial automation",
    "electrical system design",
    "preventive maintenance",
    "energy audits",
    "backup power solutions",
    "electrical safety compliance",
    "engineering consulting Nigeria",
    "solar energy systems",
    "electrical engineering",
    "industrial automation solutions",
    "energy efficiency",
    "power systems engineering",
  ],
  authors: [{ name: "Triple Multipurpose Technology" }],
  creator: "Triple Multipurpose Technology",
  publisher: "Triple Multipurpose Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://triplemultipurposetechnology.com.ng"),
  alternates: {
    canonical: "/engineering-services",
  },
  openGraph: {
    title: "Engineering Services | Electrical, Solar & Industrial Solutions",
    description:
      "Professional engineering services including solar power installation, electrical systems, industrial automation, energy audits, and preventive maintenance. Licensed engineers delivering reliable solutions.",
    url: "/engineering-services",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/engineering-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Services - Triple Multipurpose Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Services | Electrical, Solar & Industrial Solutions",
    description:
      "Professional engineering services including solar power installation, electrical systems, industrial automation, energy audits, and preventive maintenance.",
    images: ["/images/engineering-services-twitter.jpg"],
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
    google: "your-google-site-verification-code",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engineering Services",
  description:
    "Professional engineering services including solar power installation, electrical systems, industrial automation, energy audits, and preventive maintenance.",
  provider: {
    "@type": "Organization",
    name: "Triple Multipurpose Technology",
    url: "https://triplemultipurposetechnology.com.ng",
    logo: "https://triplemultipurposetechnology.com.ng/images/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-XXX-XXX-XXXX",
      contactType: "customer service",
    },
  },
  serviceType: "Engineering Services",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering Services Catalog",
    itemListElement: servicesWithoutIcons.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Triple Multipurpose Technology",
        },
      },
      position: index + 1,
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function EngineeringServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ErrorBoundary>
        <EngineeringServicesPageClient />
      </ErrorBoundary>
    </>
  );
}
