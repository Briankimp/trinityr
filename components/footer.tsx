"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const footerLinks = {
  quickLinks: [
    { href: "/about", label: "About Us" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
  ],
  connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "/give", label: "Give" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-sky-blue text-white">
      <div
        className={`container mx-auto px-4 py-12 transition-all duration-[1200ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4" style={{ transitionDelay: "0ms" }}>
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Trinity Chapel Ruiru" width={120} height={120} className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-white/80 text-pretty">Audacious Agents of Change. Growing Deep to Reach Wide.</p>
          </div>

          {/* Quick Links */}
          <div style={{ transitionDelay: "150ms" }}>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-warm-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div style={{ transitionDelay: "300ms" }}>
            <h3 className="font-display font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${350 + index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-warm-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ transitionDelay: "450ms" }}>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Ruiru, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone size={16} className="flex-shrink-0" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@trinitychapelruiru.org</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-white/80 hover:text-warm-orange transition-all duration-500 hover:scale-110 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60 transition-all duration-[1200ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p>&copy; {new Date().getFullYear()} Trinity Chapel Ruiru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
