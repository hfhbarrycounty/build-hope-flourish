import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-heading text-lg font-bold">Habitat for Humanity</div>
                <div className="text-sm opacity-70">Barry County</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Seeking to put God's love into action, Habitat for Humanity brings people together to build homes, communities and hope.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/HabitatBarryCounty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/40"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/40"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider opacity-50">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="opacity-70 transition-opacity hover:opacity-100">About Us</Link></li>
              <li><Link to="/what-we-do" className="opacity-70 transition-opacity hover:opacity-100">What We Do</Link></li>
              <li><Link to="/restore" className="opacity-70 transition-opacity hover:opacity-100">ReStore</Link></li>
              <li><Link to="/volunteer" className="opacity-70 transition-opacity hover:opacity-100">Volunteer</Link></li>
              <li><Link to="/donate" className="opacity-70 transition-opacity hover:opacity-100">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider opacity-50">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-50" />
                <span className="opacity-70">1215 N Broadway, Hastings, MI 49058</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-50" />
                <a href="tel:2699489939" className="opacity-70 hover:opacity-100">Office: (269) 948-9939</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-50" />
                <a href="tel:2699489998" className="opacity-70 hover:opacity-100">ReStore: (269) 948-9998</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-50" />
                <a href="mailto:office@hfhbarrycounty.org" className="opacity-70 hover:opacity-100">office@hfhbarrycounty.org</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider opacity-50">ReStore Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-70"><Clock className="h-4 w-4 shrink-0 opacity-50" />Wed: 10am – 3pm</li>
              <li className="flex items-center gap-2 opacity-70"><Clock className="h-4 w-4 shrink-0 opacity-50" />Thu: 10am – 4pm</li>
              <li className="flex items-center gap-2 opacity-70"><Clock className="h-4 w-4 shrink-0 opacity-50" />Fri: 10am – 5pm</li>
              <li className="flex items-center gap-2 opacity-70"><Clock className="h-4 w-4 shrink-0 opacity-50" />Sat: 10am – 3pm</li>
            </ul>
            <p className="mt-3 text-xs opacity-50">Closed Sun & Mon · Pickups on Tuesdays</p>
            <p className="mt-2 text-xs opacity-50">Appointments: 2:30pm Friday</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs opacity-50 sm:flex-row">
          <p>© 2026 Barry County Habitat For Humanity &nbsp;|&nbsp; ALL RIGHTS RESERVED &nbsp;|&nbsp; CREATED BY JPIXEL</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/HabitatBarryCounty" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <XIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
