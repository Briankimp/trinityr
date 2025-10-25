"use client"

import { Button } from "@/components/ui/button"
import { Particles } from "@/components/ui/particles"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const heroImages = [
  "/dance-team.jpeg",
  "/vibrant-church-worship-service-people-praising-han.jpg",
  "/church-community-fellowship-people-smiling-togethe.jpg",
  "/youth-ministry-young-people-praying-together.jpg",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const imageInterval = setInterval(() => {
      setIsTransitioning(true)
      setNextImageIndex((prev) => (prev + 1) % heroImages.length)

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        setIsTransitioning(false)
      }, 1000)
    }, 5000)

    return () => {
      clearInterval(imageInterval)
    }
  }, [])

  const taglineWords = ["Audacious", "Agents", "of", "Change"]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url('${heroImages[currentImageIndex]}')`,
            opacity: isTransitioning ? 0 : 1,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out"
          style={{
            backgroundImage: `url('${heroImages[nextImageIndex]}')`,
            opacity: isTransitioning ? 1 : 0,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-orange/10 via-transparent to-sky-blue/10" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-ray" />
      </div>

      <Particles className="absolute inset-0 z-[1]" quantity={30} color="#F4A300" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          <div
            className={`inline-block glass-dark px-6 py-3 rounded-full transition-all duration-[800ms] ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="text-warm-orange text-sm md:text-base font-medium tracking-wider uppercase animate-pulse-glow">
              Growing Deep to Reach Wide
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white text-balance leading-tight">
            {taglineWords.slice(0, 2).map((word, index) => (
              <span
                key={index}
                className="inline-block animate-word-reveal mr-4"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                {word}
              </span>
            ))}
            <br />
            {taglineWords.slice(2).map((word, index) => (
              <span
                key={index + 2}
                className={`inline-block animate-word-reveal mr-4 ${
                  word === "Change"
                    ? "bg-gradient-to-r from-warm-orange via-yellow-400 to-warm-orange bg-clip-text text-transparent animate-gradient"
                    : ""
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto text-pretty leading-relaxed animate-text-fade-slide"
            style={{ animationDelay: "1s" }}
          >
            A dynamic, youthful church community rooted in faith, transformation, and authentic connection.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-bounce-below"
            style={{ animationDelay: "1.2s" }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-warm-orange hover:bg-warm-orange/90 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-orange"
            >
              <Link href="/contact">
                <span className="relative z-10">Get involved</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 shimmer" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="group glass-strong border-2 border-white/30 text-white hover:bg-white/20 font-semibold rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              <Link href="/events">
                <Calendar className="mr-2 h-5 w-5" />
                Join Us This Sunday
              </Link>
            </Button>
          </div>

          <div className="pt-12 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            <div className="inline-block glass-dark px-8 py-4 rounded-full">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Sunday Services: <span className="text-warm-orange">9:00 AM</span> &{" "}
                <span className="text-warm-orange">11:30 AM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 glow-white">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}
