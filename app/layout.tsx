import type { Metadata } from "next";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const SITE_URL = "https://netleading.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NetLeading | Networking para generar clientes de forma constante",
    template: "%s | NetLeading",
  },
  description:
    "Metodología de networking para profesionistas y equipos comerciales que quieren generar clientes y referidos de forma constante, sin llamadas en frío. Por Ed Martin.",
  keywords: [
    "networking",
    "networking profesional",
    "generar clientes",
    "referidos",
    "prospección",
    "venta consultiva",
    "Ed Martin",
    "NetLeading",
  ],
  authors: [{ name: "Ed Martin" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "NetLeading",
    title: "NetLeading | Networking para generar clientes de forma constante",
    description:
      "Metodología de networking para profesionistas y equipos comerciales que quieren generar clientes y referidos de forma constante, sin llamadas en frío. Por Ed Martin.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NetLeading",
  url: SITE_URL,
  description:
    "Metodología de networking y liderazgo para generar oportunidades de negocio de forma constante.",
  founder: {
    "@type": "Person",
    name: "Ed Martin",
    jobTitle: "Coach, autor y estratega en networking",
    url: SITE_URL,
    sameAs: [
      "https://instagram.com/holaedmartin",
      "https://linkedin.com/in/edgarmartin",
    ],
  },
  sameAs: [
    "https://instagram.com/holaedmartin",
    "https://linkedin.com/in/edgarmartin",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
