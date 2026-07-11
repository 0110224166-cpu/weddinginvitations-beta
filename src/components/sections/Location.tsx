'use client'

// import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { FloralDivider, FlowerDecoration, HeartDecoration } from '@/components/ui/ornaments'

export function Location() {
  const venueName = 'The Ritz-Carlton Ballroom'
  const address = 'Jl. Bundaran HI, Jakarta Pusat, DKI Jakarta 10200'
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

  return (
    <section
      id="location"
      className="relative py-16 md:py-28 px-4 bg-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-5">
              <FlowerDecoration size={22} />
              <h2 className="font-['Playfair_Display'] text-2xl md:text-5xl font-bold text-[#5B6440] tracking-wide">
                Lokasi Acara
              </h2>
              <FlowerDecoration size={22} />
            </div>
            <FloralDivider className="my-3 md:my-5" />
            <p className="text-[#8A9A86] text-sm md:text-lg font-light max-w-xl mx-auto px-4">
              Mohon hadir tepat waktu
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-6">
          <div
            className="md:col-span-3 bg-white rounded-xl md:rounded-2xl shadow-md border border-[#8A9A86]/10 overflow-hidden"
          >
            <div className="aspect-video w-full bg-[#8A9A86]/10 relative">
              <iframe
                title="Lokasi Acara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.195139799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e534e7b5%3A0x5027b6dc8c8c8c8c!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          <div
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-md border border-[#8A9A86]/10 p-5 md:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#8A9A86]/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 bg-[#8A9A86]/10 rounded-full">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#8A9A86]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-[#5B6440]">
                    {venueName}
                  </h3>
                </div>
                
                <p className="text-[#8A9A86] leading-relaxed text-xs md:text-sm mb-5">
                  {address}
                </p>

                <FloralDivider className="mb-5" />

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8A9A86] text-white px-5 py-2.5 rounded-full hover:bg-[#5B6440] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm w-full justify-center"
                >
                  <Navigation className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="font-medium tracking-wide">Buka di Google Maps</span>
                </a>

                <div className="mt-4 pt-4 border-t border-[#8A9A86]/10 flex items-center gap-2 text-[#8A9A86]/70">
                  <HeartDecoration size={14} className="text-[#8A9A86]" />
                  <p className="text-xs">Dress code: Formal / Smart Casual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-transparent to-white z-10 pointer-events-none" />
    </section>
  )
}
