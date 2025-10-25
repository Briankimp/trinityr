"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Church, Users, Globe, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: Church,
    title: "Worship & Ministry",
    description: "Support our worship services, pastoral care, and spiritual programs that nurture faith.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Fund life groups, youth ministry, children's church, and mental health support initiatives.",
  },
  {
    icon: Globe,
    title: "Outreach & Missions",
    description: "Enable us to serve our community through food distribution, medical camps, and education programs.",
  },
  {
    icon: BookOpen,
    title: "Discipleship & Growth",
    description: "Invest in resources, training, and programs that help people grow deeper in their faith.",
  },
]

export function WhyGive() {
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
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            Where Your <span className="text-golden-faith">Giving Goes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Your contributions directly support these vital areas of ministry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-golden-faith/10 mb-4">
                  <reason.icon className="w-7 h-7 text-golden-faith" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
