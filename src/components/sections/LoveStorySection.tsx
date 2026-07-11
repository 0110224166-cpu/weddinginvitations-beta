'use client'

import { wedding } from '@/data/wedding'

export function LoveStorySection() {
  return (
    <section className="relative py-12 md:py-24 px-4 bg-[#5B6440] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-white tracking-wide">
            Love Story
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#8A9A86]/20 -translate-x-1/2" />

          {wedding.loveStory.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-center mb-6 md:mb-12 animate-fade-in-up ${
                item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 ${item.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="bg-white rounded-xl p-4 md:p-6 border border-[#8A9A86]/10 shadow-sm hover-lift hover-glow transition-all duration-300">
                  <span className="inline-block bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.date}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-base md:text-lg font-bold text-[#5B6440] mb-2 transition-colors duration-300 hover:text-[#D4AF37]">
                    {item.title}
                  </h3>
                  <p className="text-[#8A9A86] text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#5B6440] shadow transition-all duration-300 hover:scale-150 hover:bg-[#8A9A86]" />
              </div>

              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
