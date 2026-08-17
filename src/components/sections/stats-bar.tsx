import AnimatedSection from "@/components/ui/animated-section";
import { STATS } from "@/lib/mock-data";

export default function StatsBar() {
  return (
    <section className="border-y border-border-soft">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
            <div className="font-display text-4xl font-light text-ink tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-ink-muted tracking-widest uppercase mt-2 font-medium">
              {stat.label}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
