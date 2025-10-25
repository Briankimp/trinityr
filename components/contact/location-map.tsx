"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function LocationMap() {
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
    <section ref={sectionRef} className="py-20 bg-muted">
      <div
        className={`h-full min-h-[600px] transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="h-full w-full bg-muted flex items-center justify-center p-8">
          <div className="text-center space-y-4">
            <MapPin className="w-16 h-16 text-golden-faith mx-auto" />
            <h3 className="font-display font-semibold text-xl">Find Us Here</h3>
            <p className="text-muted-foreground max-w-md">
              Interactive map would be embedded here
              <br />
              <span className="text-sm">(Google Maps integration)</span>
            </p>
            <div className="pt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-golden-faith hover:underline font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
