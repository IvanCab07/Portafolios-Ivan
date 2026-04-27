export default function Inicio() {
  const hoverboton = ` hover:bg-accent hover:border-accent hover:text-black`
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-bg overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[url('./assets/blender.png')] bg-cover bg-center"/>
      </div>

      <div className="relative z-30 flex flex-col items-center text-center px-6 animate-fade-up">
        <h1 className="font-pixel text-white mb-3 letterspacing-[0.2em] text-4xl">
          Ivan Caballero
        </h1>

        <p className="font-pixel text-accent mb-10 letterspacing-[0.2em] blink glow-blink">
          Game Developer_
        </p>

        <div className="w-[50vw] max-w-6xl aspect-video bg-card border border-border rounded-xl
       flex items-center justify-center mb-10">
        </div>

        <div className="flex gap-3 justify-center">
          <a href="https://www.linkedin.com/in/ivan-caballero/" className={`font-mono text-[11px] px-5 py-2.5
                       border border-border bg-surface text-[#d4d4d4] rounded${hoverboton}`}
          >
            LinkedIn
          </a>
          <a href="/Mi cv.pdf" target="_blank" className={`font-mono text-[11px] px-5 py-2.5
                       border border-accent/40 text-accent rounded${hoverboton}`}>
            cv.pdf
          </a>
        </div>
      </div>
    </section>
  )
}