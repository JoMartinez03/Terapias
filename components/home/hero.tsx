import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { whatsappUrl } from "@/data/site";

export function Hero() {
  const wa = whatsappUrl();

  return (
    <section id="inicio" className="relative overflow-hidden bg-background text-ink">
      {/* Resplandor suave rosa viejo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(201,150,138,0.3),transparent)]"
      />
      <div className="wrap relative grid items-center gap-12 pt-8 pb-16 md:pt-12 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14 lg:pb-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs font-medium uppercase tracking-[0.28em] text-taupe md:tracking-[0.35em]">
              <span className="h-px w-8 bg-ink/40" aria-hidden="true" />
              Terapias Integrativas · San Rafael, Mendoza · Online a todo el país
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-serif text-[2.9rem] font-semibold leading-[1.04] tracking-tight md:text-[3.5rem] lg:text-[4.5rem]">
              Bienestar integral
              <br />
              para quienes ya
              <br />
              saben que algo
              <br />
              tiene que{" "}
              <em className="text-rose-deep underline decoration-gold decoration-2 underline-offset-8">
                cambiar
              </em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-taupe">
              Acompaño a personas con dolores o síntomas físicos o emocionales,
              o que sienten un desequilibrio en sus vidas, a reconectar con su
              bienestar — desde el cuerpo, la mente y la energía.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#servicios" size="lg" variant="primary">
                Cómo puedo acompañarte
              </Button>
              <Button href={wa} variant="outline" size="lg" external>
                Reservar sesión
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:justify-self-end">
          <BrandLogo className="mx-auto w-52 md:w-64 lg:mx-0 lg:w-80" />
        </Reveal>
      </div>
    </section>
  );
}
