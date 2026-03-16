"use client";

import { motion } from "framer-motion";
import { Building2, Users, Briefcase, CalendarCheck, Route, DoorOpen } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Transporte Empresarial",
    description:
      "Traslado corporativo en vehículos ejecutivos, SUVs y minivans. Horarios flexibles y la confiabilidad que tu empresa necesita.",
  },
  {
    icon: Users,
    title: "Traslado de Personal",
    description:
      "Servicio dedicado para movilizar equipos de trabajo. Recogida y entrega en vehículos cómodos y seguros.",
  },
  {
    icon: Briefcase,
    title: "Servicio Ejecutivo",
    description:
      "Traslados VIP en vehículos ejecutivos para directivos y clientes importantes. Discreción, puntualidad y confort premium.",
  },
  {
    icon: CalendarCheck,
    title: "Transporte para Eventos",
    description:
      "Coordinación de traslados para eventos corporativos, convenciones y ocasiones especiales con vehículos de primer nivel.",
  },
  {
    icon: Route,
    title: "Rutas Dedicadas",
    description:
      "Rutas fijas personalizadas para tu operación diaria. Optimizamos recorridos para mayor eficiencia y puntualidad.",
  },
  {
    icon: DoorOpen,
    title: "Servicio Puerta a Puerta",
    description:
      "Recogemos y dejamos a cada pasajero en su ubicación. Comodidad total sin preocupaciones de estacionamiento o combinaciones.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Soluciones de transporte
            <br />a tu medida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Cada servicio está diseñado para ofrecer la máxima comodidad,
            seguridad y puntualidad en cada trayecto.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative bg-gray-50 hover:bg-primary rounded-2xl p-5 sm:p-8 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-500">
                <service.icon
                  size={28}
                  className="text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary group-hover:text-white mb-3 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Solicitar información →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
