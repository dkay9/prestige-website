"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toggleFavorite, isFavorite } from "@/lib/favorites";
import type { Property } from "@/types";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "#E09AAE" : "none"}
      stroke={filled ? "#E09AAE" : "currentColor"}
      strokeWidth="1.5"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

interface Props {
  property: Property;
  isActive?: boolean;
  onHover?: (id: string | null) => void;
}

export default function PropertyListCard({ property, isActive, onHover }: Props) {
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
    <Link
      href={`/listings/${property.slug}`}
      onMouseEnter={() => onHover?.(property.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`group flex gap-5 p-4 rounded-2xl transition-all duration-300 ${
        isActive
          ? "bg-white shadow-float ring-1 ring-lavender/30"
          : "hover:bg-white hover:shadow-float"
      }`}
    >
      <div className="relative w-40 sm:w-48 shrink-0 aspect-4/3 rounded-xl overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="192px"
        />
        <button
          onClick={handleLike}
          className={`absolute top-2 right-2 size-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 text-ink-muted ${
            liked ? "bg-white" : "bg-white/70"
          }`}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>

      <div className="flex flex-col justify-center min-w-0 py-1">
        <span className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-1">
          {property.type}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink truncate">
          {property.title}
        </h3>
        <p className="text-sm text-ink-muted mb-3 truncate">{property.location}</p>
        <span className="text-base font-semibold text-lavender mb-2">
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
  );
}