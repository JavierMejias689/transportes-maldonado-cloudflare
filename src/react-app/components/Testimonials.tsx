"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andrés Vergara",
    role: "Jefe de Logística",
    company: "CineHoyts",
    text: "Transportes Maldonado nos ayuda a movilizar a nuestro equipo entre sucursales de forma rápida y segura. La puntualidad es clave en nuestra industria y ellos nunca fallan. Excelente servicio y vehículos siempre impecables.",
    rating: 5,
  },
  {
    name: "Patricia Rojas",
    role: "Gerente de Recursos Humanos",
    company: "Alimentos del Pacífico",
    text: "Necesitábamos un servicio confiable para trasladar a nuestros trabajadores desde distintos puntos de Santiago hasta la planta. Desde que contratamos a Transportes Maldonado, la asistencia mejoró y el personal llega motivado. Un cambio total.",
    rating: 5,
  },
  {
    name: "Luis Henríquez",
    role: "Operador de Estación",
    company: "Metro de Santiago",
    text: "Trabajo en turnos rotativos en el Metro y el transporte público no siempre calza con mis horarios. Transportes Maldonado me resuelve el traslado de ida y vuelta con total comodidad. Son puntuales y los conductores son muy profesionales.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Lo que dicen
            <br />
            nuestros clientes
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative"
            >
              <Quote
                size={40}
                className="text-accent/10 absolute top-6 right-6"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#0f3460] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
