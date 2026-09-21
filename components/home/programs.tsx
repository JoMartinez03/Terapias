import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { programs, programHref } from "@/data/programs";

export function Programs() {
  return (
    <section id="programas" className="bg-mist text-chocolate">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel className="text-chocolate/70">Programas digitales</SectionLabel>
            <SectionTitle className="mt-6 text-chocolate">
              Empezá tu proceso
              <br />
              desde{" "}
              <em className="text-chocolate underline decoration-sage decoration-2 underline-offset-8">
                donde estés
              </em>
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-chocolate/70">
              Recursos y programas digitales para quienes quieren ir más
              profundo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={i * 70} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
                  program.featured
                    ? "border-frost/60 bg-blush shadow-xl"
                    : "border-sage/40 bg-almond hover:-translate-y-1 hover:border-chocolate/25",
                )}
              >
                {program.featured && (
                  <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-chocolate/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-chocolate">
                    Destacado
                  </p>
                )}
                <p
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.25em]",
                    program.featured ? "text-chocolate/70" : "text-chocolate/60",
                  )}
                >
                  {program.kind}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-chocolate md:text-3xl">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-chocolate/70">
                  {program.description}
                </p>
                <div className="mt-6 flex items-end justify-between gap-3 border-t border-chocolate/10 pt-5">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-chocolate/50">
                      Precio introductorio
                    </p>
                    <p className="font-serif text-2xl text-chocolate">
                      {program.price}
                    </p>
                  </div>
                  <Button
                    href={programHref(program)}
                    variant={program.featured ? "dark" : "outlineLight"}
                    size="md"
                  >
                    {program.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}