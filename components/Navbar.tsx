"use client";

import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Organisasi", href: "#organisasi" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pendidikan", href: "#pendidikan" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("tentang");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["tentang", "pengalaman", "organisasi", "keahlian", "pendidikan", "kontak"];
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md shadow-[0_2px_12px_rgba(44,30,22,0.08)]"
          : "bg-bg-primary/90 backdrop-blur-sm shadow-[0_1px_8px_rgba(44,30,22,0.06)]"
      }`}
    >
      <div className="h-20 max-w-300 mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-sm">
          <a
            href="#tentang"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("tentang");
            }}
            className="font-headline-sm text-headline-sm text-text-primary tracking-tight font-bold hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>Mufliha Sobrina</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`font-label-md text-label-md transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-on-surface-variant hover:text-text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("kontak");
            }}
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-2.5 rounded-full shadow-[0_4px_14px_rgba(123,88,67,0.25)] hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Hubungi Saya
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary hover:bg-bg-surface transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-bg-primary/98 backdrop-blur-xl px-margin-mobile py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className={`px-4 py-2.5 rounded-xl font-label-md text-label-md transition-colors ${
                    isActive
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "text-text-primary hover:bg-bg-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-border-subtle/60 mt-1">
              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("kontak");
                }}
                className="w-full inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-3 rounded-full shadow-md hover:bg-primary transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
