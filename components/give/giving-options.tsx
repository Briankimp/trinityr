"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function GivingOptions() {
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
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            Ways to <span className="text-warm-orange">Give</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            All donation details are provided below for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* M-Pesa Card */}
          <Card
            className={`hover:shadow-xl transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-orange/10 mb-6">
                <Smartphone className="w-8 h-8 text-warm-orange" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-4">Mobile Money (M-Pesa)</h3>
              <p className="text-muted-foreground mb-6">Send your offering via M-Pesa using the details below:</p>
              <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Paybill Number</p>
                  <p className="font-mono font-bold text-xl text-warm-orange">761780</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                  <p className="font-mono font-semibold">Your Name</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bank Transfer Card */}
          <Card
            className={`hover:shadow-xl transition-all duration-500 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-blue/10 mb-6">
                <Building2 className="w-8 h-8 text-sky-blue" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-4">Bank Transfer</h3>
              <p className="text-muted-foreground mb-6">Transfer directly to our church bank account:</p>
              <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bank Name</p>
                  <p className="font-semibold">Equity Bank Kenya</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                  <p className="font-semibold">Trinity Chapel Ruiru</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                  <p className="font-mono font-bold text-xl text-sky-blue">0170297654321</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Branch</p>
                  <p className="font-semibold">Ruiru Branch</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div
          className={`max-w-3xl mx-auto mt-12 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                For any questions about giving or to request a receipt, please contact our finance team at{" "}
                <span className="font-semibold text-warm-orange">finance@trinitychapelruiru.org</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
