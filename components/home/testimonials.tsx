import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";

// Placeholders: NO hay testimonios reales confirmados todavía.
// NO deben inventarse nombres ni resultados. Solo se mostrará la sección
// cuando "showTestimonials" sea true en data/site.ts.
const pending = 3;

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-background">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Testimonios</SectionLabel>
            <SectionTitle className="mt-6 text-ink">
              Lo que dicen quienes ya transitaron este camino
            </SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {Array.from({ length: pending }).map((_, i) => (
            <Reveal key={i} delay={i * 70} className="h-full">
              <article className="flex h-full flex-col items-center gap-5 rounded-2xl border border-dashed border-rose/30 bg-surface p-7 text-center">
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl leading-none text-rose/50"
                >
                  &ldquo;
                </span>
                <p className="flex-1 italic leading-relaxed text-taupe">
                  Testimonio pendiente de confirmación con el equipo de Laura.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-taupe">
                  Próximamente
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}