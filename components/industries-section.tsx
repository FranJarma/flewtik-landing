"use client";

import { motion } from "framer-motion";
import { ChefHat, Stethoscope, Scissors, Calculator, Building2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  ];

  return (
    <section id="industrias" className="relative py-32">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="bg-primary/5 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Automatización por <span className="text-secondary">industria</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Soluciones específicas para cada tipo de negocio
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass hover-lift h-full rounded-2xl p-8">
                {/* Icon */}
                <div
                  className={`size-16 ${industry.color === "primary" ? "bg-primary" : "bg-secondary"} mb-6 flex items-center justify-center rounded-2xl ${industry.color === "primary" ? "glow-purple" : "glow-green"}`}
                >
                  <industry.icon className="size-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-white">{industry.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-300">{industry.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div
                        className={`size-2 ${industry.color === "primary" ? "bg-primary" : "bg-secondary"} mr-3 rounded-full`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="hover:text-primary w-full border-zinc-700 bg-transparent text-white transition-all duration-300 hover:bg-zinc-900"
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
          <div className="glass mx-auto max-w-2xl rounded-2xl p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">¿Tu industria no está listada?</h3>
            <p className="mb-6 text-gray-300">
              Creamos automatizaciones personalizadas para cualquier tipo de negocio
            </p>
            <Button className="bg-primary hover:bg-primary/90 hover:text-primary animate-glow px-8 font-semibold text-white">
              Consultar automatización personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
