import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-heading";
import {
  CircleHeartIcon,
  HeartIcon,
  LeafIcon,
  LotusIcon,
  SunIcon,
} from "@/components/ui/icons";

interface ApproachValue {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  label: string;
  note: string;
}

// Contenido provisional: se editará cuando Laura comparta su historia definitiva.
const values: ApproachValue[] = [
  { icon: HeartIcon, label: "Amor consciente", note: "Presencia que sostiene sin juzgar." },
  { icon: LeafIcon, label: "Empatía", note: "Acompañarte desde tu propia verdad." },
  { icon: SunIcon, label: "Libertad interior", note: "Espacio para que algo se mueva." },
  { icon: LotusIcon, label: "Consciencia", note: "Entender qué te pasa y por qué." },
  { icon: CircleHeartIcon, label: "Acompañamiento", note: "Un proceso a tu ritmo, sin apuro." },
];

export function Approach() {
  return (
    <section id="sobre-mi" className="bg-surface">
      <div className="wrap grid items-start gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Por qué yo</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]">
              Mi enfoque es diferente{" "}
              <em className="text-rose-deep">
                porque parte de mi propia historia
              </em>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 space-y-4 leading-relaxed text-taupe">
              <p>
                No llegué a estas terapias por casualidad.
              </p>
              <p>
                Mi propio proceso personal me llevó a explorar la relación entre
                el cuerpo, las emociones y el bienestar.
              </p>
              <p>
                Desde ahí construí un camino que integra distintas herramientas
                y formas de acompañamiento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <blockquote className="mt-9 border-l-2 border-rose pl-6">
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                El cuerpo no es tu enemigo. Es tu guía. Y yo te ayudo a
                escucharlo.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={280}>
            <Button href="#contacto" variant="primary" className="mt-9">
              Conocé mi historia completa
            </Button>
          </Reveal>
        </div>

        {/* Bloques de enfoque */}
        <Reveal delay={120}>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <li
                  key={value.label}
                  className="flex flex-col gap-3 rounded-2xl border border-rose/25 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose/70 hover:shadow-md"
                >
                  <Icon size={26} className="text-rose-deep" />
                  <div>
                    <p className="font-serif text-xl text-ink">
                      {value.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-taupe">
                      {value.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}