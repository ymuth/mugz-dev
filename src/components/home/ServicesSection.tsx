import Link from "next/link";
import FadeIn from "../ui/FadeIn";

const services = [
  ["01", "Business Websites", "Professional responsive websites for businesses that need a stronger online presence.", "Design · Development · SEO foundations"],
  ["02", "Custom Web Applications", "More advanced websites and applications with functionality tailored to your customers and team.", "Bookings · Portals · Database features"],
  ["03", "Internal Business Systems", "Dashboards, management systems and practical tools that replace disconnected manual processes.", "Dashboards · Tracking · Staff tools"],
  ["04", "Automation & Integrations", "Emails, notifications, workflows and supported third-party integrations that keep work moving.", "Email · Notifications · Connected workflows"],
] as const;

export default function ServicesSection() {
  return (
    <section className="bg-[#f3f1ed] text-zinc-950">
      <div className="site-shell section-space">
        <div className="grid gap-8 border-b border-zinc-300 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="eyebrow text-purple-700">What we build</p>
          <div>
            <h2 className="display-heading section-heading max-w-3xl">The right digital tool for the job.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">From a sharper first impression to software that simplifies the working day, every build starts with what the business needs.</p>
          </div>
        </div>
        <div>
          {services.map(([number, title, description, detail], index) => (
            <FadeIn key={number} delay={index * 0.06} delayMobile={0} y={24}>
              <article className="service-row grid gap-5 border-b border-zinc-300 py-8 md:grid-cols-[4rem_minmax(0,0.85fr)_minmax(0,1fr)] md:gap-8 md:py-10">
                <span className="font-mono text-sm text-purple-700">{number}</span>
                <h3 className="display-heading text-2xl tracking-[-0.035em] sm:text-3xl">{title}</h3>
                <div>
                  <p className="max-w-xl leading-7 text-zinc-600">{description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{detail}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 flex justify-end"><Link href="/services" className="text-link">Explore all services <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
