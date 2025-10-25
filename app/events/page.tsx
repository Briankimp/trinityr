import { EventsHero } from "@/components/events/events-hero"
import { EventsCalendar } from "@/components/events/events-calendar"
import { UpcomingEventsList } from "@/components/events/upcoming-events-list"

export const metadata = {
  title: "Events | Trinity Chapel Ruiru",
  description:
    "Join us for worship services, community events, and special gatherings at Trinity Chapel Ruiru. Stay connected with what's happening in our community.",
}

export default function EventsPage() {
  return (
    <div className="overflow-hidden">
      <EventsHero />
      <UpcomingEventsList />
      <EventsCalendar />
    </div>
  )
}
