"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Heart, Baby, Home, HandHeart } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const ministries = [
  {
    icon: Users,
    title: "Youth & Young Adults",
    description: "Empowering the next generation to live boldly for Christ.",
    color: "bg-vibrant-coral/10 text-vibrant-coral",
  },
  {
    icon: Music,
    title: "Worship & Arts",
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
    title: "Life Groups",
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
            Get Involved in <span className="text-golden-faith">Ministry</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover your place in our community. Every gift, every passion, every person matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <Card
              key={ministry.title}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${ministry.color} mb-4`}>
                  <ministry.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-golden-faith transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="glow-golden">
            <Link href="/ministries">Explore All Ministries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
