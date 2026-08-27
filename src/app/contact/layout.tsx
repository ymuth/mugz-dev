import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Our Web & Software Studio",

    description:
        "Contact MUGZ about a professional business website, custom software, web application or internal system in Sheffield and across the UK.",

    keywords: [
        "contact web developer Sheffield",
        "hire web developer Sheffield",
        "software developer Sheffield",
        "website development Sheffield",
        "custom software Sheffield",
        "MUGZ contact",
    ],

    alternates: {
        canonical: "/contact",
    },

    openGraph: {
        title: "Contact MUGZ | Start a Web or Software Project",
        description:
            "Get in touch about websites, custom software, internal business systems or applications.",
        url: "/contact",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact MUGZ",
        description:
            "Get in touch about websites, applications and custom business software.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
