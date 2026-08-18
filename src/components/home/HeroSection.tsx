import Image from "next/image"
import Hero from "@public/images/laptop-code.jpg"
import ScrollLink from "../ui/ScrollLink"

export default function HeroSection() {

    return (
        <div>

            {/* Background */}
            {/* < div className="fixed inset-0 -z-10 bg-radial-[at_50%_0%] from-fuchsia-900 to-violet-900" /> */}
            < div className="fixed inset-0 -z-10" >
                <Image
                    src={Hero}
                    alt="background"
                    fill
                    priority
                    placeholder="blur"
                    className="object-cover "
                />
            </div >
            <div className="-z-10 fixed inset-0 bg-radial from-black % to-transparent" />


            {/* Hero section */}
            < div className="min-h-dvh max-w-7xl mx-auto w-full flex" >

                {/* Slogan + services link */}
                <div className=" max-w-4xl flex flex-col m-auto text-white p-5 ">

                    <h1 className="lg:text-9xl md:text-7xl text-5xl text-shadow-lg font-bold border-b-3 p-5 pb-8 text-center">
                        Mugz.Dev
                    </h1>
                    <div className="p-5 text-center">
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-shadow-lg">
                            Built to Perform. Designed to Impress.
                        </h2>
                        <p className="lg:text-2xl md:text-xl text-lg text-shadow-lg">
                            Websites and apps made around your business.
                        </p>
                    </div>
                    <div className="w-full font-semibold flex md:flex-row flex-col flex-col justify-center gap-4 text-center">
                        <ScrollLink
                            target="quote"
                            className="px-7 py-4 shadow-lg font-semibold text-white rounded-full bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 transition-opacity hover:opacity-90"
                        >
                            Request a Free Quote
                        </ScrollLink>
                        <ScrollLink
                            target="services"
                            className="px-7 py-4 shadow-lg font-semibold text-white rounded-full bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 transition-opacity hover:opacity-90"
                        >
                            What we Offer
                        </ScrollLink>
                    </div>

                </div>





            </div >

        </div>
    )
}