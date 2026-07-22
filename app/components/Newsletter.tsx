"use client";

import Script from "next/script";

export default function Newsletter() {
  return (
    <section
      style={{
        background: "var(--cream, #F4F2EC)",
        padding: "70px 24px",
        borderTop: "1px solid rgba(22,22,24,0.08)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div className="section-eyebrow" style={{ color: "var(--gold, #C59D35)" }}>
          Newsletter
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)",
            color: "var(--black, #161618)",
            margin: "14px 0 12px",
          }}
        >
          Ideas que generan clientes
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--black, #161618)",
            opacity: 0.75,
            maxWidth: 520,
            margin: "0 auto 8px",
          }}
        >
          Recibe cada semana estrategias prácticas de networking, referidos y
          conversaciones que abren oportunidades. Sin teoría de relleno.
        </p>
        <iframe
          data-w-type="embedded"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://12gju.mjt.lu/wgt/12gju/07p5/form?c=594f91d7"
          width="100%"
          style={{ height: 0 }}
          title="Suscripción al newsletter NetLeading"
        />
        <Script
          src="https://app.mailjet.com/pas-nc-embedded-v2.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
