"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactButton } from "../ui/contact-button";

export function HeroSection() {
  const headingParts = [
    { text: "Automatizá tu negocio. ", className: "" },
    { text: "Escalá", className: "text-flewtik-primary" },
    { text: " sin problemas.", className: "" },
  ];

  const fullText = headingParts.map(p => p.text).join("");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-flewtik-primary/10 absolute top-1/4 left-1/4 size-96 rounded-full blur-3xl" />
        <div className="bg-flewtik-primary/10 absolute right-1/4 bottom-1/4 size-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-40 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-gray-300"
          >
            <span className="bg-flewtik-primary mr-2 size-2 animate-pulse rounded-full" />
            Automatizaciones para Pymes y negocios
          </motion.div>

          <h1 className="mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
            {headingParts.map((part, partIndex) => {
              const partStartIndex = headingParts
                .slice(0, partIndex)
                .reduce((acc, p) => acc + p.text.length, 0);

              return Array.from(part.text).map((char, charIndex) => (
                <motion.span
                  key={`${partIndex}-${charIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: (partStartIndex + charIndex) * 0.05,
                  }}
                  className={part.className}
                >
                  {char}
                </motion.span>
              ));
            })}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: fullText.length * 0.05 + 0.2,
            }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 lg:text-2xl"
          >
            Transformamos procesos manuales en automatizaciones inteligentes. Más tiempo para
            crecer, menos tiempo en tareas repetitivas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: fullText.length * 0.05 + 0.4,
            }}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ContactButton
              text="Quiero automatizar mi negocio"
              className="hover:bg-flewtik-primary/90 hover-lift py-3"
            >
              <ArrowRight className="ml-2 size-5" />
            </ContactButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
