import Link from "next/link";

export default function FoundingOfferSection() {
  return (
    <section className="relative overflow-hidden bg-purple-700 text-white">
      <div className="offer-ring" aria-hidden="true" />
      <div className="site-shell section-space relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-end">
          <div>
            <p className="eyebrow text-teal-200">Founding client offer · 5 places</p>
            <h2 className="display-heading section-heading mt-6 max-w-4xl">A serious website. A deliberately small launch price.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">I’m taking on the first 5 qualifying business website clients at a reduced launch rate while expanding the MUGZ portfolio.</p>
          </div>
          <div className="border-l border-white/25 pl-6 sm:pl-9">
            <div className="grid grid-cols-2 gap-6 border-b border-white/25 pb-7">
              <div><strong className="display-heading block text-4xl tracking-[-0.04em] sm:text-5xl">£150</strong><span className="mt-2 block text-sm text-purple-100">website setup</span></div>
              <div><strong className="display-heading block text-4xl tracking-[-0.04em] sm:text-5xl">£20</strong><span className="mt-2 block text-sm text-purple-100">per month</span></div>
            </div>
            <p className="mt-6 text-sm leading-6 text-purple-100">For a simple business website, including hosting and maintenance. Custom applications, databases, dashboards, automation and advanced functionality are quoted separately.</p>
            <Link href="/#quote" className="button button-light mt-7">Ask about the offer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
