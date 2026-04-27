export default function Navbar() {
  const botonclase = `font-mono text-[10px] px-4 py-2 rounded
            border border-transparent text-muted 
            hover:border-accent hover:text-accent hover:bg-accent/5'`

  return (
    <nav
      className={`flex justify-center gap-1 px-6 py-3`}
    >
        <button className={botonclase}>
          INICIO
        </button>
        <button className={botonclase}>
          PROYECTOS
        </button>
        <button className={botonclase}>
          EDUCACION
        </button>
        <button className={botonclase}>
          SOBRE MÍ
        </button>
    </nav>
  )
}