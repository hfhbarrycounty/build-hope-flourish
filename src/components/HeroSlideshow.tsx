import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slideshow1 from "../assets/slideshow1.jpg";
import slideshow2 from "../assets/slideshow2.jpg";
import slideshow3 from "../assets/slideshow3.jpg";
import slideshow4 from "../assets/slideshow4.jpg";
import slideshow5 from "../assets/slideshow5.jpg";
import slideshow6 from "../assets/slideshow6.jpg";

const slides = [
  { src: slideshow1, alt: "Volunteer group at build site" },
  { src: slideshow2, alt: "Home #45 under construction" },
  { src: slideshow3, alt: "Bradford White team at the ReStore" },
  { src: slideshow4, alt: "Volunteer on the front porch" },
  { src: slideshow5, alt: "Build team on the porch" },
  { src: slideshow6, alt: "Crew working on the roofline" },
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
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
          style={{ scale: 1.05 }}
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
              Habitat for Humanity Barry County — putting God's love into action since 1989. Together, we've built 45 homes for families in need.
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
                href="https://hfhbarrycounty.charityproud.org/VolunteerRegistration/Calendar"
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
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-foreground/40 md:flex" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-foreground/40 md:flex" aria-label="Next slide">
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
