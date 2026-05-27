import Link from "next/link";

export function Logo() {
  return (
    <svg className="logo-svg" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0.5" y="0.5" width="20" height="2.5" stroke="#C59D35" strokeWidth="1" />
      <rect x="0.5" y="7" width="20" height="2" stroke="#BAB9B4" strokeWidth="0.8" />
      <rect x="0.5" y="13" width="20" height="2" stroke="#BAB9B4" strokeWidth="0.8" />
      <rect x="0.5" y="19" width="20" height="2" stroke="#BAB9B4" strokeWidth="0.8" />
      <rect x="0.5" y="25" width="20" height="2.5" stroke="#C59D35" strokeWidth="1" />
      <line x1="0.5" y1="0.5" x2="0.5" y2="27.5" stroke="#C59D35" strokeWidth="1" />
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
        <li><Link href="/#contacto" className="nav-cta">Contacto</Link></li>
      </ul>
    </nav>
  );
}
