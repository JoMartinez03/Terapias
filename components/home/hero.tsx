import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { isPendingUrl, site } from "@/data/site";

export function Hero() {
  const agendaHref = isPendingUrl(site.agendapro.url) ? "#" : site.agendapro.url;

  return (
    <section id="inicio" className="relative overflow-hidden bg-chocolate text-cream">
      {/* Resplandor dorado sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(212,175,55,0.14),transparent)]"
      />
      <div className="wrap relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
              Terapias Integrativas · San Rafael, Mendoza
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.4rem]">
              Sanación integral
              <br />
              para quienes ya
              <br />
              saben que algo
              <br />
              tiene que{" "}
              <em className="text-gold">cambiar</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
              Acompaño a personas con dolor físico, emociones bloqueadas o
              bloqueos vitales a reconectar con su bienestar — desde el cuerpo,
              la mente y la energía.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#servicios" size="lg">
                Conocé cómo puedo acompañarte
              </Button>
              <Button
                href={agendaHref}
                variant="outline"
                size="lg"
                pendingTitle={isPendingUrl(agendaHref)}
              >
                Reservar sesión
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:justify-self-end">
          <div className="w-full max-w-md">
            <PhotoPlaceholder
              alt="Retrato profesional de Laura Sáez, terapeuta integral en San Rafael"
              label="Fotografía principal"
              tone="dark"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}