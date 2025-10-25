"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const galleryImages = [
  {
    src: "/vibrant-church-worship-service-people-praising-han.jpg",
    alt: "Worship Service",
  },
  {
    src: "/church-community-fellowship-people-smiling-togethe.jpg",
    alt: "Community Fellowship",
  },
  {
    src: "/church-outreach-volunteers-serving-community.jpg",
    alt: "Community Outreach",
  },
  {
    src: "/youth-ministry-young-people-praying-together.jpg",
    alt: "Youth Ministry",
  },
]

const AnimatedWord = ({ children, delay }: { children: string; delay: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="inline-block mr-2"
    >
      {children}
    </motion.span>
  )
}

export function AboutPreview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const headline = "A Place of Worship, Growth, and Transformation."
  const words = headline.split(" ")

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=modern church building exterior sunset)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-orange/10 text-warm-orange mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">About Trinity Chapel Ruiru</span>
          </motion.div>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-balance mb-8 leading-tight">
            {words.map((word, index) => (
              <AnimatedWord key={index} delay={index * 0.1}>
                {word}
              </AnimatedWord>
            ))}
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-pretty"
            >
              We are a community rooted in Christ, igniting{" "}
              <span className="relative inline-block text-warm-orange font-semibold">
                faith
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 100 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M 0 2 Q 50 0 100 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{" "}
              and{" "}
              <span className="relative inline-block text-warm-orange font-semibold">
                purpose
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 100 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <motion.path
                    d="M 0 2 Q 50 0 100 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{" "}
              across generations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-pretty"
            >
              From our humble beginnings to becoming a beacon of hope in Ruiru, we've witnessed countless lives
              transformed by God's love.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-pretty"
            >
              Join us as we grow deep in{" "}
              <span className="relative inline-block text-warm-orange font-semibold">
                community
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 100 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  <motion.path
                    d="M 0 2 Q 50 0 100 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              , reach wide in impact, and live as audacious agents of change.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <Link href="/about">
            <Button
              size="lg"
              className="relative group overflow-hidden bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Glowing ripple effect */}
              <motion.span
                className="absolute inset-0 rounded-full bg-white/30"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
