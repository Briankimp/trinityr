"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Heart, Lightbulb, Globe, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description: "We are committed to teaching and living by the Word of God as our ultimate authority.",
  },
  {
    icon: Users,
    title: "Authentic Community",
    description: "We foster genuine relationships where people can be real, vulnerable, and grow together.",
  },
  {
    icon: Heart,
    title: "Passionate Worship",
    description: "We express our love for God through heartfelt worship that engages mind, body, and spirit.",
  },
  {
    icon: Lightbulb,
    title: "Intentional Discipleship",
    description: "We are dedicated to helping every person grow in their faith and become more like Christ.",
  },
  {
    icon: Globe,
    title: "Generous Service",
    description: "We serve our community and world with compassion, meeting needs and sharing God's love.",
  },
  {
    icon: Sparkles,
    title: "Spirit-Led Living",
    description: "We depend on the Holy Spirit to guide, empower, and transform us daily.",
  },
]

export function CoreValues() {
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
        <div className="text-center mb-16">
          <h2
            className={`font-display font-bold text-3xl md:text-5xl text-balance mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Core <span className="text-warm-orange">Values</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            These foundational principles guide everything we do as a church community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-warm-orange/10 mb-4">
                  <value.icon className="w-7 h-7 text-warm-orange" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
