import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/ui/gallery";
import PropertyCard from "@/components/ui/property-card";
import Button from "@/components/ui/button";
import AnimatedSection from "@/components/ui/animated-section";
import { PROPERTIES } from "@/lib/mock-data";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) return { title: "Property not found — Prestige" };

  return {
    title: `${property.title} — Prestige`,
    description: property.description,
  };
}

const SPECS = [
  { key: "beds", label: "Bedrooms" },
  { key: "baths", label: "Bathrooms" },
  { key: "sqft", label: "Square feet" },
  { key: "type", label: "Property type" },
] as const;

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) notFound();

  const gallery = property.images?.length ? property.images : [property.image];
  const related = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/listings"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-lavender transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to listings
        </Link>

        {/* Gallery */}
        <AnimatedSection className="mb-12">
          <Gallery images={gallery} title={property.title} />
        </AnimatedSection>

        {/* Detail grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Left column */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="text-xs uppercase tracking-widest text-ink-faint font-medium">
                {property.type}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-light text-ink tracking-tight mt-2 mb-3">
                {property.title}
              </h1>
              <p className="text-ink-muted mb-8">{property.location}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-border-soft mb-10">
                {SPECS.map((spec) => (
                  <div key={spec.key}>
                    <div className="font-display text-3xl font-light text-ink">
                      {property[spec.key]}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mt-1">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-normal text-ink mb-4">
                About this property
              </h2>
              <p className="text-ink-muted leading-relaxed mb-12">
                {property.description}
              </p>
            </AnimatedSection>

            {property.amenities && property.amenities.length > 0 && (
              <AnimatedSection delay={0.15}>
                <h2 className="font-display text-3xl font-normal text-ink mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex gap-3 items-center">
                      <div className="size-7 rounded-lg bg-lavender/10 flex items-center justify-center shrink-0">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A78BDB" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-sm text-ink">{amenity}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sticky sidebar */}
          <AnimatedSection delay={0.2}>
            <div className="lg:sticky lg:top-28 bg-white rounded-3xl p-8 shadow-float">
              <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-2">
                Asking price
              </div>
              <div className="font-display text-4xl font-light text-lavender mb-8">
                {property.price}
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <Button className="w-full">Schedule a viewing</Button>
                <Button variant="outline" className="w-full">
                  Request details
                </Button>
              </div>

              <div className="pt-6 border-t border-border-soft">
                <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                  Speak with our team about this property.
                </p>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-3 text-sm text-ink hover:text-lavender transition-colors"
                >
                  <div className="size-9 rounded-full bg-lavender/10 flex items-center justify-center shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BDB" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <AnimatedSection className="mb-10">
              <div className="line-accent mb-4" />
              <h2 className="font-display text-4xl font-normal text-ink tracking-tight">
                You might also like
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}