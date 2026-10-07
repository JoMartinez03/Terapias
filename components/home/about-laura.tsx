import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-heading";

export function AboutLaura() {
  return (
    <section id="sobre-laura" className="bg-surface">
      <div className="wrap py-16 md:py-24 lg:py-28">
        {/* Orden de presentación pedido por Laura:
            Logo → Sobre mí → Foto → Hola, soy Laura → contenido */}
        <Reveal>
          <BrandLogo className="mx-auto w-48 md:w-60" />
        </Reveal>

        <Reveal delay={80}>
          <SectionLabel className="mt-12 justify-center">Sobre mí</SectionLabel>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal delay={120}>
            <div className="mx-auto max-w-sm lg:mx-0">
              <PhotoPlaceholder
                alt="Laura Sáez en su espacio de trabajo, San Rafael, Mendoza"
                label="Fotografía de perfil"
                tone="light"
              />
            </div>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={160}>
              <h2 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]">
                Hola,
                <br />
                soy <em className="text-rose-deep">Laura</em>
              </h2>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 text-lg leading-relaxed text-ink/90">
                Soy terapeuta integral especializada en Biodescodificación
                Emocional.
              </p>
              <p className="mt-4 leading-relaxed text-taupe">
                Trabajo con personas que sienten que algo en su cuerpo o en su
                vida no está bien — aunque no puedan explicarlo con palabras o
                sientan que ya probaron de todo.
              </p>
            </Reveal>

            <Reveal delay={280}>
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

            <Reveal delay={340}>
              <Button href="/sobre-mi" variant="primary" className="mt-9">
                Conocé mi historia
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
