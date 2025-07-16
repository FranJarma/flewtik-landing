"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Automatika transformó completamente nuestro restaurante. Ahora procesamos 3x más pedidos con el mismo equipo.",
      author: "María González",
      role: "Propietaria",
      company: "Restaurante El Norte",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "La automatización de turnos nos ahorró 10 horas semanales. Ahora podemos atender más pacientes.",
      author: "Dr. Carlos Mendoza",
      role: "Director",
      company: "Clínica Dental Salta",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Increíble cómo automatizaron nuestra facturación. Ya no perdemos tiempo con trámites AFIP.",
      author: "Ana Rodríguez",
      role: "Contadora",
      company: "Estudio Contable AR",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-secondary">clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios reales de empresas que ya automatizaron sus procesos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift">
                {/* Quote icon */}
                <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="size-6 text-primary" />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8">"{testimonial.quote}"</blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
