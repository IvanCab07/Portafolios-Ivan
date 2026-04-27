interface Edu_info {
  id: number
  titulo: string
  descripcion: string
}

const EDU_INFO: Edu_info[] = [
  {
    id: 1,
    titulo: 'Estudios Secundarios',
    descripcion:'Acá iría donde fui al secundario. Por ejemplo: Escuela Técnica N° 7 "José Hernández", tecnicatura en Programación. Actualmente cursando el último año.',
  },
  {
    id: 2,
    titulo: 'Cursos',
    descripcion:'Acá irían los cursos que realize.',
  },
]

function Edu_caja({ caja }: { caja: Edu_info }) {
  const texto = (
    <div className="flex flex-col justify-center">
      <h3 className="font-pixel text-accent mb-4">
        {caja.titulo}
      </h3>
      <p className="text-muted mb-6 text-[12px]">
        {caja.descripcion}
      </p>
        <a className="self-start font-mono text-[11px] px-5 py-2.5 border border-border bg-surface 
                    text-[#d4d4d4] rounded hover:bg-accent hover:border-accent hover:text-black">
          REDERIGIR
        </a>
    </div>
  )

  const imagen = (
    <div className="w-full aspect-video bg-card border border-border rounded-xl">
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-5">
      {texto}
      {imagen}
    </div>
  )
}

export default function Educacion() {
  return (
    <section className="pt-10 pb-5 px-6 max-w-5xl mx-auto">
      <h2 className="font-pixel text-accent text-center mb-16">
        Educación
      </h2>
      {Edu_caja({ caja: EDU_INFO[0] })}
      {Edu_caja({ caja: EDU_INFO[1] })}
    </section>
  )
}