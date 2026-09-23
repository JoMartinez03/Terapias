import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "link";

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
  primary: "bg-rose-deep text-background hover:bg-rose-shadow hover:shadow-lg",
  outline:
    "border border-ink/40 text-ink hover:border-rose-deep hover:bg-rose-deep hover:text-background",
  link: "text-rose-deep underline-offset-4 hover:text-ink hover:underline",
};

export function Button({
  children,
  href,
  variant = "primary",
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