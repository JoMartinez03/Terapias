import Link from "next/link";
import { programs, programHref } from "@/data/programs";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { InstagramIcon, LotusIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface text-taupe">
      <div className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <LotusIcon size={30} className="text-gold" />
            <span className="font-serif text-2xl text-ink">{site.name}</span>
          </div>
          <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-deep">
            {site.tagline}
          </p>
          <p className="mt-2 font-serif text-lg italic text-ink/80">
            {site.brandLine}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-taupe/80">
            {site.location}, Argentina. Las terapias y acompañamientos aquí
            descriptos son complementarios y no sustituyen el diagnóstico ni el
            tratamiento médico.
          </p>
        </div>

        {/* Servicios */}
        <nav aria-label="Servicios">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
            Servicios
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.agendaproUrl || "/#servicios"}
                  className="transition-colors hover:text-rose-deep"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Programas */}
        <nav aria-label="Programas">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
            Programas
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link
                  href={programHref(program)}
                  className="transition-colors hover:text-rose-deep"
                >
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto y redes */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
            Contacto
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-rose-deep"
              >
                <InstagramIcon size={18} />
                {site.instagram.handle}
              </Link>
            </li>
            <li className="text-taupe/80">{site.location}</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-ink/10">
        <div className="wrap flex flex-col gap-2 py-6 text-center text-xs text-taupe/70 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {year} {site.name} · {site.tagline}
          </p>
          <p>
            San Rafael, Mendoza, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}