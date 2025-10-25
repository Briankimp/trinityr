"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function GiveHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background to-secondary">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #F4A300 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`space-y-6 transition-all duration-[1800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-warm-orange/10 mb-4 animate-drift">
            <Heart className="w-10 h-10 text-warm-orange animate-pulse-glow" />
          </div>

          <div className="inline-block">
            <span className="text-warm-orange text-sm md:text-base font-medium tracking-wider uppercase">
              Generous Living
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl text-balance">
            Give to Make a <span className="text-warm-orange">Difference</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Your generosity fuels our mission to grow deep and reach wide. Every gift, no matter the size, makes an
            eternal impact.
          </p>

          <div className="pt-4">
            <p className="text-sm text-muted-foreground italic">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
