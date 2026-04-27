export default function Navbar() {
  const botonclase = `font-mono text-[10px] px-4 py-2 rounded
            border border-transparent text-muted 
            hover:border-accent hover:text-accent hover:bg-accent/5'`

  return (
    <nav className={`sticky top-0 z-50 bg-bg flex justify-center gap-1 px-6 py-3`}>
        <a className={botonclase} href="#inicio">
          INICIO
        </a>
        <a className={botonclase} href="#proyectos">
          PROYECTOS
        </a>
        <a className={botonclase} href="#educacion">
          EDUCACION
        </a>
        <a className={botonclase} href="#sobre-mi">
          SOBRE MÍ
        </a>
        <a className={botonclase} href="#contacto">
          CONTACTO
        </a>
    </nav>
  )
}