import type { Metadata } from "next";
import BusinessServicesPage from "./BusinessServicesPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { servicesWithoutIcons } from "./dataWithoutIcons";

export const metadata: Metadata = {
  title:
    "Business Services | Document Solutions | Triple Multipurpose Technology",
  description:
    "Professional business services including document typing, multilingual translation, printing, and digitization. Quality document solutions for Nigerian businesses.",
  keywords:
    "business services, document typing, translation services, printing services, document digitization, Nigeria, Arabic translation, Hausa translation",
  openGraph: {
    title: "Business Services | Professional Document Solutions",
    description:
      "Comprehensive business services including multilingual translation, document processing, and professional printing for Nigerian businesses.",
    url: "https://triplemultipurposetechnology.com.ng/business-services",
    siteName: "Triple Multipurpose Technology",
    images: [
      {
        url: "/images/business-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Business Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Services | Professional Document Solutions",
    description:
      "Quality business services including translation, printing, and document processing for Nigerian businesses.",
    images: ["/images/business-services-twitter.jpg"],
  },
  alternates: {
    canonical: "https://triplemultipurposetechnology.com.ng/business-services",
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
            "@type": "Service",
            name: "Business Services",
            description:
              "Professional business services including document typing, multilingual translation, printing, and digitization services.",
            provider: {
              "@type": "Organization",
              name: "Triple Multipurpose Technology",
              url: "https://triplemultipurposetechnology.com.ng",
            },
            serviceType: "Business Services",
            areaServed: {
              "@type": "Country",
              name: "Nigeria",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Business Services Catalog",
              itemListElement: servicesWithoutIcons.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
      <ErrorBoundary>
        <BusinessServicesPage />
      </ErrorBoundary>
    </>
  );
}
