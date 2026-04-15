import { createFileRoute } from "@tanstack/react-router";
import HeroSlideshow from "../components/HeroSlideshow";
import AnimatedSection from "../components/AnimatedSection";
import { Home, Users, HardHat, Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import pillarShelter from "../assets/pillar-shelter.png";
import pillarStrength from "../assets/pillar-strength.png";
import pillarStability from "../assets/pillar-stability.png";
import pillarSelfReliance from "../assets/pillar-self-reliance.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { icon: Home, value: "44+", label: "Homes Built" },
  { icon: Users, value: "35+", label: "Years Serving" },
  { icon: HardHat, value: "1000+", label: "Volunteers" },
  { icon: Heart, value: "100%", label: "Volunteer-Driven" },
];

const newsItems = [
  {
    title: "Painting and Trim Underway!",
    date: "January 20, 2026",
    excerpt: "Cabinets and flooring installed — Home #45 is really looking close to done!",
  },
  {
    title: "Construction Update: Home #45",
    date: "December 16, 2025",
    excerpt: "The fourth green inspection sticker has been placed, marking a major milestone.",
  },
  {
    title: "Lake Trust Gift Received",
    date: "March 17, 2025",
    excerpt: "A generous $23,455 donation from Lake Trust Credit Union's Home Loan Giveback program.",
  },
];

const pillars = [
  { img: pillarShelter, title: "Shelter", desc: "Safe, affordable housing for families in need" },
  { img: pillarStrength, title: "Strength", desc: "Empowering families through homeownership" },
  { img: pillarStability, title: "Stability", desc: "Building a foundation for family growth" },
  { img: pillarSelfReliance, title: "Self-Reliance", desc: "Keys to independence and opportunity" },
];

function Index() {
  return (
    <>
      <HeroSlideshow />

      {/* Stats band */}
      <section className="relative -mt-16 z-10 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="rounded-xl bg-card p-6 text-center shadow-brand transition-all hover:-translate-y-1 hover:shadow-brand-lg">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <div className="font-heading text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Events/News */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Mission - left 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Our Mission
                </span>
                <h2 className="mt-6 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  About Habitat for Humanity Barry County
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Habitat for Humanity Barry County was incorporated on May 8, 1989 and since that time we have built 44 new homes in partnership with low-income Barry County families.
                  </p>
                  <p className="text-lg font-medium italic text-foreground/80">
                    "Seeking to put God's love into action, Habitat for Humanity brings people together to build homes, communities and hope."
                  </p>
                  <p>
                    We are a Christian ministry run by a volunteer Board of Directors. Aside from a few key staff people, we rely on volunteer labor in the ReStore and on the construction site. Our vision is a world where everyone has a decent place to live.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/about" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-all hover:shadow-brand-lg hover:brightness-110">
                    Learn More
                  </a>
                  <a href="/what-we-do" className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                    Our Programs
                  </a>
                </div>
                {/* Animated down arrow */}
                <div className="mt-10 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-primary/60"
                  >
                    <ChevronDown className="h-8 w-8" />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>

            {/* Events & News sidebar - right 2 cols */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                  {/* Events section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        📅 Events
                      </span>
                    </div>
                    <a
                      href="https://www.facebook.com/events/949489477586902"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl bg-gradient-brand-subtle p-4 transition-all hover:shadow-brand hover:-translate-y-0.5"
                    >
                      <span className="inline-block rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">Upcoming</span>
                      <h4 className="mt-2 font-heading font-semibold text-foreground">House #45 Dedication</h4>
                      <p className="mt-1 text-sm text-muted-foreground">February 25, 2026 at 7 PM — 1201 N Broadway, Hastings</p>
                      <span className="mt-2 inline-block text-xs font-semibold text-primary">View on Facebook →</span>
                    </a>
                    <a
                      href="https://www.facebook.com/Habitat.Barry/events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      See All Events on Facebook →
                    </a>
                  </div>

                  {/* News section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                        📰 News
                      </span>
                    </div>
                    <div className="space-y-4">
                      {newsItems.map((item) => (
                        <div key={item.title} className="border-b border-border pb-4 last:border-0 last:pb-0">
                          <div className="text-xs text-muted-foreground">{item.date}</div>
                          <h4 className="mt-1 font-heading font-semibold text-foreground">{item.title}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{item.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gradient-brand-subtle px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Building Strength & Stability
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Your support helps families build long-term financial security with an affordable, stable home.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="group rounded-2xl bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-brand">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110">
                    <img src={pillar.img} alt={pillar.title} className="h-20 w-20 object-contain" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-brand p-12 text-center text-primary-foreground shadow-brand-lg md:p-16">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Help Us Build the Next Home
              </h2>
              <p className="mx-auto mt-4 max-w-xl opacity-90">
                Our next home project needs your support. Whether you donate, volunteer, or shop at the ReStore — every bit counts.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://hfhbarrycounty.charityproud.org/Donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-card px-8 py-3.5 font-semibold text-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Donate Now
                </a>
                <a
                  href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Index/?activity=53253&date=8/6/2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-primary-foreground/40 px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:border-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  Volunteer to Build
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
