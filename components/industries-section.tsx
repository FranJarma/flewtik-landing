"use client"

import { motion } from "framer-motion"
import { ChefHat, Stethoscope, Scissors, Calculator, Building2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IndustriesSection() {
  const industries = [
    {
      icon: ChefHat,
      title: "Gastronomía",
      description: "Automatizá pedidos, inventario y facturación",
      features: ["Integración con delivery", "Control de stock", "Reportes de ventas"],
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Consultorios",
      description: "Gestión de turnos y obras sociales",
      features: ["Turnos automáticos", "Recordatorios", "Facturación médica"],
      color: "secondary",
    },
    {
      icon: Scissors,
      title: "Salones de Belleza",
      description: "Reservas y gestión de clientes",
      features: ["Reservas online", "Marketing automático", "Gestión VIP"],
      color: "primary",
    },
    {
      icon: Calculator,
      title: "Contabilidad",
      description: "Automatización fiscal y contable",
      features: ["Alertas AFIP", "Reportes automáticos", "Gestión de clientes"],
      color: "secondary",
    },
    {
      icon: Building2,
      title: "Inmobiliarias",
      description: "Gestión de propiedades y contratos",
      features: ["Portal inquilinos", "Seguimiento pagos", "Contratos automáticos"],
      color: "primary",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Ventas y atención automatizada",
      features: ["Chatbot 24/7", "Gestión inventario", "Seguimiento envíos"],
      color: "secondary",
    },
  ]

  return (
    <section id="industrias" className="py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Automatización por <span className="text-secondary">industria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Soluciones específicas para cada tipo de negocio</p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift">
                {/* Icon */}
                <div
                  className={`size-16 ${industry.color === "primary" ? "bg-primary" : "bg-secondary"} rounded-2xl flex items-center justify-center mb-6 ${industry.color === "primary" ? "glow-purple" : "glow-green"}`}
                >
                  <industry.icon className="size-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div
                        className={`size-2 ${industry.color === "primary" ? "bg-primary" : "bg-secondary"} rounded-full mr-3`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-zinc-700 text-white hover:bg-zinc-900 hover:text-primary transition-all duration-300 bg-transparent"
                >
                  Ver automatizaciones
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tu industria no está listada?</h3>
            <p className="text-gray-300 mb-6">Creamos automatizaciones personalizadas para cualquier tipo de negocio</p>
            <Button className="bg-primary hover:bg-primary/90 hover:text-primary text-white font-semibold px-8 animate-glow">
              Consultar automatización personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
