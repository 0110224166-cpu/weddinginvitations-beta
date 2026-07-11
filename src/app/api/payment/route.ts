import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  try {
    const { amount, guestName } = await request.json()

    if (!amount || !guestName) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'idr',
            product_data: {
              name: 'Hadiah Pernikahan',
              description: `Hadiah untuk Ahmad & Siti dari ${guestName}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/?payment=success`,
      cancel_url: `${request.headers.get('origin')}/?payment=cancelled`,
      metadata: {
        guest_name: guestName,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json(
      { error: 'Gagal membuat sesi pembayaran' },
      { status: 500 }
    )
  }
}
