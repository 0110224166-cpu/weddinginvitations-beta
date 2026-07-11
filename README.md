# Wedding Invitation

Digital wedding invitation website — single-page application built with Next.js, React, Supabase, and Tailwind CSS.

## Tech Stack

| Tech | Version | Purpose |
|---|---|---|
| Next.js | 16.2.10 | React framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Supabase | 2.110.2 | Database (guestbook, RSVP) |
| Stripe | 22 | Payment processing |
| Framer Motion | 12 | Animations |
| lucide-react | 1 | Icons |
| react-countdown | 2 | Countdown timer |
| yet-another-react-lightbox | 3 | Photo gallery lightbox |

## Features

- Hero cover with groom/bride photo and "Buka Undangan" entry
- Quote section (Al-Quran verse)
- Groom & Bride introduction with photos
- Wedding ceremony & reception details with Google Maps link
- Countdown timer to the event
- Photo gallery with lightbox
- RSVP form
- Guestbook (realtime via Supabase)
- Wedding gift / digital donation (Stripe & bank transfer)
- Background music player
- Fully responsive design
- Animated entry sections using Tailwind keyframes
- Watercolor nature background pattern
- Color palette: Sage Green, Olive Drab, Soft Cream, Champagne Gold

## Sections

| Section | Component | Description |
|---|---|---|
| Hero | `Hero.tsx` | Fullscreen cover with overlay |
| Quote | `QuoteSection.tsx` | Inspirational verse |
| Groom & Bride | `GroomBrideSection.tsx` | Couple introduction with photos |
| Akad Nikah | `AkadResepsiSection.tsx` | Ceremony & reception details |
| Countdown | `Countdown.tsx` | Live countdown |
| Love Story | `LoveStorySection.tsx` | Timeline of couple's journey |
| Gallery | `Gallery.tsx` | Photo grid with lightbox |
| RSVP | `RsvpForm.tsx` | Attendance confirmation form |
| Wishes | `Guestbook.tsx` | Guest messages (realtime) |
| Wedding Gift | `Donation.tsx` | Bank info & Stripe payment |
| Footer | `Footer.tsx` | Closing section with couple names |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── guestbook/route.ts
│   │   ├── payment/route.ts
│   │   └── rsvp/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── providers/
│   │   └── supabase-provider.tsx
│   ├── sections/
│   │   ├── AkadResepsiSection.tsx
│   │   ├── AudioPlayer.tsx
│   │   ├── Countdown.tsx
│   │   ├── Donation.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── GroomBrideSection.tsx
│   │   ├── Guestbook.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── LoveStorySection.tsx
│   │   ├── QuoteSection.tsx
│   │   └── RsvpForm.tsx
│   └── ui/
│       ├── PhotoFrame.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── ornaments.tsx
│       └── textarea.tsx
├── data/
│   └── wedding.ts
├── lib/
│   ├── supabaseClient.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Available variables:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | For guestbook/RSVP | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | For guestbook/RSVP | Supabase anonymous key |
| `STRIPE_SECRET_KEY` | For donations | Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For donations | Stripe publishable key |

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Customization

All wedding content is managed in `src/data/wedding.ts`. Edit that file to change:

- Couple names and titles
- Parents names
- Wedding dates, times, venues
- Google Maps links
- Love story timeline entries
- Bank account details and address
- Guestbook sample messages

## API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/rsvp` | POST | Submit RSVP response |
| `/api/guestbook` | GET/POST | Fetch & submit guestbook messages |
| `/api/payment` | POST | Create Stripe checkout session |

## Deployment

Supports any Next.js-compatible hosting platform (Vercel, Netlify, Railway, etc.).

```bash
npm run build
```

Deploy the `.next` output directory using your preferred platform.

## Network Access (Development)

To test on mobile devices, the dev server allows connections from `192.168.1.19`. The app is accessible at:

```
http://192.168.1.19:3000
```
