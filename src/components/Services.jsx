import {
  Car,
  Wrench,
  FileText,
  BadgeDollarSign,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Venta de Vehículos",
      desc: "Amplio catálogo de autos 0km y usados seleccionados con garantía.",
    },
    {
      icon: Wrench,
      title: "Servicio Técnico",
      desc: "Mantenimiento y reparaciones con repuestos originales y técnicos especializados.",
    },
    {
      icon: FileText,
      title: "Gestoría y Transferencias",
      desc: "Nos encargamos de todos los trámites para que compres o vendas sin complicaciones.",
    },
    {
      icon: BadgeDollarSign,
      title: "Financiación y Seguros",
      desc: "Opciones de financiación y seguros a medida para que manejes tranquilo.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen */}
        <div className="relative">
          <img
            src="src\assets\img\servicios.png"
            alt="Servicios concesionaria"
            className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
          />

          {/* Badge experiencia */}
          <div className="absolute bottom-6 right-6 bg-red-600 text-white px-6 py-4 rounded-xl shadow-md">
            <p className="text-2xl font-bold">+10</p>
            <p className="text-sm opacity-90">Años de experiencia</p>
          </div>
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios para Vos
          </h2>
          <p className="text-gray-600 mb-8">
            Te acompañamos en todo el proceso automotor, desde la elección del vehículo
            hasta la entrega y postventa.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex gap-4">
                  
                  {/* Icono */}
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Icon className="text-red-600" size={22} />
                  </div>

                  {/* Texto */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button className="mt-10 bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-xl font-medium shadow-md">
            Solicitar Asesoramiento
          </button>
        </div>
      </div>
    </section>
  );
}
