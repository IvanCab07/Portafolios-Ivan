import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import Proyectos from './componentes/Proyectos'
import Educacion from './componentes/Educacion'
import SobreMi from './componentes/SobreMi'
import Footer from './componentes/Footer'
import Contacto from './componentes/Contacto'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-[#d4d4d4] font-mono">
      <Navbar />
      <main>
        <Inicio />
        <Proyectos />
        <Educacion />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
