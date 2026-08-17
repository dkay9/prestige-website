import Image from "next/image";
import AnimatedSection from "@/components/ui/animated-section";

const POINTS = [
  {
    title: "Personally vetted",
    desc: "Every property inspected and approved by our team",
  },
  {
    title: "End-to-end service",
    desc: "From first viewing to final handover, we handle everything",
  },
  {
    title: "Market intelligence",
    desc: "Data-driven pricing and neighbourhood insights",
  },
];

export default function ValueProp() {
  return (
    <section className="bg-ink relative overflow-hidden">
      <div className="absolute -top-50 -right-50 size-150 rounded-full bg-[radial-gradient(circle,rgba(167,139,219,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="h-0.5 w-12 rounded-sm mb-6 bg-linear-to-r from-lavender to-sky" />
          <h2 className="font-display text-4xl md:text-5xl font-normal text-ice-white leading-tight mb-6">
            A different kind of{" "}
            <span className="italic text-blush">real estate</span> experience
          </h2>
          <p className="text-white/50 leading-relaxed mb-10 max-w-lg">
            We don&apos;t just list properties. We curate lifestyles. Every home
            in our portfolio has been personally vetted for quality, location,
            and that intangible feeling of coming home.
          </p>

          <div className="flex flex-col gap-6">
            {POINTS.map((point, i) => (
              <AnimatedSection
                key={point.title}
                delay={i * 0.12}
                className="flex gap-4 items-start"
              >
                <div className="size-8 rounded-xl bg-lavender/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A78BDB"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-ice-white font-medium text-base mb-1">
                    {point.title}
                  </div>
                  <div className="text-white/40 text-sm">{point.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative aspect-4/5 w-full max-w-120 mx-auto lg:ml-auto lg:mr-0 rounded-3xl overflow-hidden shadow-dark">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
              alt="Luxury property"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
