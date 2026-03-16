"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo puedo cotizar el servicio?",
    answer:
      "Es muy simple. Escríbenos por WhatsApp con los detalles de tu traslado (origen, destino, cantidad de pasajeros y fecha) y te enviaremos una cotización en menos de 1 hora.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 24 horas de anticipación para garantizar disponibilidad. Sin embargo, también atendemos solicitudes de último momento según disponibilidad de nuestra flota.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Operamos en toda la Región Metropolitana y realizamos traslados interurbanos a nivel nacional. Si tienes una ruta específica, consúltanos y te confirmamos cobertura.",
  },
  {
    question: "¿Los conductores están certificados?",
    answer:
      "Sí. Todos nuestros conductores cuentan con licencia profesional vigente, hoja de vida verificada y capacitación en servicio al cliente. Tu seguridad es nuestra prioridad.",
  },
  {
    question: "¿Qué tipos de vehículos tienen disponibles?",
    answer:
      "Contamos con vehículos ejecutivos (1-3 pasajeros), SUVs premium (4-6 pasajeros) y minivans (7-12 pasajeros). Todos en excelente estado, con aire acondicionado y mantenimiento al día.",
  },
  {
    question: "¿Ofrecen servicio de rutas fijas para empresas?",
    answer:
      "Sí. Diseñamos rutas dedicadas para empresas que necesitan trasladar a su personal de forma diaria. Incluimos planificación de recorridos, horarios fijos y un conductor asignado a tu operación.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border-accent/30 bg-accent/[0.03] shadow-sm"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-4"
      >
        <span
          className={`text-base font-semibold transition-colors duration-300 ${
            isOpen ? "text-primary" : "text-gray-700"
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-accent shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-6 pb-5 sm:pb-6 text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Preguntas Frecuentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            ¿Tienes dudas?
            <br />
            <span className="gradient-text">Te las resolvemos</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4 text-sm">
            ¿No encontraste tu respuesta?
          </p>
          <a
            href="https://wa.me/56983574747?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20servicio%20de%20transporte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            Pregúntanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
