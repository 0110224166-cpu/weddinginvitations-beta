'use client'

import { MapPin } from 'lucide-react'
import { FloralDivider } from '@/components/ui/ornaments'
import { wedding } from '@/data/wedding'

export function AkadResepsiSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 bg-[#EDE5D0] overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-6">
            Akad Nikah
          </h2>
          <p className="text-[#8A9A86] font-semibold text-sm md:text-base">
            {wedding.akad.day}, {wedding.akad.date}
          </p>
          <p className="text-[#8A9A86] text-sm md:text-base mt-1">
            Pukul : {wedding.akad.time}
          </p>
          <p className="text-[#5B6440] text-sm md:text-base mt-2 font-medium">
            {wedding.akad.venue}
          </p>

          <a
            href={wedding.akad.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-6 py-2.5 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base mt-6 group"
          >
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium tracking-wide">Google Maps</span>
          </a>
        </div>

        <FloralDivider className="mb-8 md:mb-14" />

        <div className="text-center mb-8 md:mb-14 animate-fade-in-up animate-delay-200">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-6">
            Resepsi
          </h2>
          <p className="text-[#8A9A86] font-semibold text-sm md:text-base">
            {wedding.resepsi.day}, {wedding.resepsi.date}
          </p>
          <p className="text-[#8A9A86] text-sm md:text-base mt-1">
            Pukul : {wedding.resepsi.time}
          </p>
          <p className="text-[#5B6440] text-sm md:text-base mt-2 font-medium">
            {wedding.resepsi.venue}
          </p>

          <a
            href={wedding.resepsi.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-6 py-2.5 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base mt-6 group"
          >
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium tracking-wide">Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  )
}
