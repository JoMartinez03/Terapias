export const site = {
  name: "Laura Sáez",
  tagline: "Terapias Integrativas",
  brandLine: "Cuerpo · Mente · Emoción",
  location: "San Rafael, Mendoza",
  instagram: {
    handle: "@laurasaezterapias",
    url: "https://www.instagram.com/laurasaezterapias",
  },
  // ─── ENLACES EXTERNOS (concentrados en un único lugar) ───
  whatsapp: {
    // Código de país + número, sin +, espacios ni guiones
    phone: "542604351522",
    // Solo para mostrar en pantalla
    display: "+54 260 435-1522",
    // Mensaje predefinido para el primer contacto general
    message:
      "Hola Laura, estuve viendo tu página y me gustaría hacerte una consulta.",
  },
  email: "contacto@laurabienestarintegral.com",
  // Mostrar u ocultar testimonios hasta tener contenido real confirmado
  showTestimonials: false,
} as const;

/**
 * Genera el enlace de WhatsApp a partir de la configuración central.
 * Permite pasar un mensaje propio (por ejemplo, el de cada terapia).
 */
export function whatsappUrl(message: string = site.whatsapp.message): string {
  if (!site.whatsapp.phone) {
    return "#";
  }
  return `https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

/** "true" si la URL aún no está confirmada */
export function isPendingUrl(url: string) {
  return !url || url === "#";
}

/** Enlace de correo de Laura. */
export function mailUrl(): string {
  return `mailto:${site.email}`;
}

export const navLinks = [
  { label: "Terapias", href: "/#servicios" },
  { label: "Programas", href: "/#programas" },
  { label: "Sobre mí", href: "/sobre-mi" },
] as const;

/** CTA del header: lleva directo al WhatsApp de Laura (enlace externo). */
export const ctaLink = {
  label: "Escribime",
  href: whatsappUrl(),
  external: true,
} as const;
