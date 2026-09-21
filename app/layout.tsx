import type { Metadata } from "next";
import Script from "next/script";
import type { Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // PENDIENTE: definir el dominio definitivo (metadataBase para redes sociales)
  title: {
    default: "Laura Sáez | Terapias Integrativas en San Rafael",
    template: "%s | Laura Sáez",
  },
  description:
    "Terapias integrativas, Reiki, Biodescodificación, Tarot Evolutivo y programas de bienestar con Laura Sáez en San Rafael y online.",
  keywords: [
    "Reiki",
    "Biodescodificación",
    "Tarot evolutivo",
    "terapias integrativas",
    "San Rafael",
    "Mendoza",
    "bienestar",
    "Laura Sáez",
  ],
  openGraph: {
    title: "Laura Sáez | Terapias Integrativas en San Rafael",
    description:
      "Terapias integrativas, Reiki, Biodescodificación, Tarot Evolutivo y programas de bienestar con Laura Sáez en San Rafael y online.",
    siteName: "Laura Sáez | Terapias Integrativas",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4a3022",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <Script id="enable-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-cream text-chocolate">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-chocolate-ink"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}