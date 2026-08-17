import Link from "next/link";

const FOOTER_COLS = [
  {
    title: "Properties",
    links: [
      { label: "Buy", href: "/listings?action=buy" },
      { label: "Rent", href: "/listings?action=rent" },
      { label: "New developments", href: "/listings?type=new" },
      { label: "Land", href: "/listings?type=land" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/about#team" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "WhatsApp", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-ink"
            >
              Prestige<span className="text-lavender">.</span>
            </Link>
            <p className="text-ink-muted text-sm mt-4 leading-relaxed max-w-xs">
              Curating Nigeria&apos;s finest properties for discerning homeowners
              and investors.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-ink tracking-widest uppercase mb-5">
                {col.title}
              </h4>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-ink-muted text-sm hover:text-lavender transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border-soft pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-ink-faint text-xs">
            © {new Date().getFullYear()} Prestige. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-ink-faint text-xs hover:text-ink-muted transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
