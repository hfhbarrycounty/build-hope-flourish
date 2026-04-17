import { createFileRoute, Link } from "@tanstack/react-router";
import HeroSlideshow from "../components/HeroSlideshow";
import AnimatedSection from "../components/AnimatedSection";
import { Home, Users, HardHat, Heart, ChevronDown, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import pillarShelter from "../assets/pillar-shelter.png";
import pillarStrength from "../assets/pillar-strength.png";
import pillarStability from "../assets/pillar-stability.png";
import pillarSelfReliance from "../assets/pillar-self-reliance.png";
import { newsItems } from "../lib/news";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { icon: Home, value: "44+", label: "Homes Built" },
  { icon: Users, value: "35+", label: "Years Serving" },
  { icon: HardHat, value: "1000+", label: "Volunteers" },
  { icon: Heart, value: "100%", label: "Volunteer-Driven" },
];

const pillars = [
  { img: pillarShelter, title: "Shelter", desc: "Safe, affordable housing for families in need" },
  { img: pillarStrength, title: "Strength", desc: "Empowering families through homeownership" },
  { img: pillarStability, title: "Stability", desc: "Building a foundation for family growth" },
  { img: pillarSelfReliance, title: "Self-Reliance", desc: "Keys to independence and opportunity" },
];

function NewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-brand-lg transition-all hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-brand-lg transition-all hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {newsItems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <Link to="/news/$slug" params={{ slug: item.slug }} className="group block w-[340px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-brand">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={680}
                  height={384}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-primary">Read more →</span>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

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

      {/* Mission */}
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
              </AnimatedSection>
            </div>

            {/* Events sidebar - right 2 cols */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
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
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates — full-width carousel */}
      <section className="bg-muted/50 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  Latest Updates
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">News & Progress</h2>
                <p className="mt-2 max-w-lg text-muted-foreground">Follow along as we build homes and transform lives in Barry County.</p>
              </div>
            </div>
          </AnimatedSection>
          <NewsCarousel />
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
                  href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Calendar"
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