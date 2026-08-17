"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
// import { useSession, signOut } from "@/lib/client";
// import { useRouter } from "next/navigation";


export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    // const router = useRouter();

    const NAV_LINKS = [
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact Us", href: "/contact" },
    ]

    // const { data: session, isPending } = useSession();

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 80);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, []);




    return (
        <nav className="relative z-20 text-black">

            {/* Desktop */}
            <div className={`flex w-full fixed z-20 items-center justify-between transition-all ${scrolled ? "py-2" : "py-6"}  px-6 bg-white`}>

                <div className={`font-extrabold transition-all ${scrolled ? "text-xl" : "text-2xl"}`}>
                    <Link className="uppercase flex items-center gap-2" href={"/"} onClick={() => setOpen(false)}>
                        <Image src="/icon.svg" alt={siteConfig.businessName +"logo"} className="h-8 w-8" />
                        <span>{siteConfig.businessName}</span>
                    </Link>
                </div>


                <div className="items-center gap-4  hidden md:flex">

                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-semibold hover:text-teal-400"
                        // onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>


                <button className="text-xl p-2 md:hidden flex ml-auto" onClick={() => setOpen(!open)}>
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile */}
            <div className="md:hidden">

                {open && (

                    <div className={`w-full fixed bg-white border-t transition-all ${scrolled ? "top-15" : "top-22"}`}>
                        <div className="flex flex-col p-4 gap-4 mr-auto">

                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-semibold hover:text-amber-400 focus:text-amber-400 mr-auto"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                        </div>
                    </div>

                )}

            </div>


        </nav>
    )
}