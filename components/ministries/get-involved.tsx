"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useRef, useState } from "react"

export function GetInvolved() {
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
    <section id="register" ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            Ready to <span className="text-warm-orange">Serve?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Fill out the form below and we'll connect you with the right ministry team.
          </p>
        </div>

        <Card
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+254 XXX XXX XXX" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ministry">Ministry Interest</Label>
                <Select>
                  <SelectTrigger id="ministry">
                    <SelectValue placeholder="Select a ministry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youth">Youth & Young Adults</SelectItem>
                    <SelectItem value="worship">Worship & Arts</SelectItem>
                    <SelectItem value="mental-health">Mental Health Ministry</SelectItem>
                    <SelectItem value="children">Children's Church</SelectItem>
                    <SelectItem value="life-groups">Life Groups</SelectItem>
                    <SelectItem value="outreach">Outreach & Missions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Yourself</Label>
                <Textarea
                  id="message"
                  placeholder="Share your interests, skills, or any questions you have..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-warm-orange hover:bg-warm-orange/90 rounded-full glow-orange"
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
