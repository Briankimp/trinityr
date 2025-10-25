import { MinistriesHero } from "@/components/ministries/ministries-hero"
import { MinistriesGrid } from "@/components/ministries/ministries-grid"
import { GetInvolved } from "@/components/ministries/get-involved"

export const metadata = {
  title: "Ministries | Trinity Chapel Ruiru",
  description:
    "Discover your place in our community. Explore our vibrant ministries including Youth, Worship, Mental Health, Children's Church, Life Groups, and Outreach.",
}

export default function MinistriesPage() {
  return (
    <div className="overflow-hidden">
      <MinistriesHero />
      <MinistriesGrid />
      <GetInvolved />
    </div>
  )
}
