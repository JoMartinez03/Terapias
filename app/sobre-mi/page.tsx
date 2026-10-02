import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/icons";
import { isPendingUrl, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conocé la historia y el enfoque de Laura Sáez, terapeuta integral en Masaje Terapéutico, Reiki y Biodescodificación.",
};

export default function SobreMiPage() {
  const wa = whatsappUrl();
  const waPending = isPendingUrl(wa);

  return (
    <section id="sobre-mi-pagina" className="bg-background text-ink">
      <div className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-sm lg:mx-0">
            <PhotoPlaceholder
              alt="Laura Sáez en su espacio de trabajo, San Rafael, Mendoza"
              label="Fotografía de perfil"
              tone="dark"
            />
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Sobre mí</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]">
              Hola,
              <br />
              soy <em className="text-rose-deep">Laura</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-lg leading-relaxed text-ink/90">
              Soy terapeuta integral especializada en Masaje Terapéutico, Reiki
              y Biodescodificación.
            </p>
            <p className="mt-4 leading-relaxed text-taupe">
              Trabajo con personas que sienten que algo en su cuerpo o en su
              vida no está bien — aunque no puedan explicarlo con palabras o
              sientan que ya probaron de todo.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <blockquote className="mt-8 border-l-2 border-rose pl-6">
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                Mi enfoque no va al síntoma. Va a la raíz.
              </p>
            </blockquote>
            <p className="mt-6 leading-relaxed text-taupe">
              Porque el cuerpo y las emociones están conectados. Cuando
              aprendemos a escucharlos, algo real empieza a moverse.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={wa}
                size="lg"
                variant="primary"
                external={!waPending}
                pendingTitle={waPending}
              >
                <WhatsAppIcon size={20} />
                Escribime por WhatsApp
              </Button>
              <Button href="/#servicios" variant="outline" size="lg">
                Ver servicios
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}