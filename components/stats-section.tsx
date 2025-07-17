"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Aumento promedio en eficiencia",
      description: "Las empresas que automatizan ven mejoras significativas",
    },
    {
      icon: Clock,
      value: "15h",
      label: "Ahorro semanal por empleado",
      description: "Tiempo que se libera para tareas estratégicas",
    },
    {
      icon: Users,
      value: "50+",
      label: "Empresas ya automatizadas",
      description: "PYMEs de Salta y el NOA confían en nosotros",
    },
    {
      icon: DollarSign,
      value: "$2M",
      label: "Ahorros generados para clientes",
      description: "Valor económico creado a través de automatización",
    },
  ];

  return (
    <section className="relative py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="bg-secondary/5 absolute top-1/4 left-1/4 size-96 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute right-1/4 bottom-1/4 size-96 rounded-full blur-3xl" />
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
            Resultados que <span className="text-primary">hablan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Datos reales de empresas que ya automatizaron sus procesos
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="glass hover-lift rounded-2xl p-8">
                {/* Icon */}
                <div className="group-hover:bg-primary/20 mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-zinc-900 transition-colors duration-300">
                  <stat.icon className="text-primary size-8" />
                </div>

                {/* Value */}
                <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>

                {/* Label */}
                <div className="mb-4 text-lg font-semibold text-gray-300">{stat.label}</div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
