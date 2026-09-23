import { cn } from "@/lib/cn";
import { LotusIcon } from "@/components/ui/icons";

interface PhotoPlaceholderProps {
  /** Texto descriptivo preparado para la futura fotografía real */
  alt: string;
  /** Indica al equipo (y al lector de pantallas) que es un placeholder */
  label: string;
  /** Fondo que lo rodea para elegir tono del panel */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * IMAGEN REAL PENDIENTE.
 * Cuando esté la fotografía de Laura (relación 3:4, apaisada vertical),
 * reemplazar este placeholder por:
 *
 *   import Image from "next/image";
 *   <Image
 *     src="/laura/hero.jpg"
 *     alt={alt}
 *     fill
 *     sizes="(min-width: 1024px) 40vw, 100vw"
 *     className="object-cover"
 *   />
 *
 * dentro del mismo contenedor <div className="relative aspect-[3/4] ..."> de cada sección.
 */
export function PhotoPlaceholder({
  alt,
  label,
  tone = "dark",
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${alt} — ${label}`}
      className={cn(
        "relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-2xl",
        tone === "dark"
          ? "bg-gradient-to-br from-rose-shadow via-rose-deep to-rose"
          : "bg-gradient-to-br from-surface via-background to-rose/50",
        className,
      )}
    >
      {/* Ornamento interior */}
      <div
        className={cn(
          "absolute inset-4 rounded-xl border border-dashed",
          tone === "dark" ? "border-gold/40" : "border-gold/50",
        )}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <LotusIcon
          size={56}
          className={cn(
            tone === "dark" ? "text-gold/80" : "text-rose",
          )}
        />
        <div className="flex flex-col items-center gap-1">
          <span
            className={cn(
              "font-serif text-3xl italic",
              tone === "dark" ? "text-background/90" : "text-ink",
            )}
          >
            Laura Sáez
          </span>
          <span
            className={cn(
              "font-sans text-[0.65rem] font-medium uppercase tracking-[0.3em]",
              tone === "dark" ? "text-background/80" : "text-taupe",
            )}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}