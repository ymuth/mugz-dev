import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuoteSection from "@/components/home/QuoteSection";
import ExplainSection from "@/components/home/ExplainSection";
import FAQSection from "@/components/home/FAQSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mugz.dev/#business",

  name: "Mugz.Dev",
  url: "https://mugz.dev",
  email: "hello@mugz.dev",

  description:
    "Sheffield-based web development and custom software services for businesses, including professional websites, web applications, internal management systems, automation and business software.",

  areaServed: [
    {
      "@type": "City",
      name: "Sheffield",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Yorkshire",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],

  knowsAbout: [
    "Website development",
    "Web application development",
    "Custom business software",
    "Internal management systems",
    "Admin dashboards",
    "Booking systems",
    "Business automation",
    "Third-party integrations",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development and Software Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website Development",
          description:
            "Professional responsive websites designed and developed for businesses.",
          areaServed: {
            "@type": "City",
            name: "Sheffield",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description:
            "Custom websites and web applications with advanced functionality, databases, user accounts and business integrations.",
          areaServed: {
            "@type": "City",
            name: "Sheffield",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Business Software",
          description:
            "Custom internal management systems, dashboards, portals and business applications designed around existing workflows.",
          areaServed: {
            "@type": "City",
            name: "Sheffield",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Automation",
          description:
            "Automated emails, notifications, scheduled processes, data workflows and supported third-party integrations.",
          areaServed: {
            "@type": "City",
            name: "Sheffield",
          },
        },
      },
    ],
  },
};

export default function Home() {
  return (

    <div className="flex flex-col flex-1">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />


      <HeroSection />
      <section id="services"><ServicesSection /></section>
      <section id="explanation"><ExplainSection /></section>
      <section id="faq"><FAQSection /></section>
      <section id="quote"><QuoteSection /></section>

    </div>
  );
}



// TODO: Final touches; sitemap & robot, seo, other things like layout - opengraph metadata description etc;
//       do i have to register with google etc. how do i get my website showing first
// TODO:
// Work / portfolio — eventually client work; initially you can show the detailing site and other genuine projects as examples.


