"use client";

import { useState, useEffect } from "react";
import { Phone, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hem" className="flex items-center gap-1">
            <span className="font-heading text-base sm:text-xl md:text-2xl font-bold text-nature-800">
              Grens
            </span>
            <span className="hidden sm:inline font-heading text-xl md:text-2xl font-bold text-nature-800">
              Trädfällning
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-nature-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-nature-700 hover:text-nature-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a
              href="#kontakt"
              className={buttonVariants({ className: "hidden md:inline-flex bg-amber-600 hover:bg-amber-700 text-white font-semibold" })}
            >
              Begär offert
            </a>

            {/* Mobile: phone icon + hamburger */}
            <a
              href={COMPANY.phoneHref}
              className="sm:hidden p-3 -m-1 text-nature-700"
              aria-label="Ring oss"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-3 -m-1 text-foreground"
              aria-label="Öppna meny"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
