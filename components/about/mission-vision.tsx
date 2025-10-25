"use client"

import { motion, useInView } from "framer-motion"
import { Target, Eye } from "lucide-react"
import { useRef } from "react"

export function MissionVision() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      color: "warm-orange",
      content: [
        "To nurture a community of believers who grow deep in their relationship with God through authentic worship, biblical teaching, and meaningful fellowship.",
        "As we grow deep, we reach wide—extending the transformative love of Christ to our community and beyond, becoming audacious agents of change in every sphere of influence.",
      ],
    },
    {
      icon: Eye,
      title: "Our Vision",
      color: "sky-blue",
      content: [
        "To be a thriving, multi-generational church community that transforms lives and impacts society through the power of the gospel.",
        "We envision a church where every person discovers their God-given purpose, experiences genuine community, and becomes an agent of positive change in their families, workplaces, and communities.",
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Guided by purpose, driven by passion, and empowered by faith.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-${card.color}/10 via-background to-background border border-${card.color}/20 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${card.color}/20 mb-8 group-hover:bg-${card.color}/30 transition-colors`}
                >
                  <card.icon className={`w-10 h-10 text-${card.color}`} />
                </motion.div>

                <h3 className="font-display font-bold text-3xl mb-6">{card.title}</h3>

                <div className="space-y-4">
                  {card.content.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + i * 0.1 + 0.3 }}
                      className="text-lg text-muted-foreground text-pretty leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`absolute -top-20 -right-20 w-80 h-80 bg-${card.color}/10 rounded-full blur-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
