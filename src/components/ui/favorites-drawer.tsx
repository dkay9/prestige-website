"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useFavorites } from "@/lib/favorites-context";
import { PROPERTIES } from "@/lib/mock-data";
import Button from "@/components/ui/button";

export default function FavoritesDrawer() {
  const { favorites, toggle, isOpen, setOpen } = useFavorites();

  const saved = PROPERTIES.filter((p) => favorites.includes(p.id));

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, setOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-90 bg-ink/40 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-100 w-full sm:w-105 bg-ice-white shadow-hero flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border-soft shrink-0">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Saved properties
                </h2>
                <p className="text-xs text-ink-muted mt-0.5">
                  {saved.length} {saved.length === 1 ? "property" : "properties"}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="size-10 rounded-full hover:bg-white flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                aria-label="Close saved properties"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {saved.length === 0 ? (
                <div className="text-center py-20">
                  <div className="size-14 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E09AAE" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    Nothing saved yet
                  </h3>
                  <p className="text-sm text-ink-muted mb-8 max-w-xs mx-auto leading-relaxed">
                    Tap the heart on any property to keep it here for later.
                  </p>
                  <Link href="/listings" onClick={() => setOpen(false)}>
                    <Button variant="outline" size="sm">
                      Browse properties
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {saved.map((p) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.3 }}
                      className="group relative flex gap-4 p-3 rounded-2xl bg-white shadow-float"
                    >
                      <Link
                        href={`/listings/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="relative w-24 shrink-0 aspect-4/3 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </Link>

                      <div className="flex flex-col justify-center min-w-0 pr-8">
                        <Link
                          href={`/listings/${p.slug}`}
                          onClick={() => setOpen(false)}
                          className="font-display text-lg font-semibold text-ink truncate hover:text-lavender transition-colors"
                        >
                          {p.title}
                        </Link>
                        <p className="text-xs text-ink-muted truncate mb-1">
                          {p.location}
                        </p>
                        <span className="text-sm font-semibold text-lavender">
                          {p.price}
                        </span>
                      </div>

                      <button
                        onClick={() => toggle(p.id)}
                        className="absolute top-3 right-3 size-7 rounded-full flex items-center justify-center text-ink-faint hover:text-blush hover:bg-blush/10 transition-colors"
                        aria-label={`Remove ${p.title} from saved`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {saved.length > 0 && (
              <div className="px-6 py-5 border-t border-border-soft shrink-0">
                <Button className="w-full">Enquire about these</Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}