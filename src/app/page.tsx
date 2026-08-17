import Hero from "@/components/sections/hero";
import StatsBar from "@/components/sections/stats-bar";
import FeaturedListings from "@/components/sections/featured-listings";
import ValueProp from "@/components/sections/value-prop";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedListings />
      <ValueProp />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
