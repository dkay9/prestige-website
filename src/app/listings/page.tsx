"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import PropertyListCard from "@/components/ui/property-list-card";
import { PROPERTIES } from "@/lib/mock-data";
import { parsePrice, formatCompactPrice } from "@/lib/utils";

const PropertyMap = dynamic(() => import("@/components/ui/property-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-3xl bg-white/60 flex items-center justify-center">
      <span className="text-sm text-ink-muted">Loading map…</span>
    </div>
  ),
});

const TYPES = ["All", "Penthouse", "Villa", "Detached House", "Apartment", "Duplex"];
const BEDS = ["Any", "2+", "3+", "4+", "5+"];
const MAX_PRICE = 1_500_000_000;

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [beds, setBeds] = useState("Any");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"list" | "map">("list");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const minBeds = beds === "Any" ? 0 : Number(beds.replace("+", ""));

    return PROPERTIES.filter((p) => {
      if (q && !`${p.title} ${p.location}`.toLowerCase().includes(q)) return false;
      if (type !== "All" && p.type !== type) return false;
      if (p.beds < minBeds) return false;
      if (parsePrice(p.price) > maxPrice) return false;
      return true;
    });
  }, [search, type, beds, maxPrice]);

  const reset = () => {
    setSearch("");
    setType("All");
    setBeds("Any");
    setMaxPrice(MAX_PRICE);
  };

  const hasFilters =
    search !== "" || type !== "All" || beds !== "Any" || maxPrice !== MAX_PRICE;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="line-accent mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-light text-ink tracking-tight mb-3">
            All properties
          </h1>
          <p className="text-ink-muted">
            {filtered.length} {filtered.length === 1 ? "property" : "properties"}{" "}
            available
          </p>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-3xl p-6 shadow-float mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="lg:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2">
                Search
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Title or location…"
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-lavender transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm text-ink bg-white focus:outline-none focus:border-lavender transition-colors"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2">
                Bedrooms
              </label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border-soft text-sm text-ink bg-white focus:outline-none focus:border-lavender transition-colors"
              >
                {BEDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2">
                Max price — {formatCompactPrice(maxPrice)}
              </label>
              <input
                type="range"
                min={50_000_000}
                max={MAX_PRICE}
                step={10_000_000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-lavender"
              />
            </div>

            {hasFilters && (
              <button
                onClick={reset}
                className="text-sm text-lavender font-medium hover:text-lavender-hover transition-colors self-start sm:self-end sm:pb-1"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Mobile view toggle */}
        <div className="lg:hidden flex gap-2 mb-6 p-1 bg-white rounded-full w-fit shadow-float">
          {(["list", "map"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setMobileView(v)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                mobileView === v
                  ? "bg-lavender text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Split view */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* List */}
          <div
            className={`flex flex-col gap-4 ${
              mobileView === "map" ? "hidden lg:flex" : ""
            }`}
          >
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-ink mb-2">
                  No properties match
                </p>
                <p className="text-sm text-ink-muted mb-6">
                  Try widening your search criteria.
                </p>
                <button
                  onClick={reset}
                  className="text-sm text-lavender font-medium hover:text-lavender-hover transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filtered.map((p) => (
                <PropertyListCard
                  key={p.id}
                  property={p}
                  isActive={activeId === p.id}
                  onHover={setActiveId}
                />
              ))
            )}
          </div>

          {/* Map */}
          <div
            className={`${mobileView === "list" ? "hidden lg:block" : ""} lg:sticky lg:top-28 h-[70vh] lg:h-[calc(100vh-9rem)] rounded-3xl overflow-hidden shadow-float`}
          >
            <PropertyMap
              properties={filtered}
              activeId={activeId}
              onMarkerClick={setActiveId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}