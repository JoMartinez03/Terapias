import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-heading";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import {
  getService,
  serviceHref,
  serviceModalityLabel,
  serviceWhatsappUrl,
  services,
} from "@/data/services";
import { isPendingUrl } from "@/data/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/** Solo se generan las páginas de las terapias reales de data/services.ts */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.excerpt,
    keywords: [
      service.title,
      "terapias integrativas",
      "San Rafael",
      "Mendoza",
      "Laura Sáez",
    ],
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const wa = serviceWhatsappUrl(service);
  const waPending = isPendingUrl(wa);
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section id="servicio" className="bg-background text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <Reveal>
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-taupe transition-colors hover:text-rose-deep"
            >
              <ArrowRightIcon size={18} className="rotate-180" />
              Volver a terapias
            </Link>
          </Reveal>

          <div className="mt-10 max-w-3xl">
            <Reveal delay={60}>
              <SectionLabel>{serviceModalityLabel(service)}</SectionLabel>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]">
                {service.title}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 text-lg leading-relaxed text-ink/90">
                {service.excerpt}
              </p>
            </Reveal>

            {service.sections.map((section) => (
              <div key={section.heading} className="mt-12">
                <Reveal>
                  <h2 className="font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
                    {section.heading}
                  </h2>
                </Reveal>

                {section.paragraphs && section.paragraphs.length > 0 && (
                  <Reveal delay={60}>
                    <div className="mt-5 space-y-4 leading-relaxed text-taupe">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </Reveal>
                )}

                {section.list && section.list.length > 0 && (
                  <Reveal delay={100}>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl border border-rose/25 bg-surface p-6 text-ink"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-5 shrink-0 bg-rose"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {section.closing && section.closing.length > 0 && (
                  <Reveal delay={140}>
                    <div className="mt-6 space-y-4 leading-relaxed text-taupe">
                      {section.closing.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </Reveal>
                )}
              </div>
            ))}

            <Reveal delay={200}>
              <div className="mt-14 flex flex-wrap items-center gap-4">
                <Button
                  href={wa}
                  size="lg"
                  variant="primary"
                  external={!waPending}
                  pendingTitle={waPending}
                >
                  <WhatsAppIcon size={20} />
                  Consultar por WhatsApp
                </Button>
                <Button href="/#contacto" variant="outline" size="lg">
                  Escribime
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Otras terapias */}
      <section id="otros-servicios" className="bg-surface text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>También podés consultar por</SectionLabel>
              <h2 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight md:text-[3.1rem]">
                Otras terapias
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70} className="h-full">
                <Link
                  href={serviceHref(item)}
                  className="group flex h-full flex-col rounded-2xl border border-rose/25 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rose/60 hover:shadow-lg"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-taupe">
                    {serviceModalityLabel(item)}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep transition-colors group-hover:text-ink">
                    Quiero saber más
                    <ArrowRightIcon
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
