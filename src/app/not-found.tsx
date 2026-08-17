import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">

            <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl text-center">

                <p className="font-semibold uppercase tracking-widest text-purple-400">
                    404
                </p>

                <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                    This page doesn&apos;t exist.
                </h1>

                <p className="mt-5 text-lg text-zinc-300">
                    The page you&apos;re looking for may have been moved,
                    deleted or never existed.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-linear-to-r from-teal-400 via-teal-500 to-teal-600  px-7 py-4 font-semibold hover:bg-linear-to-l hover:opacity-90 focus:ring-teal-300 focus:ring-4 transition-opacity"
                >
                    Back to Home
                </Link>

            </div>
        </main>
    );
}