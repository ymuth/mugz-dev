import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mugz.dev"),

  title: {
    default: "Mugz.Dev | Web Development & Custom Software Sheffield",
    template: "%s | Mugz.Dev",
  },

  description:
    "Sheffield-based web development and custom software for businesses. Professional websites, web applications, internal systems and business automation across South Yorkshire and the UK.",

  keywords: [
    "web developer Sheffield",
    "website developer Sheffield",
    "web design Sheffield",
    "software developer Sheffield",
    "custom software Sheffield",
    "business software Sheffield",
    "web development South Yorkshire",
    "custom business software",
    "internal management systems",
    "web applications",
    "business websites",
    "Mugz.Dev",
  ],

  authors: [
    {
      name: "Mugz.Dev",
      url: "https://mugz.dev",
    },
  ],

  creator: "Mugz.Dev",
  publisher: "Mugz.Dev",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Mugz.Dev",
    title: "Mugz.Dev | Web Development & Custom Software Sheffield",
    description:
      "Professional websites, applications and custom business software built around your business.",
    url: "https://mugz.dev",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mugz.Dev | Web Development & Custom Software Sheffield",
    description:
      "Professional websites, applications and custom business software built around your business.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={` ${plusJakartaSans.variable} h-full antialiased scrollbar-thin scroll-smooth font-jakarta`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
