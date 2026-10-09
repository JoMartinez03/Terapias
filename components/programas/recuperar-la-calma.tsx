import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { hotmartCheckoutUrl } from "@/data/programs";

const etapas = [
  {
    label: "Etapa 1",
    title: "Calmar la crisis",
    text: "Empezamos por lo urgente: bajar la intensidad del golpe emocional y darle a tu cuerpo y a tu mente un lugar donde descansar.",
  },
  {
    label: "Etapa 2",
    title: "Cortar el ciclo mental",
    text: "Con la crisis más contenida, trabajamos los pensamientos que se repiten una y otra vez, para que dejen de decidir cómo te sentís.",
  },
  {
    label: "Etapa 3",
    title: "Recuperar el control emocional",
    text: "Cerramos el protocolo con herramientas para sostenerte por tu cuenta y volver a sentirte en eje.",
  },
];

const bonos = [
  {
    label: "Bono 1",
    title: "Check List “Protocolo de Crisis”",
    text: "Una guía simple para saber qué hacer cuando la angustia aprieta, sin tener que pensar. La seguís paso a paso en los momentos más difíciles.",
  },
  {
    label: "Bono 2",
    title: "Termómetro Emocional",
    text: "Una herramienta para medir cómo estás hoy y notar tu avance día a día. Así ves que el proceso está funcionando, aunque a veces no lo sientas.",
  },
  {
    label: "Bono 3",
    title: "Audio de Emergencia",
    text: "Un audio para escuchar cuando sentís que todo se desborda. Te ayuda a frenar y volver a respirar en pocos minutos.",
  },
];

const desglose = [
  ["Etapa 1: Calmar la crisis", "$18.000"],
  ["Etapa 2: Cortar el ciclo mental", "$14.000"],
  ["Etapa 3: Recuperar el control emocional", "$14.000"],
  ["Bono 1: Check List “Protocolo de Crisis”", "$5.000"],
  ["Bono 2: Termómetro Emocional", "$5.000"],
  ["Bono 3: Audio de Emergencia", "$8.000"],
];

const faqs = [
  {
    question: "¿Sirve si la ruptura fue hace poco o si ya pasaron semanas?",
    answer:
      "Sirve para todos los casos. Si el dolor o la angustia siguen ahí, nunca es tarde para comenzar.",
  },
  {
    question: "¿Necesito saber algo de energía o terapias?",
    answer: "No. Todo está explicado de forma clara y accesible.",
  },
  {
    question: "¿Cuánto tiempo me lleva por ejercicio?",
    answer:
      "Cada ejercicio dura entre 15 y 30 minutos. Podés realizarlo desde la cama, en pijama, con un té.",
  },
  {
    question: "¿Cuándo recibo el acceso?",
    answer: "De forma inmediata — en cuanto se confirme tu pago.",
  },
  {
    question: "¿Esto reemplaza una consulta terapéutica?",
    answer:
      "No. Es una herramienta de acompañamiento y autoconocimiento que puede complementar cualquier proceso terapéutico.",
  },
];

