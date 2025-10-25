"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function MissionSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/diverse-church-community-people-together-smiling-w.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-block">
              <span className="text-golden-faith text-sm font-medium tracking-wider uppercase">Our Mission</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-balance">Growing Deep to Reach Wide</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              At Trinity Chapel Ruiru, we are committed to nurturing deep spiritual roots through authentic worship,
              biblical teaching, and meaningful relationships. As we grow in our faith, we extend our reach to impact
              our community and beyond with the transformative love of Christ.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We believe that true transformation happens when we encounter God personally and live out our faith
              boldly. Together, we are becoming audacious agents of change in Ruiru and beyond.
            </p>
            <Button asChild className="glow-golden group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
