import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mugz.dev"),

  title: {
    default: "MUGZ | Web Development & Custom Software Sheffield",
    template: "%s | MUGZ",
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
    "MUGZ",
  ],

  authors: [
    {
      name: "MUGZ",
      url: "https://www.mugz.dev",
    },
  ],

  creator: "MUGZ",
  publisher: "MUGZ",

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
    siteName: "MUGZ",
    title: "MUGZ | Web Development & Custom Software Sheffield",
    description:
      "Professional websites, applications and custom business software built around your business.",
    url: "https://www.mugz.dev",
  },

  twitter: {
    card: "summary_large_image",
    title: "MUGZ | Web Development & Custom Software Sheffield",
    description:
      "Professional websites, applications and custom business software built around your business.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
