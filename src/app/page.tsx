import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DT EVENT & TRAVEL - Professional Event Organization Services",
  description:
    "DT EVENT & TRAVEL offers professional event organization services in Vietnam. Corporate events, conferences, product launches, exhibitions, and tourism services. Creative, professional, and impactful event solutions.",
  keywords: [
    "event organization Vietnam",
    "corporate events",
    "conference organization",
    "product launch Vietnam",
    "exhibition services",
    "tourism services Vietnam",
    "professional event planning",
    "DT EVENT",
    "event management",
    "brand events",
    "creative events",
  ],
  openGraph: {
    title: "DT EVENT & TRAVEL - Professional Event Organization Services",
    description:
      "Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam.",
    url: "https://dtevent.com",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "DT EVENT & TRAVEL - Professional Event Organization Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DT EVENT & TRAVEL - Professional Event Organization Services",
    description:
      "Professional event organization, corporate events, conferences, product launches, exhibitions, and tourism services in Vietnam.",
    images: ["/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
