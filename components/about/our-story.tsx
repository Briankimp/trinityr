"use client"

import { useEffect, useRef, useState } from "react"

export function OurStory() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-[1200ms] ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-balance">
              A Community Born from <span className="text-warm-orange">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Trinity Chapel Ruiru was planted with a clear vision: to create a space where people could encounter God
              authentically, grow in their faith deeply, and impact their world boldly. What began as a small gathering
              of believers has blossomed into a vibrant community of faith.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We are a church that celebrates diversity, embraces authenticity, and champions transformation. Our
              community is made up of people from all walks of life, united by a common love for Jesus and a shared
              commitment to making a difference in Ruiru and beyond.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Today, we continue to pursue our calling with passion and purpose, believing that the best is yet to come
              as we grow deep in our relationship with God and reach wide with His love.
            </p>
          </div>

          <div
            className={`relative h-[500px] rounded-2xl overflow-hidden transition-all duration-[1200ms] ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/church-worship-hands-raised-joyful.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
