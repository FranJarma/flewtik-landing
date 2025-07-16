"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react"

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
  ]

  return (
    <section className="py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 size-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-primary/5 rounded-full blur-3xl" />
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
            Resultados que <span className="text-primary">hablan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Datos reales de empresas que ya automatizaron sus procesos
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-8 hover-lift">
                {/* Icon */}
                <div className="size-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="size-8 text-primary" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-300 mb-4">{stat.label}</div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
