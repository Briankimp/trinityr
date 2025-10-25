import { GiveHero } from "@/components/give/give-hero"
import { WhyGive } from "@/components/give/why-give"
import { GivingOptions } from "@/components/give/giving-options"
import { ImpactOfGiving } from "@/components/give/impact-of-giving"
import { GivingFAQ } from "@/components/give/giving-faq"

export const metadata = {
  title: "Give | Trinity Chapel Ruiru",
  description:
    "Support the mission of Trinity Chapel Ruiru through your generous giving. Your contributions help us grow deep and reach wide.",
}

export default function GivePage() {
  return (
    <div className="overflow-hidden">
      <GiveHero />
      <WhyGive />
      <GivingOptions />
      <ImpactOfGiving />
      <GivingFAQ />
    </div>
  )
}
