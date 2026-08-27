import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development & Custom Software Services Sheffield",

    description:
        "MUGZ builds professional business websites, custom web applications, internal systems and business automation for organisations in Sheffield and across the UK.",

    keywords: [
        "web development Sheffield",
        "website development Sheffield",
        "web developer Sheffield",
        "website designer Sheffield",
        "custom software Sheffield",
        "software development Sheffield",
        "business software Sheffield",
        "internal management systems Sheffield",
        "admin dashboard development",
        "booking system development",
        "web application development Sheffield",
        "business automation Sheffield",
        "South Yorkshire web developer",
    ],

    alternates: {
        canonical: "/services",
    },

    openGraph: {
        title: "Business Websites & Custom Software | MUGZ",
        description:
            "Professional websites, web applications, internal management systems and business automation for Sheffield businesses and beyond.",
        url: "/services",
    },

    twitter: {
        card: "summary_large_image",
        title: "Business Websites & Custom Software | MUGZ",
        description:
            "Professional websites, internal systems and custom software built around your business.",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
