import { useState } from "react"

let labelClass="text-[10px] uppercase tracking-wide text-muted font-medium"
let placeholderClass="bg-muted border border-border rounded-lg px-3 py-2 text-[13px] text-black placeholder:text-black outline-none focus:border-accent"

function CajaFormulario() {

    interface FormularioData {
    nombre: string;
    apellido: string;
    email: string;
    mensaje: string;
    }

    const [formulario1, setFormulario1] = useState<FormularioData>({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: ""
    });

    const [cargando, setCargando] = useState<boolean>(false);
    const [estado, setEstado] = useState<"ok" | "error" | "">("");

    function cambiosForm(evento: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setFormulario1({
      ...formulario1,
      [evento.target.name]: evento.target.value
    });
  }

  async function Enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setCargando(true);
    setEstado("");

    try {
      const respuesta = await fetch(`/api/contacto`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formulario1)
      });

      if (respuesta.ok) {
        setEstado("ok");
        setFormulario1({ nombre: "", apellido: "", email: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    } finally {
      setCargando(false);
    }
  }

    const texto = (
    <div className="flex flex-col justify-center">
      <h3 className="font-pixel text-accent mb-4">Hablemos</h3>
      <p className="text-muted mb-6">
        Estoy siempre en busca de nuevos proyectos y desafíos. Si te interesa mi perfil o querés consultar
        algo sobre mi trabajo, completá el formulario y te respondo lo antes posible.
      </p>
    </div>
  )
  const formulario = (
  <form onSubmit={Enviar} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3">
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Nombre</label>
        <input name="nombre" type="text" required placeholder="Tu nombre" className={placeholderClass} value={formulario1.nombre} onChange={cambiosForm} />
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Apellido</label>
        <input name="apellido" type="text" required placeholder="Tu apellido" className={placeholderClass} value={formulario1.apellido} onChange={cambiosForm} />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <label className={labelClass}>Email</label>
      <input name="email" type="email" required placeholder="correo@gmail.com" className={placeholderClass} value={formulario1.email} onChange={cambiosForm} />
    </div>
    <div className="flex flex-col gap-1">
      <label className={labelClass}>Mensaje</label>
      <textarea name="mensaje" rows={4} placeholder="Contame en qué puedo ayudarte..." className={placeholderClass} value={formulario1.mensaje} onChange={cambiosForm} />
    </div>

    <button
      type="submit"
      disabled={cargando}
      className="w-full mt-1 py-2.5 border border-border rounded-lg text-[13px] font-medium tracking-wide
              hover:border-accent hover:text-accent hover:bg-accent/5
              transform scale-100 hover:scale-[0.95] transition-all
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
      {cargando ? "Enviando..." : "Enviar mensaje"}
    </button>
    {estado === "ok" && (
      <p className="text-center text-[12px] text-accent border border-accent rounded-lg py-2">
        Mensaje enviado correctamente
      </p>
    )}
    {estado === "error" && (
      <p className="text-center text-[12px] text-red-500 border border-red-500 rounded-lg py-2">
        Hubo un error al enviar. Intentá de nuevo.
      </p>
    )}
  </form>
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
        <h2 className="font-pixel text-accent text-center mb-16 glow">
        Contacto
        </h2>
      <CajaFormulario />
    </section>
  )
}