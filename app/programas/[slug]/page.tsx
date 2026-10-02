import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs, programCta } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

/**
 * Ruta heredada de una versión anterior: los programas ya no tienen páginas
 * de detalle propias, la compra se hace en Hotmart. Se conserva para no romper
 * enlaces antiguos y muestra el estado real del programa (sin precios).
 */
export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) notFound();

  const cta = programCta(program);
  const purchaseNote = cta.href
    ? "Este programa se compra directamente en Hotmart."
    : cta.pending
      ? "El link de compra de este programa está en preparación."
      : "Este programa se lanza muy pronto.";

  return (
    <section id="programa" className="bg-background">
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
          <Reveal delay={80}>
            <SectionLabel>{program.kind}</SectionLabel>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-5xl">
              {program.title}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-taupe">
              {program.description}
            </p>
            <p className="mt-8 leading-relaxed text-taupe">{purchaseNote}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10">
              <Button
                href={cta.href ?? "#"}
                external={cta.external}
                pendingTitle={cta.pending}
                disabled={!cta.href}
              >
                {cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}