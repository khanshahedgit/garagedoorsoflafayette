import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImage from "@/assets/before.jpg";
import afterImage from "@/assets/after.jpg";

// Replace these two imports to swap the comparison photos.
const BEFORE = { src: beforeImage, alt: "Worn, weathered garage door before replacement" };
const AFTER = { src: afterImage, alt: "New dark carriage-style garage door after installation" };

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <section id="our-work" className="scroll-mt-24 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">Our Work</p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink-foreground sm:text-4xl lg:text-[2.75rem]">
            See the Difference a New Garage Door Makes.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Drag the handle to compare a tired, worn door with a clean new installation.
          </p>
        </div>

        <div
          ref={containerRef}
          onPointerDown={(e) => {
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
          className="relative mt-10 aspect-[4/3] w-full touch-none overflow-hidden rounded-md select-none sm:aspect-[16/9]"
        >
          <img
            src={AFTER.src}
            alt={AFTER.alt}
            loading="lazy"
            width={1600}
            height={1008}
            className="absolute inset-0 size-full object-cover"
            draggable={false}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={BEFORE.src}
              alt={BEFORE.alt}
              loading="lazy"
              width={1600}
              height={1008}
              className="absolute inset-0 size-full object-cover"
              draggable={false}
            />
          </div>

          <span className="absolute top-4 left-4 bg-ink/85 px-3 py-1.5 font-display text-xs font-bold tracking-[0.2em] text-ink-foreground">
            BEFORE
          </span>
          <span className="absolute top-4 right-4 bg-accent px-3 py-1.5 font-display text-xs font-bold tracking-[0.2em] text-accent-foreground">
            AFTER
          </span>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-ink-foreground"
            style={{ left: `${position}%` }}
          >
            <button
              type="button"
              role="slider"
              aria-label="Compare before and after"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={onKeyDown}
              onPointerDown={(e) => {
                e.stopPropagation();
                dragging.current = true;
              }}
              className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-ink-foreground text-ink shadow-lift"
            >
              <MoveHorizontal className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
            Every job is measured, installed and tested on site — no shortcuts, no mess left behind.
          </p>
          <a href="#contact" className="btn-base btn-accent w-full sm:w-auto">
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
