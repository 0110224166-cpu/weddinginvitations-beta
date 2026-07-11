'use client'

import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { FloralDivider } from '@/components/ui/ornaments'
import { wedding } from '@/data/wedding'

const CountdownItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center group">
    <div className="px-2 py-2 md:px-5 md:py-4 min-w-[45px] md:min-w-[80px] transition-all duration-300 group-hover:-translate-y-1">
      <span className="font-['Poppins'] text-xl md:text-[45px] font-normal text-[#000] block transition-colors duration-300">
        {value}
      </span>
    </div>
    <span className="font-['Poppins'] text-[10px] md:text-sm text-[#000] mt-0.5 md:mt-1 uppercase tracking-[0.1em] font-normal">
      {label}
    </span>
  </div>
)

const Separator = () => (
  <span className="font-['Poppins'] text-xl md:text-[45px] font-normal text-black/30 mx-0 md:mx-1">
    :
  </span>
)

export function CountdownSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="flex items-center justify-center flex-wrap gap-0">
      <CountdownItem value={String(days).padStart(2, '0')} label="Days" />
      <Separator />
      <CountdownItem value={String(hours).padStart(2, '0')} label="Hours" />
      <Separator />
      <CountdownItem value={String(minutes).padStart(2, '0')} label="Minutes" />
      <Separator />
      <CountdownItem value={String(seconds).padStart(2, '0')} label="Seconds" />
    </div>
  )

  return (
    <section className="relative py-12 md:py-24 px-4 bg-[#EDE5D0] overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-3 animate-fade-in-up">
            Menuju Hari Bahagia
          </h2>
          <p className="text-[#8A9A86] text-xs md:text-base mb-6 md:mb-10 max-w-md mx-auto leading-relaxed font-light px-4 animate-fade-in-up animate-delay-200">
            Siang dan malam berganti begitu cepat, di antara saat-saat mendebarkan yang belum pernah kami rasakan sebelumnya. Kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari yang bahagia
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-300">
          {mounted ? (
            <Countdown date={wedding.resepsi.countdownTarget} renderer={renderer} />
          ) : (
            <div className="flex items-center justify-center flex-wrap gap-0">
              <CountdownItem value="00" label="Days" />
              <Separator />
              <CountdownItem value="00" label="Hours" />
              <Separator />
              <CountdownItem value="00" label="Minutes" />
              <Separator />
              <CountdownItem value="00" label="Seconds" />
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-12">
          <FloralDivider />
        </div>
      </div>
    </section>
  )
}
