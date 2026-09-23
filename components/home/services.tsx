import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { isPendingUrl } from "@/data/site";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="bg-surface">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Terapias</SectionLabel>
            <SectionTitle className="mt-6 text-ink">
              Formas de acompañarte en tu proceso
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-taupe">
              Sesiones individuales para acompañar tu proceso personal.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const target = isPendingUrl(service.agendaproUrl)
              ? "#"
              : service.agendaproUrl;
            return (
              <Reveal key={service.slug} delay={i * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-rose/25 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rose/60 hover:shadow-lg">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-taupe">
                    {service.modality}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-ink md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-taupe">
                    {service.excerpt}
                  </p>
                  <a
                    href={target}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep transition-colors group-hover:text-ink"
                    title={
                      isPendingUrl(target)
                        ? "Enlace pendiente de confirmación"
                        : undefined
                    }
                  >
                    Quiero saber más
                    <ArrowRightIcon
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}