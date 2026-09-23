import type { Metadata } from "next";
import Link from "next/link";
import { programs, programHref } from "@/data/programs";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Programas digitales",
  description:
    "Programas y mini-cursos digitales de Laura Sáez para seguir tu proceso de bienestar desde donde estés.",
};

export default function ProgramasPage() {
  return (
    <section id="programas-index" className="bg-background">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <SectionLabel>Programas digitales</SectionLabel>
          <SectionTitle className="mt-6 text-ink">
            Empezá tu proceso desde donde estés
          </SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-taupe">
            Esta sección está en preparación. Los programas pronto tendrán su
            propia página con toda la información y el acceso al check-out.
          </p>
        </div>

        <ul className="mt-14 space-y-4">
          {programs.map((program) => (
            <li key={program.slug}>
              <Link
                href={programHref(program)}
                className="group flex flex-col gap-1 rounded-2xl border border-ink/10 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/60 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-deep">
                    {program.kind}
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    {program.title}
                  </p>
                </div>
                <p className="mt-2 font-serif text-2xl text-rose-deep sm:mt-0">
                  {program.price}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}