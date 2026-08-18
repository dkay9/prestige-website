import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import Button from "@/components/ui/button";
import { TEAM, STATS } from "@/lib/mock-data";

export const metadata = {
  title: "About — Prestige",
  description:
    "Twelve years curating Nigeria's finest properties for discerning homeowners and investors.",
};

const VALUES = [
  {
    title: "Discretion",
    body: "Many of our finest listings never reach the open market. We handle every transaction with the privacy our clients expect.",
  },
  {
    title: "Judgement",
    body: "We turn away more properties than we accept. If it doesn't meet our standard, it doesn't carry our name.",
  },
  {
    title: "Longevity",
    body: "We are not transactional. Most of our business comes from clients we sold to years ago, and the people they send us.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="line-accent mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight leading-tight mb-6">
              Property is personal.{" "}
              <span className="italic text-lavender">We treat it that way.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              Prestige was founded in 2014 on a straightforward premise: that
              buying a home in Nigeria should not feel like a gamble. At the
              time, the luxury market was opaque, informal, and difficult to
              navigate even for seasoned buyers.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Twelve years later, we have handled over two hundred transactions
              across Lagos and Abuja. Our approach has not changed: inspect
              everything, represent honestly, and stay in the relationship long
              after the keys change hands.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative aspect-4/5 w-full max-w-120 mx-auto lg:ml-auto lg:mr-0 rounded-3xl overflow-hidden shadow-hero">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="A Prestige property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border-soft mb-24">
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

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <AnimatedSection className="max-w-2xl mb-14">
          <div className="line-accent mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-normal text-ink tracking-tight mb-4">
            How we work
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Three principles shape every decision we make on behalf of a client.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10">
          {VALUES.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.12}>
              <div className="font-display text-5xl font-light text-lavender/30 mb-4">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {value.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-7xl mx-auto px-6 mb-24 scroll-mt-28">
        <AnimatedSection className="max-w-2xl mb-14">
          <div className="line-accent mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-normal text-ink tracking-tight mb-4">
            The team
          </h2>
          <p className="text-ink-muted leading-relaxed">
            A small team by design. Every client works directly with a principal.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 0.12}>
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-5 shadow-float">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-lavender font-medium mt-1 mb-3">
                {member.title}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {member.bio}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 md:px-20 md:py-20 text-center">
            <div className="absolute -top-50 -right-50 size-150 rounded-full bg-[radial-gradient(circle,rgba(167,139,219,0.12)_0%,transparent_70%)] pointer-events-none" />
            <h2 className="relative z-10 font-display text-4xl md:text-5xl font-normal text-ice-white mb-4 leading-tight">
              Let&apos;s talk about what you&apos;re looking for
            </h2>
            <p className="relative z-10 text-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
              Whether you are buying, selling, or simply exploring the market,
              we are happy to share what we know.
            </p>
            <Link href="/contact" className="relative z-10 inline-block">
              <Button variant="white" size="lg">
                Get in touch
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}