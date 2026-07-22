import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenido | NetLeading",
  description:
    "Tu suscripción está confirmada. Cada semana recibirás una idea práctica para generar clientes a través de tus relaciones.",
  robots: { index: false, follow: true },
};

const SKOOL = "https://www.skool.com/netlideres-9986/about";

const articulos = [
  {
    titulo: "Propuesta de valor: ejemplos y fórmula",
    desc: "La respuesta al “¿a qué te dedicas?” que provoca un “cuéntame más”.",
    url: "/blog/propuesta-de-valor-ejemplos",
  },
  {
    titulo: "Referidos sin pedirlos",
    desc: "El sistema para que tus clientes te recomienden de forma constante.",
    url: "/blog/referidos-sistema-para-conseguirlos-sin-pedirlos",
  },
  {
    titulo: "Networking: la guía completa",
    desc: "Qué es, para qué sirve y cómo hacerlo paso a paso.",
    url: "/blog/networking-que-es-como-hacerlo",
  },
];

export default function Bienvenido() {
  return (
    <>
      <Nav />

      <section
        style={{
          background: "var(--black, #161618)",
          color: "var(--cream, #F4F2EC)",
          padding: "140px 24px 90px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="section-eyebrow" style={{ color: "var(--gold, #C59D35)" }}>
            Newsletter NetLeading
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              lineHeight: 1.15,
              margin: "18px 0 22px",
            }}
          >
            Listo, ya estás dentro.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.85, margin: "0 auto", maxWidth: 560 }}>
            Tu suscripción quedó confirmada. Cada semana vas a recibir una idea
            práctica para generar clientes y referidos a través de tu red — se
            lee en minutos y se aplica el mismo día.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.6, marginTop: 18 }}>
            Tip: agrega mi correo a tus contactos para que ninguna idea se vaya a
            promociones o spam.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--cream, #F4F2EC)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="section-eyebrow">Mientras llega tu primer correo</div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              color: "var(--black, #161618)",
              margin: "14px 0 40px",
            }}
          >
            Empieza por aquí
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {articulos.map((a) => (
              <a
                key={a.url}
                href={a.url}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid rgba(22,22,24,0.08)",
                  padding: "28px 26px",
                  textDecoration: "none",
                  color: "var(--black, #161618)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {a.titulo}
                </div>
                <div style={{ fontSize: "0.92rem", lineHeight: 1.6, opacity: 0.7, marginBottom: 16 }}>
                  {a.desc}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold, #C59D35)",
                  }}
                >
                  Leer artículo →
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 70,
              background: "var(--black, #161618)",
              color: "var(--cream, #F4F2EC)",
              padding: "50px 40px",
              textAlign: "center",
            }}
          >
            <div className="section-eyebrow" style={{ color: "var(--gold, #C59D35)" }}>
              ¿Quieres ir más profundo?
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                margin: "14px auto 12px",
                maxWidth: 560,
              }}
            >
              Conoce la comunidad de Netlíderes
            </h3>
            <p style={{ fontSize: "0.98rem", lineHeight: 1.7, opacity: 0.8, maxWidth: 520, margin: "0 auto 28px" }}>
              El programa completo de la metodología NetLeading: módulos
              prácticos, coaching grupal en vivo y una comunidad de
              profesionistas que crecen conectando.
            </p>
            <a
              href={SKOOL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Conocer el programa
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
