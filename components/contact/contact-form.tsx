"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useRef, useState } from "react"

export function ContactForm() {
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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-12">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="mb-8">
            <h2 className="font-display font-bold text-3xl mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact-firstName">First Name *</Label>
                <Input id="contact-firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-lastName">Last Name *</Label>
                <Input id="contact-lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input id="contact-email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input id="contact-phone" type="tel" placeholder="+254 XXX XXX XXX" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject *</Label>
              <Select>
                <SelectTrigger id="contact-subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="visit">Plan a Visit</SelectItem>
                  <SelectItem value="prayer">Prayer Request</SelectItem>
                  <SelectItem value="ministry">Ministry Information</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message *</Label>
              <Textarea id="contact-message" placeholder="How can we help you?" rows={6} required />
            </div>

            <Button type="submit" size="lg" className="w-full glow-golden">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
