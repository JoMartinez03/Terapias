import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/section-heading";
import {
  BranchIcon,
  LoopIcon,
  MoonIcon,
  SparkIcon,
  TearIcon,
  WaveIcon,
} from "@/components/ui/icons";

interface IdentificationItem {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  text: string;
}

const items: IdentificationItem[] = [
  {
    icon: SparkIcon,
    text: "Tenés un dolor físico que vuelve siempre, aunque ya hiciste de todo.",
  },
  {
    icon: TearIcon,
    text: "Sentís que una emoción nunca terminó de cerrarse.",
  },
  {
    icon: LoopIcon,
    text: "Repetís las mismas situaciones en el trabajo, el amor o la familia.",
  },
  {
    icon: MoonIcon,
    text: "Te sentís estancada, agotada o desconectada de vos misma.",
  },
  {
    icon: WaveIcon,
    text: "Tu cuerpo te manda señales que no sabés cómo leer.",
  },
  {
    icon: BranchIcon,
    text: "Estás atravesando un duelo, una ruptura o un momento de quiebre.",
  },
];

export function Identification() {
  return (
    <section id="identificacion" className="bg-mist">
      <div className="wrap py-16 md:py-24 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel className="text-chocolate/70">Identificación</SectionLabel>
            <SectionTitle className="mt-6 text-chocolate">
              ¿Esto es para vos?
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-chocolate/80">
              Si te identificás con alguna de estas situaciones, estás en el
              lugar indicado.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.text} delay={i * 70} role="listitem">
                <article className="flex h-full flex-col items-start gap-4 rounded-2xl border border-sage/40 bg-almond p-6 transition-all duration-300 hover:-translate-y-1 hover:border-chocolate/25 hover:shadow-lg">
                  <Icon size={26} className="text-chocolate/70" />
                  <p className="text-lg leading-snug text-chocolate">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-16 max-w-xl text-center font-serif text-2xl italic leading-snug text-chocolate md:text-3xl">
            Eso no es casualidad. Y no tenés que cargarlo sola.
          </p>
        </Reveal>
      </div>
    </section>
  );
}