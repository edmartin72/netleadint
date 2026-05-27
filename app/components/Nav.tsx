import Link from "next/link";

export function Logo({ color = "#C59D35" }: { color?: string }) {
  // ED MARTIN "E" mark — stylized ladder/E from the brand
  return (
    <svg className="logo-svg" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="2" width="24" height="3" fill={color} />
      <rect x="8" y="2" width="3" height="44" fill={color} />
      <rect x="8" y="22" width="20" height="3" fill="#FFFFFF" />
      <rect x="8" y="43" width="24" height="3" fill="#FFFFFF" />
      <rect x="29" y="22" width="3" height="24" fill="#FFFFFF" />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <Logo />
        <span className="logo-text">ED MARTIN</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/#profesionistas">Profesionistas</Link></li>
        <li><Link href="/#empresas">Empresas</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/#sobre-ed">Sobre Ed</Link></li>
        <li><Link href="/#contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
