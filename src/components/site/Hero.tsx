import { Phone, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-garage.jpg";
import { BUSINESS } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Newly installed dark carriage-style garage door on a brick home at dusk"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pt-32 pb-14 sm:px-8 sm:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-accent">
            <span>Local</span>
            <span className="text-ink-muted">•</span>
            <span>Reliable</span>
            <span className="text-ink-muted">•</span>
            <span>Insured</span>
          </p>
          <h1 className="mt-5 text-4xl leading-[1.03] font-extrabold text-ink-foreground sm:text-5xl lg:text-6xl">
            Garage Doors Built to Look Better. Work Better. Last Longer.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Professional garage door installation and repair for homes and businesses in Lafayette
            and surrounding areas.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-base btn-accent w-full sm:w-auto">
              Get a Free Quote
            </a>
            <a href={BUSINESS.phoneHref} className="btn-base btn-outline-light w-full sm:w-auto">
              <Phone className="size-4" aria-hidden="true" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-ink-muted">
            <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
            Residential &amp; commercial service across {BUSINESS.area}
          </p>
        </div>
      </div>
    </section>
  );
}
