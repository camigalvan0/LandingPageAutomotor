import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react"
import ContactMap from "../components/ContactMap"

export default function Contact() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1700403748616-94e54842caf1?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-red-600">
            CONTACTO
          </h1>

          <div className="my-4 flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="w-2 h-2 bg-white rounded-full opacity-60" />
            <span className="w-2 h-2 bg-white rounded-full opacity-40" />
          </div>

          <p className="max-w-xl text-sm md:text-base text-gray-200">
            Adquirí tu vehículo de manera segura y con experiencia garantizada
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">

          {/* VISIT US */}
          <div>
            <MapPin size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">VISITANOS</h3>
            <p className="text-gray-500 text-sm mb-3">
              El lugar perfecto para encontrar tu vehiculo perfecto
            </p>
            <p className="text-red-600 font-medium">
              Bolivar 500, General Cabrera, Cba, Arg.
            </p>
          </div>

          {/* CALL US */}
          <div>
            <Phone size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">LLAMANOS</h3>
            <p className="text-gray-500 text-sm mb-3">
              Estamos a tu disposición
            </p>
            <p className="text-red-600 font-medium">
              +44 (0) 203 116 7711
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <Mail size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">CONTACTANOS</h3>
            <p className="text-gray-500 text-sm mb-3">
              Te asesoramos para una mejor experiencia
            </p>
            <p className="text-red-600 font-medium">
              noreply@noland.com
            </p>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="w-full h-[500px]">
        <ContactMap />
      </section>
    </main>
  )
}

/* COMPONENTE SOCIAL */
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition cursor-pointer">
      {icon}
    </div>
  )
}
