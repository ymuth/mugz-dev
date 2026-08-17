import Link from "next/link";

const websiteFeatures = {
    essentials: [
        "Up to 3 professionally designed pages",
        "Responsive across mobile, tablet and desktop",
        "Custom design tailored to your business",
        "Contact and social media integration",
        "SEO setup and optimisation",
        "Fast, performance-focused development",
        "Hosting, deployment and maintenance included",
    ],

    custom: [
        "Additional pages and custom sections",
        "Booking and enquiry systems",
        "Database-driven functionality",
        "Customer and staff accounts",
        "Admin dashboards",
        "Content management",
        "Automated emails and notifications",
        "Third-party integrations",
    ],
};

const softwareServices = [
    {
        title: "Internal Management Systems",
        description:
            "Custom systems designed around the way your business operates, helping staff manage information, tasks and day-to-day processes from one place.",
    },
    {
        title: "Admin Dashboards",
        description:
            "Secure dashboards for managing customers, content, bookings, jobs, users, products, tasks or other business data.",
    },
    {
        title: "Customer & Staff Portals",
        description:
            "Secure areas where customers or staff can access the information, services and tools relevant to them.",
    },
    {
        title: "Tracking Systems",
        description:
            "Track jobs, vehicles, stock, tasks, projects, statuses or other information that would otherwise live across spreadsheets and paperwork.",
    },
    {
        title: "Database Applications",
        description:
            "Applications that securely store, organise and manage business information while making it easy for staff to access and update.",
    },
    {
        title: "Custom Workflows",
        description:
            "Software built around a specific process in your business, reducing repetitive work and helping everything stay organised.",
    },
];

const automationServices = [
    {
        title: "Automated Emails",
        description:
            "Send confirmations, reminders, notifications and follow-ups automatically based on customer or staff actions.",
    },
    {
        title: "Booking Automation",
        description:
            "Connect bookings with confirmations, reminders, internal notifications and management tools.",
    },
    {
        title: "Business Notifications",
        description:
            "Automatically notify staff or customers when important events, jobs, bookings or statuses change.",
    },
    {
        title: "Third-Party Integrations",
        description:
            "Connect websites and internal systems with supported external services, APIs and business tools.",
    },
    {
        title: "Scheduled Processes",
        description:
            "Run recurring tasks such as reminders, reports, status checks and other scheduled workflows.",
    },
    {
        title: "Form & Data Workflows",
        description:
            "Turn submitted forms into database records, emails, tasks, notifications or other automated actions.",
    },
];

const exampleSolutions = [
    {
        title: "Vehicle Management System",
        description:
            "Track vehicles, keys, tasks, staff assignments, servicing, status and other operational information.",
    },
    {
        title: "Booking Platform",
        description:
            "Allow customers to book online while giving staff an organised way to manage appointments, confirmations and reminders.",
    },
    {
        title: "Customer Portal",
        description:
            "Give customers secure access to bookings, documents, account information, project updates or other services.",
    },
    {
        title: "Business Dashboard",
        description:
            "Bring important information into one place so staff can manage customers, jobs, enquiries, users or business activity.",
    },
    {
        title: "Business Website",
        description:
            "A professional, responsive website designed to represent your business properly and turn visitors into enquiries.",
    },
    {
        title: "Automated Workflow",
        description:
            "Replace repetitive manual processes by connecting forms, databases, email and other business systems.",
    },
];

