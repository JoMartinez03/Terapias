import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "outline" | "dark" | "linkGold";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  /** Abrir en pestaña nueva */
  external?: boolean;
  /** Texto a mostrar cuando el destino aún está pendiente */
  pendingTitle?: boolean;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none";

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

const variants: Record<Variant, string> = {
  gold: "bg-gold text-chocolate-ink hover:bg-gold-bright hover:shadow-lg",
  outline:
    "border border-cream/40 text-cream hover:border-gold hover:text-gold",
  dark: "bg-chocolate text-cream hover:bg-chocolate-dark",
  linkGold: "text-gold hover:text-gold-bright underline-offset-4 hover:underline",
};

export function Button({
  children,
  href,
  variant = "gold",
  size = "md",
  className,
  external = false,
  pendingTitle = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={pendingTitle ? "Enlace pendiente de confirmación" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}