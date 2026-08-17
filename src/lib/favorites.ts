const STORAGE_KEY = "prestige-favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string): string[] {
  const current = getFavorites();
  const updated = current.includes(id)
    ? current.filter((fav) => fav !== id)
    : [...current, id];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}
