import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development & Custom Software Services Sheffield",

    description:
        "Web development and custom software services in Sheffield. Mugz.Dev builds professional websites, internal management systems, web applications, dashboards, booking systems and business automation.",

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
        title: "Web Development & Custom Software Services | Mugz.Dev",
        description:
            "Professional websites, web applications, internal management systems and business automation for Sheffield businesses and beyond.",
        url: "/services",
    },

    twitter: {
        card: "summary_large_image",
        title: "Web Development & Custom Software Services | Mugz.Dev",
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