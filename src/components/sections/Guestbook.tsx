'use client'

import { useState, useEffect } from 'react'
import { getSupabase } from '@/lib/supabaseClient'
import type { Guestbook } from '@/types'
import { wedding } from '@/data/wedding'

export function GuestbookSection() {
  const [messages, setMessages] = useState<Guestbook[]>(
    wedding.guestbookSamples.map((s, i) => ({
      id: String(i + 1),
      name: s.name,
      message: s.message,
      created_at: new Date(s.date).toISOString(),
    }))
  )
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    fetchMessages()

    const sb = getSupabase()
    const channel = sb
      .channel('guestbook-realtime')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'guestbook',
      }, (payload) => {
        setMessages((prev) => [payload.new as Guestbook, ...prev])
      })
      .subscribe()

    return () => {
      sb.removeChannel(channel)
    }
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await getSupabase()
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Error fetching messages:', error)
    } else if (data) {
      setMessages(data)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await getSupabase()
        .from('guestbook')
        .insert([{ name, message }])

      if (error) {
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        setMessage('')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="guestbook"
      className="relative py-12 md:py-24 px-4 bg-[#EDE5D0] overflow-hidden section-pattern"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/bg-watercolor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/[0.02] via-transparent to-[#8A9A86]/[0.02] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14 animate-fade-in-up">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#5B6440] tracking-wide mb-3">
            Wishes
          </h2>
          <p className="text-[#8A9A86] text-sm md:text-base font-light">
            Berikan doa dan harapan terbaik untuk pernikahan kami
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <form onSubmit={handleSubmit} className="space-y-4 mb-10 md:mb-14">
            <div>
              <label className="block text-sm md:text-base font-semibold text-[#5B6440] mb-1.5 tracking-wide">
                Nama
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Isikan Nama Anda"
                className="w-full px-4 py-3 rounded-lg border border-[#000] bg-white text-[#000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B6440]/20 focus:border-[#5B6440] transition-all text-sm md:text-base hover:border-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-semibold text-[#5B6440] mb-1.5 tracking-wide">
                Pesan
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Berikan Ucapan Dan Doa Restu"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[#000] bg-white text-[#000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B6440]/20 focus:border-[#5B6440] transition-all resize-none text-sm md:text-base hover:border-gray-400"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-3.5 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-medium text-sm animate-fade-in-up">
                Terima kasih! Doa Anda telah terkirim.
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
              className="inline-flex items-center justify-center gap-2 bg-[#5B6440] text-white px-8 py-3 rounded-full hover:bg-[#000] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Mengirim...
                </span>
              ) : 'Kirimkan Ucapan'}
            </button>
          </form>
        </div>

        <div className="animate-fade-in-up animate-delay-300">
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-[#8A9A86]/80 text-sm">
                Belum ada ucapan. Jadilah yang pertama!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#8A9A86]/20 hover-lift hover-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#8A9A86]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#8A9A86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-[#5B6440] text-sm">{msg.name}</span>
                    </div>
                    <span className="text-[#3D9A62] text-xs animate-heart-beat inline-block">
                      <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[#8A9A86] text-sm md:text-base leading-relaxed pl-10">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
