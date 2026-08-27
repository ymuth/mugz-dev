import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/global/PageHero";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your business."
        description="Whether you need a new website, want to improve an existing one, or have an idea for something more custom, send us the details and we’ll recommend the best route."
      />

      <section className="bg-[#e8e5df] text-zinc-950">
        <div className="site-shell section-space grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside>
            <p className="eyebrow text-purple-700">Start here</p>
            <h2 className="display-heading mt-6 text-3xl tracking-[-0.04em] sm:text-4xl">A useful first conversation, without the technical brief.</h2>
            <p className="mt-5 leading-7 text-zinc-600">Tell us what the business does, what is not working and what you want to improve. We’ll take it from there.</p>

            <div className="mt-10 border-y border-zinc-400/70 py-7">
              <p className="eyebrow text-zinc-500">Email</p>
              <a href="mailto:hello@mugz.dev" className="mt-3 inline-block text-lg font-semibold transition hover:text-purple-700">hello@mugz.dev</a>
            </div>

            <div className="mt-8 border-l-2 border-teal-600 pl-5">
              <p className="font-semibold">Looking for the founding-client offer?</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">The £150 setup and £20/month hosting and maintenance offer is available to our first 5 qualifying business website clients. Advanced functionality is quoted separately.</p>
              <Link href="/#quote" className="text-link mt-5 inline-flex">Use the project form</Link>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#101014] text-white">
        <div className="site-shell section-space">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="eyebrow text-teal-300">What happens next</p>
            <h2 className="display-heading section-heading max-w-4xl">A clear response and a sensible next step.</h2>
          </div>
          <ol className="mt-14 grid border-t border-white/15 md:grid-cols-3">
            {[
              ["01", "We review the details", "We’ll look at what you need and whether MUGZ is the right fit."],
              ["02", "We clarify the scope", "If useful, we’ll ask a few focused questions and recommend the best route."],
              ["03", "You get a clear next step", "We’ll explain the likely scope, timing and pricing before any work begins."],
            ].map(([number, title, description], index) => (
              <li key={number} className={`border-b border-white/15 py-8 md:px-8 ${index < 2 ? "md:border-r" : ""} ${index === 0 ? "md:pl-0" : ""}`}>
                <span className="font-mono text-sm text-purple-400">{number}</span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
