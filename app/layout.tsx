import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://netleading.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NetLeading — Saber conectar es la habilidad más rentable que existe",
    template: "%s | NetLeading",
  },
  description:
    "NetLeading — La metodología para construir relaciones estratégicas que generan oportunidades de negocio de forma constante.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "NetLeading",
    title: "NetLeading — Saber conectar es la habilidad más rentable que existe",
    description:
      "La metodología para construir relaciones estratégicas que generan oportunidades de negocio de forma constante.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${jost.variable} ${cormorant.variable}`}>
      <body style={{ fontFamily: "var(--font-jost), sans-serif" }}>{children}</body>
    </html>
  );
}
