"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-[#0a0a14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo size={44} />
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-tight">
                  Transportes
                </span>
                <span className="gradient-text text-sm font-medium leading-tight">
                  Maldonado
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Servicio premium de transporte de pasajeros. Seguridad,
              puntualidad y confort en cada viaje.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#flota", label: "Flota" },
                { href: "#testimonios", label: "Testimonios" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {[
                "Transporte Empresarial",
                "Traslado de Personal",
                "Servicio Ejecutivo",
                "Transporte para Eventos",
                "Rutas Dedicadas",
                "Servicio Puerta a Puerta",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/56983574747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-accent text-sm transition-colors"
                >
                  +56 9 8357 4747
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">
                  Lunes a Domingo
                  <br />
                  Disponibilidad 24/7
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">Chile</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {currentYear} Transportes Maldonado. Todos los derechos
            reservados.
          </p>
          <p className="text-white/20 text-xs">
            Servicio de transporte de pasajeros
          </p>
        </div>
      </div>
    </footer>
  );
}
