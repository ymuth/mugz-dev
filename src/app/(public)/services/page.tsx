import Link from "next/link";
import PageHero from "@/components/global/PageHero";

const services = [
  {
    number: "01",
    title: "Business Websites",
    summary: "Professional responsive websites designed around the business, brand and customer journey.",
    usefulFor: "Businesses that need to look credible online, explain their services clearly and turn visits into enquiries.",
    solves: "An outdated, unclear or underperforming online presence that no longer represents the quality of the business.",
    includes: ["Responsive design", "Clear customer journeys", "SEO foundations", "Contact and enquiry routes"],
  },
  {
    number: "02",
    title: "Custom Web Applications",
    summary: "More advanced websites and applications with functionality tailored to customers, staff or a specific service.",
    usefulFor: "Businesses that need bookings, customer areas, account tools or functionality a standard website cannot provide.",
    solves: "Trying to force a distinctive service or process into a generic platform that does not quite fit.",
    includes: ["Booking workflows", "Customer and staff portals", "Database-backed features", "Tailored interfaces"],
  },
  {
    number: "03",
    title: "Internal Business Systems",
    summary: "Dashboards, portals, management systems and workflow tools built around day-to-day operations.",
    usefulFor: "Teams managing jobs, vehicles, customers, staff, stock or status information across disconnected tools.",
    solves: "Repeated admin, scattered information and processes that rely too heavily on spreadsheets or paperwork.",
    includes: ["Management dashboards", "Tracking systems", "Internal portals", "Custom workflows"],
  },
  {
    number: "04",
    title: "Automation & Integrations",
    summary: "Automated emails, notifications, supported third-party integrations and connected business workflows.",
    usefulFor: "Businesses repeating the same updates, reminders or data-handling tasks whenever something changes.",
    solves: "Manual handoffs that take time, create avoidable errors or leave customers and staff waiting for updates.",
    includes: ["Automated emails", "Status notifications", "Scheduled processes", "Supported integrations"],
  },
] as const;

const examples = [
  ["Vehicle management", "Track vehicles, keys, work status and servicing from one organised system."],
  ["Booking platform", "Give customers a clear booking route and staff a practical way to manage it."],
  ["Customer portal", "Provide secure access to documents, bookings, updates or account information."],
  ["Business dashboard", "Bring customers, enquiries, jobs and operational information into one view."],
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Digital work built around the business."
        description="From a stronger website to practical internal software, we design and build the right solution around what the business needs to achieve."
      />

      <section className="bg-[#f3f1ed] text-zinc-950">
        <div className="site-shell section-space">
          <div className="grid gap-8 border-b border-zinc-300 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-purple-700">Our services</p>
            <div>
              <h2 className="display-heading section-heading max-w-4xl">Start with the problem, then build what fits.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">We keep the route clear for business owners: understand what is getting in the way, agree the useful outcome, then scope the work around it.</p>
            </div>
          </div>

          <div>
            {services.map((service) => (
              <article key={service.number} className="grid gap-7 border-b border-zinc-300 py-10 lg:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10 lg:py-14">
                <span className="font-mono text-sm text-purple-700">{service.number}</span>
                <div>
                  <h2 className="display-heading text-3xl tracking-[-0.04em] sm:text-4xl">{service.title}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">{service.summary}</p>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="eyebrow text-teal-700">Useful for</p>
                    <p className="mt-3 leading-7 text-zinc-600">{service.usefulFor}</p>
                  </div>
                  <div>
                    <p className="eyebrow text-teal-700">Problem it solves</p>
                    <p className="mt-3 leading-7 text-zinc-600">{service.solves}</p>
                  </div>
                  <ul className="border-t border-zinc-300 pt-5 sm:col-span-2 lg:col-span-1 xl:col-span-2 sm:columns-2">
                    {service.includes.map((item) => <li key={item} className="mb-2 text-sm font-semibold text-zinc-700">— {item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-purple-700 text-white">
        <div className="offer-ring" aria-hidden="true" />
        <div className="site-shell section-space relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-teal-200">Founding client offer · First 5 qualifying clients</p>
            <h2 className="display-heading section-heading mt-6 max-w-4xl">A focused launch offer for business websites.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">Available while we expand the MUGZ portfolio. It covers a simple, professionally designed business website—not custom software or advanced functionality.</p>
          </div>
          <div className="border-l border-white/25 pl-7">
            <p className="display-heading text-4xl tracking-[-0.04em] sm:text-5xl">£150 setup</p>
            <p className="display-heading mt-2 text-3xl tracking-[-0.04em] sm:text-4xl">+ £20/month</p>
            <p className="mt-5 text-sm leading-6 text-purple-100">Hosting and maintenance included. Applications, dashboards, databases, automation and advanced functionality are quoted separately.</p>
            <Link href="/#quote" className="button button-light mt-7">Ask about the offer</Link>
          </div>
        </div>
      </section>

      <section className="bg-white text-zinc-950">
        <div className="site-shell section-space">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="eyebrow text-teal-700">Example solutions</p>
            <div>
              <h2 className="display-heading section-heading max-w-4xl">Practical tools for real working days.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">Every scope is different. These examples show the kinds of outcomes the same core capabilities can support.</p>
            </div>
          </div>
          <div className="mt-14 grid border-t border-zinc-300 md:grid-cols-2">
            {examples.map(([title, description], index) => (
              <article key={title} className={`border-b border-zinc-300 py-8 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                <span className="font-mono text-xs text-purple-700">0{index + 1}</span>
                <h3 className="display-heading mt-5 text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101014] text-white">
        <div className="site-shell section-space grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="eyebrow text-teal-300">Have something in mind?</p>
          <div>
            <h2 className="display-heading section-heading max-w-4xl">Tell us what needs to work better.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">You do not need a technical specification. Tell us about the business, the problem and the outcome you want—we’ll recommend the most useful route.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#quote" className="button button-light">Start a project</Link>
              <Link href="/contact" className="button button-ghost">Ask a question</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
