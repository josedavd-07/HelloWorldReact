import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MiPrimerComponente } from './MiPrimerComponente'
import { MiSegundoComponente } from './MiSegundoComponente'
import { MiTercerComponente } from './MiTercerComponente'
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiPrimerComponente />
    <MiSegundoComponente />
    {/* Por default imprimira el valorde la propiedad asignada si no se le da algun valor Subtitulo={8} */}
    <MiTercerComponente  Titulo="Esta seccion es de props"/>
  </StrictMode>,
)   
