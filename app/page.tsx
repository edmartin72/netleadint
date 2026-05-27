import Nav from "./components/Nav";
import Footer from "./components/Footer";

const WA = "https://wa.me/525583465542";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-tag">NetLeading · Metodología</div>
          <h1>
            Ayudo a profesionistas y equipos comerciales a generar oportunidades de
            negocio de forma constante. Sin llamadas en frío ni campañas que no
            funcionan.
          </h1>
          <p className="hero-sub">
            NetLeading es una metodología que enseña a conectar y construir relaciones
            estratégicas que generan oportunidades de negocio de forma constante.
          </p>
          <div className="hero-btns">
            <a href="#profesionistas" className="btn-gold">Soy profesionista</a>
            <a href="#empresas" className="btn-outline-light">Tengo un equipo comercial</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img src="/images/hero.jpg" alt="Ed Martin, creador de la metodología de networking NetLeading" />
            <div className="corner corner-tl"></div>
            <div className="corner corner-br"></div>
          </div>
          <div className="hero-stat">
            <div className="stat-item"><div className="stat-n">20+</div><div className="stat-l">Años de experiencia</div></div>
            <div className="stat-item"><div className="stat-n">500+</div><div className="stat-l">Profesionistas formados</div></div>
            <div className="stat-item"><div className="stat-n">30+</div><div className="stat-l">Programas desarrollados</div></div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="problema" id="metodologia">
        <div className="problema-bg"></div>
        <div className="problema-content">
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>El problema</div>
          <h2>¿De qué te sirve tener el mejor <em>producto o servicio</em>?</h2>
          <p>Puedes ser el mejor asesor, tener el mejor servicio, la mejor tecnología. Pero si no sabes comunicarlo y no estás presente en los ecosistemas correctos, eso no se traduce en ventas.</p>
          <p>Nos guste o no, los que más venden no siempre son los que mejor producto tienen. Son los que mejor saben conectar.</p>
        </div>
        <div className="problema-visual">
          <div className="quote-block">
            <div className="quote-text">&quot;El networking es algo que le falta bastante a la fuerza comercial. Como que luego no saben cómo conectar.&quot;</div>
            <div className="quote-attr">Lo que escuchamos de nuestros clientes</div>
          </div>
        </div>
      </section>

      {/* BIFURCACION */}
      <section className="bifurcacion" id="programas">
        <h2>¿Cuál es tu situación?</h2>
        <p>Elige el camino que corresponde a tu contexto</p>
        <div className="cards-grid">
          <a href="#profesionistas" className="bif-card">
            <div className="bif-num">01</div>
            <div className="bif-title">Soy profesionista independiente</div>
            <div className="bif-desc">Asesor, consultor, coach o emprendedor que quiere generar oportunidades de negocio de forma constante a través de sus relaciones.</div>
            <div className="bif-link">Ver mi programa</div>
          </a>
          <a href="#empresas" className="bif-card">
            <div className="bif-num">02</div>
            <div className="bif-title">Lidero un equipo comercial</div>
            <div className="bif-desc">Director o gerente con una fuerza de ventas que necesita llegar a las personas clave dentro de sus cuentas objetivo.</div>
            <div className="bif-link">Ver el programa para mi equipo</div>
          </a>
        </div>
      </section>

      {/* B2C */}
      <section className="b2c" id="profesionistas">
        <div className="b2c-content">
          <div className="section-eyebrow">Para profesionistas independientes</div>
          <h2 className="section-main-title">Profesionistas independientes</h2>
          <h2>¿Eres bueno en lo que haces pero no tienes los resultados que quieres?</h2>
          <div className="b2c-hook">¿Hay gente con menos experiencia que tú vendiendo más? Es porque conectan mejor.</div>
          <p>Nadie te enseñó a construir relaciones que generen oportunidades de forma constante. NetLeading cambia eso, sin llamadas en frío ni campañas que consumen tiempo y dinero sin resultados.</p>
          <div className="includes-title">¿Qué incluye?</div>
          <ul className="includes-list">
            <li>Programa en línea con módulos prácticos</li>
            <li>Sesiones de coaching grupal en vivo</li>
            <li>Comunidad de Netlíderes</li>
          </ul>
          <a href={`${WA}?text=Hola%20Ed%2C%20me%20interesa%20el%20programa%20para%20profesionistas`} className="btn-gold" target="_blank" rel="noopener noreferrer">Quiero generar oportunidades de forma constante</a>
        </div>
        <div>
          <div className="program-card">
            <div className="program-label">NetLeading · Programa</div>
            <div className="program-name">El sistema para profesionistas que quieren crecer a través de sus relaciones</div>
            <ul className="program-steps">
              <li><span className="step-n">1</span>Propuesta de valor que genera interés</li>
              <li><span className="step-n">2</span>Pitch profesional memorable</li>
              <li><span className="step-n">3</span>Mapa estratégico de relaciones</li>
              <li><span className="step-n">4</span>Estrategias de networking probadas</li>
              <li><span className="step-n">5</span>Protocolo de referidos</li>
              <li><span className="step-n">6</span>Marca personal en redes sociales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="b2b" id="empresas">
        <div className="b2b-content">
          <div className="section-eyebrow">Para equipos comerciales</div>
          <h2 className="section-main-title" style={{ color: "var(--cream)" }}>Equipos comerciales</h2>
          <h2>Tu producto es excelente y tu equipo sabe vender. El reto es llegar a quien toma las decisiones.</h2>
          <div className="b2b-hook">En ventas B2B el producto no se vende solo.</div>
          <p>Se necesita llegar a la persona correcta dentro de la empresa correcta. Y eso requiere algo que pocas fuerzas comerciales tienen: saber conectar.</p>
          <p>NetLeading entrena a tu equipo para construir relaciones estratégicas que abran las puertas que hoy están cerradas.</p>
          <ul className="includes-list">
            <li>Metodología adaptada a tu industria y tipo de cliente</li>
            <li>Roleplay con situaciones reales de venta B2B</li>
            <li>Seguimiento para instalar hábitos, no solo conocimiento</li>
          </ul>
          <a href={`${WA}?text=Hola%20Ed%2C%20quisiera%20agendar%20una%20llamada%20de%20diagn%C3%B3stico%20para%20mi%20equipo`} className="btn-gold" target="_blank" rel="noopener noreferrer">Agendar una llamada de diagnóstico</a>
        </div>
        <div className="b2b-card">
          <div className="program-label">NetLeading · Equipos Comerciales</div>
          <div className="program-name" style={{ color: "var(--cream)" }}>Programa híbrido que combina:</div>
          <ul className="program-steps">
            <li><span className="step-n">1</span>Taller presencial</li>
            <li><span className="step-n">2</span>Acceso a plataforma durante un año con 12 módulos grabados de la metodología</li>
            <li><span className="step-n">3</span>Sesiones de seguimiento en vivo</li>
            <li><span className="step-n">4</span>Prácticas y ejercicios de ejecución</li>
            <li><span className="step-n">5</span>Libro NetLeading</li>
          </ul>
        </div>
      </section>

      {/* ENTREVISTAS YOUTUBE */}
      <section className="entrevistas">
        <div className="section-label">Conversaciones que dejan huella</div>
        <div className="yt-grid">
          {["DJhltRyWJ3o", "ZcHmcqe958w", "tPc-pm65O94", "5Hzu2pvf-Cc"].map((id) => (
            <a
              key={id}
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-thumb"
            >
              <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Entrevista Ed Martin" />
              <div className="yt-play">
                <svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6V2z" /></svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE ED */}
      <section className="sobre" id="sobre-ed">
        <div style={{ position: "relative" }}>
          <div className="sobre-img-wrap">
            <img src="/images/sobre.jpg" alt="Ed Martin, autor y coach en networking y liderazgo" />
          </div>
          <div className="book-badge">
            <div className="book-badge-label">Libro</div>
            <div className="book-badge-title">NetLeading</div>
            <img src="/images/libro.jpg" alt="Libro NetLeading de Ed Martin" style={{ width: "100%", marginTop: 8, borderRadius: 2 }} />
          </div>
        </div>
        <div>
          <div className="section-eyebrow">Sobre Ed Martin</div>
          <h2>Casi dos décadas construyendo líderes y equipos de alto rendimiento.</h2>
          <p>Con casi dos décadas formando equipos comerciales y líderes en la firma de intermediación financiera más grande de México, Ed Martin desarrolló una convicción clara: el mayor activo de cualquier profesionista no es su producto — son sus relaciones.</p>
          <p>De esa experiencia nació NetLeading, una metodología que combina networking y liderazgo para ayudar a profesionistas y equipos comerciales a construir relaciones estratégicas que generan oportunidades reales de negocio.</p>
          <p>Es autor del libro NetLeading y ha acompañado a cientos de profesionistas a transformar su forma de relacionarse — y sus resultados.</p>
          <div className="credenciales">
            <div className="cred"><div className="cred-n">20+</div><div className="cred-l">Años de experiencia</div></div>
            <div className="cred"><div className="cred-n">500+</div><div className="cred-l">Profesionistas formados</div></div>
            <div className="cred"><div className="cred-n">30+</div><div className="cred-l">Programas desarrollados</div></div>
            <div className="cred"><div className="cred-n">200%</div><div className="cred-l">Crecimiento promedio</div></div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="historia" id="historia">
        <div className="section-label" style={{ marginBottom: 24 }}>La historia de NetLeading</div>
        <h2>La historia de NetLeading</h2>
        <p>Cómo nació la metodología, en palabras de quien la vivió desde adentro.</p>
        <div className="video-wrap">
          <iframe src="https://player.vimeo.com/video/1177518436" allowFullScreen title="La historia de NetLeading"></iframe>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="contacto">
        <div className="cta-final-inner">
          <div>
            <div className="section-eyebrow" style={{ color: "var(--gold)" }}>Siguiente paso</div>
            <h2>¿Listo para construir las relaciones que van a cambiar tus resultados?</h2>
            <p>Escríbeme directamente y platicamos.</p>
            <div className="cta-btns">
              <a href={`${WA}?text=Hola%20Ed%2C%20quiero%20saber%20m%C3%A1s%20sobre%20NetLeading`} className="btn-gold" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
              <a href="mailto:edmartin@netlideres.com" className="btn-outline-light">Enviar un correo</a>
            </div>
          </div>
          <div className="cta-photo">
            <img src="/images/taller2.jpg" alt="Ed Martin con Marcus Dantus en un evento de networking" />
            <div className="cta-photo-caption">Con Marcus Dantus, emprendedor y referente del ecosistema de negocios en México</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
