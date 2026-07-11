'use client'

import { useState } from 'react'

export function RsvpForm() {
  const [name, setName] = useState('')
  const [kehadiran, setKehadiran] = useState('Akan Hadir')
  const [jumlah, setJumlah] = useState('-')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, kehadiran, jumlah }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
        setKehadiran('Akan Hadir')
        setJumlah('-')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="rsvp"
      className="relative py-12 md:py-24 px-4 bg-white overflow-hidden section-pattern"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-3">
            RSVP
          </h2>
          <p className="text-[#8A9A86] text-sm md:text-base font-light">
            Mohon untuk mengisi form di bawah ini
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm md:text-base font-semibold text-[#5B6440] mb-1.5 tracking-wide">
                Nama
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                className="w-full px-4 py-3 rounded-lg border border-[#000] bg-white text-[#000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B6440]/20 focus:border-[#5B6440] transition-all text-sm md:text-base hover:border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold text-[#5B6440] mb-1.5 tracking-wide">
                Kehadiran
              </label>
              <select
                value={kehadiran}
                onChange={(e) => setKehadiran(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#000] bg-white text-[#000] focus:outline-none focus:ring-2 focus:ring-[#5B6440]/20 focus:border-[#5B6440] transition-all text-sm md:text-base hover:border-gray-400"
              >
                <option value="Akan Hadir">Akan Hadir</option>
                <option value="Tidak Akan Hadir">Tidak Akan Hadir</option>
              </select>
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold text-[#5B6440] mb-1.5 tracking-wide">
                Jumlah
              </label>
              <select
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#000] bg-white text-[#000] focus:outline-none focus:ring-2 focus:ring-[#5B6440]/20 focus:border-[#5B6440] transition-all text-sm md:text-base hover:border-gray-400"
              >
                <option value="-">-</option>
                <option value="1 Orang">1 Orang</option>
                <option value="2 Orang">2 Orang</option>
              </select>
            </div>

            {submitStatus === 'success' && (
              <div className="p-3.5 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-medium text-sm animate-fade-in-up">
                Terima kasih! Konfirmasi kehadiran Anda telah berhasil dikirim.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center font-medium text-sm animate-fade-in-up">
                Maaf, terjadi kesalahan. Silakan coba lagi.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5B6440] text-white py-3 rounded-full hover:bg-[#000] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base font-medium disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Mengirim...
                </span>
              ) : 'Konfirmasi'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
