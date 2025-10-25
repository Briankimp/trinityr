"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "Is my giving tax-deductible?",
    answer:
      "Yes, Trinity Chapel Ruiru is a registered religious organization. All donations are tax-deductible to the extent allowed by law. We provide receipts for all contributions.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Your donations support worship services, ministry programs, community outreach, facility maintenance, and staff support. We maintain financial transparency and accountability in all our operations.",
  },
  {
    question: "Can I set up recurring giving?",
    answer:
      "We encourage recurring giving as it helps us plan and budget effectively. You can set up monthly, quarterly, or annual recurring donations through our online giving platform.",
  },
  {
    question: "Is online giving secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect your financial information. Your data is never stored on our servers and all transactions are processed through secure payment gateways.",
  },
  {
    question: "Can I designate my gift to a specific ministry?",
    answer:
      "Yes, you can designate your gift to specific ministries such as missions, youth ministry, building fund, or community outreach. Simply indicate your preference when giving.",
  },
  {
    question: "What if I need help with giving?",
    answer:
      "Our team is here to help! Contact our finance office or speak with a pastor if you have questions about giving, need assistance with the online platform, or want to discuss other giving options.",
  },
]

export function GivingFAQ() {
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
            Frequently Asked <span className="text-golden-faith">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to know about giving
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-display font-semibold hover:text-golden-faith hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
