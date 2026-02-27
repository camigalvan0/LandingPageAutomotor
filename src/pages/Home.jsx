'use client'
import { Link } from "react-router-dom"
import inicio2 from "../assets/img/inicio2.png"
import Hero from "../components/Hero"
import ValueProposition from "../components/ValuePreposition"
import Services from "../components/Services"
import FeaturedCars from "../components/FeaturedCars"
import FinalCTA from "../components/FinalCTA"

export default function Home() {
  return (
    // <section
    //   id="Home"
    //   className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url(${inicio2})` }}
    // >
    //   {/* Overlay opcional para mejorar contraste */}
    //   <div className="absolute inset-0 bg-black/30"></div>

    //   {/* Contenido */}
    //   <div className="relative z-10 flex min-h-screen items-center">
    //     <div className="mx-auto max-w-2xl px-6 text-center lg:mx-0 lg:ml-20 lg:text-left">
          
    //       <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
    //         <div className="rounded-full px-3 py-1 text-sm text-white ring-1 ring-red-700/40 hover:ring-white/70">
    //           Mirá nuestro catálogo{' '}
    //           <Link to={"/AutosUsados"} className="font-semibold text-red-500">
    //             Ver más →
    //           </Link>
    //         </div>
    //       </div>

    //       <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
    //         Encontrá el vehículo perfecto para vos
    //       </h1>

    //       <p className="mt-6 text-lg text-gray-200 sm:text-xl">
    //         Contamos con más de 10 años de experiencia para asesorarte y ayudarte
    //         a acceder a tu vehículo soñado.
    //       </p>

    //       <div className="mt-10 flex justify-center gap-x-6 lg:justify-start">
    //         <Link to={"/Contacto"} className="text-sm rounded-md bg-red-600 px-4 py-2.5 font-semibold text-white hover:bg-red-800">
    //           Contactanos →
    //         </Link>
    //       </div>

    //     </div>
    //   </div>
    // </section>
    <>
    
    
    <Hero/>
    <ValueProposition/>
    <Services/>
    <FeaturedCars/>
    <FinalCTA/>
    </>
  )
}
