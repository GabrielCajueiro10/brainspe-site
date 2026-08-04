import { contact } from '../site-data';
export default function ContactBlock() {
  return (
    <section className="contact-block">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Solicite um orçamento</span>
          <h2>Envie as informações dos equipamentos pelo canal mais adequado à sua empresa.</h2>
          <p>O e-mail é o canal principal para listas de equipamentos, fotos, relatórios anteriores e documentos técnicos. Para dúvidas rápidas, use o WhatsApp.</p>
        </div>
        <div className="contact-cards">
          <a className="contact-card featured" href={`mailto:${contact.email}?subject=Solicitação de orçamento NR-13`}>
            <span><small>Recomendado para empresas</small><strong>{contact.email}</strong><em>Enviar solicitação por e-mail</em></span><b>→</b>
          </a>
          <a className="contact-card" href={`https://wa.me/${contact.phone}`}>
            <span><small>Atendimento rápido</small><strong>{contact.phoneDisplay}</strong><em>Conversar pelo WhatsApp</em></span><b>→</b>
          </a>
        </div>
      </div>
    </section>
  );
}
