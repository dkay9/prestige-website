import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FavoritesDrawer from "@/components/ui/favorites-drawer";
import { FavoritesProvider } from "@/lib/favorites-context";

export const metadata: Metadata = {
  title: "Prestige — Luxury Real Estate",
  description:
    "Curated luxury properties across Nigeria's most prestigious addresses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ice-white text-ink antialiased">
        <FavoritesProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FavoritesDrawer />
        </FavoritesProvider>
      </body>
    </html>
  );
}