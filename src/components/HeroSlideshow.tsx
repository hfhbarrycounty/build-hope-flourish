import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder slides — replace src values with real images later
const slides = [
  { src: "https://placehold.co/1920x1080/00afb7/ffffff?text=Slide+1", alt: "Habitat for Humanity Barry County" },
  { src: "https://placehold.co/1920x1080/0d8f95/ffffff?text=Slide+2", alt: "Community building" },
  { src: "https://placehold.co/1920x1080/c4d600/333333?text=Slide+3", alt: "Volunteers at work" },
  { src: "https://placehold.co/1920x1080/00afb7/ffffff?text=Slide+4", alt: "Home construction" },
  { src: "https://placehold.co/1920x1080/0d8f95/ffffff?text=Slide+5", alt: "Family with new home" },
  { src: "https://placehold.co/1920x1080/c4d600/333333?text=Slide+6", alt: "ReStore" },
  { src: "https://placehold.co/1920x1080/00afb7/ffffff?text=Slide+7", alt: "Volunteer group" },
  { src: "https://placehold.co/1920x1080/0d8f95/ffffff?text=Slide+8", alt: "Home dedication" },
  { src: "https://placehold.co/1920x1080/c4d600/333333?text=Slide+9", alt: "Roofing work" },
  { src: "https://placehold.co/1920x1080/00afb7/ffffff?text=Slide+10", alt: "Neighborhood" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Building Homes,{" "}
              <span className="text-accent">Communities</span>{" "}
              & Hope
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Habitat for Humanity Barry County — putting God's love into action since 1989. Together, we've built 44 homes for families in need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://hfhbarrycounty.charityproud.org/Donate"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-brand transition-all hover:shadow-brand-lg hover:brightness-110"
              >
                Donate Now
              </a>
              <a
                href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Index/?activity=53253&date=8/6/2025"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
              >
                Volunteer
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-foreground/40" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-foreground/40" aria-label="Next slide">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
