'use client'

import { ArchFrame } from '@/components/ui/PhotoFrame'

export function QuoteSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 bg-white overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.02] via-transparent to-[#8A9A86]/[0.02] pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <p className="font-['Poppins'] text-[10px] md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 text-[#8A9A86]/70 italic">
            The Wedding Of
          </p>
          <ArchFrame
            imageSrc="/images/quote-bg.jpg"
            altText="Rizky & Dewi"
            className="mb-4 md:mb-8"
          />

          <p className="font-['Playfair_Display'] text-sm md:text-xl text-[#5B6440] leading-relaxed mb-4 italic animate-fade-in-up animate-delay-200">
            &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
          </p>
          <p className="text-[#8A9A86] text-sm md:text-base font-semibold tracking-wide animate-fade-in-up animate-delay-400">
            (QS. Ar-Rum : 21)
          </p>
        </div>
      </div>
    </section>
  )
}
