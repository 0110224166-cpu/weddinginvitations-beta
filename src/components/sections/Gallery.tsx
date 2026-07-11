'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
  '/images/gallery-12.jpg',
]

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden section-pattern">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.02] via-transparent to-[#8A9A86]/[0.02] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-4">
            Our Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[2/3] overflow-hidden rounded-lg cursor-pointer group shadow-sm hover:shadow-md transition-all duration-500"
              onClick={() => {
                setCurrentIndex(index)
                setOpen(true)
              }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-200 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map(src => ({ src }))}
        index={currentIndex}
      />
    </section>
  )
}
