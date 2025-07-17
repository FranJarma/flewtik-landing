"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Flewtik transformó completamente nuestro restaurante. Ahora procesamos 3x más pedidos con el mismo equipo.",
      author: "María González",
      role: "Propietaria",
      company: "Restaurante El Norte",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "La automatización de turnos nos ahorró 10 horas semanales. Ahora podemos atender más pacientes.",
      author: "Dr. Carlos Mendoza",
      role: "Director",
      company: "Clínica Dental Salta",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Increíble cómo automatizaron nuestra facturación. Ya no perdemos tiempo con trámites AFIP.",
      author: "Ana Rodríguez",
      role: "Contadora",
      company: "Estudio Contable AR",
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Lo que dicen nuestros <span className="text-flewtik-secondary">clientes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Testimonios reales de empresas que ya automatizaron sus procesos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass hover-lift h-full rounded-2xl p-8">
                {/* Quote icon */}
                <div className="bg-flewtik-primary/20 mb-6 flex size-12 items-center justify-center rounded-xl">
                  <Quote className="text-flewtik-primary size-6" />
                </div>

                {/* Quote */}
                <blockquote className="mb-8 text-lg leading-relaxed text-gray-300">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="mr-4 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-flewtik-primary text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
