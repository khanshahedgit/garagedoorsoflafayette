import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#home"
          className={`font-display text-base leading-tight font-extrabold tracking-tight uppercase sm:text-lg ${
            scrolled || open ? "text-foreground" : "text-ink-foreground"
          }`}
        >
          Garage Doors
          <span className="block text-[0.65rem] font-semibold tracking-[0.22em] text-accent">
            of Lafayette
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-ink-muted hover:text-ink-foreground"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={BUSINESS.phoneHref} className="btn-base btn-accent hidden !px-5 !py-3 !text-sm sm:inline-flex">
            <Phone className="size-4" aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="btn-base btn-accent !px-3 !py-3 sm:hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex size-11 items-center justify-center rounded-md border transition-colors lg:hidden ${
              scrolled || open
                ? "border-border text-foreground hover:bg-secondary"
                : "border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground/10"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-base font-semibold text-foreground last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-ink my-4 w-full"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
