"use client"

import { motion } from "framer-motion"
import { Search, Workflow, Zap, BarChart } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Analizamos",
      description: "Identificamos procesos que se pueden automatizar en tu negocio",
    },
    {
      icon: Workflow,
      title: "Diseñamos",
      description: "Creamos flujos de automatización personalizados para tu industria",
    },
    {
      icon: Zap,
      title: "Implementamos",
      description: "Configuramos las automatizaciones usando herramientas no-code",
    },
    {
      icon: BarChart,
      title: "Optimizamos",
      description: "Monitoreamos resultados y mejoramos continuamente el rendimiento",
    },
  ]

  return (
    <section id="como-funciona" className="py-32 relative">
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
            Cómo <span className="text-primary">funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un proceso simple y transparente para transformar tu negocio
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm glow-purple">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="size-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="size-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zinc-800" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
