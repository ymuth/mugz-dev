import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.mugz.dev",
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://www.mugz.dev/services",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.mugz.dev/about",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.mugz.dev/contact",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.mugz.dev/privacy",
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}