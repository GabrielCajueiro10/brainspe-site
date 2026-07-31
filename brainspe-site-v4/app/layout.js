import './globals.css';

export const metadata = {
  metadataBase: new URL('https://brainspe.com.br'),
  title: {
    default: 'Brainspe Engenharia de Inspeção | NR-13',
    template: '%s | Brainspe'
  },
  description: 'Inspeções NR-13, calibração de válvulas e manômetros, prontuários e relatórios técnicos para empresas em São Paulo e todo o Brasil.',
  keywords: ['NR-13', 'inspeção de vasos de pressão', 'inspeção de caldeiras', 'inspeção de compressores', 'calibração de válvulas', 'calibração de manômetros', 'prontuário NR-13'],
  openGraph: {
    title: 'Brainspe Engenharia de Inspeção',
    description: 'Segurança, conformidade e precisão em serviços NR-13.',
    url: 'https://brainspe.com.br',
    siteName: 'Brainspe Engenharia de Inspeção',
    locale: 'pt_BR',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
