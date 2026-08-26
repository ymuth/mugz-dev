"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? "border-zinc-200 bg-[#f8f6f2]/95 text-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur" : "border-white/15 bg-[#0b0b0e]/40 text-white backdrop-blur-sm"}`}>
      <div className="site-shell flex h-20 items-center justify-between gap-6 sm:h-24">
        <Link className="flex items-center gap-3" href="/" onClick={() => setOpen(false)} aria-label="Mugz.Dev home">
          <span className="flex size-9 items-center justify-center bg-white">
            <Image src="/icon.svg" width={36} height={36} alt="" priority />
          </span>
          <span className="display-heading text-lg font-bold uppercase tracking-[-0.03em] sm:text-xl">{siteConfig.businessName}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.label} href={link.href} className="nav-link">{link.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#quote" className={`hidden px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition sm:inline-flex ${scrolled || open ? "bg-zinc-950 text-white hover:bg-purple-700" : "bg-white text-zinc-950 hover:bg-teal-200"}`}>Start a project</Link>
          <button type="button" className="flex size-11 items-center justify-center border border-current/25 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5">
              <i className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <i className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <i className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`overflow-hidden border-t border-zinc-200 bg-[#f8f6f2] text-zinc-950 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[32rem]" : "max-h-0 border-transparent"}`} aria-label="Mobile navigation">
        <div className="site-shell flex flex-col py-3">
          {navLinks.map((link, index) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-zinc-200 py-4 text-lg font-semibold"><span>{link.label}</span><span className="font-mono text-xs text-zinc-400">0{index + 1}</span></Link>)}
          <Link href="/#quote" onClick={() => setOpen(false)} className="button mt-5 justify-center bg-purple-700 text-white sm:hidden">Start a project</Link>
        </div>
      </nav>
    </header>
  );
}
