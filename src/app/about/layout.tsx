import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sheffield Web & Software Developer",

    description:
        "Learn about Mugz.Dev, a Sheffield-based web and software development business building professional websites, applications and internal management systems for businesses across South Yorkshire and the UK.",

    keywords: [
        "software developer Sheffield",
        "web developer Sheffield",
        "Sheffield software engineer",
        "web development South Yorkshire",
        "custom software Sheffield",
        "Mugz.Dev",
    ],

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About Mugz.Dev | Sheffield Web & Software Developer",
        description:
            "Sheffield-based web and software development focused on professional websites, applications and practical business software.",
        url: "/about",
    },

    twitter: {
        card: "summary_large_image",
        title: "About Mugz.Dev",
        description:
            "Sheffield-based web and software development for businesses across South Yorkshire and the UK.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}