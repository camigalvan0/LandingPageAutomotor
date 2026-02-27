import { Link } from "react-router-dom"
import imgsobrenosotros from "../assets/img/imgsobrenosotros.png"

const links = [
  { name: "Nuestros vehículos", to: '/AutosUsados' },
  { name: "0 KM disponibles", to: '/Autos0KM' },
  { name: "Contacto", to: '/Contacto' },
]

const stats = [
  { name: "Años de experiencia", value: "10+" },
  { name: "Vehículos vendidos", value: "1.500+" },
  { name: "Clientes satisfechos", value: "98%" },
  { name: "Stock disponible", value: "50+" },
]

export default function SobreNosotros() {
  return (
    <section
      id="SobreNosotros"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgsobrenosotros})` }}
      />

      {/* OVERLAY opcional */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-red-700 sm:text-7xl">
            Sobre Nosotros
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
            Somos una agencia automotriz con más de 10 años de trayectoria en el mercado,
            especializada en la venta de vehículos 0 km y usados seleccionados.
            Nuestro compromiso es brindarte un servicio transparente, asesoramiento personalizado
            y acompañarte para que tomes la mejor decisión al momento de elegir tu próximo vehículo.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-white font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} to={link.to}>
                {link.name} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
