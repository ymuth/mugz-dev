import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://mugz.dev",
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://mugz.dev/services",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://mugz.dev/about",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://mugz.dev/contact",
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}