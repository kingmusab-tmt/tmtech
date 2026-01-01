// app/security-training/page.tsx
import { Metadata } from "next";
import SecurityTrainingPage from "./SecurityTrainingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { courses } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title: "Cybersecurity Training Programs | Triple Multipurpose Technology",
  description:
    "Comprehensive cybersecurity training programs from beginner to advanced levels. Learn ethical hacking, penetration testing, SOC operations, and web application security. Industry-recognized certifications.",
  keywords: [
    "cybersecurity training",
    "ethical hacking course",
    "penetration testing training",
    "SOC training",
    "web application security",
    "cybersecurity certification",
    "information security training",
    "Lagos Nigeria",
    "cybersecurity courses",
    "security awareness training",
    "OWASP training",
    "SIEM training",
    "threat intelligence",
    "incident response training",
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
    canonical: "/security-training",
  },
  openGraph: {
    title: "Cybersecurity Training Programs | Triple Multipurpose Technology",
    description:
      "Master cybersecurity skills with our comprehensive training programs. From basics to advanced penetration testing and SOC operations.",
    url: "/security-training",
    siteName: "Triple Multipurpose Technology",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/security-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Training Programs - Triple Multipurpose Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Training Programs | TMT",
    description:
      "Comprehensive cybersecurity training from beginner to advanced. Ethical hacking, penetration testing, SOC operations.",
    images: ["/images/security-training-twitter.jpg"],
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

export default function SecurityTraining() {
  return (
    <ErrorBoundary>
      <SecurityTrainingPage />
    </ErrorBoundary>
  );
}

// Generate structured data for courses
export function generateCourseStructuredData() {
  const baseUrl = "https://tmttech.com";

  return courses.map((course, index) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${baseUrl}/security-training#course-${index + 1}`,
    name: course.title,
    description: course.description,
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
    educationalLevel: course.level,
    timeRequired: course.duration,
    teaches: course.objectives,
    audience: {
      "@type": "EducationalAudience",
      audienceType: course.audience,
    },
    offers: {
      "@type": "Offer",
      category: "Training Course",
      availability: "https://schema.org/InStock",
    },
    educationalCredentialAwarded: "Certificate of Completion",
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
        "@id": `${baseUrl}/security-training#webpage`,
        url: `${baseUrl}/security-training`,
        name: "Cybersecurity Training Programs | Triple Multipurpose Technology",
        description:
          "Comprehensive cybersecurity training programs from beginner to advanced levels. Learn ethical hacking, penetration testing, SOC operations, and web application security.",
        isPartOf: {
          "@id": `${baseUrl}#website`,
        },
        about: {
          "@id": `${baseUrl}#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/security-training-hero.jpg`,
        },
        datePublished: "2024-01-01",
        dateModified: "2024-12-31",
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${baseUrl}/security-training#educational-organization`,
        name: "Triple Multipurpose Technology Cybersecurity Training",
        description:
          "Professional cybersecurity training and certification programs",
        provider: {
          "@id": `${baseUrl}#organization`,
        },
        offers: {
          "@type": "Offer",
          category: "Cybersecurity Training Programs",
          availability: "https://schema.org/InStock",
        },
      },
      ...generateCourseStructuredData(),
    ],
  };
}
