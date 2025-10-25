"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Heart, Baby, Home, HandHeart, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const ministries = [
  {
    icon: Users,
    title: "Youth & Young Adults",
    tagline: "Empowering the Next Generation",
    description:
      "A vibrant community for young people to grow in faith, build authentic friendships, and discover their purpose. We meet weekly for worship, Bible study, and fun activities that challenge and inspire.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    color: "bg-warm-orange/10 text-warm-orange",
    highlights: ["Weekly gatherings", "Mentorship programs", "Mission trips", "Leadership development"],
  },
  {
    icon: Music,
    title: "Worship & Arts",
    tagline: "Expressing Love Through Creativity",
    description:
      "Our worship team leads the congregation in authentic, spirit-filled worship. We welcome musicians, vocalists, dancers, and creative artists to join us in expressing our love for God through excellence.",
    image: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?w=800&q=80",
    color: "bg-sky-blue/10 text-sky-blue",
    highlights: ["Choir & band", "Dance ministry", "Creative arts", "Technical production"],
  },
  {
    icon: Heart,
    title: "Mental Health Ministry",
    tagline: "Supporting Wholeness & Healing",
    description:
      "We believe in caring for the whole person—mind, body, and spirit. Our mental health ministry provides support, resources, and a safe space for those navigating mental health challenges.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    color: "bg-warm-orange/10 text-warm-orange",
    highlights: ["Support groups", "Professional counseling", "Wellness workshops", "Prayer ministry"],
  },
  {
    icon: Baby,
    title: "Children's Church",
    tagline: "Building Strong Foundations",
    description:
      "We partner with parents to nurture children's faith through age-appropriate teaching, engaging activities, and loving care. Our goal is to help every child know and love Jesus.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    color: "bg-sky-blue/10 text-sky-blue",
    highlights: ["Age-graded classes", "Bible stories & crafts", "Memory verses", "Safe environment"],
  },
  {
    icon: Home,
    title: "Life Groups",
    tagline: "Growing Together in Community",
    description:
      "Life Groups are the heart of our church community. These small gatherings meet in homes throughout the week for Bible study, prayer, fellowship, and mutual support.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    color: "bg-warm-orange/10 text-warm-orange",
    highlights: ["Weekly meetings", "Biblical discussions", "Prayer support", "Authentic relationships"],
  },
  {
    icon: HandHeart,
    title: "Outreach & Missions",
    tagline: "Serving with Christ's Love",
    description:
      "We actively serve our community through practical acts of love and compassion. From feeding programs to community development, we're committed to making a tangible difference.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    color: "bg-sky-blue/10 text-sky-blue",
    highlights: ["Community service", "Food distribution", "Prison ministry", "Local partnerships"],
  },
]

export function MinistriesGrid() {
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
        <div
          className={`text-center mb-16 transition-all duration-[1200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-balance mb-6">
            Join a <span className="text-warm-orange">Ministry</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
            Find your place and make a difference. Register to be part of a ministry that aligns with your passion.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full glow-orange transition-all duration-300 hover:scale-105"
          >
            <Link href="#register">
              Register for a Ministry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="space-y-16">
          {ministries.map((ministry, index) => (
            <div
              key={ministry.title}
              className={`transition-all duration-[1200ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="ministry-card overflow-hidden shadow-lg">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-0`}>
                  {/* Image */}
                  <div
                    className={`relative h-[300px] lg:h-auto overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                      style={{ backgroundImage: `url('${ministry.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent
                    className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${ministry.color} mb-6 transition-transform duration-300 hover:rotate-12 hover:scale-110`}
                    >
                      <ministry.icon className="w-8 h-8" />
                    </div>

                    <h2 className="font-display font-bold text-3xl mb-2">{ministry.title}</h2>
                    <p className="text-warm-orange font-medium mb-4">{ministry.tagline}</p>
                    <p className="text-muted-foreground text-pretty leading-relaxed mb-6">{ministry.description}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {ministry.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-warm-orange animate-pulse-glow" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-fit group bg-warm-orange hover:bg-warm-orange/90 rounded-full transition-all duration-300 hover:scale-105">
                      Get Involved
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
