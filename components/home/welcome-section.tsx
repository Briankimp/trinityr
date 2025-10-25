"use client"

import { Card } from "@/components/ui/card"
import { Heart, Users, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: Heart,
    title: "Authentic Faith",
    description:
      "We believe in genuine relationships with God and each other, fostering a community of transparency and grace.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together we grow, serve, and impact our world. No one walks alone in this journey of faith.",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "Lives changed by the power of God's love, becoming agents of change in our families and communities.",
  },
]

export function WelcomeSection() {
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-display font-bold text-3xl md:text-5xl text-balance mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Welcome to <span className="text-golden-faith">Trinity Chapel Ruiru</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We are a vibrant community of believers passionate about knowing God deeply and making Him known widely.
            Whether you're exploring faith for the first time or have walked with God for years, there's a place for you
            here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-golden-faith/10 mb-6">
                <value.icon className="w-8 h-8 text-golden-faith" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">{value.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
