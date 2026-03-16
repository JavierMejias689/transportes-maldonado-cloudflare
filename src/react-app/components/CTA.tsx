"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Logo from "./Logo";

export default function CTA() {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Logo size={64} className="mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white tracking-[0.15em] uppercase mb-1">
            Transportes <span className="gradient-text">Maldonado</span>
          </h3>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mb-8" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para un servicio
            <br />
            <span className="gradient-text">de primer nivel?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Contáctanos hoy y descubre por qué las empresas más exigentes
            confían en Transportes Maldonado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20cotizar%20el%20servicio%20de%20transporte"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-accent-light text-primary font-semibold px-6 sm:px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] flex items-center gap-2"
            >
              <Phone size={18} />
              Cotizar por WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicios"
              className="text-white/80 hover:text-white border border-white/20 hover:border-accent px-6 sm:px-8 py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2"
            >
              Ver Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
