const steps = [
  ["01", "Tell me what you need", "Share what your business does, what is not working and what you want to improve."],
  ["02", "I design and build it", "You get a clear scope first, followed by a focused design and development process."],
  ["03", "You review it", "See the work, share feedback and make sure everything feels right before launch."],
  ["04", "We launch and maintain it", "I handle launch and can keep the website secure, updated and running smoothly."],
] as const;

export default function ExplainSection() {
  return (
    <section className="relative overflow-hidden bg-[#101014] text-white">
      <div className="process-mark" aria-hidden="true">04</div>
      <div className="site-shell section-space relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow text-teal-300">How it works</p>
          <div>
            <h2 className="display-heading section-heading max-w-3xl">Clear from first conversation to launch.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">You do not need a technical brief. A straightforward explanation of your business and what you need is enough to get started.</p>
          </div>
        </div>
        <ol className="mt-16 border-t border-white/15">
          {steps.map(([number, title, description]) => (
            <li key={number} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8 sm:py-8">
              <span className="font-mono text-sm text-teal-300">{number}</span>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
              <p className="max-w-xl leading-7 text-zinc-400">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
