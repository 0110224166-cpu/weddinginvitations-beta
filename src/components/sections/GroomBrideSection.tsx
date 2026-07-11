'use client'

import { ArchFrame } from '@/components/ui/PhotoFrame'
import { FloralDivider } from '@/components/ui/ornaments'
import { wedding } from '@/data/wedding'

export function GroomBrideSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 bg-white overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.02] via-transparent to-[#8A9A86]/[0.02] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide">
            Groom &amp; Bride
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="text-center animate-fade-in-up animate-delay-200 group">
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <ArchFrame imageSrc="/images/groom.jpg" altText={wedding.couple.groom} />
            </div>
            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#5B6440] mb-1 transition-colors duration-300 group-hover:text-[#D4AF37]">
              {wedding.couple.groom}
            </h3>
            <p className="text-[#D4AF37] text-sm md:text-base font-medium mb-2">
              {wedding.couple.fullGroom}
            </p>
            <p className="text-[#8A9A86] text-sm md:text-base leading-relaxed">
              Putra dari<br />
              <span className="font-semibold">{wedding.parents.groom}</span>
            </p>
          </div>

          <div className="text-center animate-fade-in-up animate-delay-400 group">
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <ArchFrame imageSrc="/images/bride.jpg" altText={wedding.couple.bride} />
            </div>
            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#5B6440] mb-1 transition-colors duration-300 group-hover:text-[#D4AF37]">
              {wedding.couple.bride}
            </h3>
            <p className="text-[#D4AF37] text-sm md:text-base font-medium mb-2">
              {wedding.couple.fullBride}
            </p>
            <p className="text-[#8A9A86] text-sm md:text-base leading-relaxed">
              Putri dari<br />
              <span className="font-semibold">{wedding.parents.bride}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-12">
          <FloralDivider />
        </div>
      </div>
    </section>
  )
}
