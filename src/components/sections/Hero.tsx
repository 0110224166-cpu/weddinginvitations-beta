'use client'

import { useEffect, useState } from 'react'
import { ArchFrame } from '@/components/ui/PhotoFrame'
import { OrnamentCorner, FloralDivider } from '@/components/ui/ornaments'
import { wedding } from '@/data/wedding'

export function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [guestName, setGuestName] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('kepada') || ''
    setGuestName(name)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }, [isOpen])

  const openInvitation = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(true)
      const audio = document.getElementById('bg-music') as HTMLAudioElement | null
      audio?.play().catch(() => {})
    }, 600)
  }

  if (isOpen) {
    return (
      <>
        <audio id="bg-music" loop preload="none">
          <source src="/audio/bg-music.mp3" type="audio/mpeg" />
        </audio>
        <div className="h-0 overflow-hidden" aria-hidden="true" />
      </>
    )
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all ease-in-out ${
          isClosing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        style={{ transitionDuration: '600ms' }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <OrnamentCorner position="top-left" />
        <OrnamentCorner position="top-right" />
        <OrnamentCorner position="bottom-left" />
        <OrnamentCorner position="bottom-right" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-twinkle" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 max-w-lg mx-auto">

          <div className="mb-3 md:mb-8 animate-fade-in-up">
            <ArchFrame
              imageSrc="/images/quote-bg.jpg"
              altText={`${wedding.couple.groom} & ${wedding.couple.bride}`}
            />
          </div>

          <div className="space-y-2 md:space-y-4">
            <p className="font-['Poppins'] text-[11px] md:text-base tracking-[0.2em] uppercase text-white/80 italic animate-fade-in-up">
              The Wedding Of
            </p>

            <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#D4AF37] animate-fade-in-up animate-delay-100">
              {wedding.couple.groom} &amp; {wedding.couple.bride}
            </h1>

            <p className="text-xs md:text-base text-white/70 font-light tracking-widest animate-fade-in-up animate-delay-200">
              {wedding.hero.dateDisplay}
            </p>

            <div className="py-2 md:py-3">
              <FloralDivider />
            </div>

            <div className="animate-fade-in-up animate-delay-300">
              <p className="text-white/80 text-[11px] md:text-sm mb-1">Kpd Bpk/Ibu/Saudara/i</p>
              {guestName ? (
                <p className="text-white font-medium text-sm md:text-base">{decodeURIComponent(guestName)}</p>
              ) : (
                <p className="text-white/70 text-[11px] md:text-sm">Yth. Tamu Undangan</p>
              )}
            </div>

            <button
              onClick={openInvitation}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/40 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-500 mt-3 md:mt-5 animate-fade-in-up animate-delay-500 group"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs md:text-sm tracking-widest uppercase font-light group-hover:tracking-[0.15em] transition-all duration-500">Buka Undangan</span>
            </button>
          </div>
        </div>
      </div>

      <audio id="bg-music" loop preload="none">
        <source src="/audio/bg-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}
