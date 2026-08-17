import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-20 md:py-32">
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
                            Contact
                        </p>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Let&apos;s talk.
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                            Have a question, need help with something existing, or just want
                            to discuss an idea? Send us a message and we&apos;ll get back to you.
                        </p>

                    </div>
                </div>
            </section>


            {/* Contact */}
            <section className="bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300 text-black">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-20 md:py-28">

                    {/* Contact information */}
                    <div>
                        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-600">
                            Get In Touch
                        </p>

                        <h2 className="text-3xl font-bold md:text-4xl">
                            We&apos;re here to help.
                        </h2>

                        <p className="mt-5 max-w-lg leading-7 text-zinc-700">
                            For general enquiries, questions about our services, existing
                            projects or anything else, you can send us a message using the
                            form or contact us directly by email.
                        </p>


                        {/* Email card */}
                        <div className="mt-10">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                                Email
                            </p>

                            <a
                                href="mailto:hello@mugz.dev"
                                className="text-xl font-semibold text-zinc-950 transition hover:text-purple-600"
                            >
                                hello@mugz.dev
                            </a>
                        </div>


                        {/* Quote CTA */}
                        <div className="mt-10 rounded-2xl border border-zinc-300 bg-white/70 p-6 shadow-sm backdrop-blur">
                            <h3 className="text-lg font-bold">
                                Looking for a quote?
                            </h3>

                            <p className="mt-2 leading-7 text-zinc-600">
                                If you already have a project in mind, our quote form gives
                                you space to tell us what you need so we can understand the
                                project before getting back to you.
                            </p>

                            <Link
                                href="/#quote"
                                className="mt-5 inline-flex font-semibold text-purple-700 transition hover:text-purple-900"
                            >
                                Request a Free Quote →
                            </Link>
                        </div>


                        {/* Socials later */}
                        {/* <div className="mt-10">
                            <p className="text-sm leading-6 text-zinc-500">
                                More ways to get in touch will be added here as Mugz.Dev grows.
                            </p>
                        </div> */}

                    </div>


                    {/* General contact form */}
                    <ContactForm />

                </div>
            </section>


            {/* Bottom CTA */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:px-20 md:py-24">

                    <p className="mb-3 font-semibold uppercase tracking-widest text-teal-400">
                        Starting A Project?
                    </p>

                    <h2 className="text-3xl font-bold md:text-5xl">
                        Tell us what you&apos;re looking to build.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                        From professional websites to custom business applications and
                        internal software, we can help work out the right solution.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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