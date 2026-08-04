import Link from 'next/link';
import { contact } from '../site-data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo-brainspe.jpg" alt="Brainspe Engenharia de Inspeção" className="footer-logo" />
          <p>Inspeções NR-13, calibrações e documentação técnica com atendimento em São Paulo, Grande São Paulo e todo o Brasil.</p>
        </div>
        <div>
          <h3>Serviços</h3>
          <Link href="/inspecao-nr13">Inspeção NR-13</Link>
          <Link href="/vasos-de-pressao">Vasos de pressão</Link>
          <Link href="/caldeiras">Caldeiras</Link>
          <Link href="/compressores">Compressores</Link>
          <Link href="/calibracao">Calibração</Link>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`https://wa.me/${contact.phone}`}>{contact.phoneDisplay}</a>
          <span>São Paulo – SP</span>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Brainspe Engenharia de Inspeção.</div>
    </footer>
  );
}
