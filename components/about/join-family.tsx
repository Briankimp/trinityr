"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function JoinFamily() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const text = "We're more than a church — we're family."

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/church-community-people-laughing-praying-together-.jpg')`,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/95 via-deep-charcoal/90 to-deep-charcoal/95"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warm-orange/20 backdrop-blur-sm text-warm-orange mb-12 border border-warm-orange/30"
        >
          <Heart className="w-5 h-5" />
          <span className="text-base font-semibold">Join Us</span>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-8">
            {text.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: wordIndex * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-4"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #ffffff 0%, #F4A300 50%, #ffffff 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/80 text-pretty leading-relaxed max-w-3xl mx-auto"
          >
            Experience authentic community, discover your purpose, and join us in making a lasting impact in Ruiru and
            beyond.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="relative group overflow-hidden bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Plan Your Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.6 },
                }}
              />
            </Button>
          </Link>

          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
            >
              View Upcoming Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
