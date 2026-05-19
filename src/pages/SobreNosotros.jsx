import { motion } from "framer-motion"
import { Car, Users, ShieldCheck, Target, Award, TrendingUp, Eye } from "lucide-react"

const valores = [
  { icon: Car,        title: "Calidad",      text: "Vehículos inspeccionados y garantizados." },
  { icon: Users,      title: "Cercanía",     text: "Atención humana y personalizada." },
  { icon: ShieldCheck,title: "Seguridad",    text: "Procesos claros y confiables." },
  { icon: Target,     title: "Enfoque",      text: "Buscamos el auto ideal para vos." },
  { icon: Award,      title: "Trayectoria",  text: "Años de experiencia en el rubro." },
  { icon: TrendingUp, title: "Innovación",   text: "Nos adaptamos al futuro." },
]

const stats = [
  { number: "+10",   label: "Años de experiencia" },
  { number: "+1500", label: "Autos vendidos" },
  { number: "+1200", label: "Clientes felices" },
  { number: "100%",  label: "Transparencia" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" }
  })
}

export default function SobreNosotros() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative h-[65vh] min-h-[420px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
          className="absolute inset-0 w-full h-full object-cover"
          alt="autos"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B] bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5">
            Quiénes somos
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Pasión por los <span className="text-[#E00B0B]">Automóviles</span>
          </h1>
          <p className="mt-5 text-gray-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Más que vender autos, construimos confianza y acompañamos a cada cliente
            en una de las decisiones más importantes.
          </p>
        </motion.div>
      </section>

      {/* ── HISTORIA ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E00B0B]">
              Nuestra historia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
              Más de una década <br className="hidden sm:block" />
              construyendo confianza
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed text-sm sm:text-base">
              <p>
                Nacimos con el objetivo de cambiar la forma de comprar vehículos.
                Apostamos por la transparencia, el asesoramiento real y una
                experiencia sin fricciones.
              </p>
              <p>
                Con el tiempo nos consolidamos como una concesionaria multimarcas
                referente, incorporando innovación, tecnología y un equipo humano
                altamente capacitado.
              </p>
            </div>

            {/* Mini stats inline */}
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
              {[
                { num: "+10",   lbl: "Años en el mercado" },
                { num: "+1500", lbl: "Autos entregados" },
                { num: "+1200", lbl: "Clientes felices" },
              ].map(({ num, lbl }, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#E00B0B]">{num}</span>
                  <span className="text-xs text-gray-400 mt-0.5">{lbl}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-3 sm:-inset-5 bg-[#E00B0B]/6 rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              alt="concesionaria"
            />
          </motion.div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E00B0B]">
              Nuestros valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Lo que nos define
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {valores.map((val, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E00B0B]/10 group-hover:bg-[#E00B0B] flex items-center justify-center transition-colors duration-300">
                  <val.icon
                    size={20}
                    className="text-[#E00B0B] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{val.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{val.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative bg-[#0a0a0a] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(224,11,11,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#E00B0B]">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E00B0B]">
              Propósito
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Misión y Visión
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E00B0B] rounded-l-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-[#E00B0B]/10 flex items-center justify-center mb-6">
                <Target size={22} className="text-[#E00B0B]" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3">Misión</h4>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Ofrecer vehículos de calidad acompañados de una experiencia
                transparente, ágil y centrada en el cliente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#E00B0B] rounded-3xl p-8 sm:p-10 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 translate-y-16 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye size={22} className="text-white" />
              </div>
              <h4 className="text-xl font-extrabold text-white mb-3">Visión</h4>
              <p className="text-red-100 leading-relaxed text-sm sm:text-base">
                Convertirnos en líderes del mercado automotor destacándonos por
                innovación, confianza y excelencia.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}
