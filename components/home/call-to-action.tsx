"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function CallToAction() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #D3BF21 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-golden-faith/10 mb-4">
            <Heart className="w-10 h-10 text-golden-faith" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance">Ready to Take the Next Step?</h2>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Whether you're new to faith or looking for a church home, we'd love to connect with you. Join us this Sunday
            and experience the warmth of our community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="glow-golden group">
              <Link href="/contact">
                Plan Your Visit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/give">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
