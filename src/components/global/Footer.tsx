import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0e] text-white">
      <div className="site-shell py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="display-heading text-2xl font-bold uppercase tracking-[-0.04em]">{siteConfig.businessName}</Link>
            <p className="mt-5 max-w-lg leading-7 text-zinc-400">Professional websites and custom software for businesses in Sheffield, South Yorkshire and across the UK.</p>
            <a href={`mailto:${siteConfig.businessEmail}`} className="mt-7 inline-block border-b border-teal-300 pb-1 text-lg font-semibold transition hover:text-teal-300">{siteConfig.businessEmail}</a>
          </div>
          <div>
            <p className="eyebrow text-zinc-500">Navigate</p>
            <nav className="mt-5 flex flex-col items-start gap-3 text-zinc-300">
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/#work" className="hover:text-white">Selected work</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="eyebrow text-zinc-500">Start here</p>
            <nav className="mt-5 flex flex-col items-start gap-3 text-zinc-300">
              <Link href="/#quote" className="hover:text-white">Start a project</Link>
              <Link href="/#faq" className="hover:text-white">FAQ</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </nav>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.12em] text-zinc-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.businessName}</span>
          <span>Web &amp; software studio · Sheffield</span>
        </div>
      </div>
    </footer>
  );
}
