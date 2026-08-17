"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/ui/animated-section";
import { TESTIMONIALS } from "@/lib/mock-data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <AnimatedSection className="text-center mb-16">
        <div className="line-accent mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink">
          What our clients say
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="max-w-2xl mx-auto text-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-6 opacity-15"
          >
            <path
              d="M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm10 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z"
              fill="#2B2D42"
            />
          </svg>

          <div key={active} className="animate-slide-in">
            <p className="font-display text-2xl md:text-3xl font-normal italic text-ink leading-relaxed mb-8">
              {testimonial.quote}
            </p>
            <p className="font-semibold text-ink text-sm">{testimonial.name}</p>
            <p className="text-ink-muted text-xs mt-1">{testimonial.role}</p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  active === i ? "w-8 bg-lavender" : "w-2 bg-border-softer"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
