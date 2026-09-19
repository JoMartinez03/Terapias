import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <section id="programa" className="bg-cream">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Link
          href="/#programas"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-mocha transition-colors hover:text-terracotta-dark"
        >
          <ArrowRightIcon size={18} className="rotate-180" />
          Volver a programas
        </Link>

        <div className="mt-10 max-w-2xl">
          <SectionLabel>{program.kind}</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-chocolate md:text-5xl">
            {program.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-chocolate/80">
            {program.description}
          </p>
          <p className="mt-8 font-serif text-3xl text-terracotta-dark">
            {program.price}
          </p>
          <p className="mt-2 text-sm text-mocha">
            Esta página está en preparación. Muy pronto vas a encontrar acá
            todos los detalles del programa.
          </p>

          <div className="mt-10">
            <Button
              href={program.hotmartUrl || "#"}
              pendingTitle={!program.hotmartUrl}
            >
              {program.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}