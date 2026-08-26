import Image from "next/image";
import Link from "next/link";
import HeroImage from "@public/images/apex-performance.png";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(900px,100svh)] overflow-hidden bg-[#0b0b0e] pt-24 text-white">
      <Image
        src={HeroImage}
        alt="Apex Performance website concept showing a mechanic working under the bonnet of a dark car in a workshop"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="hero-image-overlay absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="site-shell relative z-10 grid w-full items-end gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20 lg:py-24">
        <div className="max-w-5xl">
          <p className="eyebrow mb-7 text-teal-300">Independent web &amp; software studio · Sheffield</p>
          <h1 className="display-heading max-w-[13ch] text-[clamp(3.35rem,8.1vw,7.4rem)] leading-[0.91] tracking-[-0.065em]">
            Websites that make your business look the part.
          </h1>
          <div className="mt-8 grid max-w-4xl gap-8 border-t border-white/20 pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Custom websites and business software built around how your business actually works.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button button-light" href="/#work">View our work</Link>
              <Link className="button button-ghost" href="/#quote">Start a project</Link>
            </div>
          </div>
        </div>
        <aside className="hidden border-l border-white/20 pl-6 lg:block" aria-label="Studio capabilities">
          <span className="mb-5 block size-2 bg-teal-300" />
          <p className="text-sm leading-6 text-zinc-400">Websites / web applications / internal systems / automation</p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Built for UK businesses</p>
        </aside>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-linear-to-r from-purple-500 via-white/20 to-teal-400" />
    </section>
  );
}
