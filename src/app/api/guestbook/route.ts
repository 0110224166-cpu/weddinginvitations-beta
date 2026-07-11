import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.name || !body.message) {
      return NextResponse.json(
        { error: 'Nama dan ucapan wajib diisi' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: body.name, message: body.message }])

    if (error) {
      return NextResponse.json(
        { error: 'Gagal menyimpan doa' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Doa berhasil dikirim' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
