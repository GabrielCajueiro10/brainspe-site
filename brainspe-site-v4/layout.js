import './globals.css';
export const metadata={metadataBase:new URL('https://brainspe.com.br'),title:{default:'Brainspe Engenharia de Inspeção',template:'%s'},description:'Inspeções NR-13, calibrações e documentação técnica.',openGraph:{type:'website',locale:'pt_BR',siteName:'Brainspe Engenharia de Inspeção',images:['/images/compressor-inspecao.jpeg']},robots:{index:true,follow:true}};
export default function RootLayout({children}){return <html lang="pt-BR"><body>{children}</body></html>}
