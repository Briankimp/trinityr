import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { Timeline } from "@/components/about/timeline"
import { MissionVision } from "@/components/about/mission-vision"
import { Leadership } from "@/components/about/leadership"
import { JoinFamily } from "@/components/about/join-family"

export const metadata = {
  title: "About Us | Trinity Chapel Ruiru",
  description:
    "Learn about Trinity Chapel Ruiru's journey, mission, vision, and the leadership team guiding our community of faith.",
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Timeline />
      <Leadership />
      <JoinFamily />
    </div>
  )
}
