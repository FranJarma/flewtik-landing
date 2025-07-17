"use client";

import { motion } from "framer-motion";
import { Search, Workflow, Zap, BarChart } from "lucide-react";

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
  ];

  return (
    <section id="como-funciona" className="relative py-32">
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
            Cómo <span className="text-primary">funciona</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Un proceso simple y transparente para transformar tu negocio
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass hover-lift h-full rounded-2xl p-8">
                {/* Step number */}
                <div className="bg-primary glow-purple absolute -top-4 -left-4 flex size-8 items-center justify-center rounded-full text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="group-hover:bg-primary/20 mb-6 flex size-16 items-center justify-center rounded-2xl bg-zinc-900 transition-colors duration-300">
                  <step.icon className="text-primary size-8" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="leading-relaxed text-gray-300">{step.description}</p>
              </div>

              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-zinc-800 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
