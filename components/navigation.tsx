"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <Image src="/logo.png" alt="Trinity Chapel Ruiru" width={50} height={50} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group hover:scale-110",
                  isScrolled ? "text-deep-charcoal hover:text-warm-orange" : "text-white hover:text-golden-faith"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-orange to-golden-faith transition-all duration-300 group-hover:w-full glow-orange" />
              </Link>
            ))}
            <Button
              asChild
              className="relative overflow-hidden bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full hover:scale-105 transition-all glow-orange"
            >
              <Link href="/give" onClick={handleNavClick}>
                <span className="relative z-10">Give</span>
                <div className="absolute inset-0 shimmer" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-deep-charcoal hover:text-warm-orange" : "text-white hover:text-golden-faith"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-slide-in-up glass-strong rounded-2xl p-6 depth-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block text-sm font-medium text-deep-charcoal hover:text-warm-orange transition-all duration-300 py-2 hover:translate-x-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full relative overflow-hidden bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full glow-orange"
            >
              <Link href="/give" onClick={handleNavClick}>
                <span className="relative z-10">Give</span>
                <div className="absolute inset-0 shimmer" />
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
