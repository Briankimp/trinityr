"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Trinity Chapel Ruiru was planted with a vision to reach the community with the gospel of Jesus Christ.",
  },
  {
    year: "2019",
    title: "First Worship Center",
    description: "Established our first permanent worship location, creating a home for our growing community.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    description:
      "Launched online services and digital ministry, extending our reach beyond physical boundaries during challenging times.",
  },
  {
    year: "2021",
    title: "Ministry Growth",
    description:
      "Expanded our ministries to include youth programs, children's church, and community outreach initiatives.",
  },
  {
    year: "2022",
    title: "Community Impact",
    description: "Launched mental health support programs and increased our community service projects across Ruiru.",
  },
  {
    year: "2023",
    title: "Continued Growth",
    description:
      "Celebrated significant growth in membership and impact, with multiple life groups and thriving ministries.",
  },
  {
    year: "2024",
    title: "Looking Forward",
    description: "Continuing to grow deep and reach wide, impacting more lives with the transformative love of Christ.",
  },
]

export function Timeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance mb-6">
            Our <span className="text-warm-orange">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From humble beginnings to a thriving community of faith, here's how God has been faithful through the years.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="relative h-full">
                  {index < milestones.length - 1 && (
                    <svg className="absolute top-8 left-full w-8 h-1 text-warm-orange" viewBox="0 0 32 4">
                      <motion.line
                        x1="0"
                        y1="2"
                        x2="32"
                        y2="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </svg>
                  )}

                  {/* Year badge with pulse animation */}
                  <motion.div whileHover={{ scale: 1.1 }} className="relative w-16 h-16 mx-auto mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 rounded-full bg-warm-orange/30"
                    />
                    <div className="relative w-full h-full rounded-full bg-warm-orange flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-[calc(100%-5rem)]"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-warm-orange flex-shrink-0 mt-1" />
                      <h3 className="font-display font-semibold text-xl">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
