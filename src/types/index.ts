export interface Property {
  id: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: "Penthouse" | "Villa" | "Detached House" | "Apartment" | "Duplex" | "Land" | "Commercial";
  image: string;
  images?: string[];
  description?: string;
  amenities?: string[];
  featured: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export interface SiteSettings {
  companyName: string;
  logo?: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}
