import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabaseClient'
import type { RsvpFormData } from '@/types'

export async function POST(request: Request) {
  try {
    const body: RsvpFormData = await request.json()

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Nama dan nomor WhatsApp wajib diisi' },
        { status: 400 }
      )
    }

    const { error } = await getSupabase()
      .from('guests')
      .insert([{
        name: body.name,
        phone: body.phone,
        is_attending: body.is_attending,
        number_of_guests: body.is_attending ? body.number_of_guests : 0,
      }])

    if (error) {
      return NextResponse.json(
        { error: 'Gagal menyimpan data RSVP' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'RSVP berhasil disimpan' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
