import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { AboutPreview } from "@/components/home/about-preview" // Added import for AboutPreview
import { MissionSection } from "@/components/home/mission-section"
import { FeaturedMinistries } from "@/components/home/featured-ministries"
import { UpcomingEvents } from "@/components/home/upcoming-events"
import { CallToAction } from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <WelcomeSection />
      <AboutPreview />
      <MissionSection />
      <FeaturedMinistries />
      <UpcomingEvents />
      <CallToAction />
    </div>
  )
}
