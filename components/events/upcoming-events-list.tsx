"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:30 AM",
    location: "Main Sanctuary, Trinity Chapel Ruiru",
    description:
      "Join us for powerful worship, inspiring messages, and authentic community. Two services available to accommodate everyone.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    category: "Worship",
    attendees: "200+",
  },
  {
    title: "Youth Night: Game On!",
    date: "Friday, December 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Youth Hall",
    description:
      "An evening of games, worship, and fellowship for teens and young adults. Bring your friends for an unforgettable night!",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    category: "Youth",
    attendees: "50+",
  },
  {
    title: "Community Outreach Day",
    date: "Saturday, December 16, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Ruiru Town Center",
    description:
      "Join us as we serve our community with food distribution, free medical checkups, and prayer. Be the hands and feet of Jesus.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    category: "Outreach",
    attendees: "100+",
  },
  {
    title: "Christmas Celebration Service",
    date: "Sunday, December 24, 2024",
    time: "6:00 PM",
    location: "Main Sanctuary",
    description:
      "Celebrate the birth of our Savior with special music, drama, and a powerful message. Invite your family and friends!",
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80",
    category: "Special Event",
    attendees: "300+",
  },
  {
    title: "New Year's Eve Prayer Night",
    date: "Tuesday, December 31, 2024",
    time: "9:00 PM - 12:30 AM",
    location: "Main Sanctuary",
    description:
      "End the year in prayer and worship as we thank God for His faithfulness and seek His guidance for the new year.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    category: "Prayer",
    attendees: "150+",
  },
  {
    title: "Life Groups Launch",
    date: "Sunday, January 7, 2025",
    time: "After Service",
    location: "Various Homes",
    description:
      "Join a Life Group and experience authentic community. Sign up after service to find a group near you.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    category: "Community",
    attendees: "Unlimited",
  },
]

export function UpcomingEventsList() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-[1200ms] ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            What's <span className="text-warm-orange">Happening</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Mark your calendar and join us for these exciting events
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-warm-orange px-3 py-1 rounded-full text-white text-xs font-bold uppercase animate-bounce-subtle">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-2xl mb-4">{event.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-6">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-full bg-warm-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-warm-orange/20">
                        <Calendar className="w-5 h-5 text-warm-orange" />
                      </div>
                      <div>
                        <div className="font-medium">Date</div>
                        <div className="text-muted-foreground">{event.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-full bg-warm-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-warm-orange/20">
                        <Clock className="w-5 h-5 text-warm-orange" />
                      </div>
                      <div>
                        <div className="font-medium">Time</div>
                        <div className="text-muted-foreground">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-full bg-warm-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-warm-orange/20">
                        <MapPin className="w-5 h-5 text-warm-orange" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">{event.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-10 h-10 rounded-full bg-warm-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-warm-orange/20">
                        <Users className="w-5 h-5 text-warm-orange" />
                      </div>
                      <div>
                        <div className="font-medium">Expected</div>
                        <div className="text-muted-foreground">{event.attendees}</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-fit bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
