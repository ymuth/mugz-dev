"use client";

import { useState } from "react";

const faqs = [
  ["How long does a website take?", "A simple business website will usually take a few weeks once the content and scope are agreed. Larger websites and custom software take longer; you will get a realistic timeframe before work starts."],
  ["What does the £150 founding-client offer include?", "It covers the design and build of a simple, responsive business website for one of the first 5 qualifying clients. The exact pages and content will be agreed before work begins."],
  ["What does the £20 monthly cost cover?", "It covers hosting, deployment and routine maintenance for a simple business website. Larger changes, new pages and advanced services are scoped separately."],
  ["Do I need to provide the words and photos?", "If you already have content, send it over. If not, I can help shape the page structure and advise what is needed. Any specialist photography or extensive copywriting would be discussed separately."],
  ["Can you build bookings, dashboards or other custom features?", "Yes. Web applications, databases, dashboards, portals, automation and integrations can be built around your requirements and are quoted separately from the website offer."],
  ["Who owns the website and domain?", "Your domain should be registered in your name and remain yours. Project ownership and any third-party services will be made clear in the agreed scope before work starts."],
  ["Can you make changes after launch?", "Yes. Routine maintenance is covered where included, and larger content changes, new pages or additional functionality can be quoted as the business grows."],
] as const;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-white text-zinc-950">
      <div className="site-shell section-space grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow text-purple-700">FAQ</p>
          <h2 className="display-heading section-heading mt-6">Useful answers, upfront.</h2>
          <p className="mt-5 max-w-md leading-7 text-zinc-600">If your question is not here, send it over. You do not need to have everything worked out first.</p>
        </div>
        <div className="border-t border-zinc-300">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={question} className="border-b border-zinc-300">
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left" aria-expanded={isOpen} aria-controls={panelId}>
                  <span className="text-lg font-semibold leading-7 sm:text-xl">{question}</span>
                  <span aria-hidden="true" className={`mt-0.5 flex size-8 shrink-0 items-center justify-center border border-zinc-400 text-xl transition group-hover:border-purple-600 group-hover:text-purple-700 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div id={panelId} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="max-w-2xl leading-7 text-zinc-600">{answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
