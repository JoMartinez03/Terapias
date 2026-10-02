/** "disponible" se compra en Hotmart; "proximamente" aún no se puede comprar */
export type ProgramStatus = "disponible" | "proximamente";

export interface Program {
  title: string;
  slug: string;
  /** Tipo corto, ej. "Mini-curso · 7 días" */
  kind: string;
  description: string;
  status: ProgramStatus;
  cta: string;
  /** PENDIENTE: URL confirmada de Hotmart */
  hotmartUrl: string;
  /** Card visualmente destacada */
  featured?: boolean;
}

export interface ProgramCta {
  label: string;
  /** null cuando el programa todavía no se puede comprar */
  href: string | null;
  external: boolean;
  /** Enlace confirmado pendiente por parte de Laura */
  pending: boolean;
}

/** El orden del array es el orden de aparición en la Home y en el footer. */
export const programs: Program[] = [
  {
    title: "Recuperar la Calma",
    slug: "recuperar-la-calma",
    kind: "Mini-curso · 6 módulos",
    description:
      "Un acompañamiento para personas que están atravesando una ruptura y quieren recuperar su equilibrio emocional desde el cuerpo y las emociones.",
    status: "disponible",
    cta: "Quiero empezar",
    hotmartUrl: "",
    featured: true,
  },
  {
    title: "7 Días Para Soltar la Carga",
    slug: "7-dias-para-soltar-la-carga",
    kind: "Mini-curso · 7 días",
    description:
      "Un recorrido breve con herramientas para acompañar emociones, tensión, ansiedad e insomnio desde una mirada cuerpo-emoción.",
    status: "proximamente",
    cta: "Quiero empezar",
    hotmartUrl: "",
  },
  {
    title: "Volver a Vos",
    slug: "volver-a-vos",
    kind: "Programa · 6 semanas",
    description:
      "Un programa integral para reconectar con tu cuerpo, liberar bloqueos y construir una rutina de bienestar que se sostenga.",
    status: "proximamente",
    cta: "Conocé el programa",
    hotmartUrl: "",
  },
];

export function isProgramAvailable(program: Program): boolean {
  return program.status === "disponible";
}

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}

/**
 * Estado del botón de cada programa.
 * - disponible con enlace de Hotmart → link externo
 * - disponible sin enlace confirmado → botón deshabilitado
 * - próximamente → sin botón de compra
 */
export function programCta(program: Program): ProgramCta {
  if (program.status === "proximamente") {
    return { label: "Muy pronto", href: null, external: false, pending: false };
  }
  if (program.hotmartUrl) {
    return { label: program.cta, href: program.hotmartUrl, external: true, pending: false };
  }
  return { label: "Enlace en breve", href: null, external: false, pending: true };
}

/** Destino del enlace del programa en el footer y listados. */
export function programLink(program: Program): { href: string; external: boolean } {
  const cta = programCta(program);
  return cta.href
    ? { href: cta.href, external: cta.external }
    : { href: "/#programas", external: false };
}