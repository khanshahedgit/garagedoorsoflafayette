import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const SERVICES = ["Installation", "Repair", "Residential", "Commercial", "Not Sure"];

const EMPTY: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.service) errors.service = "Please choose the service you need.";
  if (values.message.trim().length < 10) errors.message = "Please add a few details (10+ characters).";
  return errors;
}

const inputClass =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30";

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      setValues(EMPTY);
      setStatus("sent");
    }, 500);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-extrabold text-ink-foreground sm:text-4xl lg:text-5xl">
            Ready for a Better Garage Door?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Let's get your garage door installed, repaired, or upgraded.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-base btn-accent w-full sm:w-auto">
              Get a Free Quote
            </a>
            <a href={BUSINESS.phoneHref} className="btn-base btn-outline-light w-full sm:w-auto">
              <Phone className="size-4" aria-hidden="true" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Request a free quote.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us what's going on with your garage door and we'll get back to you with next steps.
              Prefer to talk it through? Call us directly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-4 border-l-2 border-accent bg-secondary px-5 py-4 transition-colors hover:bg-muted"
              >
                <Phone className="size-5 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Call
                  </span>
                  <span className="font-display text-lg font-bold">{BUSINESS.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-4 border-l-2 border-accent bg-secondary px-5 py-4 transition-colors hover:bg-muted"
              >
                <Mail className="size-5 text-accent" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    Email
                  </span>
                  <span className="block truncate font-display text-base font-bold">
                    {BUSINESS.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 border border-border bg-secondary p-8">
                <CheckCircle2 className="size-9 text-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold">Thanks — your request is in.</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We received your details and will follow up shortly. Need service sooner? Call{" "}
                  <a href={BUSINESS.phoneHref} className="font-semibold text-accent">
                    {BUSINESS.phoneDisplay}
                  </a>
                  .
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-base btn-outline-dark mt-2">
                  Send another request
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="border border-border bg-card p-6 shadow-panel sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name} id="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone} id="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="337-000-0000"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" error={errors.email} id="email" className="sm:col-span-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Service Needed" error={errors.service} id="service" className="sm:col-span-2">
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" error={errors.message} id="message" className="sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your door and what you need."
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>

                {status === "error" && Object.keys(errors).length > 0 && (
                  <p role="alert" className="mt-5 border-l-2 border-destructive bg-secondary px-4 py-3 text-sm text-destructive">
                    Please fix the highlighted fields and submit again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-base btn-accent mt-6 w-full disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send Quote Request"}
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Or call{" "}
                  <a href={BUSINESS.phoneHref} className="font-semibold text-accent">
                    {BUSINESS.phoneDisplay}
                  </a>{" "}
                  for a faster response.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  error,
  className = "",
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block font-display text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
