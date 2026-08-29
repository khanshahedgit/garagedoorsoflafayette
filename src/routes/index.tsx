import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { Videos } from "@/components/site/Videos";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Garage Doors of Lafayette | Installation & Repair";
const DESCRIPTION =
  "Professional garage door installation and repair for homes and businesses in Lafayette and surrounding areas. Local, reliable, insured. Call 337-573-9003.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Garage Doors of Lafayette",
          description: "Garage door installation and repair for residential and commercial customers.",
          telephone: "+1-337-573-9003",
          email: "huntergdl05@gmail.com",
          areaServed: "Lafayette and surrounding areas",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Videos />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
