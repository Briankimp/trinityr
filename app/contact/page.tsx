import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"

export const metadata = {
  title: "Contact Us | Trinity Chapel Ruiru",
  description:
    "Get in touch with Trinity Chapel Ruiru. Visit us, call us, or send us a message. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <LocationMap />
      </div>
    </div>
  )
}
