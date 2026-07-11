'use client'

import { ArchFrame } from '@/components/ui/PhotoFrame'
import { FloralDivider, HeartDecoration, FlowerDecoration, LeafDecoration } from '@/components/ui/ornaments'
import { wedding } from '@/data/wedding'

export function Footer() {
  return (
    <>
      <section className="relative py-12 md:py-24 px-4 bg-[#EDE5D0] overflow-hidden section-pattern">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.03] via-transparent to-[#8A9A86]/[0.03] pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 text-[#8A9A86]/5 animate-float-slow">
            <FlowerDecoration size={32} />
          </div>
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 text-[#8A9A86]/5 animate-float-slow" style={{ animationDelay: '1s' }}>
            <FlowerDecoration size={28} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <HeartDecoration className="mx-auto mb-4 opacity-60" size={20} />

            <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-2">
              Turut Mengundang
            </h2>

            <div className="w-16 h-px bg-[#8A9A86]/40 mx-auto my-4 md:my-6" />

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 md:p-7 shadow-sm border border-[#8A9A86]/10 hover-lift transition-all duration-500 max-w-md mx-auto">
                <p className="text-[#8A9A86] text-xs font-semibold uppercase tracking-[0.15em] mb-2">Keluarga Mempelai Pria</p>
                <p className="font-['Playfair_Display'] text-base md:text-xl font-bold text-[#5B6440]">
                  Bpk H. Ahmad Firmansyah &amp; Ibu Rina Marlina
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 md:p-7 shadow-sm border border-[#8A9A86]/10 hover-lift transition-all duration-500 max-w-md mx-auto">
                <p className="text-[#8A9A86] text-xs font-semibold uppercase tracking-[0.15em] mb-2">Keluarga Mempelai Wanita</p>
                <p className="font-['Playfair_Display'] text-base md:text-xl font-bold text-[#5B6440]">
                  Bpk Ir. H. Dedi Hermawan &amp; Ibu Dra. Hj. Yuni Astuti
                </p>
              </div>

              <div className="pt-2">
                <LeafDecoration className="mx-auto mb-3" />
                <p className="text-[#8A9A86] text-sm md:text-base italic font-light">
                  Serta Seluruh Keluarga, Saudara, dan Sahabat
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <FloralDivider />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-28 px-4 bg-[#5B6440] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img src="/images/bg-watercolor.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/10 rounded-full animate-twinkle" />
          <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white/10 rounded-full animate-twinkle" style={{ animationDelay: '0.7s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/10 rounded-full animate-twinkle" style={{ animationDelay: '1.4s' }} />
          <div className="absolute bottom-10 right-1/4 w-1.5 h-1.5 bg-white/10 rounded-full animate-twinkle" style={{ animationDelay: '2.1s' }} />

          <div className="absolute top-1/4 right-[10%] text-white/[0.03] animate-float-slow">
            <FlowerDecoration size={48} />
          </div>
          <div className="absolute bottom-1/4 left-[10%] text-white/[0.03] animate-float-slow" style={{ animationDelay: '1.5s' }}>
            <FlowerDecoration size={36} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-6 md:mb-10">
              <ArchFrame
                imageSrc="/images/footer-bg.jpg"
                altText="See You on Our Big Day"
                className="mb-6 md:mb-8"
              />
            </div>

            <div className="w-12 h-px bg-white/20 mx-auto mb-5 md:mb-7" />

            <HeartDecoration className="mx-auto mb-3 md:mb-4" size={22} />

            <h3 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold mb-3 md:mb-4 tracking-wide text-white">
              See You on Our Big Day
            </h3>

            <div className="w-12 h-px bg-white/20 mx-auto my-4 md:my-6" />

            <p className="font-['Playfair_Display'] text-xl md:text-3xl font-bold tracking-wide text-[#D4AF37]">
              {wedding.couple.groom} &amp; {wedding.couple.bride}
            </p>

            <div className="mt-6 md:mt-8">
              <p className="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase font-light">
                Terima kasih atas doa dan restunya
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
