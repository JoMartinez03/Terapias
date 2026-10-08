"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ctaLink, navLinks, site } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

/** Sección de inicio que identifica a cada link del nav. */
const sectionByHref: Record<string, string> = {
  "/#servicios": "servicios",
  "/#programas": "programas",
  "/sobre-mi": "sobre-mi",
};

/** Link (por href) al que pertenece cada sección (usado para posicionar la barra). */
const hrefBySection = Object.fromEntries(
  Object.entries(sectionByHref).map(([href, section]) => [section, href]),
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [bar, setBar] = useState<{
    left: number;
    width: number;
    top: number;
  } | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const close = () => setOpen(false);

  /** Sección efectivamente activa según página y scrollspy. */
  const activeSection =
    pathname === "/sobre-mi"
      ? "sobre-mi"
      : pathname === "/"
        ? active
        : null;

  /** Posiciona la barra bajo el link activo, relativo al nav. */
  const updateBar = useCallback((section: string | null) => {
    const nav = navRef.current;
    const href = section ? hrefBySection[section] : null;
    const el = href ? linkRefs.current[href] : null;
    if (!nav || !section || !el) {
      setBar(null);
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setBar({
      left: elRect.left - navRect.left,
      width: elRect.width,
      top: elRect.bottom - navRect.top - 3,
    });
  }, []);

  useEffect(() => {
    updateBar(activeSection);
  }, [activeSection, updateBar]);

  useEffect(() => {
    const onResize = () => updateBar(activeSection);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeSection, updateBar]);

  /** Scrollspy: detecta la sección en vista únicamente en la página de inicio. */
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navLinks
      .map((link) => sectionByHref[link.href])
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  /** CTA "Escribime": externo (WhatsApp) o interno según la config central. */
  const renderCta = (className: string) =>
    ctaLink.external ? (
      <a
        href={ctaLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {ctaLink.label}
      </a>
    ) : (
      <Link href={ctaLink.href} className={className}>
        {ctaLink.label}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          onClick={close}
          className="flex shrink-0 items-center gap-3 font-serif text-2xl tracking-wide text-ink transition-colors hover:text-rose-deep"
        >
          <BrandMark className="h-9 md:h-10" />
          {site.name}
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          ref={navRef}
          className="relative hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[link.href] = el;
              }}
              className={cn(
                "text-sm font-normal tracking-wide transition-colors hover:text-rose-deep",
                activeSection === sectionByHref[link.href]
                  ? "text-rose-deep"
                  : "text-taupe",
              )}
            >
              {link.label}
            </Link>
          ))}
          {renderCta(
            "rounded-full bg-rose-deep px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-rose-shadow",
          )}

          {/* Barra deslizante del link activo */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute h-0.5 rounded-full bg-rose-deep transition-all duration-300 ease-out",
              bar ? "opacity-100" : "opacity-0",
            )}
            style={
              bar ? { left: bar.left, width: bar.width, top: bar.top } : undefined
            }
          />
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
              className={cn(
                "rounded-lg px-3 py-3 text-base transition-colors hover:bg-rose/10 hover:text-rose-deep",
                activeSection === sectionByHref[link.href]
                  ? "text-rose-deep"
                  : "text-taupe",
              )}
            >
              {link.label}
            </Link>
          ))}
          {renderCta(
            "mt-3 rounded-full bg-rose-deep px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-rose-shadow",
          )}
        </nav>
      </div>
    </header>
  );
}