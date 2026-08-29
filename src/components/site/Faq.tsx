import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do you install new garage doors?",
    a: "Yes. We install new residential and commercial garage doors, including the tracks, springs, hardware and opener setup, and we test everything before we leave.",
  },
  {
    q: "Do you repair existing garage doors?",
    a: "Yes. We handle repairs such as broken springs, damaged panels, bent tracks, worn rollers, cables, and doors or openers that stop working correctly.",
  },
  {
    q: "Do you work with commercial properties?",
    a: "We do. We service overhead and rolling doors for shops, warehouses, and other commercial buildings, and we work to keep downtime to a minimum.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Lafayette and the surrounding areas. If you're unsure whether we cover your location, call us and we'll let you know right away.",
  },
  {
    q: "How do I request a quote?",
    a: "Call 337-573-9003 or fill out the quote form on this page with your name, phone, and a short description of what you need. We'll follow up to confirm the details.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Questions we hear often.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Still need an answer? Call us and we'll talk it through.
          </p>
        </div>

        <div className="lg:col-span-8">
          <dl className="border-t border-input">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-b border-input">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-bold sm:text-lg">{faq.q}</span>
                      <Plus
                        className={`mt-0.5 size-5 shrink-0 text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 pr-10 pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
