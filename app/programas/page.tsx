import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { isProgramAvailable, programs, programCta } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programas digitales",
  description:
    "Programas y mini-cursos digitales de Laura Sáez para seguir tu proceso de bienestar desde donde estés.",
};

export default function ProgramasPage() {
  return (
    <section id="programas-index" className="bg-background">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Reveal>
          <Link
            href="/#programas"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-taupe transition-colors hover:text-rose-deep"
          >
            <ArrowRightIcon size={18} className="rotate-180" />
            Volver a programas
          </Link>
        </Reveal>

        <div className="mt-10 max-w-2xl">
          <SectionLabel>Programas digitales</SectionLabel>
          <SectionTitle className="mt-6 text-ink">
            Empezá tu proceso desde donde estés
          </SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-taupe">
            Los programas disponibles se compran directamente en Hotmart. Los que
            están marcados como Próximamente todavía no tienen link de compra.
          </p>
        </div>

        <ul className="mt-14 space-y-4">
          {programs.map((program, i) => {
            const cta = programCta(program);
            const forthcoming = !isProgramAvailable(program);
            return (
              <li key={program.slug}>
                <Reveal delay={i * 70}>
                  <div className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-card p-6 transition-all duration-300 hover:border-rose/60 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-deep">
                          {program.kind}
                        </p>
                        {forthcoming && (
                          <p className="rounded-full border border-rose/50 bg-background px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-taupe">
                            Próximamente
                          </p>
                        )}
                      </div>
                      <p className="mt-1 font-serif text-2xl text-ink">
                        {program.title}
                      </p>
                      <p className="mt-2 leading-relaxed text-taupe">
                        {program.description}
                      </p>
                    </div>
                    <div className="shrink-0 sm:ml-6">
                      <Button
                        href={cta.href ?? "#"}
                        variant={program.featured ? "primary" : "outline"}
                        external={cta.external}
                        pendingTitle={cta.pending}
                        disabled={!cta.href}
                      >
                        {cta.label}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}