type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="hero-grid relative isolate overflow-hidden bg-[#0b0b0e] pt-24 text-white">
      <div className="hero-orb hero-orb-purple" aria-hidden="true" />
      <div className="hero-orb hero-orb-teal" aria-hidden="true" />
      <div className="site-shell relative z-10 grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:py-28">
        <p className="eyebrow text-teal-300">{eyebrow}</p>
        <div>
          <h1 className="display-heading max-w-[12ch] text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.94] tracking-[-0.06em]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl border-t border-white/20 pt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-purple-500 via-white/20 to-teal-400" />
    </section>
  );
}
