const stats = [
  ['8+', 'Anos de experiência'],
  ['100+', 'Empresas atendidas'],
  ['1.000+', 'Equipamentos inspecionados'],
  ['100%', 'Atendimento em todo o Brasil'],
];
export default function Stats() {
  return <section className="stats">{stats.map(([n,l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>;
}
