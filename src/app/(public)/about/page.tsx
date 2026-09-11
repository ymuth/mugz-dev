import Link from "next/link";
import PageHero from "@/components/global/PageHero";

const approach = [
  ["01", "Understand the business", "We start with how the business works now, where time is being lost and what customers or staff actually need."],
  ["02", "Choose the useful route", "The answer might be a focused website, a custom application or a smaller workflow improvement. The scope should fit the problem."],
  ["03", "Design for real use", "Clear journeys, readable interfaces and sensible responsive behaviour matter as much as the technology behind them."],
  ["04", "Build for the next step", "We keep the solution maintainable and explain what is included, what happens at launch and how future changes can be handled."],
] as const;

const values = [
  ["Business first", "Technology is useful when it supports a clear commercial or operational outcome."],
  ["Direct communication", "Businesses work directly with MUGZ, keeping decisions clear and the process easy to follow."],
  ["Purpose over complexity", "We avoid adding features, platforms or processes that do not earn their place."],
  ["Care in the details", "Typography, accessibility, mobile behaviour and the less-visible technical foundations all matter."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About MUGZ"
        title="A small studio with a business-first approach."
        description="MUGZ works with businesses that need a stronger online presence or software that fits the way their work actually happens."
      />

      <section className="bg-[#f3f1ed] text-zinc-950">
        <div className="site-shell section-space grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow text-purple-700">Why MUGZ exists</p>
            <span className="mt-8 block h-px w-20 bg-teal-600" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-600">
            <h2 className="display-heading section-heading max-w-4xl text-zinc-950">Software should fit the business—not the other way around.</h2>
            <p>Businesses are often left choosing between generic tools that never quite fit and overly complex projects that solve more than they need.</p>
            <p>At MUGZ, we take a more direct route: understand the goal, reduce the unnecessary complexity and build the website or system around the people who will use it.</p>
            <p className="font-semibold text-zinc-950">That means practical scope, clear communication and work that supports the business beyond launch day.</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-zinc-950">
        <div className="site-shell section-space">
          <div className="grid gap-8 border-b border-zinc-300 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-teal-700">How we approach projects</p>
            <h2 className="display-heading section-heading max-w-4xl">Clear thinking before code.</h2>
          </div>
          <ol>
            {approach.map(([number, title, description]) => (
              <li key={number} className="grid gap-5 border-b border-zinc-300 py-8 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8 sm:py-10">
                <span className="font-mono text-sm text-purple-700">{number}</span>
                <h3 className="display-heading text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="max-w-xl leading-7 text-zinc-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101014] text-white">
        <div className="process-mark" aria-hidden="true">04</div>
        <div className="site-shell section-space relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="eyebrow text-teal-300">What we value</p>
            <div>
              <h2 className="display-heading section-heading max-w-4xl">Professional work without the agency theatre.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">MUGZ is deliberately small and direct. We focus on understanding the work, communicating clearly and delivering something useful.</p>
            </div>
          </div>
          <div className="mt-14 grid border-t border-white/15 md:grid-cols-2">
            {values.map(([title, description], index) => (
              <article key={title} className={`border-b border-white/15 py-8 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                <span className="mb-5 block size-2 bg-purple-400" />
                <h3 className="display-heading text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e5df] text-zinc-950">
        <div className="site-shell section-space grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="eyebrow text-purple-700">Why businesses work with us</p>
          <div>
            <h2 className="display-heading section-heading max-w-4xl">One clear route from idea to launch.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">We work directly with businesses, explain decisions in plain language and keep the project tied to the outcome it needs to deliver.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#quote" className="button bg-zinc-950 text-white hover:bg-purple-700">Start a project</Link>
              <Link href="/services" className="button border border-zinc-400 text-zinc-950 hover:border-zinc-950">View services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
