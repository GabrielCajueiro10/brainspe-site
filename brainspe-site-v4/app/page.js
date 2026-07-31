const whatsappLink = 'https://wa.me/5511958462630?text=Ol%C3%A1%21%20Encontrei%20a%20Brainspe%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';
const emailSubject = encodeURIComponent('Solicitação de orçamento NR-13');
const emailBody = encodeURIComponent(`Olá, equipe Brainspe.\n\nGostaria de solicitar um orçamento para serviços de inspeção NR-13.\n\nEmpresa:\nResponsável:\nCidade:\nServiço desejado:\nQuantidade de equipamentos:\nPrazo desejado:\nTelefone:\n\nInformações adicionais:\n`);
const emailLink = `mailto:comercial@brainspe.com.br?subject=${emailSubject}&body=${emailBody}`;

const Icon = ({ name, size = 36 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    vessel: <><rect x="6" y="3" width="12" height="18" rx="5"/><path d="M9 3V1.8M15 3V1.8M9 21v1.2M15 21v1.2M3.5 9H6M18 9h2.5M3.5 15H6M18 15h2.5"/></>,
    boiler: <><path d="M4 8h16v10H4z"/><path d="M8 8V5h8v3M8 18v2M16 18v2M7 13h10M12 10v6"/></>,
    compressor: <><rect x="4" y="8" width="16" height="9" rx="4"/><path d="M7 8V5h10v3M8 17v2M16 17v2M8 12h2M14 12h2"/></>,
    valve: <><path d="M8 3h8M12 3v5M5 8h14M8 8v4l-3 2v4h14v-4l-3-2V8M12 12v6"/></>,
    gauge: <><circle cx="12" cy="12" r="8"/><path d="M12 12l4-4M7 16h10M12 4v2"/></>,
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
    report: <><path d="M5 3h10l4 4v14H5z"/><path d="M15 3v5h4M8 12h3M8 16h8M13 12h3"/></>,
    shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    star: <><path d="m12 3 2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2z"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></>,
    building: <><path d="M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5"/></>,
    brazil: <><path d="M7 3l5 1 3 2 2 4-1 3 2 2-2 4-4 2-2-3-3-1-1-4-2-3z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    headset: <><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 0 1-1z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <><path d="M5 4h3l2 5-2 1c1.4 3 3 4.6 6 6l1-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const services = [
  ['vessel','Inspeção de Vasos de Pressão','Inspeções iniciais, periódicas e extraordinárias.'],
  ['boiler','Inspeção de Caldeiras','Avaliação de segurança, integridade e conformidade.'],
  ['compressor','Inspeção de Compressores','Inspeções técnicas em reservatórios de ar comprimido.'],
  ['valve','Calibração de Válvulas de Segurança','Calibração, ajuste e emissão de certificado.'],
  ['gauge','Calibração de Manômetros','Calibração e verificação dos instrumentos de pressão.'],
  ['document','Prontuário NR-13','Elaboração e organização da documentação obrigatória.'],
  ['report','Relatórios Técnicos','Documentos claros para auditorias e fiscalizações.']
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Brainspe - início"><img src="/logo-brainspe.png" alt="Brainspe Engenharia de Inspeção" /></a>
          <nav className="nav" aria-label="Navegação principal">
            <a className="active" href="#inicio">Home</a><a href="#servicos">Serviços</a><a href="#nr13">NR-13</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
          </nav>
          <a className="email-top" href={emailLink}><Icon name="mail" size={18}/> Solicitar orçamento</a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid"/><div className="hero-image"/><div className="hero-shade"/>
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <span className="hero-kicker">Engenharia especializada em NR-13</span>
            <h1>Engenharia de inspeção <span>NR-13</span></h1>
            <h2>Com segurança, precisão e confiabilidade.</h2>
            <p>Inspeções, calibrações e documentação técnica para manter sua empresa em conformidade, garantir segurança e aumentar a vida útil dos equipamentos.</p>
            <div className="hero-actions"><a className="button" href={emailLink}><Icon name="mail" size={18}/> Solicitar por e-mail</a><a className="button button-outline" href={whatsappLink} target="_blank" rel="noreferrer"><Icon name="phone" size={18}/> Falar no WhatsApp</a></div>
            <div className="hero-note"><span>●</span> Atendimento em São Paulo, Grande São Paulo e todo o Brasil.</div>
          </div>
          <div className="hero-badges">
            <div><b><Icon name="shield" size={28}/></b><span>Segurança</span></div>
            <div><b><Icon name="star" size={28}/></b><span>Qualidade</span></div>
            <div><b><Icon name="target" size={28}/></b><span>Conformidade</span></div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos"><div className="container">
        <div className="services-heading"><div><span className="eyebrow">Nossos serviços</span><h2>Soluções completas em<br/>inspeção e conformidade <em>NR-13.</em></h2></div><p>Atuamos com excelência técnica e compromisso total com a segurança e a confiabilidade dos seus equipamentos.</p></div>
        <div className="services-grid">{services.map(([icon,title,text])=><article className="service-card" key={title}><div className="service-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p><a href={emailLink}>Solicitar orçamento <span>→</span></a></article>)}</div>
      </div></section>

      <section className="stats"><div className="container stats-grid">
        <div><i><Icon name="clipboard"/></i><strong>8+</strong><span>anos de experiência</span></div>
        <div><i><Icon name="building"/></i><strong>100+</strong><span>empresas atendidas</span></div>
        <div><i><Icon name="clipboard"/></i><strong>1.000+</strong><span>equipamentos inspecionados</span></div>
        <div><i><Icon name="brazil"/></i><strong>100%</strong><span>atendimento em todo o Brasil</span></div>
      </div></section>

      <section className="section why" id="sobre"><div className="container why-grid">
        <div className="why-lead"><span className="eyebrow">Por que escolher a Brainspe</span><h2>Compromisso com a segurança e resultados que geram <em>confiança.</em></h2><div className="why-media"><img src="/inspecao-industrial.jpg" alt="Profissional realizando inspeção industrial"/><div className="national-card"><b><Icon name="brazil"/></b><h3>Atendimento em todo o Brasil</h3><p>Estrutura preparada para atender sua empresa onde estiver, com eficiência e segurança.</p></div></div></div>
        <div className="benefits-grid">
          <div><b><Icon name="shield"/></b><h3>Conformidade garantida</h3><p>Atuação alinhada à NR-13 e normas aplicáveis.</p></div>
          <div><b><Icon name="star"/></b><h3>Equipe especializada</h3><p>Profissionais qualificados e experientes.</p></div>
          <div><b><Icon name="clock"/></b><h3>Agilidade na entrega</h3><p>Processos organizados para cumprir prazos.</p></div>
          <div><b><Icon name="document"/></b><h3>Documentação completa</h3><p>Relatórios, prontuário, ART e certificados.</p></div>
          <div><b><Icon name="headset"/></b><h3>Suporte técnico contínuo</h3><p>Acompanhamento antes, durante e após a inspeção.</p></div>
          <div><b><Icon name="shield"/></b><h3>Segurança em primeiro lugar</h3><p>Proteção de pessoas, equipamentos e operação.</p></div>
        </div>
      </div></section>

      <section className="cta" id="contato"><div className="container cta-inner"><div><span className="eyebrow light">Fale com a Brainspe</span><h2>Solicite um orçamento para colocar sua empresa em conformidade com a <span>NR-13.</span></h2><p>Para envio de listas de equipamentos, fotos, prontuários ou relatórios, o e-mail é o canal recomendado.</p></div><div className="contact-actions"><a className="button cta-button" href={emailLink}><Icon name="mail" size={20}/> Enviar solicitação por e-mail</a><a className="contact-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer"><Icon name="phone" size={18}/> Prefere agilidade? Fale no WhatsApp</a></div></div></section>

      <section className="contact-choice"><div className="container contact-choice-grid">
        <a className="contact-card primary" href={emailLink}><span className="contact-icon"><Icon name="mail" size={28}/></span><div><small>Canal recomendado para empresas</small><h3>comercial@brainspe.com.br</h3><p>Ideal para anexar documentos, listas de equipamentos, fotos e colocar outros responsáveis em cópia.</p></div><b>Enviar e-mail →</b></a>
        <a className="contact-card" href={whatsappLink} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="phone" size={28}/></span><div><small>Atendimento rápido</small><h3>(11) 95846-2630</h3><p>Para dúvidas iniciais, disponibilidade, alinhamentos rápidos e agendamentos.</p></div><b>Abrir WhatsApp →</b></a>
      </div></section>

      <section className="trust-strip"><div className="container trust-grid"><span><Icon name="target" size={24}/> Inspeções com precisão e segurança</span><span><Icon name="shield" size={24}/> Equipamentos mais seguros e confiáveis</span><span><Icon name="star" size={24}/> Redução de riscos e paradas</span><span><Icon name="shield" size={24}/> Conformidade que evita multas</span></div></section>

      <footer className="footer"><div className="container footer-grid">
        <div><img src="/logo-brainspe.png" alt="Brainspe Engenharia de Inspeção"/><p>Engenharia de Inspeção NR-13 com segurança, precisão e confiabilidade.</p></div>
        <div><h3>Navegação</h3><a href="#inicio">Home</a><a href="#servicos">Serviços</a><a href="#nr13">NR-13</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div>
        <div><h3>Contato</h3><a className="footer-email" href={emailLink}><Icon name="mail" size={17}/> comercial@brainspe.com.br</a><a href="tel:+5511958462630"><Icon name="phone" size={16}/> (11) 95846-2630</a><p>São Paulo – SP<br/>Atendimento em todo o Brasil</p></div>
        <div><h3>Siga-nos</h3><a href="https://www.instagram.com/brainspeengenharia/" target="_blank" rel="noreferrer"><Icon name="instagram" size={17}/> @brainspeengenharia</a></div>
      </div><div className="footer-bottom"><div className="container">© 2026 Brainspe Engenharia de Inspeção. Todos os direitos reservados.</div></div></footer>
      <a className="floating-email" href={emailLink} aria-label="Enviar e-mail para Brainspe"><Icon name="mail" size={24}/></a>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><Icon name="phone" size={23}/></a>
    </main>
  );
}
