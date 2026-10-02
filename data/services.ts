import { whatsappUrl } from "@/data/site";

export type ServiceModality = "Online" | "Presencial";

export interface Service {
  slug: string;
  title: string;
  /** Modalidad única del servicio (los online no son presenciales) */
  modality: ServiceModality;
  /** Detalle de la modalidad, ej. dónde se atiende de forma presencial */
  modalityDetail?: string;
  /** Descripción breve: se usa en la card de la Home y como introducción */
  excerpt: string;
  /** PENDIENTE: ampliará Laura con el detalle de cómo es la sesión */
  description?: string[];
  /** PENDIENTE: beneficios concretos del servicio */
  benefits?: string[];
  /** Mensaje predefinido al consultar por este servicio */
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    slug: "biodescodificacion",
    title: "Biodescodificación",
    modality: "Online",
    excerpt:
      "Trabajamos la raíz emocional detrás de tus síntomas físicos, tus bloqueos y tus patrones repetitivos.",
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Biodescodificación.",
  },
  {
    slug: "reiki",
    title: "Reiki",
    modality: "Online",
    excerpt:
      "Un espacio de Reiki y relajación que podés recibir desde la comodidad de tu casa.",
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Reiki.",
  },
  {
    slug: "tarot",
    title: "Tarot",
    modality: "Online",
    excerpt:
      "Una herramienta de autoconocimiento para explorar vínculos, decisiones y procesos personales.",
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Tarot.",
  },
  {
    slug: "masajes-terapeuticos",
    title: "Masajes terapéuticos",
    modality: "Presencial",
    modalityDetail: "San Rafael, Mendoza",
    excerpt:
      "Favorece la relajación, regula el sistema nervioso y favorece el bienestar emocional, desde bebés hasta la tercera edad.",
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Masajes Terapéuticos.",
  },
];

/** Ruta pública de la página individual de cada servicio. */
export function serviceHref(service: Service): string {
  return `/servicios/${service.slug}`;
}

/** "Online" o "Presencial · San Rafael, Mendoza". */
export function serviceModalityLabel(service: Service): string {
  return service.modalityDetail
    ? `${service.modality} · ${service.modalityDetail}`
    : service.modality;
}

/** Enlace de WhatsApp con el mensaje predefinido del servicio. */
export function serviceWhatsappUrl(service: Service): string {
  return whatsappUrl(service.whatsappMessage);
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}