"use client";

import Script from "next/script";

export default function Newsletter() {
  return (
    <section
      style={{
        background: "var(--cream, #F4F2EC)",
        padding: "50px 24px",
        borderTop: "1px solid rgba(22,22,24,0.08)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <iframe
          data-w-type="embedded"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://12gju.mjt.lu/wgt/12gju/07p5/form?c=594f91d7"
          width="100%"
          style={{ height: 500, maxWidth: 560, margin: "0 auto", display: "block" }}
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
