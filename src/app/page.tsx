import { Hero } from '@/components/sections/Hero'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { GroomBrideSection } from '@/components/sections/GroomBrideSection'
import { AkadResepsiSection } from '@/components/sections/AkadResepsiSection'
import { LoveStorySection } from '@/components/sections/LoveStorySection'
import { CountdownSection } from '@/components/sections/Countdown'
import { Gallery } from '@/components/sections/Gallery'
import { RsvpForm } from '@/components/sections/RsvpForm'
import { GuestbookSection } from '@/components/sections/Guestbook'
import { DonationSection } from '@/components/sections/Donation'
import { Footer } from '@/components/sections/Footer'
import { AudioPlayer } from '@/components/sections/AudioPlayer'
import { Reveal } from '@/components/ui/Reveal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Reveal direction="up" distance={50}>
        <QuoteSection />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <GroomBrideSection />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <AkadResepsiSection />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <CountdownSection />
      </Reveal>

      <Reveal direction="up" distance={60} delay={100}>
        <LoveStorySection />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <Gallery />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <RsvpForm />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <GuestbookSection />
      </Reveal>

      <Reveal direction="up" distance={50}>
        <DonationSection />
      </Reveal>

      <Reveal direction="up" distance={60} delay={150}>
        <Footer />
      </Reveal>

      <AudioPlayer />
    </main>
  )
}
