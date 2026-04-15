import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/what-we-do" as const, label: "What We Do" },
  { to: "/restore" as const, label: "ReStore" },
  { to: "/volunteer" as const, label: "Volunteer" },
  { to: "/donate" as const, label: "Donate" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-primary-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:2699489939" className="flex items-center gap-1 transition-opacity hover:opacity-80">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Office:</span> (269) 948-9939
            </a>
            <a href="tel:2699489998" className="flex items-center gap-1 transition-opacity hover:opacity-80">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">ReStore:</span> (269) 948-9998
            </a>
          </div>
          <a href="mailto:office@hfhbarrycounty.org" className="flex items-center gap-1 transition-opacity hover:opacity-80">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">office@hfhbarrycounty.org</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-lg font-bold text-foreground">Habitat for Humanity</div>
              <div className="text-xs text-muted-foreground">Barry County</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-[13px] h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="https://hfhbarrycounty.charityproud.org/Donate"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition-all hover:shadow-brand-lg hover:brightness-110"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border lg:hidden"
            >
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://hfhbarrycounty.charityproud.org/Donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Donate Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
