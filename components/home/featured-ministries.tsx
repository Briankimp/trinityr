"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Heart, Baby, Home, HandHeart } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const ministries = [
  {
    icon: Users,
    title: "Young Adults",
    description: "Empowering the next generation to live boldly for Christ.",
    color: "bg-vibrant-coral/10 text-vibrant-coral",
  },
  {
    icon: Music,
    title: "Worship",
    description: "Expressing our love for God through creative excellence.",
    color: "bg-golden-faith/10 text-golden-faith",
  },
  {
    icon: Heart,
    title: "Mental Health",
    description: "Supporting wholeness in mind, body, and spirit.",
    color: "bg-faith-blue-gray/10 text-faith-blue-gray",
  },
  {
    icon: Baby,
    title: "Children's Church",
    description: "Building strong foundations of faith in young hearts.",
    color: "bg-vibrant-coral/10 text-vibrant-coral",
  },
  {
    icon: Home,
    title: "E Groups",
    description: "Growing together in authentic community.",
    color: "bg-olive-earth/10 text-olive-earth",
  },
  {
    icon: HandHeart,
    title: "Outreach",
    description: "Serving our community with the love of Christ.",
    color: "bg-golden-faith/10 text-golden-faith",
  },
]

export function FeaturedMinistries() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentMinistryIndex, setCurrentMinistryIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMinistryIndex((prev) => (prev + 1) % ministries.length)
    }, 2500) // Change every 2.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-coral/5 via-transparent to-sky-blue/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display font-bold text-3xl md:text-5xl text-balance mb-6"
          >
            Get Involved in{" "}
            <span className="inline-block relative " style={{ height: "0.8em" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentMinistryIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute top-0 left-0 w-full text-warm-orange whitespace-nowrap"
                >
                  {ministries[currentMinistryIndex].title}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto"
          >
            Discover your place in our community. Every gift, every passion, every person matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-2 hover:border-golden-faith/20 relative overflow-hidden h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-golden-faith/0 via-transparent to-vibrant-coral/0 group-hover:from-golden-faith/10 group-hover:to-vibrant-coral/5 transition-all duration-500" />
                
                <CardContent className="p-6 relative z-10">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${ministry.color} mb-4`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ministry.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl mb-3 bg-gradient-to-r from-foreground to-foreground group-hover:from-golden-faith group-hover:to-vibrant-coral bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {ministry.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{ministry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-golden-faith via-vibrant-coral to-golden-faith hover:from-vibrant-coral hover:via-golden-faith hover:to-vibrant-coral text-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Link href="/ministries" className="relative z-10">
              Explore All Ministries
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
