import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import ContactBlock from './ContactBlock';

export default function ServicePage({ eyebrow, title, intro, image, sections, related = [] }) {
  return <>
    <Header />
    <main>
      <section className="page-hero">
        <img src={image} alt={title} />
        <div className="overlay" />
        <div className="container page-hero-content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p><a className="btn btn-primary" href="mailto:comercial@brainspe.com.br?subject=Solicitação de orçamento NR-13">Solicitar por e-mail</a></div>
      </section>
      <section className="content-section"><div className="container content-layout">
        <div>
          {sections.map((s) => <article key={s.title} className="content-card"><h2>{s.title}</h2><p>{s.text}</p>{s.items && <ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul>}</article>)}
        </div>
        <aside className="side-nav"><h3>Serviços relacionados</h3>{related.map(r=><Link key={r.href} href={r.href}>{r.label} →</Link>)}</aside>
      </div></section>
      <ContactBlock />
    </main>
    <Footer />
  </>;
}
