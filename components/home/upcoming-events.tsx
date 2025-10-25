"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
        <div className="text-center mb-16">
          <h2
            className={`font-display font-bold text-3xl md:text-5xl text-balance mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Upcoming <span className="text-golden-faith">Events</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Join us for worship, fellowship, and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl group-hover:text-golden-faith transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-golden-faith" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-golden-faith" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-golden-faith" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
