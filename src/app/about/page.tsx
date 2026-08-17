import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-20 md:py-32">
                    <div className="max-w-4xl">

                        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
                            About Mugz.Dev
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Websites and software
                            <span className="block text-zinc-300">
                                built with purpose.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                            Mugz.Dev helps businesses build modern websites, applications
                            and internal software designed around the way they actually work.
                        </p>

                    </div>
                </div>
            </section>


            {/* About Me */}
            <section className="bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
                <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:px-20 md:py-28">

                    <div>
                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Behind Mugz.Dev
                        </p>

                        <h2 className="text-3xl font-bold md:text-4xl">
                            The lead developer behind the work.
                        </h2>
                    </div>

                    <div className="space-y-5 text-lg leading-8 text-zinc-700">
                        <p>
                            I&apos;m Yusaf, a software engineer with experience building websites,
                            applications and internal management software for businesses.
                        </p>

                        <p>
                            I&apos;ve previously worked with an advertising agency, developing internal
                            software used within the business alongside websites and applications
                            created for clients.
                        </p>

                        <p>
                            That experience has given me exposure to both sides of software development —
                            creating customer-facing products that need to look professional and perform
                            well, and building internal systems designed to solve real operational problems.
                        </p>
                    </div>

                </div>
            </section>


            {/* Why Mugz.Dev */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -left-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="max-w-3xl">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-teal-400">
                            Why Mugz.Dev?
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Software should fit the business.
                            <span className="block text-zinc-400">
                                Not the other way around.
                            </span>
                        </h2>

                    </div>

                    <div className="mt-10 max-w-4xl space-y-5 text-lg leading-8 text-zinc-300">

                        <p>
                            Businesses are often left choosing between basic,
                            one-size-fits-all websites or expensive solutions containing
                            far more than they actually need.
                        </p>

                        <p>
                            Mugz.Dev was created to offer a more straightforward approach:
                            understand what the business is trying to achieve first, then
                            build the right solution around it.
                        </p>

                        <p>
                            That could mean a professional website that gives customers
                            confidence in your business, or something more advanced such as
                            a booking platform, management system, customer portal or custom
                            internal application.
                        </p>

                        <p className="font-semibold text-white">
                            No unnecessary complexity. No one-size-fits-all solution.
                            Just software built around what your business actually needs.
                        </p>

                    </div>

                </div>
            </section>


            {/* Approach */}
            <section className="bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-28">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Our Approach
                        </p>

                        <h2 className="text-3xl font-bold md:text-5xl">
                            Built around your business.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-600">
                            Every business works differently. The technology behind it
                            should reflect that.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-3">

                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
                            <div className="mb-5 text-3xl font-bold text-purple-600">
                                01
                            </div>

                            <h3 className="text-xl font-bold">
                                Purpose-built
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Solutions are designed around your requirements rather than
                                forcing your business into a generic template.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
                            <div className="mb-5 text-3xl font-bold text-teal-600">
                                02
                            </div>

                            <h3 className="text-xl font-bold">
                                Modern development
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Fast, responsive and maintainable websites and applications
                                built using modern technologies and development practices.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
                            <div className="mb-5 text-3xl font-bold text-purple-600">
                                03
                            </div>

                            <h3 className="text-xl font-bold">
                                Direct communication
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                You communicate directly with the person designing and
                                developing your project, keeping the process simple and clear.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* More Than Websites */}
            <section className="bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-20 md:py-28">

                    <div>

                        <p className="mb-3 font-semibold uppercase tracking-widest text-teal-700">
                            More Than Websites
                        </p>

                        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                            Digital solutions for more than just your homepage.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-700">
                            A website is often only one part of what a business needs.
                            Mugz.Dev can also build custom applications and internal tools
                            designed around specific business processes.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-zinc-700">
                            From managing staff and customers to automating repetitive work,
                            the goal is to use software to make the business easier to run.
                        </p>

                        <Link
                            href="/services"
                            className="mt-8 inline-flex rounded-full border border-zinc-500 bg-zinc-950 px-7 py-4 font-semibold text-white transition duration-300 hover:opacity-90 hover:bg-zinc-50 hover:text-black "
                        >
                            Explore our services →
                        </Link>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2">

                        {[
                            "Business websites",
                            "Internal management systems",
                            "Admin dashboards",
                            "Booking systems",
                            "Customer & staff portals",
                            "Database-driven applications",
                            "Email automation",
                            "Custom business workflows",
                        ].map((service) => (
                            <div
                                key={service}
                                className="rounded-xl border border-zinc-300 bg-white/70 p-5 font-medium shadow-sm backdrop-blur"
                            >
                                {service}
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:px-20">

                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                        Have Something In Mind?
                    </p>

                    <h2 className="text-3xl font-bold md:text-5xl">
                        Let&apos;s turn your idea into something useful.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                        Whether you already know exactly what you need or just have an idea
                        you&apos;d like to explore, tell us about your project and we&apos;ll
                        help work out the right approach.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                        <Link
                            href="/#quote"
                            className="rounded-full bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 transition-opacity hover:opacity-90"
                        >
                            Request a Free Quote
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-full px-7 py-4 font-semibold bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 transition-opacity hover:opacity-90"
                        >
                            View Services
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}