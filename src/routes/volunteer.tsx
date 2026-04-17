import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { HardHat, Paintbrush, Store, Heart } from "lucide-react";
import volunteerImage from "../assets/volunteer.jpg";

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
        <img src={volunteerImage} alt="Volunteers framing a house at the build site" className="h-full w-full object-cover" style={{ objectPosition: "center 55%" }} width={1920} height={1080} />
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
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Ways to Help</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                No special skills required. Just bring your willingness to help — we'll provide training, tools, and guidance.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opp, i) => (
              <AnimatedSection key={opp.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-brand">
                  <opp.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{opp.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{opp.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* What to expect */}
          <AnimatedSection delay={0.2}>
            <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">What to Expect</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">Your First Day on Site</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You'll be greeted by our construction supervisor and a crew of friendly volunteers. After a safety briefing and quick tour, you'll jump in on whatever task fits the day — framing a wall, installing insulation, painting trim, or helping with site cleanup.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Bring a water bottle, closed-toe shoes, and weather-appropriate clothing. We'll supply the tools, training, and lunch on most build days.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { n: "1", t: "Sign Up Online", d: "Pick a build date that works for you on the calendar." },
                  { n: "2", t: "Show Up Ready", d: "Arrive at the site with closed-toe shoes and layers." },
                  { n: "3", t: "Get Trained", d: "No experience? No problem. We'll teach you on site." },
                  { n: "4", t: "Build & Belong", d: "Leave with new skills, new friends, and a stronger community." },
                ].map((s) => (
                  <div key={s.n} className="rounded-xl bg-gradient-brand-subtle p-5">
                    <div className="font-heading text-2xl font-bold text-primary">{s.n}</div>
                    <h4 className="mt-2 font-heading font-semibold text-foreground">{s.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Group volunteering */}
          <AnimatedSection delay={0.25}>
            <div className="mt-20 rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Groups & Teams</span>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">Bring Your Company, Church, or Crew</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Corporate teams, church groups, youth organizations, and school clubs are welcome. A group build day is one of the most memorable team-building experiences around — and it puts a roof over a neighbor's head in the process.
                  </p>
                </div>
                <div className="rounded-xl bg-muted p-5">
                  <h4 className="font-heading font-semibold text-foreground">Group Minimums</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Ages 16+ on the build site</li>
                    <li>• Up to 10 volunteers per day</li>
                    <li>• Reserve 2+ weeks in advance</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-16 rounded-3xl bg-gradient-brand p-12 text-center text-primary-foreground shadow-brand-lg">
              <h2 className="font-heading text-3xl font-bold">Ready to Build?</h2>
              <p className="mx-auto mt-4 max-w-xl opacity-90">
                Sign up to volunteer on our next build. We welcome individuals, groups, and corporate teams.
              </p>
              <a
                href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Calendar"
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
