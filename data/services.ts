import { whatsappUrl } from "@/data/site";

/** Modalidad en texto libre (cada terapia describe su propia modalidad). */
export type ServiceModality = string;

export interface ServiceSection {
  heading: string;
  /** Párrafos previos a la lista */
  paragraphs?: string[];
  /** Lista de puntos (se muestra en formato card) */
  list?: string[];
  /** Párrafos posteriores a la lista */
  closing?: string[];
}

export interface Service {
  slug: string;
  title: string;
  /** Modalidad completa de la terapia */
  modality: ServiceModality;
  /** Detalle de la modalidad, ej. dónde se atiende de forma presencial */
  modalityDetail?: string;
  /** Descripción breve: se usa en la card de la Home y como introducción */
  excerpt: string;
  /** Secciones de la página individual (qué es, cómo ayuda, cómo es la sesión) */
  sections: ServiceSection[];
  /** Mensaje predefinido al consultar por esta terapia */
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    slug: "biodescodificacion",
    title: "Biodescodificación",
    modality: "Sesiones virtuales o presenciales en San Rafael",
    excerpt:
      "Trabajamos la raíz emocional detrás de tus síntomas físicos, tus bloqueos y tus patrones repetitivos.",
    sections: [
      {
        heading: "¿Qué es la Biodescodificación?",
        paragraphs: [
          "La Biodescodificación es una técnica terapéutica que observa la relación entre las emociones y el cuerpo físico. Parte de una premisa simple pero profunda: cada síntoma, dolor o enfermedad tiene un origen emocional que el cuerpo expresa cuando la mente no pudo procesar lo que vivió.",
          "No es magia ni reemplaza la medicina. Es una herramienta de autoconocimiento que permite ir a la raíz de lo que el cuerpo está comunicando — en lugar de solo tratar el síntoma.",
        ],
      },
      {
        heading: "¿Cómo puede ayudarte?",
        paragraphs: ["Una sesión de Biodescodificación es ideal si:"],
        list: [
          "Tenés un dolor o síntoma físico que vuelve siempre, aunque ya probaste otras alternativas",
          "Sentís que repetís los mismos patrones en tus vínculos o situaciones de vida",
          "Atravesaste una experiencia difícil que no terminó de cerrarse",
          "Querés entender el mensaje detrás de lo que tu cuerpo está diciendo",
        ],
        closing: [
          "Durante la sesión exploramos el conflicto emocional que puede estar detrás de lo que sentís — con un enfoque compasivo, sin juicio y a tu ritmo.",
        ],
      },
      {
        heading: "¿Cómo es una sesión?",
        paragraphs: [
          "Las sesiones son individuales, de aproximadamente 60 minutos, y se realizan de forma presencial en San Rafael o por videollamada. No necesitás experiencia previa ni conocimientos del tema — solo disposición a explorar.",
        ],
      },
    ],
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Biodescodificación.",
  },
  {
    slug: "reiki",
    title: "Reiki",
    modality: "Sesiones presenciales en San Rafael o a distancia",
    excerpt:
      "Equilibramos tu energía y liberamos bloqueos energéticos que se expresan como tensión, agotamiento o malestar.",
    sections: [
      {
        heading: "¿Qué es el Reiki?",
        paragraphs: [
          "El Reiki es una técnica terapéutica que trabaja con la energía vital del cuerpo. A través de la imposición de manos — sobre el cuerpo o a distancia — facilita el equilibrio energético, liberando bloqueos que se manifiestan como tensión, agotamiento, ansiedad o malestar físico y emocional.",
          "No es una práctica religiosa ni requiere ninguna creencia específica. Es una herramienta de bienestar que trabaja en complemento con cualquier tratamiento médico o terapéutico.",
        ],
      },
      {
        heading: "¿Cómo puede ayudarte?",
        paragraphs: ["El Reiki es especialmente útil cuando:"],
        list: [
          "Sentís tensión o bloqueos que no encontrás cómo liberar",
          "Estás atravesando un período de estrés, angustia o agotamiento profundo",
          "Tu cuerpo necesita soltar, pero la mente no sabe cómo",
          "Buscás un espacio de descanso profundo y reconexión con vos",
        ],
        closing: [
          "Muchas personas describen la experiencia como una sensación de calma, liviandad y claridad que permanece mucho después de la sesión.",
        ],
      },
      {
        heading: "¿Cómo es una sesión?",
        paragraphs: [
          "Las sesiones duran 60 minutos aproximadamente. Podés recibirlas de forma presencial en San Rafael o a distancia, en la comodidad de tu hogar — el Reiki a distancia es igual de efectivo porque trabaja con energía, no con distancia física.",
        ],
      },
    ],
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Reiki.",
  },
  {
    slug: "tarot",
    title: "Tarot Evolutivo",
    modality: "Sesiones virtuales o presencial en San Rafael",
    excerpt:
      "Una herramienta de autoconocimiento para iluminar lo que está pasando en tu vida — vínculos, decisiones y procesos personales.",
    sections: [
      {
        heading: "¿Qué es el Tarot?",
        paragraphs: [
          "El Tarot es una herramienta de autoconocimiento y reflexión. A través de sus imágenes y arquetipos, funciona como un espejo que ilumina lo que está pasando en tu vida — tus miedos, tus recursos, tus bloqueos y tus posibilidades.",
          "No es adivinación ni predice el futuro de forma determinista. Es una guía para entender tu momento presente y tomar decisiones más conscientes.",
        ],
      },
      {
        heading: "¿Cómo puede ayudarte?",
        paragraphs: ["Una lectura de Tarot es ideal si:"],
        list: [
          "Estás en un momento de decisión o cruce de caminos",
          "Sentís que algo no está claro en tus vínculos, tu trabajo o tu vida en general",
          "Necesitás una mirada distinta sobre una situación que te genera confusión",
          "Querés conectar con tu intuición y tu sabiduría interna",
        ],
        closing: [
          "Cada lectura es un espacio de escucha y reflexión — no de respuestas mágicas, sino de preguntas que te ayudan a encontrar las tuyas.",
        ],
      },
      {
        heading: "¿Cómo es una sesión?",
        paragraphs: [
          "Las sesiones son individuales, de 30 a 60 minutos, y se realizan por videollamada o de manera presencial en San Rafael. Podés venir con una pregunta concreta o simplemente con la apertura de ver qué aparece.",
        ],
      },
    ],
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Tarot.",
  },
  {
    slug: "masajes-terapeuticos",
    title: "Masaje Terapéutico",
    modality: "Presencial",
    modalityDetail: "San Rafael, Mendoza",
    excerpt:
      "Favorece la relajación, alivia dolores físicos, regula el sistema nervioso y favorece el bienestar emocional, desde bebés hasta la tercera edad.",
    sections: [
      {
        heading: "¿Qué es el Masaje Terapéutico?",
        paragraphs: [
          "El Masaje Terapéutico es mucho más que una técnica de relajación. Es una intervención corporal que trabaja sobre los tejidos musculares para liberar tensiones acumuladas, mejorar la circulación, reducir el dolor y restablecer el equilibrio del sistema nervioso.",
          "El masaje tiene un objetivo específico: escuchar lo que el cuerpo necesita y trabajar en profundidad para aliviar lo que está cargando.",
          "En bebés y niños se realiza un suave masaje Shantala.",
        ],
      },
      {
        heading: "¿Cómo puede ayudarte?",
        paragraphs: ["El Masaje es especialmente indicado si:"],
        list: [
          "Tenés contracturas, tensión crónica o dolor muscular recurrente",
          "Tu cuerpo acumula el estrés como rigidez o pesadez física",
          "Necesitás reconectar con tu cuerpo después de un período de agotamiento",
          "Buscás un espacio donde el cuerpo pueda soltar lo que las palabras no alcanzan",
        ],
        closing: [
          "Cuando se combina con Biodescodificación o Reiki, el masaje potencia el trabajo emocional y energético — porque el cuerpo también necesita ser tocado y acompañado para soltar.",
        ],
      },
      {
        heading: "Masaje Shantala",
        paragraphs: [
          "El masaje Shantala se realiza en bebés y niños (especialmente, pero se puede realizar en todas las edades), y sus principales beneficios son:",
        ],
        list: [
          "Fortalece y tonifica los músculos",
          "Transmiten seguridad y confianza",
          "Potencia el crecimiento",
          "Combate el insomnio y favorece el sueño y la relajación",
          "Estimula el sistema nervioso",
          "Mejora trastornos digestivos como cólicos, gases o estreñimiento",
          "Libera emociones guardadas",
        ],
      },
      {
        heading: "¿Cómo es una sesión?",
        paragraphs: [
          "Las sesiones son presenciales en el consultorio de San Rafael, con una duración de 60 a 90 minutos según lo que el cuerpo necesite. Antes de comenzar conversamos brevemente sobre cómo estás y qué área o situación querés trabajar.",
        ],
      },
    ],
    whatsappMessage:
      "Hola Laura, me gustaría recibir más información sobre Masajes Terapéuticos.",
  },
];

/** Ruta pública de la página individual de cada terapia. */
export function serviceHref(service: Service): string {
  return `/servicios/${service.slug}`;
}

/** "Sesiones virtuales o presenciales en San Rafael" o "Presencial · San Rafael, Mendoza". */
export function serviceModalityLabel(service: Service): string {
  return service.modalityDetail
    ? `${service.modality} · ${service.modalityDetail}`
    : service.modality;
}

/** Enlace de WhatsApp con el mensaje predefinido de la terapia. */
export function serviceWhatsappUrl(service: Service): string {
  return whatsappUrl(service.whatsappMessage);
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
