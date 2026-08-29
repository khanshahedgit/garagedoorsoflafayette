import { BUSINESS, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-extrabold uppercase text-ink-foreground">
              {BUSINESS.name}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{BUSINESS.tagline}</p>
            <p className="text-sm text-ink-muted">{BUSINESS.area}</p>
            <p className="eyebrow mt-5 text-accent">Local • Reliable • Insured</p>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-[0.14em] uppercase text-ink-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={BUSINESS.phoneHref} className="text-ink-muted transition-colors hover:text-accent">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="break-all text-ink-muted transition-colors hover:text-accent">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-[0.14em] uppercase text-ink-foreground">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink-muted transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-foreground/15 pt-6">
          <p className="text-xs text-ink-muted">© 2026 {BUSINESS.name}</p>
        </div>
      </div>
    </footer>
  );
}
