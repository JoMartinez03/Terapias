import Link from "next/link";
import { isProgramAvailable, programs, programLink } from "@/data/programs";
import { services, serviceHref } from "@/data/services";
import { mailUrl, site, whatsappUrl } from "@/data/site";
import {
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface text-taupe">
      <div className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-10" />
            <span className="font-serif text-2xl text-ink">{site.name}</span>
          </div>
          <p className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-deep">
            {site.tagline}
          </p>
          <p className="mt-2 font-serif text-lg italic text-ink/80">
            {site.brandLine}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-taupe/80">
            {site.location}, Argentina.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-taupe/80">
            Las terapias y acompañamientos aquí descriptos son complementarios y
            no sustituyen el diagnóstico ni el tratamiento médico.
          </p>
        </div>

        {/* Terapias */}
        <nav aria-label="Terapias">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
            Terapias
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={serviceHref(service)}
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
            {programs.map((program) => {
              const { href, external } = programLink(program);
              const forthcoming = !isProgramAvailable(program);

              if (!href) {
                return (
                  <li key={program.slug}>
                    <span className="text-taupe/90">{program.title}</span>
                    <span className="ml-2 text-[0.65rem] uppercase tracking-[0.2em] text-taupe/70">
                      Próximamente
                    </span>
                  </li>
                );
              }

              return (
                <li key={program.slug}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-rose-deep"
                    >
                      {program.title}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="transition-colors hover:text-rose-deep"
                    >
                      {program.title}
                    </Link>
                  )}
                  {forthcoming && (
                    <span className="ml-2 text-[0.65rem] uppercase tracking-[0.2em] text-taupe/70">
                      Próximamente
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contacto y redes */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
            Contacto
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-rose-deep"
              >
                <WhatsAppIcon size={18} />
                {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={mailUrl()}
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-rose-deep"
              >
                <MailIcon size={18} />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-rose-deep"
              >
                <InstagramIcon size={18} />
                {site.instagram.handle}
              </a>
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
