"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "CineHoyts",
    initials: "CH",
  },
  {
    name: "Metro de Santiago",
    initials: "MS",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-medium mb-10">
            Empresas que confían en nosotros
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {client.initials}
                  </span>
                </div>
                <span className="text-lg sm:text-xl font-semibold text-primary tracking-tight">
                  {client.name}
                </span>
              </div>
            ))}

            {/* Placeholder for future clients */}
            <div className="flex items-center gap-4 opacity-20">
              <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-lg">+</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-300 tracking-tight">
                Tu empresa
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
