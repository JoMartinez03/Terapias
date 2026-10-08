import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Marca gráfica de Laura Sáez (símbolo solo, sin texto).
 *
 * Se usa junto al nombre en el header y el footer. El PNG ya viene
 * recortado (483 × 352), por lo que basta con fijar la altura y dejar
 * que el ancho se ajuste solo.
 */
interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Image
      src="/images/logo-laura-saez-solo.png"
      alt="Laura Sáez — Terapias Integrativas"
      width={483}
      height={352}
      className={cn("w-auto", className)}
    />
  );
}
