import type { Metadata } from "next";
import AutoCADTrainingPage from "./AutoCADTrainingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { coursesWithoutIcons } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title:
    "AutoCAD Training | Master Precision Design and Drafting | Triple Multipurpose Technology",
  description:
    "Comprehensive AutoCAD training programs from beginner to advanced. Learn 2D drafting, 3D modeling, and industry-specific applications. Boost your career in architecture, engineering, and design.",
  keywords:
    "AutoCAD training, CAD software, 2D drafting, 3D modeling, architectural design, engineering drafting, AutoCAD certification, Nigeria",
  openGraph: {
    title: "AutoCAD Training | Master Precision Design and Drafting",
    description:
      "Transform your design ideas into precise technical drawings with our comprehensive AutoCAD training programs.",
    url: "https://triplemultipurposetechnology.com.ng/autocad-training",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/autocad-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "AutoCAD Training Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoCAD Training | Master Precision Design and Drafting",
    description:
      "Comprehensive AutoCAD training for architects, engineers, and designers. Learn from industry experts.",
    images: ["/images/autocad-training-twitter.jpg"],
  },
  alternates: {
    canonical: "https://triplemultipurposetechnology.com.ng/autocad-training",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "AutoCAD Training Programs",
            description:
              "Comprehensive AutoCAD training from beginner to advanced levels covering 2D drafting, 3D modeling, and industry-specific applications.",
            provider: {
              "@type": "Organization",
              name: "Triple Multipurpose Technology",
              url: "https://triplemultipurposetechnology.com.ng",
            },
            courseMode: "online",
            hasCourseInstance: coursesWithoutIcons.map((course) => ({
              "@type": "CourseInstance",
              name: course.title,
              description: course.description,
              courseMode: "blended",
              instructor: {
                "@type": "Person",
                name: "Certified AutoCAD Instructors",
              },
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "NGN",
              },
            })),
          }),
        }}
      />
      <ErrorBoundary>
        <AutoCADTrainingPage />
      </ErrorBoundary>
    </>
  );
}
