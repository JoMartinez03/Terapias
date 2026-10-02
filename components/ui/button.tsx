import type { ReactNode } from "react";
import Link from "next/link";
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
  /** Estado deshabilitado: se muestra igual, pero no es un enlace */
  disabled?: boolean;
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

const disabledVariants: Record<Variant, string> = {
  primary: "bg-rose-deep/50 text-background",
  outline: "border border-ink/20 text-ink/50",
  link: "text-rose-deep/60",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
  pendingTitle = false,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    base,
    sizes[size],
    disabled ? disabledVariants[variant] : variants[variant],
    disabled && "pointer-events-none select-none",
    className,
  );

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title={pendingTitle ? "Enlace pendiente de confirmación" : undefined}
        className={classes}
      >
        {children}
      </span>
    );
  }

  // Las rutas internas usan Link para navegación sin recargar la página.
  if (href.startsWith("/")) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={pendingTitle ? "Enlace pendiente de confirmación" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </a>
  );
}