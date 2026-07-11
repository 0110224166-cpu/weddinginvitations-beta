import React from 'react'

export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="text-[#8A9A86] animate-float" style={{ animationDelay: '0.2s' }}>
        <path d="M20 10C20 10 15 5 10 5C5 5 0 10 0 10C0 10 5 15 10 15C15 15 20 10 20 10Z" fill="currentColor" opacity="0.4"/>
        <circle cx="40" cy="10" r="2.5" fill="currentColor"/>
        <path d="M0 10H5M75 10H80" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <path d="M20 10C20 10 25 5 30 5C35 5 40 10 40 10C40 10 35 15 30 15C25 15 20 10 20 10Z" fill="currentColor" opacity="0.4"/>
      </svg>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37] animate-heart-beat">
        <path d="M12 2L14 10H22L16 14L18 22L12 18L6 22L8 14L2 10H10L12 2Z" fill="currentColor"/>
      </svg>
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="text-[#8A9A86] animate-float" style={{ animationDelay: '0.4s' }}>
        <path d="M60 10C60 10 55 5 50 5C45 5 40 10 40 10C40 10 45 15 50 15C55 15 60 10 60 10Z" fill="currentColor" opacity="0.4"/>
        <circle cx="40" cy="10" r="2.5" fill="currentColor"/>
        <path d="M0 10H5M75 10H80" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    </div>
  )
}

export function HeartDecoration({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-[#8A9A86] ${className} hover:scale-110 transition-transform duration-300`}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

export function FlowerDecoration({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`text-[#8A9A86] ${className} hover:rotate-45 transition-transform duration-500`}>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <circle cx="12" cy="5" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="12" cy="19" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="5" cy="12" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="19" cy="12" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="7.5" cy="7.5" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="16.5" cy="7.5" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="7.5" cy="16.5" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="16.5" cy="16.5" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

export function OrnamentCorner({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotations = {
    'top-left': 'rotate-0',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }

  return (
    <div className={`absolute ${position === 'top-left' || position === 'bottom-left' ? 'left-4 md:left-10' : 'right-4 md:right-10'} ${position === 'top-left' || position === 'top-right' ? 'top-4 md:top-10' : 'bottom-4 md:bottom-10'} pointer-events-none ${rotations[position]}`}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="text-[#8A9A86]/15">
        <path d="M0 0L140 0L140 25C140 25 100 50 70 70C40 90 20 140 20 140L0 140L0 0Z" fill="currentColor"/>
        <circle cx="25" cy="25" r="4" fill="currentColor" opacity="0.6"/>
        <path d="M0 0L50 50M0 25L25 50M25 0L50 25" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
        <circle cx="70" cy="70" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    </div>
  )
}

export function WeddingRings({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-[#8A9A86]">
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5"/>
        <circle cx="50" cy="50" r="4" fill="currentColor"/>
        <path d="M50 18L53 12M50 18L47 12M50 82L53 88M50 82L47 88M18 50L12 53M18 50L12 47M82 50L88 53M82 50L88 47" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    </div>
  )
}

export function LeafDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="240" height="24" viewBox="0 0 240 24" fill="none" className="text-[#8A9A86]/40">
        <path d="M0 12Q60 0 120 12Q180 24 240 12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="60" cy="8" r="2.5" fill="currentColor"/>
        <circle cx="120" cy="12" r="2.5" fill="currentColor"/>
        <circle cx="180" cy="8" r="2.5" fill="currentColor"/>
        <path d="M60 8L65 3M60 8L55 3M120 12L125 7M120 12L115 7M180 8L185 3M180 8L175 3" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    </div>
  )
}

export function FloatingFlowers({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute top-20 left-10 text-[#8A9A86]/10 animate-float-slow" style={{ animationDelay: '0s' }}>
        <FlowerDecoration size={40} />
      </div>
      <div className="absolute top-40 right-20 text-[#8A9A86]/10 animate-float-slow" style={{ animationDelay: '0.5s' }}>
        <FlowerDecoration size={32} />
      </div>
      <div className="absolute bottom-20 left-20 text-[#8A9A86]/10 animate-float-slow" style={{ animationDelay: '1s' }}>
        <HeartDecoration size={36} />
      </div>
      <div className="absolute bottom-40 right-10 text-[#8A9A86]/10 animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <FlowerDecoration size={28} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-[#8A9A86]/5 animate-float-slow" style={{ animationDelay: '2s' }}>
        <HeartDecoration size={48} />
      </div>
      <div className="absolute top-1/3 right-1/3 text-[#8A9A86]/5 animate-float-slow" style={{ animationDelay: '2.5s' }}>
        <FlowerDecoration size={36} />
      </div>
    </div>
  )
}
