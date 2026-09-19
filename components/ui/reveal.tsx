"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms para escalonar la aparición (stagger) */
  delay?: number;
  role?: string;
}

/**
 * Revela contenido al entrar en el viewport.
 * Bajo "prefers-reduced-motion" el contenido se muestra directamente (CSS).
 * Si JavaScript no está disponible, el contenido también es visible (la capa
 * oculta solo se activa con la clase ".js" en <html>).
 */
export function Reveal({ children, className, delay = 0, role }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role={role}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}