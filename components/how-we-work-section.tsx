"use client";

import { motion } from "framer-motion";
import { Search, Workflow, Code, BarChart } from "lucide-react";

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico",
      description:
        "Analizamos tus procesos actuales y identificamos oportunidades de automatización.",
      color: "from-[#6F37C8] to-[#A477EB]",
    },
    {
      icon: Workflow,
      title: "Diseño del flujo",
      description: "Creamos el mapa de automatización personalizado para tu negocio.",
      color: "from-[#A477EB] to-[#4FC175]",
    },
    {
      icon: Code,
      title: "Implementación no-code",
      description: "Desarrollamos la solución usando herramientas modernas y accesibles.",
      color: "from-[#4FC175] to-[#1CAF4E]",
    },
    {
      icon: BarChart,
      title: "Monitoreo y métricas",
      description: "Seguimos el rendimiento y optimizamos continuamente los resultados.",
      color: "from-[#1CAF4E] to-[#6F37C8]",
    },
  ];

  return (
    <section id="como-trabajamos" className="bg-[#2C2B2B]/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#A477EB] to-[#6F37C8] bg-clip-text text-transparent">
              Cómo trabajamos
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#D2D2D2]">
            Un proceso simple y transparente para transformar tu negocio
          </p>
        </motion.div>

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
              <div className="h-full rounded-2xl border border-[#404040]/50 bg-[#2C2B2B]/50 p-8 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 hover:bg-[#2C2B2B]/80">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#6F37C8] to-[#A477EB] text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`h-16 w-16 bg-gradient-to-r ${step.color} mb-6 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="leading-relaxed text-[#D2D2D2]">{step.description}</p>
              </div>

              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-gradient-to-r from-[#6F37C8] to-[#A477EB] opacity-50 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
