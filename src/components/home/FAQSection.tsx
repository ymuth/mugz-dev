"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How long does a website take to build?",
        answer:
            "Most Essentials websites can usually be completed within a few days once we have everything we need from you. More complex websites or web applications may take longer depending on the number of pages, features and integrations required. We'll give you a clearer timeframe after discussing your project.",
    },
    {
        question: "What happens after I request a quote?",
        answer:
            "We'll review the details you've provided and get in touch to discuss your project in more detail. Once we've agreed on the scope, features and design direction, we'll provide a clear quote before any work begins.",
    },
    {
        question: "What is included in the monthly cost?",
        answer:
            "For our Essentials package, the monthly cost covers hosting, deployment, ongoing maintenance and support. If your website requires additional services or more advanced infrastructure, we'll explain any additional costs before you commit.",
    },
    {
        question: "Can I spread the initial setup cost?",
        answer:
            "Yes. If paying the full setup cost upfront isn't suitable, flexible payment arrangements may be available. We can discuss an option that works for both you and the project before development begins.",
    },
    {
        question: "What if I need more than three pages?",
        answer:
            "No problem. The Essentials package includes up to three professionally designed pages, but additional pages can be added depending on your requirements. We'll include any additional work in your quote.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. Whether your current site needs a visual refresh, better mobile support, improved performance or a complete rebuild, we can discuss what makes the most sense for your business.",
    },
    {
        question: "Can I make changes after the website launches?",
        answer:
            "Yes. Minor updates and maintenance can be handled as part of your ongoing service. Larger changes, new pages or additional functionality can also be added and will be quoted depending on the work required.",
    },
    {
        question: "Do you provide domains and hosting?",
        answer:
            "We can handle the hosting and deployment of your website. If you don't already have a domain, we can also help you get one set up and connected to your site.",
    },
    {
        question: "What if I need a booking system, customer accounts or an admin dashboard?",
        answer:
            "Those fall under our Custom Solutions service. We can build functionality such as booking systems, databases, secure user accounts, admin dashboards, automated emails and third-party integrations around your business requirements.",
    },
    {
        question: "What happens if I'm not sure what I need?",
        answer:
            "That's completely fine. You don't need to know the technical details before getting in touch. Tell us about your business and what you'd like the website to achieve, and we'll help work out the most suitable approach.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
            <div className="mx-auto w-full max-w-5xl px-10 py-20 md:px-20">

                <div className="mb-12 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                        FAQ
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-zinc-700">
                        Everything you need to know before getting started.
                    </p>
                </div>

                <div className="divide-y divide-zinc-400 border-y border-zinc-400">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={faq.question}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-semibold text-zinc-900 md:text-xl">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${isOpen
                                        ? "grid-rows-[1fr] pb-6"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="max-w-3xl leading-7 text-zinc-700">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}