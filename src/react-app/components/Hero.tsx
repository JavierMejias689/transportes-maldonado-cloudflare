"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0f3460]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center mb-10">
            <Logo size={70} className="mb-5" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-[0.15em] uppercase">
              Transportes
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text tracking-[0.2em] uppercase">
              Maldonado
            </h2>
            <div className="w-16 h-[2px] bg-accent/50 mt-4 mb-2" />
            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
              Servicio Premium de Transporte
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Tu viaje,{" "}
            <span className="gradient-text">nuestra</span>
            <br />
            <span className="gradient-text">prioridad</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Traslados en vehículos ejecutivos, SUVs y minivans. Servicio
            seguro, puntual y confortable para tu empresa y equipo de trabajo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16">
            <a
              href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-accent-light text-primary font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] flex items-center gap-2"
            >
              Solicitar Cotización
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicios"
              className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
            >
              Conocer Servicios
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12">
            {[
              { icon: Shield, label: "Seguridad\nGarantizada" },
              { icon: Clock, label: "Puntualidad\nAbsoluta" },
              { icon: Star, label: "Servicio\nPremium" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon size={18} className="text-accent" />
                </div>
                <span className="text-white/50 text-sm text-left whitespace-pre-line leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
