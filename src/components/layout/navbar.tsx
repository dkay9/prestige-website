"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useFavorites } from "@/lib/favorites-context";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setOpen, hydrated } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 nav-blur transition-all duration-500 ${
        scrolled
          ? "bg-ice-white/85 border-b border-border-soft py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-ink tracking-tight"
        >
          Prestige<span className="text-lavender">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-muted text-sm font-medium tracking-wide hover:text-ink transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setOpen(true)}
            className="relative size-10 rounded-full flex items-center justify-center text-ink-muted hover:text-lavender hover:bg-white transition-colors"
            aria-label="Saved properties"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {hydrated && count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-blush text-white text-[10px] font-semibold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <Button size="sm">Book a viewing</Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="relative size-10 rounded-full flex items-center justify-center text-ink-muted"
            aria-label="Saved properties"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {hydrated && count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-blush text-white text-[10px] font-semibold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-6 py-6 bg-ice-white/95 border-t border-border-soft">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink text-base font-medium py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full">Book a viewing</Button>
          </div>
        </div>
      )}
    </nav>
  );
}