"use client";

import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-[#0a0a14] border-b border-white/5 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Left - contact info */}
        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-accent transition-colors duration-300 group"
          >
            <Phone size={14} className="text-accent" />
            <span className="text-sm font-medium hidden sm:inline">+56 9 8357 4747</span>
            <span className="text-sm font-medium sm:hidden">WhatsApp</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="mailto:r_maldonado_@hotmail.com?subject=Consulta%20Servicio%20de%20Transporte"
            className="flex items-center gap-2.5 text-white/60 hover:text-accent transition-colors duration-300 group"
          >
            <Mail size={14} className="text-accent" />
            <span className="text-sm font-medium hidden sm:inline">r_maldonado_@hotmail.com</span>
            <span className="text-sm font-medium sm:hidden">Correo</span>
          </a>
        </div>

        {/* Right - availability */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-white/50 text-sm font-medium hidden sm:inline">
            Disponible 24/7
          </span>
        </div>
      </div>
    </div>
  );
}
