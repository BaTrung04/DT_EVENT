import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DT EVENT & TRAVEL - Professional Event Organization Services",
    template: "%s | DT EVENT & TRAVEL",
  },
  description:
    "DT EVENT & TRAVEL - Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam. Creative, professional, and impactful event solutions.",
  keywords: [
    "event organization",
    "corporate events",
    "conference organization",
    "product launch",
    "exhibition",
    "tourism services",
    "DT EVENT",
    "event planning",
    "Vietnam events",
    "professional events",
    "creative events",
    "brand events",
    "media production",
    "art performances",
  ],
  authors: [{ name: "DT EVENT & TRAVEL" }],
  creator: "DT EVENT & TRAVEL",
  publisher: "DT EVENT & TRAVEL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dtevent.com"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/",
      "ko-KR": "/",
    },
  },
  openGraph: {
    title: "DT EVENT & TRAVEL - Professional Event Organization Services",
    description:
      "Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam.",
    url: "https://dtevent.com",
    siteName: "DT EVENT & TRAVEL",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DT EVENT & TRAVEL - Professional Event Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DT EVENT & TRAVEL - Professional Event Organization Services",
    description:
      "Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam.",
    images: ["/images/og-image.jpg"],
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
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DT EVENT & TRAVEL",
    description:
      "Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam",
    url: "https://dtevent.com",
    logo: "https://dtevent.com/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-333-703-374",
      contactType: "customer service",
      availableLanguage: ["Vietnamese", "English", "Korean"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 22, Phuong Tien Village, Dai Lai Commune",
      addressLocality: "Bac Ninh Province",
      addressCountry: "Vietnam",
    },
    sameAs: [
      "https://www.facebook.com/dtevent",
      "https://www.instagram.com/dtevent",
      "https://www.linkedin.com/company/dtevent",
    ],
    openingHours: "Mo-Sa 08:00-18:00",
    foundingDate: "2026",
    taxID: "0110922180",
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Event Organization Services",
    description:
      "Professional event organization including corporate events, conferences, product launches, exhibitions, and tourism services",
    provider: {
      "@type": "Organization",
      name: "DT EVENT & TRAVEL",
    },
    serviceType: [
      "Event Organization",
      "Corporate Events",
      "Conference Organization",
      "Product Launch",
      "Exhibition",
      "Tourism Services",
    ],
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
