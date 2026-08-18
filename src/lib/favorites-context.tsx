"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { getFavorites, toggleFavorite as persist } from "@/lib/favorites";

interface FavoritesContextValue {
  favorites: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  count: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  hydrated: boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(getFavorites());
    setHydrated(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setFavorites(persist(id));
  }, []);

  const has = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggle,
        has,
        count: favorites.length,
        isOpen,
        setOpen,
        hydrated,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return ctx;
}