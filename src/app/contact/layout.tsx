import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Web & Software Development Sheffield",

    description:
        "Contact Mugz.Dev for web development, custom software and business applications in Sheffield, South Yorkshire and across the UK. Email hello@mugz.dev or send us an enquiry.",

    keywords: [
        "contact web developer Sheffield",
        "hire web developer Sheffield",
        "software developer Sheffield",
        "website development Sheffield",
        "custom software Sheffield",
        "Mugz.Dev contact",
    ],

    alternates: {
        canonical: "/contact",
    },

    openGraph: {
        title: "Contact Mugz.Dev",
        description:
            "Get in touch about websites, custom software, internal business systems or applications.",
        url: "/contact",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Mugz.Dev",
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