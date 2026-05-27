import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Networking, prospección y referidos",
  description:
    "Ideas prácticas sobre networking, prospección, referidos y venta consultiva para profesionistas y equipos comerciales. Por Ed Martin, creador de NetLeading.",
  alternates: { canonical: "https://netleading.net/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <section className="blog-hero">
        <div className="section-eyebrow">NetLeading · Blog</div>
        <h1>Conecta mejor, vende mejor</h1>
        <p>
          Ideas prácticas sobre networking, prospección y referidos para dejar de
          perseguir clientes y empezar a atraer oportunidades.
        </p>
      </section>

      <div className="blog-grid">
        {posts.length === 0 && (
          <p style={{ color: "var(--gray-mid)" }}>Pronto publicaremos el primer artículo.</p>
        )}
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
            <div className="post-card-body">
              <div className="post-card-cat">{post.category}</div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="post-card-meta">
                {post.author} · {formatDate(post.date)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
