import type { Property, Testimonial, TeamMember } from "@/types";

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "The Meridian Penthouse",
    slug: "the-meridian-penthouse",
    location: "Victoria Island, Lagos",
    price: "₦450,000,000",
    beds: 4,
    baths: 5,
    sqft: "6,200",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description:
      "A stunning 4-bedroom penthouse perched atop one of Victoria Island's most exclusive towers. Floor-to-ceiling windows offer uninterrupted views of the Lagos lagoon, while Italian marble finishes and smart home integration define every detail.",
    amenities: ["Swimming pool", "Private elevator", "Smart home", "Concierge", "Gym", "Wine cellar"],
    featured: true,
    coordinates: { lat: 6.4281, lng: 3.4219 },
  },
  {
    id: "2",
    title: "Azure Waterfront Villa",
    slug: "azure-waterfront-villa",
    location: "Banana Island, Lagos",
    price: "₦1,200,000,000",
    beds: 6,
    baths: 7,
    sqft: "12,400",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    description:
      "An architectural masterpiece on Banana Island's waterfront. This 6-bedroom villa features a private dock, infinity pool overlooking the lagoon, and interiors designed by a leading European studio.",
    amenities: ["Private dock", "Infinity pool", "Home cinema", "Staff quarters", "Landscaped gardens", "Security"],
    featured: true,
    coordinates: { lat: 6.4565, lng: 3.4147 },
  },
  {
    id: "3",
    title: "Ivory Court Residence",
    slug: "ivory-court-residence",
    location: "Maitama, Abuja",
    price: "₦320,000,000",
    beds: 5,
    baths: 4,
    sqft: "8,100",
    type: "Detached House",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    description:
      "Set within Maitama's most sought-after enclave, Ivory Court offers refined family living across three floors. Mature trees frame the approach, and the open-plan living areas flow onto a private terrace.",
    amenities: ["Terrace", "Garden", "Garage (3 cars)", "Backup power", "Borehole", "CCTV"],
    featured: true,
    coordinates: { lat: 9.0833, lng: 7.4833 },
  },
  {
    id: "4",
    title: "Skyline Loft Apartment",
    slug: "skyline-loft-apartment",
    location: "Ikoyi, Lagos",
    price: "₦180,000,000",
    beds: 3,
    baths: 3,
    sqft: "3,800",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    description:
      "A contemporary 3-bedroom loft in the heart of Ikoyi. Double-height ceilings, polished concrete accents, and a chef's kitchen make this ideal for the design-conscious professional.",
    amenities: ["Rooftop lounge", "Gym", "Parking", "24/7 security"],
    featured: false,
    coordinates: { lat: 6.4474, lng: 3.4347 },
  },
  {
    id: "5",
    title: "Savannah Estate Duplex",
    slug: "savannah-estate-duplex",
    location: "Asokoro, Abuja",
    price: "₦275,000,000",
    beds: 4,
    baths: 5,
    sqft: "5,600",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    description:
      "A beautifully finished duplex in a gated community within Asokoro. Modern finishes, generous outdoor space, and proximity to diplomatic quarters make this perfect for families and professionals alike.",
    amenities: ["Gated community", "Garden", "Boys' quarters", "Backup power", "Borehole"],
    featured: false,
    coordinates: { lat: 9.0417, lng: 7.5236 },
  },
  {
    id: "6",
    title: "Oniru Beachfront Condo",
    slug: "oniru-beachfront-condo",
    location: "Oniru, Lagos",
    price: "₦210,000,000",
    beds: 3,
    baths: 3,
    sqft: "4,100",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description:
      "Wake up to ocean breezes in this beachfront condominium. Open-plan living, a wrap-around balcony, and direct beach access define this coastal retreat.",
    amenities: ["Beach access", "Balcony", "Pool", "Gym", "Concierge"],
    featured: false,
    coordinates: { lat: 6.4319, lng: 3.4447 },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Adaeze Okonkwo",
    role: "Homeowner, Banana Island",
    quote:
      "From the first viewing to handing over the keys, every step felt personal. They understood exactly what we were looking for.",
  },
  {
    id: "2",
    name: "Emeka Udoh",
    role: "Investor, Victoria Island",
    quote:
      "Their portfolio consistently delivers premium properties in the most desirable locations. A trusted partner for serious real estate.",
  },
  {
    id: "3",
    name: "Fatima Al-Hassan",
    role: "Homeowner, Maitama",
    quote:
      "We relocated from London and they made finding our dream home in Abuja effortless. Exceptional service from start to finish.",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Tunde Adeyemi",
    title: "Founder & CEO",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "20 years in Nigerian real estate. Former VP at a leading property development firm.",
  },
  {
    id: "2",
    name: "Ngozi Eze",
    title: "Head of Sales",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    bio: "Specialises in luxury residential sales across Lagos and Abuja's prime markets.",
  },
  {
    id: "3",
    name: "Yusuf Bello",
    title: "Head of Acquisitions",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Sources and evaluates every property in the portfolio. Former architect with an eye for quality.",
  },
];

export const STATS = [
  { value: "240+", label: "Properties sold" },
  { value: "₦85B", label: "Total portfolio value" },
  { value: "12", label: "Years of excellence" },
  { value: "98%", label: "Client satisfaction" },
];
