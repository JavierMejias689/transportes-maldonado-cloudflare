"use client";

import { motion } from "framer-motion";
import { TrendingUp, Car, Users, CalendarCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "+500",
    label: "Traslados mensuales",
  },
  {
    icon: Car,
    number: "+15",
    label: "Vehículos operativos",
  },
  {
    icon: Users,
    number: "+1.000",
    label: "Pasajeros satisfechos",
  },
  {
    icon: CalendarCheck,
    number: "99,8%",
    label: "Puntualidad garantizada",
  },
];

export default function ImpactNumbers() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon
                size={28}
                className="text-accent mx-auto mb-4"
                strokeWidth={1.5}
              />
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20cotizar%20el%20servicio%20de%20transporte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-4 sm:px-6 py-3 hover:bg-accent/20 transition-all duration-300 group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-white/80 text-sm font-medium">
              Cotiza hoy — <span className="text-accent font-semibold">respuesta en menos de 1 hora</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
