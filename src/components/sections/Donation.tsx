'use client'

import { useState } from 'react'
import { wedding } from '@/data/wedding'

export function DonationSection() {
  const [showAmplop, setShowAmplop] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert(`"${text}" telah disalin ke clipboard`)
  }

  return (
    <section className="relative py-12 md:py-24 px-4 bg-[#EDE5D0] overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.02] via-transparent to-[#8A9A86]/[0.02] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-3">
            Wedding Gift
          </h2>
          <p className="text-[#8A9A86] text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed px-4">
            Doa restu dan kedatangan Anda ke pernikahan kami sudah cukup bagi kami. Namun jika anda ingin memberikan kado, kami menyediakan Amplop Digital untuk memudahkan anda.
          </p>
        </div>

        <div className="text-center animate-fade-in-up animate-delay-200">
          <button
            onClick={() => setShowAmplop(!showAmplop)}
            className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-8 py-3 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base group"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            {showAmplop ? 'Tutup' : 'Kirim Gift'}
          </button>
        </div>

        {showAmplop && (
          <div className="mt-10 md:mt-14 space-y-6 animate-fade-in-up">
            <div className="bg-[#F9F6F0] rounded-xl p-5 md:p-7 shadow-md border border-[#8A9A86]/10 text-center hover-lift hover-glow transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-block w-3 h-3 rounded-full bg-[#8A9A86]/30" />
                <p className="font-['Playfair_Display'] text-lg font-bold text-[#5B6440]">{wedding.donation.groom.name}</p>
              </div>
              <p className="font-['Poppins'] text-[#000] text-lg font-semibold mb-4 tracking-widest">{wedding.donation.groom.number}</p>
              <button
                onClick={() => copyToClipboard(wedding.donation.groom.number)}
                className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-5 py-2 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Salin No. Rekening
              </button>
            </div>

            <div className="bg-[#F9F6F0] rounded-xl p-5 md:p-7 shadow-md border border-[#8A9A86]/10 text-center hover-lift hover-glow transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-block w-3 h-3 rounded-full bg-[#8A9A86]/30" />
                <p className="font-['Playfair_Display'] text-lg font-bold text-[#5B6440]">{wedding.donation.bride.name}</p>
              </div>
              <p className="font-['Poppins'] text-[#000] text-lg font-semibold mb-4 tracking-widest">{wedding.donation.bride.number}</p>
              <button
                onClick={() => copyToClipboard(wedding.donation.bride.number)}
                className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-5 py-2 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Salin No. Rekening
              </button>
            </div>

            <div className="bg-[#F9F6F0] rounded-xl p-5 md:p-7 shadow-md border border-[#8A9A86]/10 text-center hover-lift hover-glow transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="inline-block w-3 h-3 rounded-full bg-[#8A9A86]/30" />
                <p className="font-['Playfair_Display'] text-lg font-bold text-[#5B6440]">ALAMAT PENGIRIMAN HADIAH</p>
              </div>
              <p className="text-[#8A9A86] text-sm md:text-base mb-1">Penerima : {wedding.couple.groom} &amp; {wedding.couple.bride}</p>
              <p className="text-[#8A9A86] text-sm md:text-base mb-4 leading-relaxed">
                {wedding.donation.address}
              </p>
              <button
                onClick={() => copyToClipboard(wedding.donation.address)}
                className="inline-flex items-center gap-2 bg-[#5B6440] text-white px-5 py-2 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Salin Alamat
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
