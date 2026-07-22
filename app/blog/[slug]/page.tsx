import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { getPost, getPostSlugs, formatDate } from "@/lib/posts";

const SITE_URL = "https://netleading.net";
const SKOOL = "https://www.skool.com/netlideres-9986/about";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      locale: "es_MX",
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-MX",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "NetLeading",
      url: SITE_URL,
    },
  };

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="cat">{post.category}</div>
          <h1>{post.title}</h1>
          <div className="meta">
            Por <strong>{post.author}</strong> · {formatDate(post.date)}
          </div>
        </div>
      </header>

      <article className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <Newsletter />

      <section className="article-end-cta">
        <h2>El networking se aprende, y se puede sistematizar</h2>
        <p>
          NetLeading es el sistema probado para construir relaciones que generan
          oportunidades de negocio de forma constante. Si quieres aplicarlo con
          acompañamiento, platiquemos.
        </p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <a
            className="btn btn-gold"
            href="https://wa.me/525583465542?text=Hola%20Ed%2C%20le%C3%AD%20tu%20art%C3%ADculo%20y%20quiero%20saber%20m%C3%A1s%20sobre%20NetLeading"
          >
            Escríbeme por WhatsApp
          </a>
          <a
            className="btn btn-outline-light"
            href={SKOOL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conocer la comunidad
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
