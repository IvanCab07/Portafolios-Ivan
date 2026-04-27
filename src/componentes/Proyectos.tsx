interface Projecto {
  id: number
  titulo: string
  descripcion: string
  tags: string[]
}

const PROJECTOS: Projecto[] = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
  {
    id: 4,
    titulo: 'Proyecto 4',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
  {
    id: 5,
    titulo: 'Proyecto 5',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
  {
    id: 6,
    titulo: 'Proyecto 6',
    descripcion: 'Descripción del proyecto.',
    tags: ['java', 'html'],
  },
]

function ProjectoTarjeta({ projectos }: { projectos: Projecto }) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden
                 hover:border-accent/40">
                  
      <div className="w-full aspect-video bg-surface border-b border-border text-muted overflow-hidden">

      </div>

      <div className="p-4 bg-accent/[0.03]">
        <h3 className="font-pixel text-[#d4d4d4] mb-2 group-hover:text-accent">
          {projectos.titulo}
        </h3>

        <p className="text-muted mb-3 text-[11px]">
          {projectos.descripcion}
        </p>

          <div className="flex flex-wrap gap-1.5">
              <div className="font-mono text-[9px] px-2 py-0.5 rounded border border-border text-muted bg-bg/60">
                {projectos.tags[0]}
              </div>
              <div className="font-mono text-[9px] px-2 py-0.5 rounded border border-border text-muted bg-bg/60">
                {projectos.tags[1]}
              </div>
          </div>
      </div>
    </article>
  )
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="pt-10 pb-5 px-6 max-w-5xl mx-auto">
      <h2 className="font-pixel text-accent text-center mb-14">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectoTarjeta({ projectos: PROJECTOS[0] })}
        {ProjectoTarjeta({ projectos: PROJECTOS[1] })}
        {ProjectoTarjeta({ projectos: PROJECTOS[2] })}
        {ProjectoTarjeta({ projectos: PROJECTOS[3] })}
        {ProjectoTarjeta({ projectos: PROJECTOS[4] })}
        {ProjectoTarjeta({ projectos: PROJECTOS[5] })}
      </div>
    </section>
  )
}