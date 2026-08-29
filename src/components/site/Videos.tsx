import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const VIDEOS = [
  {
    title: "Garage Doors of Lafayette video 1",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1335238981266564%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Garage Doors of Lafayette video 2",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F926085603445096%2F&show_text=false&width=267&t=0",
  },
];

export function Videos() {
  return (
    <>
      <section id="videos" className="scroll-mt-24 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Videos</p>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-foreground sm:text-4xl lg:text-[2.75rem]">
              See Garage Doors of Lafayette in Action
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Take a look at real work and see the quality behind Garage Doors of Lafayette.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10">
            {VIDEOS.map((video) => (
              <div
                key={video.src}
                className="w-full max-w-[267px] overflow-hidden rounded-md bg-black/40 p-2"
              >
                <div className="relative w-full" style={{ aspectRatio: "267 / 476" }}>
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="absolute inset-0 size-full rounded-sm"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">Service Area</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Proudly Serving Lafayette &amp; Surrounding Areas
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We're based locally and cover Lafayette along with the surrounding areas nearby. If
              you're not sure whether you're in range, give us a call — we'll tell you straight away
              and get you scheduled.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex items-start gap-4 border-l-2 border-accent bg-secondary p-6">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-display font-bold">{BUSINESS.area}</p>
                <p className="mt-1 text-sm text-muted-foreground">Residential &amp; commercial</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-3 inline-block font-display font-semibold text-accent"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
