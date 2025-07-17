"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="bg-primary/10 absolute top-1/4 left-1/4 size-96 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute right-1/4 bottom-1/4 size-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-gray-300"
          >
            <span className="bg-secondary mr-2 size-2 animate-pulse rounded-full" />
            Automatización para PYMEs argentinas
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl"
          >
            Automatizá tu negocio. <span className="text-primary">Escalá</span> sin fricción.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 lg:text-2xl"
          >
            Transformamos procesos manuales en automatizaciones inteligentes. Más tiempo para
            crecer, menos tiempo en tareas repetitivas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:text-primary animate-glow hover-lift px-8 py-4 text-lg font-semibold text-white"
            >
              Ver automatizaciones
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:text-primary hover-lift border-zinc-700 bg-transparent px-8 py-4 text-lg text-white hover:bg-zinc-900"
            >
              <Play className="mr-2 size-5" />
              Ver demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">50+</div>
              <div className="text-gray-400">Empresas automatizadas</div>
            </div>
            <div className="text-center">
              <div className="text-secondary mb-2 text-3xl font-bold">80%</div>
              <div className="text-gray-400">Reducción en tiempo</div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
              <div className="text-gray-400">Procesos activos</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
