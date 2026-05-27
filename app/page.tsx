import Nav from "./components/Nav";
import Footer from "./components/Footer";

const WA = (msg: string) => `https://wa.me/525583465542?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <div>
          <div className="hero-eyebrow">NetLeading · Metodología</div>
          <h1>
            Ayudo a profesionistas y equipos comerciales a generar oportunidades de
            negocio <em>de forma constante</em>. Sin llamadas en frío ni campañas que
            no funcionan.
          </h1>
          <p className="hero-sub">
            NetLeading es una metodología que enseña a conectar y construir relaciones
            estratégicas que generan oportunidades de negocio de forma constante.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#profesionistas">Soy profesionista</a>
            <a className="btn btn-ghost" href="#empresas">Tengo un equipo comercial</a>
          </div>
          <div className="stats">
            <div><div className="stat-n">20+</div><div className="stat-l">Años de experiencia</div></div>
            <div><div className="stat-n">500+</div><div className="stat-l">Profesionistas formados</div></div>
            <div><div className="stat-n">30+</div><div className="stat-l">Programas desarrollados</div></div>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img src="/images/hero.jpg" alt="Ed Martin, creador de la metodología NetLeading" />
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="problema">
        <div className="section-eyebrow">El problema</div>
        <h2>¿De qué te sirve tener el mejor <em>producto o servicio</em>?</h2>
        <p>
          Puedes ser el mejor asesor, tener el mejor servicio, la mejor tecnología.
          Pero si no sabes comunicarlo y no estás presente en los ecosistemas
          correctos, eso no se traduce en ventas.
        </p>
        <p>
          Nos guste o no, los que más venden no siempre son los que mejor producto
          tienen. Son los que mejor saben conectar.
        </p>
        <blockquote className="quote">
          “El networking es algo que le falta bastante a la fuerza comercial. Como que
          luego no saben cómo conectar.”
          <div className="quote-label">Lo que escuchamos de nuestros clientes</div>
        </blockquote>
      </section>

      {/* PATHS */}
      <section className="paths">
        <h2>¿Cuál es tu situación?</h2>
        <div className="paths-sub">Elige el camino que corresponde a tu contexto</div>
        <div className="path-grid">
          <a className="path-card" href="#profesionistas">
            <div className="path-num">01</div>
            <h3>Soy profesionista independiente</h3>
            <p>Asesor, consultor, coach o emprendedor que quiere generar oportunidades de negocio de forma constante a través de sus relaciones.</p>
            <span className="path-link">Ver mi programa →</span>
          </a>
          <a className="path-card" href="#empresas">
            <div className="path-num">02</div>
            <h3>Lidero un equipo comercial</h3>
            <p>Director o gerente con una fuerza de ventas que necesita llegar a las personas clave dentro de sus cuentas objetivo.</p>
            <span className="path-link">Ver el programa para mi equipo →</span>
          </a>
        </div>
      </section>

      {/* PROFESIONISTAS */}
      <section id="profesionistas" className="segment">
        <div>
          <div className="section-eyebrow">Para profesionistas independientes</div>
          <h2>¿Eres bueno en lo que haces pero no tienes los resultados que quieres?</h2>
          <p>¿Hay gente con menos experiencia que tú vendiendo más? Es porque conectan mejor.</p>
          <p>
            Nadie te enseñó a construir relaciones que generen oportunidades de forma
            constante. NetLeading cambia eso, sin llamadas en frío ni campañas que
            consumen tiempo y dinero sin resultados.
          </p>
          <ul className="check-list">
            <li>Programa en línea con módulos prácticos</li>
            <li>Sesiones de coaching grupal en vivo</li>
            <li>Comunidad de Netlíderes</li>
          </ul>
          <div className="hero-ctas" style={{ marginTop: 32 }}>
            <a className="btn btn-gold" href={WA("Hola Ed, me interesa el programa para profesionistas")}>
              Quiero generar oportunidades de forma constante
            </a>
          </div>
        </div>
        <div>
          <div className="section-eyebrow">NetLeading · Programa</div>
          <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 28, fontWeight: 300, marginBottom: 24 }}>
            El sistema para profesionistas que quieren crecer a través de sus relaciones
          </h3>
          <ol className="steps-list">
            <li>Propuesta de valor que genera interés</li>
            <li>Pitch profesional memorable</li>
            <li>Mapa estratégico de relaciones</li>
            <li>Estrategias de networking probadas</li>
            <li>Protocolo de referidos</li>
            <li>Marca personal en redes sociales</li>
          </ol>
        </div>
      </section>

      {/* EMPRESAS */}
      <section id="empresas" className="segment dark">
        <div>
          <div className="section-eyebrow">Para equipos comerciales</div>
          <h2>Tu producto es excelente y tu equipo sabe vender. El reto es llegar a quien toma las decisiones.</h2>
          <p>En ventas B2B el producto no se vende solo.</p>
          <p>
            Se necesita llegar a la persona correcta dentro de la empresa correcta. Y
            eso requiere algo que pocas fuerzas comerciales tienen: saber conectar.
          </p>
          <p>
            NetLeading entrena a tu equipo para construir relaciones estratégicas que
            abran las puertas que hoy están cerradas.
          </p>
          <ul className="check-list">
            <li>Metodología adaptada a tu industria y tipo de cliente</li>
            <li>Roleplay con situaciones reales de venta B2B</li>
            <li>Seguimiento para instalar hábitos, no solo conocimiento</li>
          </ul>
          <div className="hero-ctas" style={{ marginTop: 32 }}>
            <a className="btn btn-gold" href={WA("Hola Ed, quisiera agendar una llamada de diagnóstico para mi equipo")}>
              Agendar una llamada de diagnóstico
            </a>
          </div>
        </div>
        <div>
          <div className="section-eyebrow">NetLeading · Equipos Comerciales</div>
          <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 28, fontWeight: 300, marginBottom: 24, color: "var(--cream)" }}>
            Programa híbrido que combina:
          </h3>
          <ol className="steps-list">
            <li>Taller presencial</li>
            <li>Acceso a plataforma durante un año con 12 módulos grabados de la metodología</li>
            <li>Sesiones de seguimiento en vivo</li>
            <li>Prácticas y ejercicios de ejecución</li>
            <li>Libro NetLeading</li>
          </ol>
        </div>
      </section>

      {/* SOBRE ED */}
      <section id="sobre-ed" className="sobre">
        <div className="sobre-img-wrap">
          <img src="/images/sobre.jpg" alt="Ed Martin" />
        </div>
        <div>
          <div className="section-eyebrow">Sobre Ed Martin</div>
          <h2>Casi dos décadas construyendo líderes y equipos de alto rendimiento.</h2>
          <p>
            Con casi dos décadas formando equipos comerciales y líderes en la firma de
            intermediación financiera más grande de México, Ed Martin desarrolló una
            convicción clara: el mayor activo de cualquier profesionista no es su
            producto — son sus relaciones.
          </p>
          <p>
            De esa experiencia nació NetLeading, una metodología que combina networking
            y liderazgo para ayudar a profesionistas y equipos comerciales a construir
            relaciones estratégicas que generan oportunidades reales de negocio.
          </p>
          <p>
            Es autor del libro NetLeading y ha acompañado a cientos de profesionistas a
            transformar su forma de relacionarse — y sus resultados.
          </p>
          <div className="credenciales">
            <div className="cred"><div className="cred-n">20+</div><div className="cred-l">Años de experiencia</div></div>
            <div className="cred"><div className="cred-n">500+</div><div className="cred-l">Profesionistas formados</div></div>
            <div className="cred"><div className="cred-n">30+</div><div className="cred-l">Programas desarrollados</div></div>
            <div className="cred"><div className="cred-n">200%</div><div className="cred-l">Crecimiento promedio</div></div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="historia">
        <div className="section-eyebrow">La historia de NetLeading</div>
        <h2>La historia de NetLeading</h2>
        <p>Cómo nació la metodología, en palabras de quien la vivió desde adentro.</p>
        <div className="video-wrap">
          <iframe
            src="https://player.vimeo.com/video/1177518436"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="La historia de NetLeading"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="section-eyebrow">Siguiente paso</div>
        <h2>¿Listo para construir las relaciones que van a cambiar tus resultados?</h2>
        <p>Escríbeme directamente y platicamos.</p>
        <div className="hero-ctas">
          <a className="btn btn-gold" href={WA("Hola Ed, quiero saber más sobre NetLeading")}>Contactar por WhatsApp</a>
          <a className="btn btn-ghost" href="mailto:edmartin@netlideres.com">Enviar un correo</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
