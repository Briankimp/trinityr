"use client"

import { useEffect, useState } from "react"

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/church-building-welcoming-entrance.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/80 via-deep-charcoal/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6">
          <div
            className={`inline-block transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-warm-orange text-sm md:text-base font-medium tracking-wider uppercase">
              We'd Love to Hear From You
            </span>
          </div>
          <h1
            className={`font-display font-bold text-4xl md:text-6xl text-white text-balance transition-all duration-[1000ms] delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get in <span className="text-warm-orange">Touch</span>
          </h1>
          <p
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed transition-all duration-[1200ms] delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Whether you have questions, need prayer, or want to visit, we're here for you.
          </p>
        </div>
      </div>
    </section>
  )
}
