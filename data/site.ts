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
  // Los que no estén confirmados aún quedan vacíos y los botones
  // se renderizarán con href="#" marcado como pendiente.
  whatsapp: {
    // PENDIENTE: completar el número (código de país + sin +, espacios ni guiones)
    phone: "",
    // Mensaje predefinido para el primer contacto
    message: "Hola Laura, quiero más información sobre tus terapias.",
  },
  agendapro: {
    // PENDIENTE: completar el enlace cuando la agenda esté disponible
    url: "",
  },
  // Mostrar u ocultar testimonios hasta tener contenido real confirmado
  showTestimonials: false,
} as const;

export const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Programas", href: "/#programas" },
  { label: "Sobre mí", href: "/#sobre-laura" },
] as const;

export const ctaLink = { label: "Escribime", href: "/#contacto" } as const;

/** "true" si la URL aún no está confirmada */
export function isPendingUrl(url: string) {
  return !url || url === "#";
}

/** Genera el enlace de WhatsApp a partir de la configuración central. */
export function whatsappUrl(): string {
  if (!site.whatsapp.phone) {
    return "#";
  }
  const text = encodeURIComponent(site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.phone}?text=${text}`;
}