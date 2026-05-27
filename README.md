# NetLeading — Sitio web + Blog (Next.js)

Sitio de netleading.net reconstruido en Next.js, con sección de blog optimizada para SEO.

## Qué incluye

- **Home** (`app/page.tsx`) — tu página actual, mismo diseño y contenido.
- **Blog** (`app/blog/`) — índice de artículos + plantilla de artículo individual.
- **SEO técnico** — meta tags, Open Graph, schema de Article y FAQPage, sitemap.xml y robots.txt automáticos.
- **Primer artículo** — `content/blog/networking-que-es-como-hacerlo.md`.

---

## Cómo publicar un artículo nuevo (lo más importante)

1. Crea un archivo nuevo en `content/blog/` terminado en `.md`. El nombre del archivo es la URL.
   Ejemplo: `como-conseguir-referidos.md` → se publica en `netleading.net/blog/como-conseguir-referidos`.

2. Al inicio del archivo va el bloque de datos (frontmatter) entre `---`:

```markdown
---
title: "Título del artículo"
description: "Resumen de 150 caracteres para Google."
category: "Referidos"
date: "2026-06-02"
author: "Ed Martin"
keyword: "cómo conseguir referidos"
faqs:
  - q: "¿Pregunta frecuente?"
    a: "Respuesta clara."
---

Aquí va el cuerpo del artículo en Markdown.
```

3. Escribe el cuerpo en Markdown: `##` para subtítulos, `**negrita**`, `[enlace](url)`, listas con `-`, y `>` para recuadros destacados.

4. Sube el cambio a GitHub. Vercel publica solo en ~1 minuto.

---

## Cómo ponerlo en línea (una sola vez)

1. **Imágenes:** descarga las imágenes actuales de tu sitio (hero.jpg, sobre.jpg, libro.jpg, taller2.jpg) y colócalas en `public/images/`. Las URLs ya apuntan ahí.
2. **GitHub:** crea un repositorio y sube esta carpeta completa.
3. **Vercel:** entra a vercel.com, conecta el repositorio (detecta Next.js solo) y haz deploy.
4. **Dominio:** en Vercel, sección Domains, agrega `netleading.net` y sigue las instrucciones de DNS. Cuando confirmes que todo funciona, das de baja Netlify.

> Nota: la creación de cuentas y el deploy los haces tú con tus accesos. El proyecto ya está listo para que solo conectes y publiques.

---

## Correr localmente (opcional, para probar)

```bash
npm install
npm run dev      # abre http://localhost:3000
npm run build    # verifica que todo compila antes de subir
```
