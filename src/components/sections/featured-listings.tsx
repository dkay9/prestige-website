import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import PropertyCard from "@/components/ui/property-card";
import { PROPERTIES } from "@/lib/mock-data";

export default function FeaturedListings() {
  const featured = PROPERTIES.filter((p) => p.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="line-accent mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-normal text-ink tracking-tight">
            Featured properties
          </h2>
        </div>
        <Link
          href="/listings"
          className="text-lavender text-sm font-medium tracking-wide flex items-center gap-2 hover:gap-3 transition-all duration-300 shrink-0"
        >
          View all listings
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((property, i) => (
          <PropertyCard key={property.id} property={property} index={i} />
        ))}
      </div>
    </section>
  );
}
