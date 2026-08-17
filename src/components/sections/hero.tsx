import Image from "next/image";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-24 lg:pb-0">
      {/* Background blobs */}
      <div className="absolute -top-25 -right-25 size-125 rounded-full bg-[radial-gradient(circle,rgba(167,139,219,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 size-100 rounded-full bg-[radial-gradient(circle,rgba(224,154,174,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-140">
            <div className="line-accent mb-6 animate-fade-up" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-ink mb-6 tracking-tight animate-fade-up-delay-1">
              Find your place{" "}
              <span className="italic font-normal text-lavender">beyond</span>{" "}
              the ordinary
            </h1>
            <p className="text-lg leading-relaxed text-ink-muted mb-10 max-w-115 animate-fade-up-delay-2">
              Curated luxury properties across Nigeria&apos;s most prestigious
              addresses. Every home tells a story — let us help you write yours.
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-up-delay-3">
              <Button>Explore properties</Button>
              <Button variant="outline">Our story</Button>
            </div>
          </div>

          {/* Right: images */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-3/4 w-full max-w-120 ml-auto rounded-3xl overflow-hidden shadow-hero">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Luxury interior"
                fill
                className="object-cover animate-fade-in-slow"
                sizes="(max-width: 1024px) 0px, 480px"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-4 w-45 aspect-square rounded-2xl overflow-hidden shadow-float ring-8 ring-ice-white animate-float">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80"
                alt="Property detail"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-late absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-lavender">
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-lavender to-transparent" />
      </div>
    </section>
  );
}
