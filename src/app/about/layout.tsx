import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Our Web & Software Studio",

    description:
        "Meet MUGZ, a small Sheffield web and software studio building professional websites, applications and internal business systems across the UK.",

    keywords: [
        "software developer Sheffield",
        "web developer Sheffield",
        "Sheffield software engineer",
        "web development South Yorkshire",
        "custom software Sheffield",
        "MUGZ",
    ],

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About MUGZ | Sheffield Web & Software Studio",
        description:
            "Sheffield-based web and software development focused on professional websites, applications and practical business software.",
        url: "/about",
    },

    twitter: {
        card: "summary_large_image",
        title: "About MUGZ",
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
