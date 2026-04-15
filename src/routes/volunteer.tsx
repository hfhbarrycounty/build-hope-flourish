import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { HardHat, Paintbrush, Store, Heart } from "lucide-react";
import volunteerHousewrap from "../assets/volunteer-housewrap.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Habitat for Humanity Barry County" },
      { name: "description", content: "Volunteer with Habitat for Humanity Barry County. Help build homes, work at the ReStore, or support community events." },
      { property: "og:title", content: "Volunteer — Habitat for Humanity Barry County" },
      { property: "og:description", content: "Join us on the build site, at the ReStore, or at events." },
    ],
  }),
  component: VolunteerPage,
});

const opportunities = [
  { icon: HardHat, title: "Build Site", desc: "Help with framing, roofing, painting, trim, and more. No experience needed — we'll teach you!" },
  { icon: Store, title: "ReStore", desc: "Sort donations, assist customers, and help keep our store running smoothly." },
  { icon: Paintbrush, title: "Home Repair", desc: "Assist with critical repairs for existing homeowners in Barry County." },
  { icon: Heart, title: "Events & Fundraising", desc: "Help organize and run our community events and fundraising campaigns." },
];

function VolunteerPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={volunteerHousewrap} alt="Volunteer installing housewrap" className="h-full w-full object-cover object-top" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <AnimatedSection>
              <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">Volunteer</h1>
              <p className="mt-3 max-w-xl text-lg text-primary-foreground/80">Lend your hands, build a future</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground">Ways to Help</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                No special skills required. Just bring your willingness to help — we'll provide training, tools, and guidance.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {opportunities.map((opp, i) => (
              <AnimatedSection key={opp.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-brand">
                  <opp.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{opp.title}</h3>
                  <p className="mt-2 text-muted-foreground">{opp.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-16 rounded-3xl bg-gradient-brand p-12 text-center text-primary-foreground shadow-brand-lg">
              <h2 className="font-heading text-3xl font-bold">Ready to Build?</h2>
              <p className="mx-auto mt-4 max-w-xl opacity-90">
                Sign up to volunteer on our next build. We welcome individuals, groups, and corporate teams.
              </p>
              <a
                href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Index/?activity=53253&date=8/6/2025"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-card px-8 py-3.5 font-semibold text-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Sign Up to Volunteer
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
