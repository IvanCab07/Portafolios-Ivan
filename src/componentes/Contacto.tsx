let labelClass="text-[10px] uppercase tracking-wide text-muted font-medium"
let placeholderClass="bg-muted border border-border rounded-lg px-3 py-2 text-[13px] text-black placeholder:text-black outline-none focus:border-accent"
function cajaformulario() {
    const texto = (
    <div className="flex flex-col justify-center">
      <h3 className="font-pixel text-accent mb-4">Hablemos</h3>
      <p className="text-muted mb-6">
        Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo
        Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo
        Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo
        Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo
      </p>
    </div>
  )
  const formulario = (
  <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3">
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Nombre</label>
        <input type="text" placeholder="Tu nombre" className={placeholderClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Apellido</label>
        <input type="text" placeholder="Tu apellido" className={placeholderClass} />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <label className={labelClass}>Email</label>
      <input type="email" placeholder="correo@gmail.com" className={placeholderClass} />
    </div>
    <div className="flex flex-col gap-1">
      <label className={labelClass}>Teléfono</label>
      <input type="tel" placeholder="+54 11 xxxx-xxxx" className={placeholderClass} />
    </div>
    <div className="flex flex-col gap-1">
      <label className={labelClass}>Mensaje</label>
      <textarea rows={4} placeholder="Contame en qué puedo ayudarte..." className={placeholderClass} />
    </div>
    <button className="w-full mt-1 py-2.5 border border-border rounded-lg text-[13px] font-medium tracking-wide
            hover:border-accent hover:text-accent hover:bg-accent/5
            transform scale-100 hover:scale-[0.95] transition-all`">
      Enviar mensaje
    </button>
  </div>
)

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-5">
      {texto}
      {formulario}
    </div>
  )
}

export default function Contacto() {
  return (
    <section id="contacto" className="pt-10 pb-5 px-6 max-w-5xl mx-auto">
        <h2 className="font-pixel text-accent text-center mb-16">
        Contacto
        </h2>
      {cajaformulario()}
    </section>
  )
}