// app/consultation/page.tsx
import { Metadata } from "next";
import ConsultationPage from "./ConsultationPage";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Request a Consultation | TMT Tech Solutions",
  description:
    "Get expert advice and tailored solutions for your technology needs. Request a consultation with our experienced team at TMT Tech Solutions.",
  keywords: [
    "consultation request",
    "technology consultation",
    "IT consulting",
    "web development consultation",
    "cybersecurity advice",
    "networking consultancy",
    "engineering services consultation",
    "business services consultation",
    "training programs consultation",
    "TMT Tech Solutions",
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
    title: "Request a Consultation | TMT Tech Solutions",
    description:
      "Get expert advice and tailored solutions for your technology needs. Request a consultation with our experienced team.",
    url: "https://tmttechsolutions.com/consultation",
    siteName: "TMT Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/consultation-og.jpg",
        width: 1200,
        height: 630,
        alt: "TMT Tech Solutions Consultation Request",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Consultation | TMT Tech Solutions",
    description:
      "Get expert advice and tailored solutions for your technology needs.",
    images: ["/images/consultation-twitter.jpg"],
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
    canonical: "https://tmttechsolutions.com/consultation",
  },
};

export default function Consultation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Consultation Request - TMT Tech Solutions",
    description:
      "Request a consultation with TMT Tech Solutions for expert technology advice and tailored solutions.",
    url: "https://tmttechsolutions.com/consultation",
    mainEntity: {
      "@type": "Organization",
      name: "TMT Tech Solutions",
      url: "https://tmttechsolutions.com",
      logo: "https://tmttechsolutions.com/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-XXX-XXXXXXX", // Replace with actual phone
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/tmttechsolutions",
        "https://www.twitter.com/tmttechsolutions",
        "https://www.linkedin.com/company/tmttechsolutions",
      ],
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
        <ConsultationPage />
      </ErrorBoundary>
    </>
  );
}
