import FadeIn from "../ui/FadeIn"
import ScrollLink from "../ui/ScrollLink"


const cards = [{
    title: "Essentials",
    subtitle: "Everything you need for a professional online presence.",
    description:
        "A fast, modern website tailored to your business — built to make a strong first impression and help customers understand, trust and contact you.",

    features: [
        "Up to 3 professionally designed pages",
        "Fully responsive across mobile, tablet and desktop",
        "Custom design tailored to your brand",
        "Social media and contact integration",
        "SEO setup and optimisation",
        "Fast, reliable and performance-focused",
        "Hosting, deployment and ongoing maintenance included",
    ],

    price: {
        initial: "From £300",
        monthly: "+ £38/month",
    },
}, {
    title: "Custom Solutions",
    subtitle: "For businesses that need more than a standard website.",
    description:
        "Need something more advanced? We can build custom websites, applications and business functionality around the way your business works.",

    features: [
        "Additional pages and custom sections",
        "Database-driven functionality",
        "Admin dashboards and content management",
        "Secure customer and staff accounts",
        "Booking, enquiry and contact systems",
        "Automated emails and notifications",
        "Custom forms and business workflows",
        "Supported third-party integrations",
    ],

    price: {
        initial: "Custom Quote",
        monthly: "Based on requirements",
    },
}]

export default function ServicesSection() {


    return (

        <div>
            <div className="relative w-full flex flex-col bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300">

                <div className="p-10 md:p-20 max-w-7xl w-full mx-auto">

                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Services
                        </p>

                        <h2 className="text-4xl font-bold text-black md:text-5xl">
                            What we offer
                        </h2>

                        <p className="mt-5 text-lg text-zinc-700">
                            Flexible website solutions built around your business,
                            whether you need a strong online presence or something more advanced.
                        </p>
                    </div>



                    <div className="flex flex-col mx-auto max-w-7xl w-full my-auto">

                        <div className="grid flex-1 w-full gap-10 text-black md:grid-cols-2">

                            {cards.map((card, index) => {
                                const isCustom = card.title === "Custom Solutions";

                                return (
                                    <FadeIn
                                        key={card.title}
                                        delay={index * 0.3}
                                        delayMobile={0}
                                    >
                                        <div className="flex h-full flex-col">
                                            <div
                                                className={`flex h-full flex-col rounded-2xl border p-8 shadow-xl ${isCustom
                                                    ? "border-zinc-700 bg-zinc-950 text-white"
                                                    : "border-zinc-300 bg-white text-black"
                                                    }`}
                                            >

                                                <p
                                                    className={`mb-2 text-sm font-semibold uppercase tracking-widest ${isCustom
                                                        ? "text-teal-400"
                                                        : "text-purple-600"
                                                        }`}
                                                >
                                                    {card.title}
                                                </p>

                                                <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">
                                                    {card.subtitle}
                                                </h3>

                                                <p
                                                    className={`mt-4 leading-7 ${isCustom
                                                        ? "text-zinc-300"
                                                        : "text-zinc-600"
                                                        }`}
                                                >
                                                    {card.description}
                                                </p>

                                                <ul className="mt-8 space-y-3">
                                                    {card.features.map((feature) => (
                                                        <li
                                                            key={feature}
                                                            className={`flex gap-3 ${isCustom
                                                                ? "text-zinc-300"
                                                                : "text-zinc-700"
                                                                }`}
                                                        >
                                                            <span
                                                                className={`font-bold ${isCustom
                                                                    ? "text-purple-400"
                                                                    : "text-teal-600"
                                                                    }`}
                                                            >
                                                                ✓
                                                            </span>

                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mt-auto pt-10">
                                                    <div
                                                        className={`border-t pt-6 ${isCustom
                                                            ? "border-zinc-700"
                                                            : "border-zinc-200"
                                                            }`}
                                                    >
                                                        <p className="text-3xl font-bold">
                                                            {card.price.initial}
                                                        </p>

                                                        <p
                                                            className={`mt-1 font-semibold ${isCustom
                                                                ? "text-zinc-300"
                                                                : "text-zinc-700"
                                                                }`}
                                                        >
                                                            {card.price.monthly}
                                                        </p>

                                                        {card.title === "Essentials" && (
                                                            <p className="mt-2 text-sm text-zinc-500">
                                                                Hosting, maintenance and support included.
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </FadeIn>
                                );
                            })}

                        </div>

                        <ScrollLink
                            target="quote"
                            className="p-4 shadow-lg mx-auto text-center mt-10 font-semibold text-white rounded-full bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 transition-opacity hover:opacity-90"
                        >
                            Get a Free Quote!
                        </ScrollLink>


                    </div>
                </div>

            </div>
        </div>
    )
}