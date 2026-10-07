import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/icons";
import { isPendingUrl, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "La historia de Laura Sáez, terapeuta integral especializada en Biodescodificación Emocional: cómo un cuerpo que empezó a hablarle la llevó a acompañar a otras personas a reconectar con su bienestar. San Rafael, Mendoza.",
};

export default function SobreMiPage() {
  const wa = whatsappUrl();
  const waPending = isPendingUrl(wa);

  return (
    <section id="sobre-mi-pagina" className="bg-background text-ink">
      <div className="wrap grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-sm flex-col gap-10 lg:mx-0">
            <BrandLogo className="mx-auto w-40 md:w-48 lg:mx-0" />
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

          <Reveal delay={140}>
            <blockquote className="mt-9 border-l-2 border-rose pl-6">
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                A los 26 años mi cuerpo empezó a hablarme. Y yo no quería
                escucharlo.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 space-y-4 leading-relaxed text-taupe">
              <p>
                Tenía una nena pequeña, un duelo que aún no había procesado del
                todo, y un trabajo donde me maltrataban psicológicamente casi
                todos los días.
              </p>
              <p>
                Empecé a sentirme en crisis. Siempre mal. Conflictos en mi
                familia que no entendía. Y de repente… los dolores. Los
                problemas digestivos. Los estudios médicos explicaban algo, pero
                nada me hacía sentir del todo bien, los dolores y la inflamación
                eran constantes.
              </p>
              <p className="font-serif text-xl italic text-ink">
                Mi cuerpo estaba gritando lo que yo no podía decir.
              </p>
              <p>
                Empecé a ir a psicología. Y eso me ayudó a empezar a enfrentar
                lo que tenía guardado.
              </p>
              <p>
                Pero fue después de una cirugía cuando algo hizo clic en mí.
              </p>
              <p>
                Entendí que no alcanzaba con trabajar solo en mi cuerpo físico,
                en mis síntomas.
              </p>
              <p className="font-serif text-xl italic text-ink">
                Porque el cuerpo también guarda. El cuerpo también habla.
              </p>
              <p>
                Y que necesitaba aprender a escucharlo. Debía entender qué había
                detrás de todo lo que mi cuerpo estaba manifestando.
              </p>
              <p className="text-ink/90">
                Hoy acompaño a otras personas en ese mismo proceso — porque sé
                desde adentro lo que se siente cuando el cuerpo y las emociones
                no dan más.
              </p>
              <p className="text-ink/90">
                Si algo de esto resuena con vos — te cuento que no tenés que
                llegar al límite para pedir ayuda.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-serif text-3xl italic leading-snug text-ink md:text-4xl">
                Estoy acá.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={320}>
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
                Ver terapias
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
