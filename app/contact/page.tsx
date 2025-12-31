// app/contact/page.tsx
import { Metadata } from "next";
import ContactPage from "./ContactPage";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Contact Us | TMT Tech Solutions - Get In Touch Today",
  description:
    "Contact TMT Tech Solutions for expert technology consulting, web development, cybersecurity, and training services. Located in Maiduguri, Nigeria. Reach out today!",
  keywords: [
    "contact TMT Tech Solutions",
    "technology consulting contact",
    "web development contact",
    "cybersecurity consultancy contact",
    "IT training contact",
    "Maiduguri technology services",
    "Nigeria tech company contact",
    "business services contact",
    "engineering services contact",
    "networking consultancy contact",
  ],
  authors: [{ name: "TMT Tech Solutions" }],
  creator: "TMT Tech Solutions",
  publisher: "TMT Tech Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Contact Us | TMT Tech Solutions - Get In Touch Today",
    description:
      "Contact TMT Tech Solutions for expert technology consulting and services. Located in Maiduguri, Nigeria.",
    url: "https://tmttechsolutions.com/contact",
    siteName: "TMT Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TMT Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TMT Tech Solutions",
    description:
      "Get in touch with TMT Tech Solutions for technology consulting and services.",
    images: ["/images/contact-twitter.jpg"],
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
    canonical: "https://tmttechsolutions.com/contact",
  },
};

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TMT Tech Solutions",
    url: "https://tmttechsolutions.com",
    logo: "https://tmttechsolutions.com/images/logo.png",
    description:
      "Leading technology solutions provider offering web development, cybersecurity, networking, engineering services, and training programs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "BM39 Baba Musami Plaza, Post Office",
      addressLocality: "Maiduguri",
      addressRegion: "Borno State",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2348162552901",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "info@triplemtechnology.com",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
    ],
    foundingDate: "2019-04-29",
    legalName: "Triple Multipurpose Technology Limited",
    taxID: "CAC BN 2875632",
    sameAs: [
      "https://www.facebook.com/tmttechsolutions",
      "https://www.twitter.com/tmttechsolutions",
      "https://www.linkedin.com/company/tmttechsolutions",
    ],
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-17:00", "Su by appointment"],
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
        <ContactPage />
      </ErrorBoundary>
    </>
  );
}
