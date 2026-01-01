import { Metadata } from "next";
import dynamic from "next/dynamic";
import ErrorBoundary from "./components/ErrorBoundary";
import HeroSection from "./components/HeroSection";
import { courses, benefits, testimonials } from "./dataWithoutIcons";

// Dynamically import the client component
const WebDevelopmentTrainingPage = dynamic(
  () => import("./WebDevelopmentTrainingPage"),
  {
    loading: () => <div>Loading...</div>,
  }
);

export const metadata: Metadata = {
  title: "Web Development Training | Triple Multipurpose Technology",
  description:
    "Master modern web development with our comprehensive training programs. Learn HTML5, CSS3, JavaScript, React.js, Node.js, and full-stack development. Build real-world projects and launch your career.",
  keywords: [
    "web development training",
    "frontend development",
    "backend development",
    "full stack development",
    "React.js training",
    "Node.js training",
    "JavaScript course",
    "HTML5 CSS3 training",
    "web development bootcamp",
    "programming courses Nigeria",
    "software development training",
    "web developer career",
    "coding bootcamp Lagos",
    "Triple Multipurpose Technology",
  ],
  authors: [{ name: "Triple Multipurpose Technology" }],
  creator: "Triple Multipurpose Technology",
  publisher: "Triple Multipurpose Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://triplemultipurpose.com"),
  alternates: {
    canonical: "/web-development-training",
  },
  openGraph: {
    title: "Web Development Training | Triple Multipurpose Technology",
    description:
      "Master modern web development with our comprehensive training programs. Learn HTML5, CSS3, JavaScript, React.js, Node.js, and full-stack development.",
    url: "/web-development-training",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/web-development-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Training - Triple Multipurpose Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Training | Triple Multipurpose Technology",
    description:
      "Master modern web development with our comprehensive training programs. Learn HTML5, CSS3, JavaScript, React.js, Node.js, and full-stack development.",
    images: ["/images/web-development-training-twitter.jpg"],
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
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "education",
};

// Generate structured data for courses
function generateCourseStructuredData() {
  return courses.map((course, index) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Triple Multipurpose Technology",
      url: "https://triplemultipurpose.com",
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    teaches: course.objectives.join(", "),
    audience: {
      "@type": "EducationalAudience",
      audienceType: course.audience,
    },
    offers: {
      "@type": "Offer",
      category: "Training",
      availability: "https://schema.org/InStock",
    },
  }));
}

// Generate structured data for testimonials
function generateTestimonialStructuredData() {
  return testimonials.map((testimonial, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewBody: testimonial.content,
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Course",
      name: "Web Development Training",
      provider: {
        "@type": "Organization",
        name: "Triple Multipurpose Technology",
      },
    },
  }));
}

export default function WebDevelopmentTraining() {
  const courseStructuredData = generateCourseStructuredData();
  const testimonialStructuredData = generateTestimonialStructuredData();

  return (
    <>
      {/* Hero Section - Server Component */}
      <HeroSection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Web Development Training",
              description:
                "Comprehensive web development training programs covering frontend, backend, and full-stack development.",
              url: "https://triplemultipurpose.com/web-development-training",
              isPartOf: {
                "@type": "WebSite",
                name: "Triple Multipurpose Technology",
                url: "https://triplemultipurpose.com",
              },
              about: {
                "@type": "Organization",
                name: "Triple Multipurpose Technology",
                description:
                  "Leading technology training and consulting company in Nigeria",
              },
              mainEntity: {
                "@type": "ItemList",
                name: "Web Development Courses",
                numberOfItems: courses.length,
                itemListElement: courses.map((course, index) => ({
                  "@type": "Course",
                  position: index + 1,
                  name: course.title,
                  description: course.description,
                })),
              },
            },
            ...courseStructuredData,
            ...testimonialStructuredData,
          ]),
        }}
      />

      {/* Client Component with Error Boundary */}
      <ErrorBoundary>
        <WebDevelopmentTrainingPage />
      </ErrorBoundary>
    </>
  );
}
