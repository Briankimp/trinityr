"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function EventsCalendar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            Full <span className="text-golden-faith">Calendar</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">View all our events at a glance</p>
        </div>

        <Card
          className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="p-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Interactive calendar component would be integrated here
                <br />
                <span className="text-sm">(Google Calendar, custom calendar, or event management system)</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
