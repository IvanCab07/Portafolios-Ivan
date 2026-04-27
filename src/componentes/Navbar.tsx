export default function Navbar() {
  const botonclase = `font-mono text-[10px] px-4 py-2 rounded
            border border-muted text-muted 
            hover:border-accent hover:text-accent hover:bg-accent/5
            transform scale-100 hover:scale-[1.05] transition-all`

interface boton {
  titulo: string
  url: string
}

const botones: boton[] = [
  { titulo: 'INICIO', url: '#inicio' },
  { titulo: 'PROYECTOS', url: '#proyectos' },
  { titulo: 'EDUCACION', url: '#educacion' },
  { titulo: 'SOBRE MÍ', url: '#sobre-mi' },
  { titulo: 'CONTACTO', url: '#contacto' },
]

  return (
    <nav className={`sticky top-0 z-50 bg-bg flex justify-center gap-1 px-6 py-3`}>
        {botones.map((boton) => (
          <a href={boton.url} className={botonclase}>
            {boton.titulo}
          </a>
        ))}
    </nav>
  )
}