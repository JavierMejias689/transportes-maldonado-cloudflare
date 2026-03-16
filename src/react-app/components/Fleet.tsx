"use client";

import { motion } from "framer-motion";
import { Car, Truck, UsersRound } from "lucide-react";

const vehicles = [
  {
    name: "Vehículo Ejecutivo",
    capacity: "1-3 pasajeros",
    icon: Car,
    features: ["Aire Acondicionado", "Asientos de Cuero", "Wi-Fi", "USB"],
    ideal: "Ideal para traslados ejecutivos, reuniones y viajes al aeropuerto",
    gradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    name: "SUV Premium",
    capacity: "4-6 pasajeros",
    icon: Truck,
    features: [
      "Aire Acondicionado",
      "Amplio Espacio",
      "Carga de Equipaje",
      "Confort Total",
    ],
    ideal: "Perfecto para grupos pequeños, familias y traslados corporativos",
    gradient: "from-[#16213e] to-[#0f3460]",
  },
  {
    name: "Minivan Confort",
    capacity: "7-12 pasajeros",
    icon: UsersRound,
    features: [
      "Aire Acondicionado",
      "Asientos Reclinables",
      "Espacio para Equipaje",
      "Máximo Confort",
    ],
    ideal: "La mejor opción para equipos de trabajo, eventos y traslados de personal",
    gradient: "from-[#0f3460] to-[#1a1a2e]",
  },
];

export default function Fleet() {
  return (
    <section id="flota" className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Nuestra Flota
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Vehículos para cada
            <br />
            necesidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Flota moderna y mantenida al más alto estándar. Cada vehículo es
            revisado antes de cada viaje.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Card background */}
              <div
                className={`bg-gradient-to-br ${vehicle.gradient} p-8 min-h-[420px] flex flex-col justify-between`}
              >
                {/* Icon area */}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                    <vehicle.icon
                      size={36}
                      className="text-accent"
                      strokeWidth={1.2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm">
                    {vehicle.capacity}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-sm">{vehicle.ideal}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/56983574747?text=Hola%2C%20quisiera%20información%20sobre%20la%20flota%20disponible"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            Consultar Disponibilidad
          </a>
        </motion.div>
      </div>
    </section>
  );
}