export default function ServicesPage() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-20 md:py-32">
                    <div className="max-w-4xl">

                        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
                            Services
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Digital solutions built
                            <span className="block text-zinc-300">
                                around your business.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                            From professional websites to custom internal software,
                            Mugz.Dev builds practical digital solutions designed around
                            what your business actually needs.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/#quote"
                                className="rounded-full bg-linear-to-r from-purple-500 to-purple-600 px-7 py-4 text-center font-semibold text-white shadow-lg transition hover:opacity-90"
                            >
                                Request a Free Quote
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-zinc-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
                            >
                                Contact Us
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            {/* Websites */}
            <section className="bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Websites
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            A professional presence built for your business.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-700">
                            Whether you need a straightforward business website or something
                            with more advanced functionality, we can build around your
                            requirements.
                        </p>

                    </div>


                    <div className="grid items-stretch gap-8 md:grid-cols-2">

                        {/* Essentials */}
                        <div className="flex h-full flex-col rounded-2xl border border-zinc-300 bg-white p-8 shadow-lg">

                            <div>
                                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-600">
                                    Essentials
                                </p>

                                <h3 className="text-2xl font-bold">
                                    Everything you need to get online professionally.
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-600">
                                    Ideal for businesses that need a fast, modern and
                                    professional website that clearly represents what they do
                                    and gives customers an easy way to get in touch.
                                </p>
                            </div>

                            <ul className="mt-8 space-y-3">
                                {websiteFeatures.essentials.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-3 text-zinc-700"
                                    >
                                        <span className="font-bold text-teal-600">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-10">
                                <div className="border-t border-zinc-200 pt-6">
                                    <p className="text-3xl font-bold">
                                        From £300
                                    </p>

                                    <p className="mt-1 font-semibold text-zinc-700">
                                        + from £38/month
                                    </p>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        Hosting, maintenance and support included.
                                    </p>
                                </div>
                            </div>

                        </div>


                        {/* Custom */}
                        <div className="flex h-full flex-col rounded-2xl border border-zinc-700 bg-zinc-950 p-8 text-white shadow-lg">

                            <div>
                                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                                    Custom Websites
                                </p>

                                <h3 className="text-2xl font-bold">
                                    More than a standard website.
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-300">
                                    For businesses that need additional functionality,
                                    custom systems or a website that connects to the way the
                                    business operates behind the scenes.
                                </p>
                            </div>

                            <ul className="mt-8 space-y-3">
                                {websiteFeatures.custom.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-3 text-zinc-300"
                                    >
                                        <span className="font-bold text-purple-400">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-10">
                                <div className="border-t border-zinc-700 pt-6">
                                    <p className="text-3xl font-bold">
                                        Custom Quote
                                    </p>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        Pricing based on features, scope and requirements.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* Business Software */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="max-w-4xl">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-teal-400">
                            Custom Business Software
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Software designed around the way you work.
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                            Sometimes an off-the-shelf platform doesn&apos;t fit the way a
                            business actually operates. Custom software can bring your
                            processes together, reduce repetitive admin and make important
                            information easier to manage.
                        </p>

                    </div>


                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {softwareServices.map((service) => (
                            <div
                                key={service.title}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-7"
                            >
                                <h3 className="text-xl font-bold">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-zinc-400">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>


                    <div className="mt-14 max-w-4xl border-l-2 border-purple-500 pl-6">

                        <p className="text-lg leading-8 text-zinc-300">
                            Whether you&apos;re trying to replace spreadsheets, keep track
                            of staff and jobs, organise customer information or simplify a
                            manual process, the system can be designed around the workflow
                            your business already uses.
                        </p>

                    </div>

                </div>
            </section>


            {/* Automation */}
            <section className="bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Automation & Integrations
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Less repetitive work. More useful automation.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-600">
                            Not every problem needs an entirely new system. Sometimes the
                            biggest improvement comes from automating repetitive processes and
                            connecting the tools your business already uses where supported.
                        </p>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {automationServices.map((service) => (
                            <div
                                key={service.title}
                                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm"
                            >
                                <h3 className="text-xl font-bold">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-zinc-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* Example Solutions */}
            <section className="bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="mb-14 max-w-4xl">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-teal-700">
                            What Could We Build?
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Practical solutions to real business problems.
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
                            Every project is different, but these are some examples of the
                            kinds of systems and applications that can be built around your
                            business.
                        </p>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {exampleSolutions.map((solution) => (
                            <div
                                key={solution.title}
                                className="rounded-2xl border border-zinc-300 bg-white/80 p-7 shadow-sm backdrop-blur"
                            >
                                <h3 className="text-xl font-bold">
                                    {solution.title}
                                </h3>

                                <p className="mt-3 leading-7 text-zinc-600">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* Pricing */}
            <section className="bg-zinc-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="mx-auto max-w-4xl text-center">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                            Pricing
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Clear pricing where possible.
                            <span className="block text-zinc-400">
                                Custom quotes where necessary.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                            Straightforward websites can be priced clearly from the start.
                            More advanced applications are quoted around the actual work
                            involved, so you only pay for what your project needs.
                        </p>

                    </div>


                    <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                                Essentials
                            </p>

                            <p className="mt-3 text-3xl font-bold">
                                From £300
                            </p>

                            <p className="mt-1 font-medium text-zinc-300">
                                + £38/month
                            </p>

                            <p className="mt-4 leading-7 text-zinc-400">
                                For straightforward professional business websites.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
                                Custom Websites
                            </p>

                            <p className="mt-3 text-3xl font-bold">
                                Custom Quote
                            </p>

                            <p className="mt-4 leading-7 text-zinc-400">
                                Based on pages, functionality, integrations and complexity.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                                Business Software
                            </p>

                            <p className="mt-3 text-3xl font-bold">
                                Custom Quote
                            </p>

                            <p className="mt-4 leading-7 text-zinc-400">
                                Based on the system, workflows, users, data and integrations required.
                            </p>
                        </div>

                    </div>


                    <p className="mx-auto mt-10 max-w-3xl text-center text-zinc-400">
                        We&apos;ll discuss your requirements first and provide a clear quote
                        before development begins.
                    </p>

                </div>
            </section>


            {/* CTA */}
            <section className="relative overflow-hidden bg-white text-black">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:px-20">

                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                        Not Sure What You Need?
                    </p>

                    <h2 className="text-3xl font-bold md:text-5xl">
                        Tell us the problem.
                        <span className="block text-zinc-600">
                            We&apos;ll help work out the solution.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                        You don&apos;t need to know exactly what technology or system you
                        need. Tell us how your business currently works, what&apos;s slowing
                        you down or what you&apos;d like to improve.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                        <Link
                            href="/#quote"
                            className="rounded-full bg-linear-to-r from-purple-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
                        >
                            Request a Free Quote
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-zinc-400 px-7 py-4 font-semibold text-zinc-900 transition hover:bg-zinc-950 hover:text-white"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}