import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: ReactNode;
  /** "light" para fondos claros, "dark" para fondos oscuros */
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  children,
  tone = "light",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.35em]",
        tone === "light" ? "text-terracotta-dark" : "text-gold",
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      <span>{children}</span>
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
    </p>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}