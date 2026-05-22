import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const links: { to: string; label: string; hash?: string }[] = [
  { to: "/", label: "Product", hash: "product" },
  { to: "/", label: "Features", hash: "features" },
  { to: "/", label: "Specs", hash: "specs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl container-px h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-lg bg-gradient-accent grid place-items-center shadow-accent">
            <Factory className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className={cn("font-bold text-sm md:text-base", scrolled ? "text-navy" : "text-white")}>
              GAVALTER
            </div>
            <div className={cn("text-[10px] md:text-xs tracking-widest", scrolled ? "text-muted-foreground" : "text-white/70")}>
              INDUSTRIAL SUPPLIES
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "text-sm font-medium transition-colors relative",
                scrolled ? "text-navy hover:text-accent" : "text-white/90 hover:text-white"
              )}
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/quote"
            className="inline-flex items-center rounded-md bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-accent hover:brightness-110 transition"
          >
            Request Quote
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={cn("md:hidden p-2 rounded-md", scrolled ? "text-navy" : "text-white")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-in fade-in slide-in-from-top-2">
          <div className="container-px py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-navy font-medium"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-gradient-accent px-5 py-3 text-sm font-semibold text-white"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
