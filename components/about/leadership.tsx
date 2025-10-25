"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Mail } from "lucide-react"
import { useRef } from "react"

const leaders = [
  {
    name: "Pastor John Kamau",
    role: "Lead Pastor",
    image: "/pastor-male-african-smiling-professional.jpg",
    bio: "Passionate about seeing lives transformed by the gospel and building authentic community.",
  },
  {
    name: "Pastor Grace Wanjiru",
    role: "Associate Pastor",
    image: "/pastor-female-african-smiling-warm.jpg",
    bio: "Dedicated to empowering women and families to live out their faith with boldness.",
  },
  {
    name: "Pastor David Mwangi",
    role: "Youth Pastor",
    image: "/youth-pastor-male-african-energetic.jpg",
    bio: "Committed to raising up the next generation of audacious agents of change.",
  },
  {
    name: "Pastor Sarah Njeri",
    role: "Worship Pastor",
    image: "/worship-leader-female-african-joyful.jpg",
    bio: "Leading our community into authentic, spirit-filled worship experiences.",
  },
]

export function Leadership() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance mb-6">
            Meet Our <span className="text-warm-orange">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Dedicated servants committed to shepherding our community with wisdom, love, and integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="relative">
                  <div className="relative h-72 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${leader.image}')` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Glowing halo effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-warm-orange/40 via-transparent to-transparent"
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 shadow-[inset_0_0_60px_rgba(244,163,0,0.4)]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/50 to-transparent" />
                  </div>

                  <CardContent className="p-6 space-y-3 bg-card">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="font-display font-semibold text-xl"
                    >
                      {leader.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="text-warm-orange font-medium text-sm"
                    >
                      {leader.role}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      className="text-muted-foreground text-sm text-pretty leading-relaxed"
                    >
                      {leader.bio}
                    </motion.p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-warm-orange transition-colors pt-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </motion.button>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
