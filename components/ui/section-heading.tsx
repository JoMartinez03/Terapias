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
        tone === "light" ? "text-rose-deep" : "text-gold",
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
        "font-serif text-[2.6rem] leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}