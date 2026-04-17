import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { Heart, Home, HardHat, Gift } from "lucide-react";
import donateImage from "../assets/donate.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Habitat for Humanity Barry County" },
      { name: "description", content: "Support Habitat for Humanity Barry County. Your donation helps build affordable homes for families in need." },
      { property: "og:title", content: "Donate — Habitat for Humanity Barry County" },
      { property: "og:description", content: "Invest in our mission to provide decent housing for every family." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={donateImage} alt="Volunteers building a home together at golden hour" className="h-full w-full object-cover" style={{ objectPosition: "center 35%" }} width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <AnimatedSection>
              <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">Donate</h1>
              <p className="mt-3 max-w-xl text-lg text-primary-foreground/80">Every brick counts</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground">We Can't Build Without You</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                By donating to Habitat for Humanity Barry County, you invest in our mission to provide a decent place to live for everyone. Your donation helps families build long-term financial security.
              </p>
              <a
                href="https://hfhbarrycounty.charityproud.org/Donate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-brand-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110"
              >
                Give Online
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Heart, title: "Financial Donation", desc: "One-time or recurring gifts" },
                { icon: Home, title: "ReStore Donation", desc: "Donate building materials & home goods" },
                { icon: HardHat, title: "Volunteer Time", desc: "Your labor builds homes" },
                { icon: Gift, title: "In-Kind Gifts", desc: "Materials, services, or supplies" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-brand">
                  <item.icon className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 rounded-2xl bg-muted p-8 text-center">
              <h3 className="font-heading text-lg font-bold text-foreground">Send a Check</h3>
              <p className="mt-2 text-muted-foreground">
                Make checks payable to: <strong className="text-foreground">HFHBC</strong>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Habitat for Humanity of Barry County<br />
                1215 N Broadway, Hastings, MI 49058
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
