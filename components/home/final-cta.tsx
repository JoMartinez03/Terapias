import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-heading";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { isPendingUrl, site, whatsappUrl } from "@/data/site";

export function FinalCta() {
  const wa = whatsappUrl();
  const waPending = isPendingUrl(wa);

  return (
    <section id="contacto" className="relative overflow-hidden bg-mist text-chocolate">
      {/* Resplandor suave rosado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,rgba(229,196,185,0.5),transparent)]"
      />
      <div className="wrap relative py-20 text-center md:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <SectionLabel className="justify-center text-chocolate/70">
              Escribime
            </SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              ¿Sentís que algo en vos{" "}
              <em className="text-chocolate underline decoration-sage decoration-2 underline-offset-8">
                necesita moverse?
              </em>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-chocolate/70">
              El primer paso no tiene que ser perfecto. Solo tiene que ser un
              paso.
            </p>
            <p className="mt-3 leading-relaxed text-chocolate/70">
              Escribime y conversamos para entender qué necesitás y cómo puedo
              acompañarte.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={wa}
                size="lg"
                variant="dark"
                external={!waPending}
                pendingTitle={waPending}
              >
                <WhatsAppIcon size={20} />
                Escribime por WhatsApp
              </Button>
              <Button href="#servicios" variant="outlineLight" size="lg">
                Ver todos los servicios
              </Button>
            </div>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-2 text-sm text-chocolate/70 transition-colors hover:text-chocolate"
            >
              <InstagramIcon size={18} />
              <span>
                Seguime en Instagram{" "}
                <span className="text-chocolate">{site.instagram.handle}</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}