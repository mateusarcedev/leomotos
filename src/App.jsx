import Contato from './components/Contato/Contato'
import Inicio from './components/Inicio/Inicio'
import Local from './components/Local/Local'
import Motos from './components/Motos/Motos'
import Navbar from './components/Navbar/Navbar'
import './index.css'


function App() {
  

  return (
    <>
     <Navbar/> 
     <Inicio/>
     <Motos/>
     <Local/>
     <Contato/>
    </>
  )
}

export default App
