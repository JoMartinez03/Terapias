/** "disponible" se puede conocer y comprar desde su página; "proximamente" aún no */
export type ProgramStatus = "disponible" | "proximamente";

export interface Program {
  title: string;
  slug: string;
  /** Tipo corto, ej. "Programa corto · 7 días" */
  kind: string;
  description: string;
  status: ProgramStatus;
  cta: string;
  /** Card visualmente destacada */
  featured?: boolean;
}

export interface ProgramCta {
  label: string;
  /** null cuando el programa todavía no se puede comprar */
  href: string | null;
  external: boolean;
  /** Enlace pendiente por parte de Laura */
  pending: boolean;
}

/**
 * Checkout directo de Hotmart para "Recuperar la Calma".
 * Única fuente de verdad del enlace de compra en todo el sitio.
 */
export const hotmartCheckoutUrl =
  "https://pay.hotmart.com/B104618363P?bid=1791381224220";

/** El orden del array es el orden de aparición en la Home y en el footer. */
export const programs: Program[] = [
  {
    title: "Recuperar la Calma tras una ruptura",
    slug: "recuperar-la-calma",
    kind: "Programa corto · 7 días",
    description:
      "Un acompañamiento para personas que están atravesando una ruptura y quieren recuperar su equilibrio emocional desde el cuerpo y las emociones",
    status: "disponible",
    cta: "Quiero empezar",
    featured: true,
  },
  {
    title: "7 Días Para Soltar la Carga",
    slug: "7-dias-para-soltar-la-carga",
    kind: "Programa corto · 7 días",
    description:
      "Un recorrido breve con herramientas para acompañar emociones, tensión, ansiedad e insomnio desde una mirada cuerpo-emoción.",
    status: "proximamente",
    cta: "Quiero empezar",
  },
  {
    title: "Volver a Vos",
    slug: "volver-a-vos",
    kind: "Programa · 6 semanas",
    description:
      "Un programa integral para reconectar con tu cuerpo, liberar bloqueos y construir una rutina de bienestar que se sostenga.",
    status: "proximamente",
    cta: "Quiero empezar",
  },
];

export function isProgramAvailable(program: Program): boolean {
  return program.status === "disponible";
}

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}

/** Ruta interna de la página de cada programa. */
export function programHref(program: Program): string {
  return `/programas/${program.slug}`;
}

/**
 * Estado del botón de cada programa:
 * - disponible → lleva a su página interna
 * - próximamente → sin link de compra
 */
export function programCta(program: Program): ProgramCta {
  if (program.status === "proximamente") {
    return { label: "Muy pronto", href: null, external: false, pending: false };
  }
  return {
    label: program.cta,
    href: programHref(program),
    external: false,
    pending: false,
  };
}

/** Destino del enlace del programa en el footer y listados (null si no hay compra activa). */
export function programLink(program: Program): {
  href: string | null;
  external: boolean;
} {
  if (!isProgramAvailable(program)) {
    return { href: null, external: false };
  }
  return { href: programHref(program), external: false };
}
