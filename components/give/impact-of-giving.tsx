"use client"

import { useEffect, useRef, useState } from "react"

export function ImpactOfGiving() {
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
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-balance">
              Your Giving <span className="text-golden-faith">Creates Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              When you give to Trinity Chapel Ruiru, you're not just supporting a church—you're investing in changed
              lives, transformed communities, and eternal impact.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-golden-faith mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Families Fed</h4>
                  <p className="text-sm text-muted-foreground">
                    Your giving helps us provide food to over 100 families monthly
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-golden-faith mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Children Educated</h4>
                  <p className="text-sm text-muted-foreground">
                    Scholarships and school supplies for 50+ children annually
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-golden-faith mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Lives Transformed</h4>
                  <p className="text-sm text-muted-foreground">
                    Discipleship programs, counseling, and spiritual growth resources
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-golden-faith mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Community Served</h4>
                  <p className="text-sm text-muted-foreground">
                    Medical camps, prison ministry, and local partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative h-[500px] rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/giving-impact-community-transformation.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
