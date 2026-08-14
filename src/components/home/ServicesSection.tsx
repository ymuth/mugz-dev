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
        "Need something more advanced? We can build custom functionality around the way your business works, with pricing tailored to your requirements.",

    features: [
        "Additional pages and custom sections",
        "Database integration",
        "Admin dashboards and content management",
        "Secure user accounts and authentication",
        "Booking, enquiry and contact systems",
        "Automated email functionality",
        "Custom forms and business workflows",
        "Third-party service and API integrations",
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

                    <h1 className="text-5xl text-black mx-auto text-center font-bold w-fit pb-3 mb-10 ">What we offer</h1>

                    <div className="flex flex-col mx-auto max-w-7xl w-full my-auto">

                        <div className="grid flex-1 md:grid-cols-2 gap-15 w-full  text-black">


                            {cards.map((card, index) => (
                                <FadeIn key={card.title} delay={index * 0.3} delayMobile={0}>
                                    <div className="flex h-full flex-col">
                                        <div className="bg-white shadow-2xl h-full p-6 gap-5 flex flex-col rounded-2xl">

                                            <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold w-full">
                                                {card.title}
                                            </h2>

                                            <h3 className="lg:text-lg md:text-lg font-bold text-md w-full">
                                                {card.subtitle}
                                            </h3>

                                            <p className="lg:text-md md:text-md font-semibold text-md w-full">
                                                {card.description}
                                            </p>

                                            {/* <p>Including but not limited to:</p> */}
                                            <ul className="lg:text-md md:text-md text-md pl-5 space-y-2 list-disc w-full">
                                                {card.features.map((features, indexF) => (
                                                    <li key={indexF}>{features}</li>
                                                ))}
                                            </ul>

                                            <div className="mt-auto text-center italic font-semibold">
                                                <p>{card.price.initial}</p>
                                                <p>{card.price.monthly}</p>
                                            </div>

                                        </div>
                                    </div>
                                </FadeIn>
                            ))}

                        </div>

                        <ScrollLink
                            target="contact"
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