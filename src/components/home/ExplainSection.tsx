// 01  Tell us what you need
//     Send us a few details about your business and project.

// 02  We plan your website
//     We'll discuss your requirements, design and provide a clear quote.

// 03  We build it
//     Your website is designed, developed and tested across devices.

// 04  You're live
//     We deploy your website and take care of hosting and ongoing maintenance.

export default function ExplainSection() {
    const steps = [
        {
            number: "01",
            title: "Tell us what you need",
            description:
                "Start by telling us about your business, what you need from your website, and any ideas or features you already have in mind.",
        },
        {
            number: "02",
            title: "We plan your website",
            description:
                "We'll go through your requirements, agree on the scope, pages, features and design direction, then provide a clear quote before any work begins.",
        },
        {
            number: "03",
            title: "We design and build it",
            description:
                "Once everything is agreed, we'll design and develop your website around your business, keeping you updated and giving you the opportunity to review the progress.",
        },
        {
            number: "04",
            title: "Review, launch and support",
            description:
                "We'll make any final agreed changes, test the website across different devices, launch it, and continue to handle hosting, maintenance and support where included.",
        },
    ];

    return (
        <section className="relative w-full bg-zinc-950 text-white">
            <div className="mx-auto w-full max-w-7xl px-10 py-20 md:px-20">

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                        How it works
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        From idea to launch
                    </h2>

                    <p className="mt-5 text-lg text-zinc-300">
                        A straightforward process from your first enquiry to a finished website,
                        with clear communication throughout.
                    </p>
                </div>

                <div className={`relative grid gap-10 md:grid-cols-${steps.length}`}>

                    {/* Desktop connecting line */}
                    <div className="absolute left-0 right-0 top-8 hidden h-px bg-zinc-700 md:block" />

                    {steps.map((step, index) => (
                        <div
                            key={index + 1}
                            className="relative flex flex-col"
                        >
                            <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full border-2 border-purple-500 bg-zinc-950 text-lg font-bold">
                                {index + 1}
                            </div>

                            <h3 className="mb-3 text-xl font-bold">
                                {step.title}
                            </h3>

                            <p className="leading-7 text-zinc-300">
                                {step.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}