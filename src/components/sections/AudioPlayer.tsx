'use client'

import { useState, useEffect } from 'react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showUnmute, setShowUnmute] = useState(false)

  useEffect(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => setShowUnmute(true)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const toggleAudio = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null
    if (!audio) return

    if (audio.paused) {
      audio.play().catch(() => setShowUnmute(true))
    } else {
      audio.pause()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={toggleAudio}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8A9A86] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow group"
      >
        {isPlaying ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
            <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      {showUnmute && (
        <p className="text-xs text-center text-[#8A9A86] mt-1">Klik untuk putar musik</p>
      )}
    </div>
  )
}
