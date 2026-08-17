import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for Mugz.Dev explaining how personal information submitted through our website is collected, used and protected.",

    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-20 md:py-28">

                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                        Privacy
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                        This privacy policy explains what personal information
                        Mugz.Dev collects through this website, why we use it
                        and how it is handled.
                    </p>

                    <p className="mt-4 text-sm text-zinc-400">
                        Last updated: 17 August 2026
                    </p>

                </div>
            </section>


            {/* Policy */}
            <section className="bg-white text-black">
                <div className="mx-auto max-w-4xl px-6 py-20 md:px-20 md:py-24">

                    <div className="space-y-12 leading-8 text-zinc-700">

                        {/* Who we are */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Who we are
                            </h2>

                            <div className="mt-4 space-y-4">
                                <p>
                                    Mugz.Dev provides web development, software
                                    development and related digital services.
                                </p>

                                <p>
                                    For the personal information described in
                                    this policy, Mugz.Dev is responsible for
                                    deciding how and why that information is
                                    used.
                                </p>

                                <p>
                                    If you have any questions about this policy
                                    or how your personal information is handled,
                                    you can contact us at{" "}
                                    <a
                                        href="mailto:hello@mugz.dev"
                                        className="font-semibold text-purple-700 hover:underline"
                                    >
                                        hello@mugz.dev
                                    </a>.
                                </p>
                            </div>
                        </section>


                        {/* Data collected */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Information we collect
                            </h2>

                            <p className="mt-4">
                                We may collect information that you provide
                                directly to us when using our website,
                                including:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-6">
                                <li>Your name</li>
                                <li>Your email address</li>
                                <li>Your phone number, where provided</li>
                                <li>Your business name, where provided</li>
                                <li>
                                    Information about your website or business
                                </li>
                                <li>
                                    Details about the services or software you
                                    are interested in
                                </li>
                                <li>Your approximate project budget</li>
                                <li>
                                    Messages and other information you choose to
                                    submit through our forms or by email
                                </li>
                            </ul>
                        </section>


                        {/* Why */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                How we use your information
                            </h2>

                            <p className="mt-4">
                                We use the information you provide only where
                                necessary to operate Mugz.Dev and communicate
                                with you. This may include:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-6">
                                <li>
                                    Responding to questions and general
                                    enquiries
                                </li>
                                <li>
                                    Reviewing and responding to quote requests
                                </li>
                                <li>
                                    Discussing your requirements and potential
                                    projects
                                </li>
                                <li>
                                    Providing services where you become a client
                                </li>
                                <li>
                                    Maintaining records of relevant
                                    communication
                                </li>
                                <li>
                                    Protecting the website and its forms from
                                    misuse, spam and abuse
                                </li>
                            </ul>

                            <p className="mt-4">
                                We do not sell your personal information.
                            </p>

                            <p className="mt-4">
                                We do not use information submitted through our
                                enquiry or quote forms for unrelated marketing.
                            </p>
                        </section>


                        {/* Lawful basis */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Our lawful basis for using your information
                            </h2>

                            <div className="mt-4 space-y-4">
                                <p>
                                    UK data protection law requires us to have a
                                    lawful reason for using personal
                                    information.
                                </p>

                                <p>
                                    Where you contact us about a potential
                                    project or request a quote, we may process
                                    your information because it is necessary to
                                    take steps at your request before entering
                                    into a contract.
                                </p>

                                <p>
                                    For general enquiries, communication,
                                    website security and the ordinary
                                    administration of Mugz.Dev, we may rely on
                                    our legitimate interests in operating the
                                    business and responding to people who
                                    contact us.
                                </p>
                            </div>
                        </section>


                        {/* Sharing */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Who we share information with
                            </h2>

                            <div className="mt-4 space-y-4">
                                <p>
                                    We do not sell or rent your personal
                                    information to third parties.
                                </p>

                                <p>
                                    We may use trusted service providers where
                                    they are necessary to operate the website
                                    and deliver our services. This currently
                                    includes services used for website hosting
                                    and email delivery, such as Vercel and
                                    Resend.
                                </p>

                                <p>
                                    These providers may process information on
                                    our behalf as part of providing their
                                    services.
                                </p>

                                <p>
                                    We may also disclose information where
                                    required by law or where necessary to
                                    protect our legal rights.
                                </p>
                            </div>
                        </section>


                        {/* International */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                International processing
                            </h2>

                            <p className="mt-4">
                                Some of the technology providers we use may
                                process or store information outside the United
                                Kingdom. Where this happens, we rely on the
                                protections and safeguards provided by those
                                service providers in accordance with applicable
                                data protection requirements.
                            </p>
                        </section>


                        {/* Retention */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                How long we keep your information
                            </h2>

                            <div className="mt-4 space-y-4">
                                <p>
                                    We keep personal information only for as
                                    long as reasonably necessary for the purpose
                                    it was collected.
                                </p>

                                <p>
                                    Enquiry and quote information may be kept
                                    while we respond to you and for a reasonable
                                    period afterwards in case further
                                    communication is required.
                                </p>

                                <p>
                                    If you become a client, relevant information
                                    may be retained for the duration of our
                                    working relationship and for any additional
                                    period required for legal, accounting or
                                    business record-keeping purposes.
                                </p>

                                <p>
                                    Information that is no longer required will
                                    be deleted or securely disposed of where
                                    appropriate.
                                </p>
                            </div>
                        </section>


                        {/* Rights */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Your data protection rights
                            </h2>

                            <p className="mt-4">
                                Depending on the circumstances, UK data
                                protection law may give you rights relating to
                                your personal information, including the right
                                to:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-6">
                                <li>
                                    Ask for access to personal information we
                                    hold about you
                                </li>
                                <li>
                                    Ask us to correct inaccurate or incomplete
                                    information
                                </li>
                                <li>
                                    Ask us to delete your personal information
                                    in certain circumstances
                                </li>
                                <li>
                                    Ask us to restrict how your information is
                                    used in certain circumstances
                                </li>
                                <li>
                                    Object to certain uses of your personal
                                    information
                                </li>
                            </ul>

                            <p className="mt-4">
                                To make a request, email{" "}
                                <a
                                    href="mailto:hello@mugz.dev"
                                    className="font-semibold text-purple-700 hover:underline"
                                >
                                    hello@mugz.dev
                                </a>.
                            </p>
                        </section>


                        {/* Cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Cookies and analytics
                            </h2>

                            <p className="mt-4">
                                Mugz.Dev does not use personal
                                information submitted through its forms for
                                advertising or behavioural profiling.
                            </p>

                            {/* <p className="mt-4">
                                If we introduce non-essential analytics,
                                advertising cookies or similar tracking
                                technologies in the future, this policy and any
                                required cookie controls will be updated before
                                those technologies are used.
                            </p> */}
                        </section>


                        {/* Security */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Keeping your information secure
                            </h2>

                            <p className="mt-4">
                                We take reasonable technical and organisational
                                measures to protect personal information and
                                limit access to it. However, no method of
                                transmitting or storing information online can
                                be guaranteed to be completely secure.
                            </p>
                        </section>


                        {/* Complaints */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Questions or complaints
                            </h2>

                            <div className="mt-4 space-y-4">
                                <p>
                                    If you have a concern about how Mugz.Dev
                                    handles your personal information, please
                                    contact us first at{" "}
                                    <a
                                        href="mailto:hello@mugz.dev"
                                        className="font-semibold text-purple-700 hover:underline"
                                    >
                                        hello@mugz.dev
                                    </a>.
                                </p>

                                <p>
                                    You also have the right to raise a complaint
                                    with the UK Information Commissioner&apos;s
                                    Office (ICO).
                                </p>

                                <a
                                    href="https://ico.org.uk/make-a-complaint/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex font-semibold text-purple-700 hover:underline"
                                >
                                    Visit the Information Commissioner&apos;s
                                    Office →
                                </a>
                            </div>
                        </section>


                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-950">
                                Changes to this policy
                            </h2>

                            <p className="mt-4">
                                We may update this privacy policy if the way we
                                collect or use personal information changes.
                                The latest version will always be published on
                                this page.
                            </p>
                        </section>

                    </div>


                    {/* Back */}
                    <div className="mt-16 border-t border-zinc-200 pt-8">
                        <Link
                            href="/contact"
                            className="font-semibold text-purple-700 hover:underline"
                        >
                            Have a question? Contact us →
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}