import { useState } from 'react'
import SnakeJuego from './SnakeJuego'

export default function Navbar() {
  const [gameOpen, setGameOpen] = useState(false)

  const botonclase = `font-mono text-[10px] px-4 py-2 rounded
            border border-muted text-muted 
            hover:border-accent hover:text-accent hover:bg-accent/5
            transform scale-100 hover:scale-[1.05] transition-all`

  interface boton { titulo: string; url: string }

  const botones: boton[] = [
    { titulo: 'INICIO', url: '#inicio' },
    { titulo: 'PROYECTOS', url: '#proyectos' },
    { titulo: 'EDUCACION', url: '#educacion' },
    { titulo: 'SOBRE MÍ', url: '#sobre-mi' },
    { titulo: 'CONTACTO', url: '#contacto' },
  ]

  return (
    <>
      {gameOpen && <SnakeJuego onClose={() => setGameOpen(false)} />}

      <nav className="sticky top-0 z-50 bg-bg flex items-center gap-1 px-6 py-3">

        <div className="flex gap-1 mx-auto">
          {botones.map((boton) => (
            <a href={boton.url} className={botonclase}>
              {boton.titulo}
            </a>
          ))}
        </div>
        <button
          onClick={() => setGameOpen(true)}
          className="font-pixel text-[7px] px-3 py-2 rounded border border-accent text-accent hover:bg-accent/10 transition-all mr-4 glow-blink"
        >
          Snake
        </button>

      </nav>
    </>
  )
}