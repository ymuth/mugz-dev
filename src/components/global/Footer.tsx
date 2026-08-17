import Link from "next/link";
import ScrollLink from "../ui/ScrollLink";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {




    return (
        <footer className="bg-white relative z-10 flex-col align-middle py-2 px-4 mt-auto text-black">

            <div className="flex flex-row justify-between w-full mx-auto md:w-[50%] m-3">

                <div className="flex flex-col text-slate-700">
                    <h1 className="text-black font-semibold">Routes</h1>
                    <Link className="hover:underline" href="/">Home</Link>
                    <Link className="hover:underline" href="/about">About</Link>
                    <Link className="hover:underline line-through" href="/services">Services</Link>
                    <Link className="hover:underline line-through" href="/contact">Contact</Link>
                </div>

                <div className="flex flex-col text-slate-700">
                    <h1 className="text-black font-semibold">Resources</h1>
                    <ScrollLink className="hover:underline text-left" target="services">Services</ScrollLink>
                    <ScrollLink className="hover:underline text-left" target="explanation">How it Works</ScrollLink>
                    <ScrollLink className="hover:underline text-left" target="FAQ">FAQ</ScrollLink>
                    <ScrollLink className="hover:underline text-left" target="quote">Get Started</ScrollLink>
                </div>

                <div className="flex flex-col justify-between gap-3 text-center text-3xl">
                    {/* <a className="hover:text-blue-500" href={siteConfig.socials.facebook}><FaFacebookSquare /></a> */}
                    {/* <a className="hover:text-pink-600" href={siteConfig.socials.instagram}><FaInstagramSquare /></a> */}
                    <a
                        className="hover:text-red-500"
                        href={`mailto:${siteConfig.businessEmail}`}
                        aria-label={`Email ${siteConfig.businessName}`}
                        title={`Email ${siteConfig.businessName}`}
                    >
                        <MdEmail />
                        <span className="sr-only">Email {siteConfig.businessName}</span>
                    </a>

                </div>
            </div>
            <div className="flex flex-col w-full mx-auto m-2 text-center gap-1 font-light">
                <h1>© {new Date().getFullYear()} {siteConfig.businessName} - All rights reserved.</h1>
                {/* <Link href="/signin" className="font-light hover:font-normal hover:underline w-fit mx-auto">Admin sign in</Link> */}

            </div>


        </footer>
    )
}