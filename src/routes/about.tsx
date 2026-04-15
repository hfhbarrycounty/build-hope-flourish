import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";

const PLACEHOLDER_HERO = "https://placehold.co/1920x1080/00afb7/ffffff?text=About+Hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Habitat for Humanity Barry County" },
      { name: "description", content: "Learn about Habitat for Humanity Barry County's mission, history, and volunteer-driven approach to building affordable homes since 1989." },
      { property: "og:title", content: "About Us — Habitat for Humanity Barry County" },
      { property: "og:description", content: "Learn about our mission and history of building 44+ homes in Barry County." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={PLACEHOLDER_HERO} alt="About Habitat Barry County" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <AnimatedSection>
              <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">About Us</h1>
              <p className="mt-3 max-w-xl text-lg text-primary-foreground/80">Building homes, communities and hope since 1989</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium">
                Habitat for Humanity Barry County was incorporated on May 8, 1989. Since that time we have built 44 new homes in partnership with low-income Barry County families.
              </p>
              <p>
                Home number 44, just south of Hastings, was built for the Jason Goggins family and completed in late November of 2023. This project was especially significant as the homeowner is a disabled Navy veteran and a single dad raising three kids, including a handicapped son.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 text-lg italic text-foreground/80">
                "Seeking to put God's love into action, Habitat for Humanity brings people together to build homes, communities and hope."
              </blockquote>
              <p>
                Habitat for Humanity International has a vision of a world where everyone has a decent place to live. We strive toward that same vision in our county!
              </p>
              <p>
                Habitat for Humanity Barry County is a Christian ministry dedicated to making that vision become reality, one home at a time. We are run by a volunteer Board of Directors. Aside from a few key staff people, we rely on volunteer labor in the ReStore, and on the construction site.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 rounded-2xl bg-gradient-brand-subtle p-8 md:p-12">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Values</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Faith in Action", desc: "Putting God's love to work through community building" },
                  { title: "Partnership", desc: "Working alongside families, not just for them" },
                  { title: "Community", desc: "Using local volunteers, suppliers, and subcontractors" },
                  { title: "Sustainability", desc: "Building Energy Star Certified homes to Universal Standards" },
                ].map((v) => (
                  <div key={v.title} className="rounded-xl bg-card p-5">
                    <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
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
