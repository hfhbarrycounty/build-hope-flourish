import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import restoreBuilding from "../assets/restore-building.jpg";

export const Route = createFileRoute("/restore")({
  head: () => ({
    meta: [
      { title: "ReStore — Habitat for Humanity Barry County" },
      { name: "description", content: "Shop new and gently-used building materials at discounted prices. Proceeds support Habitat Barry County home building." },
      { property: "og:title", content: "ReStore — Habitat for Humanity Barry County" },
      { property: "og:description", content: "Shop and donate at our ReStore. Proceeds build homes!" },
    ],
  }),
  component: RestorePage,
});

function RestorePage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={restoreBuilding} alt="Habitat for Humanity ReStore building at 1215 N Broadway" className="h-full w-full object-cover" style={{ objectPosition: "center 15%" }} width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <AnimatedSection>
              <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">ReStore</h1>
              <p className="mt-3 max-w-xl text-lg text-primary-foreground/80">Shop. Donate. Build homes.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground">About the ReStore</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Habitat for Humanity ReStore sells new and gently-used building materials and home improvement products to the community at discounted prices. All proceeds go to Habitat Barry County to help build homes for qualified homebuyers.
                </p>
                <a
                  href="https://www.hastingsrestore.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-all hover:shadow-brand-lg"
                >
                  Visit hastingsrestore.org
                </a>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-border p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-heading font-semibold">Hours</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Wednesday</span><span className="text-foreground">10am – 3pm</span></li>
                    <li className="flex justify-between"><span>Thursday</span><span className="text-foreground">10am – 4pm</span></li>
                    <li className="flex justify-between"><span>Friday</span><span className="text-foreground">10am – 5pm</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span className="text-foreground">10am – 3pm</span></li>
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground">Closed Sun & Mon · Donation pickups on Tuesdays</p>
                </div>

                <div className="rounded-xl border border-border p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    <h3 className="font-heading font-semibold">Location</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">1215 N Broadway, Hastings, MI 49058</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href="tel:2699489998" className="hover:text-foreground">(269) 948-9998</a>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:restore@HastingsReStore.org" className="hover:text-foreground">restore@HastingsReStore.org</a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
