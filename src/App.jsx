import './App.css'
import Home from './pages/Home'
import Autos0km from './pages/Autos0km'
import Autos from './pages/Autos'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Autosusados from './pages/AutosUsados.jsx'
import SobreNosotros from './pages/SobreNosotros'
import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import AutoDetalle from './pages/AutoDetalle.jsx'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Autos0KM" element={<Autos0km />} />
        <Route path="/Autos" element={<Autos />} />
        <Route path="/AutosUsados" element={<Autosusados />} />
        <Route path="/autos/:id" element={<AutoDetalle />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/SobreNosotros" element={<SobreNosotros/>} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
