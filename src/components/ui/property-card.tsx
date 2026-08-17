"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { toggleFavorite, isFavorite } from "@/lib/favorites";
import type { Property } from "@/types";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "#E09AAE" : "none"}
      stroke={filled ? "#E09AAE" : "currentColor"}
      strokeWidth="1.5"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isFavorite(property.id));
  }, [property.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property.id);
    setLiked((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/listings/${property.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <button
            onClick={handleLike}
            className={`absolute top-4 right-4 size-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 text-ink-muted ${
              liked ? "bg-white" : "bg-white/70"
            }`}
            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
          >
            <HeartIcon filled={liked} />
          </button>

          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs tracking-wider uppercase font-medium bg-white/90 text-ink">
            {property.type}
          </span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-ink mb-1">
          {property.title}
        </h3>
        <p className="text-sm text-ink-muted mb-3">{property.location}</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="text-lg font-semibold text-lavender">
            {property.price}
          </span>
          <div className="flex gap-2 text-xs text-ink-muted">
            <span>{property.beds} beds</span>
            <span>·</span>
            <span>{property.baths} baths</span>
            <span>·</span>
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
