// app/network-training/page.tsx
import React from "react";
import { Metadata } from "next";
import NetworkTrainingPage from "./NetworkTrainingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { coursesWithoutIcons as courses, benefitsWithoutIcons as benefits } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title: "Professional Network Training | Cisco CCNA & CompTIA Network+ Certification",
  description: "Expert network training programs including Cisco CCNA, CompTIA Network+, and networking essentials. Master modern network infrastructures with hands-on labs and industry certifications.",
  keywords: [
    "network training",
    "Cisco CCNA certification",
    "CompTIA Network+ training",
    "networking courses",
    "IT networking certification",
    "network administration training",
    "Cisco networking",
    "network infrastructure training",
    "network security training",
    "hands-on networking labs",
    "network engineer training",
    "networking fundamentals",
    "TCP/IP training",
    "network troubleshooting",
    "enterprise networking",
    "network training Nigeria",
    "professional networking certification",
    "network career training",
    "IT infrastructure training",
    "network operations training"
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
    canonical: "/network-training",
  },
  openGraph: {
    title: "Professional Network Training | Cisco CCNA & CompTIA Network+ Certification",
    description: "Expert network training programs including Cisco CCNA, CompTIA Network+, and networking essentials. Master modern network infrastructures with hands-on labs and industry certifications.",
    url: "/network-training",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/network-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Network Training - Triple Multipurpose Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Network Training | Cisco CCNA & CompTIA Network+ Certification",
    description: "Expert network training programs including Cisco CCNA, CompTIA Network+, and networking essentials. Master modern network infrastructures with hands-on labs and industry certifications.",
    images: ["/images/network-training-twitter.jpg"],
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
  category: "education",
};

export default function NetworkTraining() {
  // Generate structured data for courses
  const courseStructuredData = courses.map((course, index) => ({
    "@type": "Course",
    "@id": `https://triplemultipurposetechnology.com/network-training#course-${index}`,
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Triple Multipurpose Technology",
      "url": "https://triplemultipurposetechnology.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://triplemultipurposetechnology.com/images/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-XXX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },
    "courseMode": "online",
    "educationalLevel": course.level,
    "timeRequired": course.duration,
    "teaches": course.objectives,
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": course.audience
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "instructor": {
        "@type": "Person",
        "name": "Certified Network Professionals"
      }
    }
  }));

  // Generate structured data for benefits
  const benefitStructuredData = benefits.map((benefit, index) => ({
    "@type": "PropertyValue",
    "name": benefit.title,
    "value": benefit.description
  }));

  // Main structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://triplemultipurposetechnology.com/network-training",
        "url": "https://triplemultipurposetechnology.com/network-training",
        "name": "Professional Network Training | Cisco CCNA & CompTIA Network+ Certification",
        "description": "Expert network training programs including Cisco CCNA, CompTIA Network+, and networking essentials. Master modern network infrastructures with hands-on labs and industry certifications.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://triplemultipurposetechnology.com#website",
          "url": "https://triplemultipurposetechnology.com",
          "name": "Triple Multipurpose Technology",
          "publisher": {
            "@type": "Organization",
            "@id": "https://triplemultipurposetechnology.com#organization"
          }
        },
        "about": {
          "@type": "Organization",
          "@id": "https://triplemultipurposetechnology.com#organization",
          "name": "Triple Multipurpose Technology",
          "url": "https://triplemultipurposetechnology.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://triplemultipurposetechnology.com/images/logo.png"
          },
          "description": "Leading technology company providing comprehensive IT solutions, training, and consulting services in Nigeria.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG",
            "addressLocality": "Lagos",
            "addressRegion": "Lagos"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": "English",
            "email": "info@triplemultipurposetechnology.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/triple-multipurpose-technology",
            "https://twitter.com/triplemultipurpose"
          ]
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://triplemultipurposetechnology.com/images/network-training-hero.jpg",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      },
      {
        "@type": "Organization",
        "@id": "https://triplemultipurposetechnology.com#organization",
        "name": "Triple Multipurpose Technology",
        "url": "https://triplemultipurposetechnology.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://triplemultipurposetechnology.com/images/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Leading technology company providing comprehensive IT solutions, training, and consulting services in Nigeria.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Technology Street",
          "addressLocality": "Lagos",
          "addressRegion": "Lagos",
          "postalCode": "100001",
          "addressCountry": "NG"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+234-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": "English",
            "email": "info@triplemultipurposetechnology.com"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+234-XXX-XXX-XXXX",
            "contactType": "technical support",
            "availableLanguage": "English",
            "email": "support@triplemultipurposetechnology.com"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/triple-multipurpose-technology",
          "https://twitter.com/triplemultipurpose",
          "https://www.facebook.com/triplemultipurposetechnology"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Network Training Programs",
          "itemListElement": courseStructuredData
        },
        "additionalProperty": benefitStructuredData
      },
      ...courseStructuredData,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://triplemultipurposetechnology.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Network Training",
            "item": "https://triplemultipurposetechnology.com/network-training"
          }
        ]
      }
    ]
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
        <NetworkTrainingPage />
      </ErrorBoundary>
    </>
  );
}