// app/graphic-design-training/page.tsx
import { Metadata } from "next";
import GraphicDesignTrainingPageClient from "./GraphicDesignTrainingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { coursesWithoutIcons } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title: "Graphic Design Training | Professional Design Courses - TMT Tech Solutions",
  description: "Comprehensive graphic design training programs including Adobe Creative Suite, UI/UX design, digital illustration, and photo editing. Master industry-standard tools and launch your design career.",
  keywords: [
    "graphic design training",
    "Adobe Photoshop training",
    "Adobe Illustrator course",
    "UI/UX design training",
    "digital illustration course",
    "photo editing training",
    "design software courses",
    "creative design training Nigeria",
    "graphic design certification",
    "Adobe Creative Suite training",
    "design career training",
    "visual communication training",
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
    canonical: "/graphic-design-training",
  },
  openGraph: {
    title: "Graphic Design Training | Professional Design Courses",
    description: "Comprehensive graphic design training programs including Adobe Creative Suite, UI/UX design, digital illustration, and photo editing. Master industry-standard tools and launch your design career.",
    url: "/graphic-design-training",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/graphic-design-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "Graphic Design Training - Triple Multipurpose Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Training | Professional Design Courses",
    description: "Comprehensive graphic design training programs including Adobe Creative Suite, UI/UX design, digital illustration, and photo editing.",
    images: ["/images/graphic-design-training-twitter.jpg"],
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
  "@type": "Course",
  "name": "Graphic Design Training Programs",
  "description": "Comprehensive graphic design training programs including Adobe Creative Suite, UI/UX design, digital illustration, and photo editing.",
  "provider": {
    "@type": "Organization",
    "name": "Triple Multipurpose Technology",
    "url": "https://triplemultipurposetechnology.com.ng",
    "logo": "https://triplemultipurposetechnology.com.ng/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-XXX-XXX-XXXX",
      "contactType": "customer service",
    },
  },
  "courseMode": "online",
  "inLanguage": "en",
  "hasCourseInstance": coursesWithoutIcons.map((course, index) => ({
    "@type": "CourseInstance",
    "name": course.title,
    "description": course.description,
    "courseMode": "online",
    "instructor": {
      "@type": "Person",
      "name": "Professional Design Instructor",
    },
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "NGN",
      "availability": "https://schema.org/InStock",
    },
    "courseWorkload": course.duration,
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function GraphicDesignTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ErrorBoundary>
        <GraphicDesignTrainingPageClient />
      </ErrorBoundary>
    </>
  );
}
