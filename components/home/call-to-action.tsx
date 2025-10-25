"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function CallToAction() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden-faith/10 via-warm-orange/5 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #F4A300 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-golden-faith/20 to-warm-orange/20 mb-4 border-2 border-golden-faith/30"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-10 h-10 text-golden-faith" />
            </motion.div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-3xl md:text-5xl text-balance"
          >
            Ready to Take the{" "}
            <span className="bg-gradient-to-r from-golden-faith via-warm-orange to-golden-faith bg-clip-text text-transparent">
              Next Step?
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're new to faith or looking for a church home, we'd love to connect with you. Join us this Sunday
            and experience the warmth of our community.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-golden-faith to-warm-orange hover:from-warm-orange hover:to-golden-faith text-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/contact" className="relative z-10">
                Plan Your Visit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-golden-faith/30 hover:bg-golden-faith/10 hover:border-golden-faith transition-all"
            >
              <Link href="/give">Support Our Mission</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
