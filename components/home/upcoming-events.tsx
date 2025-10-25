"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:30 AM",
    location: "Main Sanctuary",
    image: "/church-worship-service-people-praising.jpg",
  },
  {
    title: "Youth Night",
    date: "Friday, Dec 15",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "/youth-church-gathering-young-people-excited.jpg",
  },
  {
    title: "Community Outreach",
    date: "Saturday, Dec 16",
    time: "10:00 AM",
    location: "Ruiru Town",
    image: "/community-service-volunteers-helping-people.jpg",
  },
]

export function UpcomingEvents() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/5 via-transparent to-golden-faith/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/5 via-transparent to-vibrant-coral/5" />
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #F4A300 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-warm-orange/20 to-golden-faith/20 text-warm-orange mb-8 border border-golden-faith/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Upcoming Events</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-3xl md:text-5xl text-balance mb-6"
          >
            Join Us for{" "}
            <span className="bg-gradient-to-r from-warm-orange via-golden-faith to-vibrant-coral bg-clip-text text-transparent">
              Amazing Events
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto"
          >
            Experience worship, fellowship, and community impact with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-shadow duration-500 border-2 hover:border-golden-faith/20 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/0 via-golden-faith/0 to-vibrant-coral/0 group-hover:from-warm-orange/10 group-hover:via-golden-faith/5 group-hover:to-vibrant-coral/10 transition-all duration-500 z-10 pointer-events-none" />
                
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 via-transparent to-golden-faith/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardContent className="p-6 space-y-4 relative z-20">
                  <h3 className="font-display font-semibold text-xl bg-gradient-to-r from-foreground to-foreground group-hover:from-warm-orange group-hover:to-golden-faith bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="w-4 h-4 text-golden-faith" />
                      <span>{event.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-4 h-4 text-golden-faith" />
                      <span>{event.time}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-4 h-4 text-golden-faith" />
                      <span>{event.location}</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-warm-orange to-golden-faith hover:from-golden-faith hover:to-warm-orange text-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/events" className="relative z-10">
              View All Events
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
