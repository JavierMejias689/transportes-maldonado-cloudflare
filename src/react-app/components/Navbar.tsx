"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#flota", label: "Flota" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg py-3"
          : "top-[42px] bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <Logo size={scrolled ? 40 : 48} className="transition-all duration-500 group-hover:scale-110" />
          <div className="flex flex-col">
            <span className={`text-white font-semibold leading-tight tracking-wide transition-all duration-500 ${scrolled ? "text-base" : "text-lg"}`}>
              Transportes
            </span>
            <span className={`gradient-text font-semibold leading-tight tracking-wider uppercase transition-all duration-500 ${scrolled ? "text-xs" : "text-sm"}`}>
              Maldonado
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-primary font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2.5"
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent text-base font-medium py-3 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/56983574747?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary font-semibold px-6 py-3 rounded-full text-center text-sm mt-2"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
