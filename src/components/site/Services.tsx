import { ArrowRight } from "lucide-react";
import installation from "@/assets/service-installation.jpg";
import repair from "@/assets/service-repair.jpg";
import residential from "@/assets/service-residential.jpg";
import commercial from "@/assets/service-commercial.jpg";
import { useReveal } from "@/hooks/use-reveal";

// Swap the `image` import to replace any service photo.
const SERVICES = [
  {
    title: "Garage Door Installation",
    image: installation,
    alt: "Installer setting a new garage door panel with a level",
    copy: "New doors measured, fitted and installed correctly the first time — panels, tracks, springs, and openers set up to run smooth and quiet.",
  },
  {
    title: "Garage Door Repair",
    image: repair,
    alt: "Technician servicing a garage door torsion spring",
    copy: "Broken springs, bent tracks, worn rollers, off-balance doors and openers that quit working. We diagnose the real problem and fix it.",
  },
  {
    title: "Residential Garage Doors",
    image: residential,
    alt: "Clean white residential double garage door",
    copy: "Straightforward upgrades and service for homeowners, with door styles and finishes that match the house instead of fighting it.",
  },
  {
    title: "Commercial Garage Doors",
    image: commercial,
    alt: "Commercial building with rolling steel overhead doors",
    copy: "Overhead and rolling doors for shops, warehouses and loading areas — built for daily use and kept working with minimal downtime.",
  },
];

export function Services() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">What We Do</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Full-service garage door work, done properly.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
            Whether you need a brand new door or a fast fix on the one you have, we handle the job
            start to finish for homes and businesses.
          </p>
        </div>

        <div ref={reveal.ref} className={`${reveal.className} mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2`}>
          {SERVICES.map((service, i) => (
            <article key={service.title} className="group">
              <div className="relative overflow-hidden rounded-md bg-secondary">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 bg-ink/85 px-3 py-1 font-display text-xs font-bold tracking-[0.18em] text-ink-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold sm:text-2xl">{service.title}</h3>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                {service.copy}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent"
              >
                Request a quote
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
