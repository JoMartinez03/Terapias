export interface Program {
  title: string;
  slug: string;
  /** Tipo corto, ej. "Mini-curso · 7 días" */
  kind: string;
  description: string;
  /** Precio provisional y centralizado para editar fácilmente */
  price: string;
  cta: string;
  /** PENDIENTE: URL confirmada de Hotmart */
  hotmartUrl: string;
  /** Card visualmente destacada */
  featured?: boolean;
}

export const programs: Program[] = [
  {
    title: "7 Días Para Soltar la Carga",
    slug: "7-dias-para-soltar-la-carga",
    kind: "Mini-curso · 7 días",
    description:
      "Un recorrido breve con herramientas para acompañar emociones, tensión, ansiedad e insomnio desde una mirada cuerpo-emoción.",
    price: "USD 17",
    cta: "Quiero empezar",
    hotmartUrl: "",
  },
  {
    title: "Volver a Vos",
    slug: "volver-a-vos",
    kind: "Programa · 6 semanas",
    description:
      "Un programa integral para reconectar con tu cuerpo, liberar bloqueos y construir una rutina de bienestar que se sostenga.",
    price: "USD 147",
    cta: "Conocé el programa",
    hotmartUrl: "",
    featured: true,
  },
  {
    title: "Recuperar la Calma",
    slug: "recuperar-la-calma",
    kind: "Mini-curso · 6 módulos",
    description:
      "Un acompañamiento para personas que están atravesando una ruptura y quieren recuperar su equilibrio emocional desde el cuerpo y las emociones.",
    price: "USD 17",
    cta: "Quiero empezar",
    hotmartUrl: "",
  },
];

/** Ruta pública de cada programa hasta confirmar el enlace de Hotmart */
export function programHref(program: Program): string {
  return program.hotmartUrl || `/programas/${program.slug}`;
}