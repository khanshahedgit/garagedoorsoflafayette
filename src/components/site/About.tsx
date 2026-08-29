import { Building2, MapPin, ShieldCheck, Wrench } from "lucide-react";
import aboutImage from "@/assets/about-truck.jpg";
import { useReveal } from "@/hooks/use-reveal";

const REASONS = [
  {
    icon: MapPin,
    title: "Local Service",
    copy: "We work in Lafayette and the surrounding areas, so scheduling is simple and you deal directly with the people doing the work.",
  },
  {
    icon: Wrench,
    title: "Reliable Work",
    copy: "Doors installed level, balanced and tested before we leave. Repairs fixed at the cause, not patched over.",
  },
  {
    icon: ShieldCheck,
    title: "Insured",
    copy: "Insured work on every job, residential or commercial, for your protection and ours.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    copy: "From a single-car home garage to overhead doors on a commercial building, we handle both.",
  },
];

const STEPS = [
  { n: "01", title: "Contact Us", copy: "Call or send the quote form with a few details about your door and what's going on." },
  { n: "02", title: "Assess the Job", copy: "We look at the door, take measurements, and give you a clear, honest recommendation." },
  { n: "03", title: "Get It Done", copy: "We install or repair, test the door, clean up, and make sure you're happy with how it runs." },
];

export function About() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <>
      <section id="about" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Service truck with ladder parked in a driveway beside an open garage"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-md object-cover shadow-panel lg:aspect-[4/5]"
            />
            <div className="mt-4 border-l-2 border-accent pl-4 lg:absolute lg:-right-6 lg:bottom-8 lg:mt-0 lg:max-w-xs lg:border-l-0 lg:bg-ink lg:p-6 lg:pl-6 lg:shadow-lift">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] lg:text-ink-foreground">
                Local • Reliable • Insured
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-accent">About Us</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Local Service. Honest Work.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Garage Doors of Lafayette provides dependable garage door installation and repair for
                residential and commercial customers in Lafayette and the surrounding areas. When you
                call, you reach a local company that shows up when it says it will.
              </p>
              <p>
                Our approach is simple: look at the job carefully, explain the options in plain
                language, and do the work the right way. That means correct measurements, quality
                hardware, careful installation, and a door that opens and closes the way it should.
              </p>
              <p>
                Homes and businesses have different needs, and we handle both — a new door on a family
                garage or an overhead door that a business depends on every day.
              </p>
            </div>
            <a href="#contact" className="btn-base btn-ink mt-8">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">Why Choose Us</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Straightforward reasons to call us.
              </h2>
            </div>
            <div ref={reveal.ref} className={`${reveal.className} lg:col-span-8`}>
              <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {REASONS.map((reason) => (
                  <div key={reason.title} className="border-t border-input pt-6">
                    <reason.icon className="size-6 text-accent" aria-hidden="true" />
                    <dt className="mt-4 font-display text-lg font-bold">{reason.title}</dt>
                    <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {reason.copy}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow text-accent">The Process</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Three steps from first call to finished door.
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <li key={step.n} className="border-t-2 border-ink pt-6">
                <span className="font-display text-4xl font-extrabold text-accent">{step.n}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
