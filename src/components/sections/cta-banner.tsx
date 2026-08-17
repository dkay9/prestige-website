import AnimatedSection from "@/components/ui/animated-section";
import Button from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <AnimatedSection>
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-lavender to-sky px-8 py-16 md:px-20 md:py-24 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />

          <h2 className="relative z-10 font-display text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
            Ready to find your dream home?
          </h2>
          <p className="relative z-10 text-white/80 max-w-lg mx-auto mb-10 leading-relaxed">
            Let our team guide you to the perfect property. Schedule a private
            consultation today.
          </p>
          <Button variant="white" size="lg" className="relative z-10">
            Schedule a consultation
          </Button>
        </div>
      </section>
    </AnimatedSection>
  );
}
