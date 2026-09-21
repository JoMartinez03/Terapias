import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-heading";

export function AboutLaura() {
  return (
    <section id="sobre-laura" className="bg-almond">
      <div className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-sm lg:mx-0">
            <PhotoPlaceholder
              alt="Laura Sáez en su espacio de trabajo, San Rafael, Mendoza"
              label="Fotografía de perfil"
              tone="light"
            />
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel className="text-chocolate/70">Sobre mí</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Hola,
              <br />
              soy <em className="text-chocolate">Laura</em>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-lg leading-relaxed text-chocolate/90">
              Soy terapeuta integral especializada en Masaje Terapéutico, Reiki
              y Biodescodificación.
            </p>
            <p className="mt-4 leading-relaxed text-chocolate/80">
              Trabajo con personas que sienten que algo en su cuerpo o en su
              vida no está bien — aunque no puedan explicarlo con palabras o
              sientan que ya probaron de todo.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <blockquote className="mt-8 border-l-2 border-sage pl-6">
              <p className="font-serif text-2xl italic leading-snug text-chocolate md:text-3xl">
                Mi enfoque no va al síntoma. Va a la raíz.
              </p>
            </blockquote>
            <p className="mt-6 leading-relaxed text-chocolate/80">
              Porque el cuerpo y las emociones están conectados. Cuando
              aprendemos a escucharlos, algo real empieza a moverse.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <Button href="#sobre-mi" variant="dark" className="mt-9">
              Conocé mi historia
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}