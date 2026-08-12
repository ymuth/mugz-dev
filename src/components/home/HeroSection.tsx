import Image from "next/image"
import Link from "next/link"

export default function Hepurplection() {

    const title = "Mugz.Dev";
    const description = "Modern, responsive websites and web applications built for businesses that want a fast, professional online presence.";

    return (
        <div>

            {/* Background */}
            < div className="fixed inset-0 -z-10 bg-linear-to-br from-amber-600 via-slate-500 to-purple-700" />

            {/* Hero section */}
            < div className="min-h-dvh max-w-7xl mx-auto w-full flex flex-row justify-between" >

                {/* Slogan + services link */}
                <div className=" max-w-4xl flex flex-col my-auto text-white p-5 m-3">

                    <h1 className="lg:text-9xl md:text-7xl text-5xl text-shadow-lg font-bold border-b-3 p-5 pb-8">
                        {title}
                    </h1>
                    <h2 className="lg:text-3xl md:text-2xl  text-shadow-lg text-xl p-5 text-center">
                        {description}
                    </h2>
                    <div className="w-full font-semibold flex justify-center gap-4 text-center">
                        <Link
                            href="#services"
                            className="p-4  shadow-lg font-semibold text-white rounded-full bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 transition-opacity hover:opacity-90"
                        >
                            What we Offer
                        </Link>
                        <Link
                            href="#services"
                            className="p-4  shadow-lg font-semibold text-white rounded-full bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 transition-opacity hover:opacity-90"
                        >
                            Get a Free Quote!
                        </Link>
                    </div>

                </div>

                {/* scroll wheel (desktop) */}
                <div className="hidden md:flex m-auto w-full flex-col items-center gap-2 text-white animate-bounce">
                    <span className="text-sm tracking-widest uppercase text-center ">
                        <h1>Scroll</h1>
                    </span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                        <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                </div>



            </div >

        </div>
    )
}