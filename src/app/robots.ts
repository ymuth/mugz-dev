import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: "https://mugz.dev/sitemap.xml",
        host: "https://mugz.dev",
    };
}