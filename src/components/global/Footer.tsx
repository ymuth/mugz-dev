import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
    return (
        <footer className="relative z-10 mt-auto bg-white text-black">

            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-20">

                <div className="
                    grid
                    gap-10
                    sm:grid-cols-2
                    lg:grid-cols-[2fr_1fr_1fr_1.2fr]
                    lg:gap-12
                ">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold">
                            Mugz.Dev
                        </h2>

                        <p className="mt-4 max-w-md leading-7 text-zinc-600">
                            Sheffield-based web development and custom software for businesses.
                            Professional websites, applications and internal systems built
                            around the way you work.
                        </p>
                    </div>


                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                            Company
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3 text-zinc-600">
                            <Link
                                href="/"
                                className="w-fit transition hover:text-black"
                            >
                                Home
                            </Link>

                            <Link
                                href="/services"
                                className="w-fit transition hover:text-black"
                            >
                                Services
                            </Link>

                            <Link
                                href="/about"
                                className="w-fit transition hover:text-black"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                className="w-fit transition hover:text-black"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>


                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                            Resources
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3 text-zinc-600">
                            <Link
                                href="/#services"
                                className="w-fit transition hover:text-black"
                            >
                                Services
                            </Link>

                            <Link
                                href="/#explanation"
                                className="w-fit transition hover:text-black"
                            >
                                How it Works
                            </Link>

                            <Link
                                href="/#faq"
                                className="w-fit transition hover:text-black"
                            >
                                FAQ
                            </Link>

                            <Link
                                href="/#quote"
                                className="w-fit transition hover:text-black"
                            >
                                Get Started
                            </Link>
                        </nav>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                            Contact
                        </h3>

                        <div className="mt-5">
                            <a
                                href="mailto:hello@mugz.dev"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-zinc-600
                                    transition
                                    hover:text-black
                                "
                            >
                                <MdEmail className="text-xl" />
                                <span>hello@mugz.dev</span>
                            </a>
                        </div>

                        <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900">
                            Privacy Policy
                        </Link>
                    </div>



                </div>


                {/* Bottom */}
                <div className="
                    mt-12
                    border-t
                    border-zinc-200
                    pt-6
                    text-center
                    text-sm
                    text-zinc-500
                    md:text-left
                ">
                    © {new Date().getFullYear()} {siteConfig.businessName} - All rights reserved.
                </div>

            </div>

        </footer>
    );
}