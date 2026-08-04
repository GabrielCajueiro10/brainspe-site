import Link from 'next/link';
import { contact } from '../site-data';

export default function Header() {
  const emailHref = `mailto:${contact.email}?subject=Solicitação de orçamento NR-13`;
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Brainspe - página inicial">
          <img src="/logo-brainspe.jpg" alt="Brainspe Engenharia de Inspeção" />
        </Link>
        <nav className="nav" aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/inspecao-nr13">Inspeção NR-13</Link>
          <details className="nav-dropdown">
            <summary>Serviços</summary>
            <div className="dropdown-menu">
              <Link href="/vasos-de-pressao">Vasos de pressão</Link>
              <Link href="/caldeiras">Caldeiras</Link>
              <Link href="/compressores">Compressores</Link>
              <Link href="/calibracao">Calibração</Link>
              <Link href="/prontuario-nr13">Prontuário NR-13</Link>
              <Link href="/livro-de-registro">Livro de Registro</Link>
            </div>
          </details>
          <Link href="/conhecimento">Conhecimento</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <a className="btn btn-primary header-cta" href={emailHref}>Solicitar orçamento</a>
      </div>
    </header>
  );
}
