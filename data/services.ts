export interface Service {
  title: string;
  slug: string;
  /** Etiqueta corta que acompaña al título de la card */
  modality: string;
  excerpt: string;
  // ─── Campos centralizados para la próxima iteración (aún sin datos) ───
  duration: string | null;
  price: string | null;
  longDescription: string | null;
  /** PENDIENTE: enlace de AgendaPro cuando esté disponible */
  agendaproUrl: string;
}

export const services: Service[] = [
  {
    title: "Biodescodificación individual",
    slug: "biodescodificacion-individual",
    modality: "Online o presencial · San Rafael",
    excerpt:
      "Trabajamos la raíz emocional detrás de tus síntomas físicos, tus bloqueos y tus patrones repetitivos.",
    duration: null,
    price: null,
    longDescription: null,
    agendaproUrl: "",
  },
  {
    title: "Reiki virtual",
    slug: "reiki-virtual",
    modality: "Online · Sesiones virtuales",
    excerpt:
      "Un espacio de Reiki y relajación que podés recibir desde la comodidad de tu casa.",
    duration: null,
    price: null,
    longDescription: null,
    agendaproUrl: "",
  },
  {
    title: "Tarot evolutivo",
    slug: "tarot-evolutivo",
    modality: "Online · Sesiones virtuales",
    excerpt:
      "Una herramienta de autoconocimiento para explorar vínculos, decisiones y procesos personales.",
    duration: null,
    price: null,
    longDescription: null,
    agendaproUrl: "",
  },
  {
    title: "Sesiones presenciales",
    slug: "sesiones-presenciales",
    modality: "Presencial · San Rafael, Mendoza",
    excerpt:
      "Masaje terapéutico, Reiki y Biodescodificación de forma presencial en San Rafael.",
    duration: null,
    price: null,
    longDescription: null,
    agendaproUrl: "",
  },
];