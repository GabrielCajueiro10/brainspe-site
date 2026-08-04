import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Stats from './components/Stats';
import ContactBlock from './components/ContactBlock';
import { services } from './site-data';

export const metadata = {
  title: 'Brainspe | Inspeção NR-13, Calibração e Documentação Técnica',
  description: 'Inspeções NR-13 em vasos de pressão, caldeiras e compressores, calibração de válvulas e manômetros e documentação técnica.',
  alternates: { canonical: 'https://brainspe.com.br/' },
};

const field = [
  ['/caldeira-inspecao-interna.jpeg', 'Inspeção interna de caldeira'],
  ['/compressor-inspecao.jpeg', 'Inspeção em compressor'],
  ['/calibracao-valvula-seguranca.jpeg', 'Calibração de válvula de segurança'],
  ['/vaso-pressao-vertical.jpeg', 'Inspeção de vaso de pressão'],
  ['/manometro-industrial.jpeg', 'Verificação de manômetro'],
];

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <img src="/compressor-inspecao.jpeg" alt="Equipamento industrial inspecionado pela Brainspe" />
        <div className="overlay" />
        <div className="container hero-content">
          <span className="eyebrow">Engenharia de inspeção</span>
          <h1>Sua empresa está com as inspeções <em>NR-13</em> em dia?</h1>
          <p>Inspeções, calibrações e documentação técnica para vasos de pressão, caldeiras e compressores. Atendimento em São Paulo, Grande São Paulo e todo o Brasil.</p>
          <div className="actions"><a className="btn btn-primary" href="mailto:comercial@brainspe.com.br?subject=Solicitação de orçamento NR-13">Solicitar por e-mail</a><Link className="btn btn-secondary" href="/inspecao-nr13">Entender a inspeção NR-13</Link></div>
          <small>E-mail recomendado para envio de listas, fotos e documentação dos equipamentos.</small>
        </div>
      </section>
      <Stats />

      <section className="section">
        <div className="container section-heading"><div><span className="eyebrow">Como podemos ajudar</span><h2>Soluções diretas para manter sua operação em conformidade.</h2></div><p>Comece pela inspeção NR-13 ou selecione o equipamento e o serviço que sua empresa precisa regularizar.</p></div>
        <div className="container featured-nr13">
          <img src="/caldeira-inspecao-interna.jpeg" alt="Inspeção NR-13 em equipamento industrial" />
          <div><span className="eyebrow">Página principal</span><h3>Inspeção NR-13</h3><p>Entenda quais equipamentos são abrangidos, quando a inspeção deve ser realizada e quais documentos são entregues.</p><Link href="/inspecao-nr13">Acessar Inspeção NR-13 →</Link></div>
        </div>
        <div className="container service-grid">
          {services.filter(s=>s.slug !== 'inspecao-nr13').slice(0,6).map(s=><Link href={`/${s.slug}`} className="service-card" key={s.slug}><img src={s.image} alt={s.title}/><div><h3>{s.title}</h3><p>{s.short}</p><span>Saiba mais →</span></div></Link>)}
        </div>
      </section>

      <section className="section muted">
        <div className="container section-heading"><div><span className="eyebrow">Nossa engenharia em campo</span><h2>Trabalho real. Equipamentos reais.</h2></div><p>Registros de serviços executados pela Brainspe, sem expor informações dos clientes.</p></div>
        <div className="container field-grid">{field.map(([img,label],i)=><figure className={i===0?'large':''} key={label}><img src={img} alt={label}/><figcaption>{label}</figcaption></figure>)}</div>
      </section>

      <section className="section process"><div className="container process-grid"><div><span className="eyebrow">Como trabalhamos</span><h2>Um processo claro do primeiro contato à entrega.</h2><p>Organizamos as etapas para facilitar o envio das informações, o agendamento e a entrega da documentação técnica.</p></div><ol><li><b>01</b><span>Solicitação e informações do equipamento</span></li><li><b>02</b><span>Análise técnica e definição do escopo</span></li><li><b>03</b><span>Agendamento e inspeção em campo</span></li><li><b>04</b><span>Ensaios, medições e calibrações</span></li><li><b>05</b><span>Relatório e entrega da documentação</span></li></ol></div></section>
      <ContactBlock />
    </main>
    <Footer />
  </>;
}
