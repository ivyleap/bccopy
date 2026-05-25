"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "事業", href: "#services" },
  { label: "会社", href: "#about" },
  { label: "採用", href: "#recruit" },
  { label: "お知らせ", href: "#news" },
  { label: "アクセス", href: "#access" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-serif text-xl md:text-2xl tracking-tight">
          BC&nbsp;Partners
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wider uppercase text-foreground/80">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-wider uppercase border border-foreground/80 hover:bg-foreground hover:text-background transition-colors px-5 py-2.5"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
