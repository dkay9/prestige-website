"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  return (
    <>
      {/* Main image */}
      <button
        onClick={() => setOpen(true)}
        className="relative w-full aspect-16/10 rounded-3xl overflow-hidden shadow-hero group cursor-zoom-in block"
      >
        <Image
          src={images[index]}
          alt={`${title} — image ${index + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 1200px"
          priority
        />
        <span className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-ink">
          {index + 1} / {images.length} — click to expand
        </span>
      </button>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-28 aspect-4/3 rounded-xl overflow-hidden transition-all duration-300 ${
                i === index
                  ? "ring-2 ring-lavender ring-offset-2 ring-offset-ice-white"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-100 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in-slow"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl aspect-16/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} — image ${index + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <span className="absolute bottom-6 text-white/60 text-sm">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}