"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Trinity Chapel Ruiru", "Ruiru Town", "Kiambu County, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 XXX XXX XXX", "+254 XXX XXX XXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@trinitychapelruiru.org", "pastor@trinitychapelruiru.org"],
  },
  {
    icon: Clock,
    title: "Service Times",
    details: ["Sunday: 9:00 AM & 11:30 AM", "Wednesday: 6:00 PM (Prayer Night)"],
  },
]

export function ContactInfo() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <Card
              key={item.title}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-golden-faith/10 mb-4">
                  <item.icon className="w-7 h-7 text-golden-faith" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
