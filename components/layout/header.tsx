"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ctaLink, navLinks, site } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          onClick={close}
          className="shrink-0 font-serif text-2xl tracking-wide text-ink transition-colors hover:text-rose-deep"
        >
          {site.name}
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal tracking-wide text-taupe transition-colors hover:text-rose-deep"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            className="rounded-full bg-rose-deep px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-rose-shadow"
          >
            {ctaLink.label}
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-md p-1.5 text-ink transition-colors hover:text-rose-deep lg:hidden"
        >
          {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-background transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav
          aria-label="Menú móvil"
          className="wrap flex flex-col gap-1 py-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-base text-taupe transition-colors hover:bg-rose/10 hover:text-rose-deep"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            onClick={close}
            className="mt-3 rounded-full bg-rose-deep px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-rose-shadow"
          >
            {ctaLink.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}