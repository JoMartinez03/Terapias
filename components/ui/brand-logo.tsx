import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Logo oficial de Laura Sáez.
 *
 * El PNG original es un lienzo de 2048×2048 con grandes márgenes
 * transparentes; el contenido real ocupa x 810..1498 / y 320..980.
 * Para mostrar el logo a tamaño útil sin modificar el archivo, el
 * wrapper recorta solo esos márgenes vacíos con overflow-hidden y
 * posiciona la imagen con porcentajes calculados sobre el crop.
 *
 * Medidas del crop: 688 × 660 px dentro del lienzo de 2048 × 2048.
 */
const CANVAS = 2048;
const CROP = { x: 810, y: 320, w: 688, h: 660 };

const imageWidthPct = (CANVAS / CROP.w) * 100; // 297.6744%
const leftPct = (-CROP.x / CROP.w) * 100; // -117.7326%
const topPct = (-CROP.y / CROP.h) * 100; // -48.4848%

interface BrandLogoProps {
  /** Ancho del logo, ej. "w-56" o "w-full max-w-xs" */
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: `${CROP.w} / ${CROP.h}` }}
    >
      <Image
        src="/images/logo-laura-saez.png"
        alt="Laura Sáez — Terapias Integrativas · Cuerpo · Mente · Emoción"
        width={CANVAS}
        height={CANVAS}
        className="absolute max-w-none"
        style={{
          width: `${imageWidthPct}%`,
          height: "auto",
          left: `${leftPct}%`,
          top: `${topPct}%`,
        }}
      />
    </div>
  );
}
