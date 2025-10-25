"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

export function AboutHero() {
  const containerRef = useRef(null)

  const title = "Trinity Chapel Ruiru"
  const subtitle = "where lives are restored, leaders are raised, and the community thrives in Christ."

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/cinematic-church-worship-service-wide-angle.jpg')`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/90 via-deep-charcoal/70 to-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warm-orange/20 backdrop-blur-sm text-warm-orange mb-12 border border-warm-orange/30"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-base font-semibold">Our Story</span>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 text-pretty leading-relaxed max-w-4xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
