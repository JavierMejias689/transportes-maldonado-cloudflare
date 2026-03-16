"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, HeartHandshake, Award } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Compromiso Total",
    stat: "100%",
    statLabel: "Puntualidad",
    description:
      "Cada viaje comienza y termina a tiempo. Nuestra reputación se construye en cada trayecto cumplido.",
  },
  {
    icon: TrendingUp,
    title: "Experiencia Comprobada",
    stat: "10+",
    statLabel: "Años de experiencia",
    description:
      "Años de trayectoria nos respaldan. Conocemos las rutas, los desafíos y las soluciones.",
  },
  {
    icon: HeartHandshake,
    title: "Trato Personalizado",
    stat: "24/7",
    statLabel: "Disponibilidad",
    description:
      "No somos un número más. Cada cliente recibe atención dedicada y soluciones a su medida.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    stat: "5★",
    statLabel: "Calificación",
    description:
      "Vehículos en óptimas condiciones, conductores profesionales y un servicio que supera expectativas.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-16 md:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              La confianza se
              <br />
              <span className="gradient-text">construye viajando</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              En Transportes Maldonado entendemos que cada pasajero es una
              responsabilidad. Por eso invertimos en lo que importa: seguridad,
              comodidad y un servicio impecable que habla por sí solo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 text-center"
              >
                Hablar con un Asesor
              </a>
              <a
                href="#servicios"
                className="border-2 border-primary/20 hover:border-primary text-primary font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 text-center"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                <reason.icon
                  size={24}
                  className="text-accent mb-4"
                  strokeWidth={1.5}
                />
                <div className="text-3xl font-bold text-primary mb-1">
                  {reason.stat}
                </div>
                <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                  {reason.statLabel}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
