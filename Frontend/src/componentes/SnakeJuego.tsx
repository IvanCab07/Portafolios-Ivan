import { useEffect, useRef, useState } from 'react'

const TCASILLA = 20
const COLUM = 20
const FILAS = 16

type Posicion = { x: number; y: number }

const rand = () => ({
  x: Math.floor(Math.random() * COLUM),
  y: Math.floor(Math.random() * FILAS),
})

export default function SnakeJuego({ onClose }: { onClose: () => void }) {
  const canvasR = useRef<HTMLCanvasElement>(null)
  const snake = useRef<Posicion[]>([{ x: 10, y: 8 }])
  const direccion = useRef<Posicion>({ x: 0, y: 0 })
  const Comida = useRef<Posicion>(rand())
  const [score, setScore] = useState(0)
  const [dead, setDead] = useState(false)
  const running = useRef(true)

  useEffect(() => {
    const canvas = canvasR.current!
    const canvasP = canvas.getContext('2d')!

    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault()
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' && direccion.current.y === 0) direccion.current = { x: 0, y: -1 }
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S' && direccion.current.y === 0) direccion.current = { x: 0, y:  1 }
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A' && direccion.current.x === 0) direccion.current = { x: -1, y: 0 }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' && direccion.current.x === 0) direccion.current = { x:  1, y: 0 }
    }
    window.addEventListener('keydown', handleKey)

    const loop = setInterval(() => {
      if (!running.current) return
      if (direccion.current.x === 0 && direccion.current.y === 0) {
        canvasP.fillStyle = '#1a1a1a'
        canvasP.fillRect(0, 0, canvas.width, canvas.height)
        canvasP.strokeStyle = '#252525'
        for (let x = 0; x < COLUM; x++)
        for (let y = 0; y < FILAS; y++)
        canvasP.strokeRect(x * TCASILLA, y * TCASILLA, TCASILLA, TCASILLA)
        canvasP.fillStyle = '#00e5ff'
        canvasP.fillRect(Comida.current.x * TCASILLA + 3, Comida.current.y * TCASILLA + 3, TCASILLA - 6, TCASILLA - 6)
        canvasP.fillStyle = '#c8ff00'
        canvasP.fillRect(snake.current[0].x * TCASILLA + 1, snake.current[0].y * TCASILLA + 1, TCASILLA - 2, TCASILLA - 2)
        return
    }
      const head = {
        x: snake.current[0].x + direccion.current.x,
        y: snake.current[0].y + direccion.current.y,
      }
      if (
        head.x < 0 || head.x >= COLUM ||
        head.y < 0 || head.y >= FILAS ||
        snake.current.some(s => s.x === head.x && s.y === head.y)
      ) {
        running.current = false
        setDead(true)
        return
      }
      snake.current = [head, ...snake.current]
      if (head.x === Comida.current.x && head.y === Comida.current.y) {
        Comida.current = rand()
        setScore(s => s + 1)
      } else {
        snake.current.pop()
      }
      canvasP.fillStyle = '#1a1a1a'
      canvasP.fillRect(0, 0, canvas.width, canvas.height)
      canvasP.strokeStyle = '#252525'
      for (let x = 0; x < COLUM; x++)
        for (let y = 0; y < FILAS; y++) {
          canvasP.strokeRect(x * TCASILLA, y * TCASILLA, TCASILLA, TCASILLA)
        }
      canvasP.fillStyle = '#00e5ff'
      canvasP.fillRect(Comida.current.x * TCASILLA + 3, Comida.current.y * TCASILLA + 3, TCASILLA - 6, TCASILLA - 6)
      snake.current.forEach((s, i) => {
        canvasP.fillStyle = i === 0 ? '#c8ff00' : '#88bb00'
        canvasP.fillRect(s.x * TCASILLA + 1, s.y * TCASILLA + 1, TCASILLA - 2, TCASILLA - 2)
      })
    }, 120)

    return () => {
      clearInterval(loop)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const restart = () => {
    snake.current = [{ x: 10, y: 8 }]
    direccion.current = { x: 0, y: 0 }
    Comida.current = rand()
    running.current = true
    setScore(0)
    setDead(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
      <div className="border border-accent bg-bg p-4 flex flex-col items-center gap-3">
        <div className="flex justify-between w-full">
          <span className="font-pixel text-accent text-[8px]">SCORE: {score}</span>
          <button onClick={onClose} className="font-pixel text-[8px] text-muted hover:text-accent">CERRAR</button>
        </div>
        <canvas ref={canvasR} width={COLUM * TCASILLA} height={FILAS * TCASILLA} />
        {dead && (
          <div className="flex flex-col items-center gap-2">
            <span className="font-pixel text-[8px] text-accent2">GAME OVER</span>
            <button onClick={restart} className="font-pixel text-[8px] border border-accent text-accent px-4 py-2 hover:bg-accent/10">
              REINTENTAR
            </button>
          </div>
        )}
      </div>
    </div>
  )
}