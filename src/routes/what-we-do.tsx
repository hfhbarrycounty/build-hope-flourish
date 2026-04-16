import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import whatWeDoHero from "../assets/what-we-do-hero.jpg";
import gasLineWork from "../assets/gas-line-work.jpg";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Habitat for Humanity Barry County" },
      { name: "description", content: "Learn about our home building program, construction process, home repair services, and how families can apply for a Habitat home." },
      { property: "og:title", content: "What We Do — Habitat for Humanity Barry County" },
      { property: "og:description", content: "Home building, construction, and repair programs for Barry County families." },
    ],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={whatWeDoHero} alt="Volunteers building roof trusses at the construction site" className="h-full w-full object-cover" style={{ <img src={whatWeDoHero} alt="Volunteers building roof trusses at the construction site" className="h-full w-full object-cover" style={{ objectPosition: "center 55%" }} width={1920} height={1080} /> }} width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <AnimatedSection>
              <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">What We Do</h1>
              <p className="mt-3 max-w-xl text-lg text-primary-foreground/80">Building strength, stability and hope through homeownership</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Home Program</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">Path to Homeownership</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    There are many paths to homeownership, but a traditional mortgage can be out of reach for many. We remove barriers by building or renovating energy-efficient homes, selling them at appraised value with affordable terms.
                  </p>
                  <p>
                    The down payment on a Habitat home is <strong className="text-foreground">$500 + your hours of work</strong>. Prospective homeowners provide at least 300 hours of "sweat equity."
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-muted p-5">
                  <h3 className="font-heading text-sm font-semibold text-foreground">Income Guidelines (2024)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Families must earn between 35%–80% of Area Median Income:</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Family of 2:</span><span className="text-foreground">$24,718 – $56,500</span>
                    <span className="text-muted-foreground">Family of 4:</span><span className="text-foreground">$30,905 – $70,600</span>
                    <span className="text-muted-foreground">Family of 6:</span><span className="text-foreground">$35,875 – $81,900</span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-brand-lg">
                <img src={gasLineWork} alt="Workers installing gas line at build site" className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-24">
              <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Construction</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">How We Build</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-3">
                {[
                  { step: "01", title: "Volunteer Labor", desc: "Homes are built with community volunteers using local supplies and subcontractors." },
                  { step: "02", title: "Energy Star Certified", desc: "All new homes are Energy Star Certified and built to Universal Standards." },
                  { step: "03", title: "Home Repair", desc: "We also assist with critical repairs in existing homes alongside partner organizations." },
                ].map((item) => (
                  <div key={item.step} className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-brand">
                    <div className="font-heading text-3xl font-bold text-primary/30">{item.step}</div>
                    <h3 className="mt-3 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
