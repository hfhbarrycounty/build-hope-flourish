import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import headerLogo from "../assets/header-logo.jpg";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-primary-foreground">
                <img src={headerLogo} alt="Habitat for Humanity Barry County" className="h-full w-full object-contain" />
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
                href="https://www.facebook.com/Habitat.Barry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/40"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Habitat_org"
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
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-50" />
                <a href="mailto:restore@HastingsReStore.org" className="break-all opacity-70 hover:opacity-100">restore@HastingsReStore.org</a>
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

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="mb-6 rounded-lg bg-primary-foreground/5 p-5 text-xs leading-relaxed opacity-70">
            <p className="mb-1 font-heading font-semibold uppercase tracking-wider opacity-80">Non-proselytizing policy</p>
            <p>
              Habitat for Humanity and its affiliate organizations will not proselytize. Nor will Habitat work with entities or individuals who insist on proselytizing as part of their work with Habitat. This means that Habitat will not offer assistance on the expressed or implied condition that people must adhere to or convert to a particular faith or listen and respond to messaging designed to induce conversion to a particular faith.
            </p>
          </div>
        <div className="flex flex-col items-center justify-between gap-4 text-xs opacity-50 sm:flex-row">
          <p>© 2026 Barry County Habitat For Humanity &nbsp;|&nbsp; ALL RIGHTS RESERVED &nbsp;|&nbsp; CREATED BY iFixTech</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/Habitat.Barry" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="https://x.com/Habitat_org" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <XIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