function BulletList({
  items,
  className = "mt-6 space-y-3",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-2.5 h-px w-5 shrink-0 bg-rose-deep"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Landing de venta de "Recuperar la Calma tras una ruptura".
 * Todos los CTA de compra van al checkout directo de Hotmart
 * (centralizado en data/programs.ts → hotmartCheckoutUrl).
 */
export function RecuperarLaCalma() {
  return (
    <>
      {/* ─── 1 · HERO ─────────────────────────────────────────── */}
      <section id="calma-hero" className="relative overflow-hidden bg-background text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(201,150,138,0.3),transparent)]"
        />
        <div className="wrap relative py-16 md:py-24 lg:py-28">
          <Reveal>
            <Link
              href="/#programas"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-taupe transition-colors hover:text-rose-deep"
            >
              <ArrowRightIcon size={18} className="rotate-180" />
              Volver a programas
            </Link>
          </Reveal>

          <div className="mt-10 max-w-3xl">
            <Reveal delay={60}>
              <SectionLabel>
                PROGRAMA CORTO · 3 módulos · 7 Días · Acceso inmediato
              </SectionLabel>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight md:text-[3.1rem] lg:text-[3.9rem]">
                Recuperar la Calma tras una{" "}
                <em className="text-rose-deep">ruptura</em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-ink md:text-3xl">
                Tu cuerpo siente la ruptura aunque tu mente quiera seguir
                adelante. Es hora de que los dos sanen juntos.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-taupe">
                Sin importar si fue hace días o hace semanas — nunca es
                demasiado pronto ni demasiado tarde para empezar. Con audios y
                ejercicios cortos que podés realizar desde tu hogar, cuando y
                como puedas. Y funciona aunque sientas que nada va a calmar
                esto.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10">
                <Button
                  href={hotmartCheckoutUrl}
                  size="lg"
                  variant="primary"
                  external
                >
                  Sí, quiero empezar a recuperar mi calma
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 2 · IDENTIFICACIÓN DEL DOLOR ─────────────────────── */}
      <section id="calma-dolor" className="bg-surface text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-tight md:text-[2.7rem]">
                ¿Cuántas veces intentaste estar bien — y el cuerpo simplemente
                no te acompañó?
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-4 leading-relaxed text-taupe">
                <p>Quizás pasaron días. Quizás ya van semanas. Y sin embargo sigue ahí.</p>
              </div>
              <BulletList
                items={[
                  "Esa presión en el pecho que aparece de la nada.",
                  "El insomnio que te deja mirando el techo a las 3 de la mañana.",
                  "La ansiedad que se instala en la panza cuando menos lo esperás.",
                  "La cabeza que da vueltas sin parar — repasando, buscando respuestas.",
                ]}
                className="mt-5 space-y-3 text-ink"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-taupe">
                <p>
                  Intentaste distraerte. Hablar con amigos. Ocuparte con
                  trabajo. Y aun así — el cuerpo no suelta.
                </p>
                <p>
                  Porque una ruptura no es solo un quiebre emocional. Es algo
                  que el cuerpo también vive y que necesita sanar.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 3 · CONSECUENCIAS ────────────────────────────────── */}
      <section id="calma-consecuencias" className="bg-background text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-tight md:text-[2.7rem]">
                Sin acompañar lo que el cuerpo está viviendo...
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <BulletList
                className="mt-7 space-y-4 text-lg"
                items={[
                  "El dolor emocional se instala como tensión física que no se va.",
                  "El insomnio y la ansiedad se vuelven parte de tu día a día.",
                  "Seguís funcionando por afuera pero por adentro algo está paralizado.",
                  "El tiempo pasa pero la sensación de no poder soltar permanece.",
                  "Empezás a creer que así te vas a quedar.",
                ]}
              />
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="mt-10 border-l-2 border-rose pl-6">
                <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                  Eso no es debilidad. Es lo que pasa cuando el cuerpo no tiene
                  herramientas, pero tiene solución.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4 · LA SOLUCIÓN ──────────────────────────────────── */}
      <section id="calma-solucion" className="bg-surface text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-taupe">
                Una ruptura no se supera sola con el tiempo. Se supera cuando el
                cuerpo y las emociones tienen un espacio para procesar lo que
                vivieron.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <blockquote className="mt-9 border-l-2 border-gold pl-6">
                <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                  No tenés que estar bien para empezar. Podés empezar para
                  estar mejor.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 leading-relaxed text-taupe">
                Y cuando le damos las herramientas correctas — algo cambia. La
                respiración se afloja. El pecho se abre. La mente encuentra un
                momento de quietud.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 5 · EL PRODUCTO ──────────────────────────────────── */}
      <section id="calma-producto" className="bg-background text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-[2.4rem] font-medium leading-[1.05] tracking-tight md:text-[2.9rem]">
                Recuperar la Calma
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-4 leading-relaxed text-taupe">
                <p>
                  Un programa corto para acompañar tu cuerpo y tus emociones en
                  los días más difíciles después de una ruptura — y empezar a
                  recuperar tu equilibrio desde adentro.
                </p>
                <p>
                  No es un curso sobre &apos;cómo superar a alguien&apos;. No te
                  voy a decir que lo/la bloquees, que salgas a bailar o que
                  &apos;el tiempo lo cura todo.&apos;
                </p>
                <p>
                  Esto es diferente porque parte de algo que pocas personas
                  entienden — que una ruptura es una experiencia que el cuerpo
                  también atraviesa.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Reveal delay={140} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-rose/30 bg-surface p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">
                    Sin acompañamiento
                  </p>
                  <BulletList
                    className="mt-5 space-y-3 leading-relaxed"
                    items={[
                      "El cuerpo sigue cargando la tensión y el insomnio sin saber cómo soltarlos.",
                      "Las emociones se acumulan sin procesarse.",
                      "Seguís buscando afuera algo que solo puede moverse desde adentro.",
                    ]}
                  />
                </div>
              </Reveal>

              <Reveal delay={200} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gold/50 bg-card p-7 ring-1 ring-gold/30">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
                    Con “Recuperar la Calma”
                  </p>
                  <BulletList
                    className="mt-5 space-y-3 leading-relaxed"
                    items={[
                      "Entendés qué le está pasando a tu cuerpo — y dejás de pelear contra él.",
                      "Tenés herramientas concretas para bajar la ansiedad, el insomnio y la tensión.",
                      "Empezás a acompañarte con la misma ternura que le darías a alguien que amás.",
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6 · LO QUE VAS A ENCONTRAR ───────────────────────── */}
      <section id="calma-etapas" className="bg-surface text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel>Lo que vas a encontrar</SectionLabel>
            </Reveal>

            <div className="mt-10 space-y-5">
              {etapas.map((etapa, i) => (
                <Reveal key={etapa.label} delay={i * 80} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-rose/25 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rose/60 hover:shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
                      {etapa.label}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-medium text-ink">
                      {etapa.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-taupe">
                      {etapa.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <p className="mt-10 font-serif text-xl text-ink md:text-2xl">
                Al terminar los 7 días vas a poder:
              </p>
              <BulletList
                className="mt-5 space-y-3 text-ink"
                items={[
                  "Sentirte más tranquila y con menos sensación de emergencia",
                  "Frenar la rumiación y los pensamientos obsesivos",
                  "Recuperar el control sobre tus emociones",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 7 · BONOS ────────────────────────────────────────── */}
      <section id="calma-bonos" className="bg-background text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel>Bonos</SectionLabel>
              <h2 className="mt-6 font-serif text-[2.4rem] font-medium leading-[1.05] tracking-tight md:text-[2.9rem]">
                3 bonos de regalo
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bonos.map((bono, i) => (
                <Reveal key={bono.label} delay={i * 80} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-gold/50 bg-card p-7 ring-1 ring-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
                      {bono.label}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-medium text-ink">
                      {bono.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-taupe">
                      {bono.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8 · POR QUÉ TE PUEDO ACOMPAÑAR ───────────────────── */}
      <section id="calma-laura" className="bg-surface text-ink">
        <div className="wrap grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-28">
          <Reveal>
            <BrandLogo className="w-44 md:w-56" />
          </Reveal>

          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Por qué te puedo acompañar</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-4 leading-relaxed text-taupe">
                <p className="font-serif text-xl text-ink md:text-2xl">
                  Soy Laura Sáez, terapeuta integral especializada en
                  Biodescodificación Emocional.
                </p>
                <p>
                  Trabajo acompañando a personas en procesos de sanación — y una
                  de las cosas que más veo en mi consulta es esto: personas que
                  llegan buscando alivio físico, y cuando empezamos a trabajar
                  juntos aparece una ruptura que todavía no cerró.
                </p>
                <p>
                  Una que pasó hace dos semanas. O hace seis meses. O hace tres
                  años. Porque el cuerpo no distingue el tiempo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="mt-9 border-l-2 border-gold pl-6">
                <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                  No como terapeuta que habla desde la teoría. Sino como mujer
                  que entiende lo que es un quiebre, y que encontró
                  herramientas que de verdad mueven algo.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 leading-relaxed text-taupe">
                Hoy te ofrezco lo mismo que le daría a alguien que quiero. Un
                acompañamiento real. Desde adentro.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 9 · PRECIO ───────────────────────────────────────── */}
      <section id="calma-precio" className="relative overflow-hidden bg-background text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,rgba(201,150,138,0.28),transparent)]"
        />
        <div className="wrap relative py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-3xl border border-gold/50 bg-card p-8 ring-1 ring-gold/30 md:p-10">
                <ul className="divide-y divide-ink/10">
                  {desglose.map(([label, price]) => (
                    <li
                      key={label}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <span className="leading-snug text-taupe">{label}</span>
                      <span className="shrink-0 font-medium text-ink">
                        {price}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-baseline justify-between gap-4 py-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">
                      Valor total
                    </span>
                    <span className="text-lg text-taupe line-through">
                      $64.000
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-rose/40 bg-background p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">
                    Precio promocional
                  </p>
                  <p className="mt-3 font-serif text-5xl font-semibold text-rose-deep md:text-6xl">
                    $22.222
                  </p>
                  <p className="mt-3 inline-flex rounded-full border border-gold/70 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-rose-deep">
                    Ahorrás más del 65%
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-taupe">
                    $22.222 — Pago único. Para siempre. En tu moneda local.
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">
                    7 días de acompañamiento + 3 bonos de regalo
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    href={hotmartCheckoutUrl}
                    size="lg"
                    variant="primary"
                    external
                    className="w-full sm:w-auto"
                  >
                    SÍ, QUIERO EMPEZAR A RECUPERAR MI CALMA
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 10 · GARANTÍA ────────────────────────────────────── */}
      <section id="calma-garantia" className="bg-surface text-ink">
        <div className="wrap py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionLabel className="justify-center">Garantía</SectionLabel>
              <h2 className="mt-6 font-serif text-[2.4rem] font-medium leading-[1.05] tracking-tight md:text-[2.9rem]">
                El Sello de Confianza de 7 Días
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 leading-relaxed text-taupe">
                Accedé al protocolo, escuchá los audios, realizá los ejercicio
                y si en los próximos 7 días sentís que esto no te ayudó en nada
                — te devuelvo cada centavo. Sin preguntas. Sin vueltas.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="mt-9 border-l-2 border-gold pl-6 text-left">
                <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                  Lo único que no puedo devolverte es el tiempo que seguís
                  cargando esto.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 11 · URGENCIA + CTA FINAL ────────────────────────── */}
      <section id="calma-urgencia" className="bg-background text-ink">
        <div className="wrap pt-16 pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-[2.4rem] font-medium leading-[1.05] tracking-tight md:text-[2.9rem]">
                ¿Cuánto más vas a esperar para empezar a sentirte mejor?
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-4 leading-relaxed text-taupe">
                <p>
                  El dolor de una ruptura tiene una característica cruel — hace
                  que todo parezca imposible, incluyendo pedir ayuda.
                </p>
                <p>
                  Este programa no te pide que tengas fuerzas. No te pide que
                  estés lista o listo. Solo te pide que des un paso — pequeño,
                  amoroso, hacia vos.
                </p>
                <p className="text-ink">
                  Podrías cerrar esta página y seguir cargando con lo que te
                  pasa. O podés invertir $22.222 hoy — y podés comenzar ya
                  mismo a sentirte mejor.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex justify-center">
                <Button
                  href={hotmartCheckoutUrl}
                  size="lg"
                  variant="primary"
                  external
                  className="w-full sm:w-auto"
                >
                  QUIERO EMPEZAR A RECUPERAR MI CALMA AHORA
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 12 · PREGUNTAS FRECUENTES ────────────────────────── */}
      <section id="calma-faq" className="bg-background text-ink">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel className="justify-center">
                Preguntas frecuentes
              </SectionLabel>
            </Reveal>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 60}>
                  <details className="group rounded-2xl border border-rose/30 bg-surface p-6 transition-colors hover:border-rose/60">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink md:text-xl [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-rose-deep transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-taupe">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
