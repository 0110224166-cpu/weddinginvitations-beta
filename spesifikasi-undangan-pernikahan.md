# SPESIFIKASI PROYEK: UNDANGAN PERNIKAHAN DIGITAL FULL-STACK

**Nama Proyek:** Wedding Invitation App
**Tujuan:** Membuat undangan digital interaktif dengan manajemen tamu, RSVP, buku tamu real-time, dan integrasi donasi.

---

## 1. Arsitektur & Tech Stack (Final)

Untuk menghindari kompleksitas berlebihan tanpa mengorbankan skalabilitas, kita akan menggunakan arsitektur **Next.js + Supabase** (bukan Express/GraphQL terpisah).

| Lapisan | Teknologi | Fungsi |
| --- | --- | --- |
| **Frontend** | Next.js 14+ (App Router) + TypeScript | Rendering halaman (Server & Client Component), SEO, dan Routing. |
| **Styling** | Tailwind CSS + Shadcn/ui | Desain responsif dan komponen siap pakai (modal, form, button). |
| **Animasi** | Framer Motion & AOS | Animasi scroll dan transisi halaman yang halus. |
| **Backend (API)** | Next.js API Routes (Node.js) | Endpoint untuk memproses data RSVP dan donasi (keamanan token). |
| **Database & Auth** | Supabase (PostgreSQL) | Menyimpan data tamu, RSVP, doa. Juga menyediakan Real-time Subscriptions untuk buku tamu. |
| **Storage** | Supabase Storage | Menyimpan gambar/foto undangan (diakses via public URL). |
| **Pembayaran** | Stripe | Menerima sumbangan/hadiah digital (via Payment Link atau Checkout). |
| **Deployment** | Vercel | Auto-deploy dari repository GitHub. |

---

## 2. Struktur Folder Proyek

Buat project dengan struktur berikut agar agent mudah menavigasi:

```
wedding-invitation/
├── public/
│   └── images/                    (Foto-foto statis, favicon)
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx           (Halaman Utama Undangan)
│   │   │   ├── api/
│   │   │   │   ├── rsvp/
│   │   │   │   │   └── route.ts   (POST untuk simpan RSVP)
│   │   │   │   ├── guestbook/
│   │   │   │   │   └── route.ts   (POST untuk simpan doa)
│   │   │   │   └── payment/
│   │   │   │       └── route.ts   (Buat Stripe Checkout Session)
│   │   │   └── layout.tsx         (Root layout dengan metadata)
│   │   ├── components/
│   │   │   ├── ui/                (Komponen dasar: Button, Input, Card)
│   │   │   ├── sections/          (Bagian-bagian besar halaman)
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Countdown.tsx
│   │   │   │   ├── Gallery.tsx
│   │   │   │   ├── Location.tsx
│   │   │   │   ├── RsvpForm.tsx
│   │   │   │   └── Guestbook.tsx
│   │   │   └── providers/         (Supabase Client Provider)
│   │   ├── lib/
│   │   │   ├── supabaseClient.ts  (Inisialisasi Supabase)
│   │   │   └── utils.ts           (Format tanggal, dll)
│   │   └── types/
│   │       └── index.ts           (Interface TypeScript: Guest, Rsvp, dll)
├── .env.local                     (Environment Variables)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 3. Desain Database (Supabase)

Buat 3 tabel di dalam **SQL Editor** Supabase.

### Tabel 1: `guests` (Data Tamu Undangan)

| Kolom | Tipe Data | Keterangan |
| --- | --- | --- |
| `id` | uuid (PK) | Default `gen_random_uuid()` |
| `name` | text | Nama tamu |
| `phone` | text | Nomor WhatsApp |
| `is_attending` | boolean | Apakah hadir? |
| `number_of_guests` | int | Jumlah orang yang dibawa |
| `created_at` | timestamp | Default `now()` |

### Tabel 2: `guestbook` (Buku Tamu / Doa) — REALTIME

| Kolom | Tipe Data | Keterangan |
| --- | --- | --- |
| `id` | uuid (PK) | Default `gen_random_uuid()` |
| `name` | text | Nama pengirim doa |
| `message` | text | Isi doa/ucapan |
| `created_at` | timestamp | Default `now()` |

> **WAJIB**: Aktifkan **Realtime** untuk tabel `guestbook` di Supabase Dashboard (Database → Replication).

### Tabel 3: `gift_transactions` (Riwayat Donasi)

| Kolom | Tipe Data | Keterangan |
| --- | --- | --- |
| `id` | uuid (PK) | Default `gen_random_uuid()` |
| `guest_name` | text | Nama pemberi |
| `amount` | int | Jumlah (dalam Rupiah) |
| `stripe_session_id` | text | ID dari Stripe |
| `status` | text | `'pending'` atau `'success'` |
| `created_at` | timestamp | Default `now()` |

---

## 4. Komposisi Layout Halaman Utama (Dari Atas ke Bawah)

Halaman `page.tsx` harus terdiri dari 6 seksi utama. Semua seksi kecuali Hero wajib memiliki efek **fade-in** saat discroll (menggunakan Framer Motion atau AOS).

### 1. Hero Section (Cover)
- **Background:** Foto pre-wedding utama (full-width, height: 100vh).
- **Overlay:** Gradien hitam tipis di bagian bawah agar teks terbaca.
- **Konten:** Nama mempelai (font serif/elegan), tanggal pernikahan, dan kalimat pembuka "We're Getting Married".
- **Tombol:** "Buka Undangan" (smooth scroll ke Countdown).

### 2. Countdown Timer
- **Background:** Solid warna netral (misal: putih atau krem).
- **Fitur:** Timer hitung mundur menuju tanggal acara (hari, jam, menit, detik).
- **Gaya:** Angka besar dengan latar belakang kotak transparan, dipisahkan oleh titik dua (`:`).

### 3. Galeri Foto
- **Layout:** Grid 2 kolom di desktop, 1 kolom di mobile.
- **Interaksi:** Saat foto diklik, munculkan Lightbox/Modal untuk melihat foto ukuran penuh.
- **Asset:** Gunakan format `.webp` untuk menghemat ukuran. Pastikan total ukuran per foto < 200KB.

### 4. Lokasi & Peta Acara
- **Informasi:** Nama venue, alamat lengkap.
- **Peta:** Embed Google Maps atau Leaflet dengan marker lokasi.
- **Tombol Aksi:** "Buka di Google Maps" (menggunakan link navigasi `https://www.google.com/maps/dir/?api=1&destination=...`).

### 5. RSVP (Konfirmasi Kehadiran)
- **Form:** Nama (input text), Jumlah Tamu (number), Kehadiran (Radio: Hadir / Tidak Hadir).
- **Catatan:** Textarea opsional untuk alergi makanan atau permintaan khusus.
- **Submit:** Kirim data ke API `/api/rsvp` lalu tampilkan toast notifikasi sukses.

### 6. Buku Tamu & Doa (Guestbook) — REALTIME
- **Form Doa:** Nama (Input) dan Ucapan (Textarea).
- **Tombol Kirim:** Kirim ke API `/api/guestbook`.
- **Daftar Doa:** Tampilkan semua doa yang sudah masuk di bawah form.
- **Realtime:** Saat admin atau orang lain mengirim doa dari perangkat lain, daftar di halaman ini harus langsung berubah tanpa reload (menggunakan `supabase.channel()`).
- **Pagination:** Tampilkan 10 doa terbaru (urutkan `created_at DESC`).

---

## 5. Langkah Implementasi (Untuk Agent)

Ikuti langkah-langkah berikut secara berurutan.

### Fase 1: Inisialisasi & Instalasi

```bash
npx create-next-app@latest wedding-invitation --typescript --tailwind --app
```

Install dependencies tambahan:

```bash
npm install @supabase/supabase-js framer-motion react-countdown react-image-lightbox stripe @stripe/stripe-js
npm install -D @types/node
```

### Fase 2: Setup Supabase
1. Buat akun di Supabase dan buat project baru.
2. Jalankan 3 query SQL (seperti pada poin 3) untuk membuat tabel.
3. Di Dashboard Supabase:
   - Aktifkan Realtime untuk tabel `guestbook`.
   - Ambil Project URL dan anon/public key.

### Fase 3: Environment Variables

Buat file `.env.local` di root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Fase 4: Koneksi Supabase

Buat `src/lib/supabaseClient.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Fase 5: Implementasi API Routes
- `/api/guestbook/route.ts`: Terima `name` dan `message` via POST, lalu insert ke tabel `guestbook`. Validasi agar tidak kosong.
- `/api/rsvp/route.ts`: Terima data form, insert ke tabel `guests`.
- `/api/payment/route.ts`: Buat session Stripe Checkout dan redirect user ke halaman pembayaran.

### Fase 6: Implementasi UI (Server + Client Component)

> **Perhatikan:** Komponen yang menggunakan `useState`, `useEffect`, atau `onClick` WAJIB diberi `'use client'` di baris paling atas.

**Guestbook (Real-time):**

Fetch data awal menggunakan:
```typescript
supabase.from('guestbook').select('*').order('created_at', { ascending: false })
```

Setup subscription:
```typescript
useEffect(() => {
  const channel = supabase
    .channel('guestbook-realtime')
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'guestbook'
    }, (payload) => {
      // Tambahkan payload.new ke state messages
    })
    .subscribe()

  return () => { supabase.removeChannel(channel) }
}, [])
```

**Countdown:** Hitung selisih waktu target (tanggal pernikahan) dengan `Date.now()`, update setiap 1 detik menggunakan `setInterval`.

### Fase 7: Integrasi Pembayaran (Stripe)
1. Buat produk di Dashboard Stripe atau gunakan `price_id` tertentu.
2. Di halaman undangan, tambahkan tombol "Kirim Hadiah".
3. Saat diklik, panggil API `/api/payment` yang mengembalikan `session.url`, lalu arahkan user ke sana (`window.location.href`).

### Fase 8: Deployment ke Vercel
1. Push kode ke repository GitHub.
2. Hubungkan repo ke Vercel.
3. Tambahkan semua environment variables (`NEXT_PUBLIC_*` dan `STRIPE_SECRET_KEY`) di Dashboard Vercel.
4. Deploy.

---

## 6. Kriteria Kelulusan (Acceptance Criteria)

- [ ] Halaman tampil sempurna di semua ukuran layar (Mobile First).
- [ ] Countdown menunjukkan waktu yang akurat.
- [ ] Foto galeri dapat diklik dan memperbesar (Lightbox).
- [ ] Lokasi menampilkan peta yang interaktif.
- [ ] Form RSVP berhasil menyimpan data dan menampilkan notifikasi.
- [ ] Form Doa berhasil menyimpan data dan daftar doa langsung terupdate di semua perangkat yang membuka undangan (Real-time).
- [ ] Tombol donasi mengarahkan ke halaman pembayaran Stripe yang valid.
- [ ] Performance Score (Lighthouse) > 90.

---

## 7. Catatan Tambahan

- **Warna Theme:** Gunakan palet Earth Tone — `#F5E6D3` untuk background, `#8B5A2B` untuk aksen emas, dan `#3E2723` untuk teks.
- **Font:** Gunakan Google Fonts — Playfair Display untuk judul, Poppins atau Inter untuk body.
- **Optimasi Gambar:** Gunakan komponen `next/image` untuk otomatis optimasi gambar.

---

*Selesai. Silakan Agent memulai eksekusi dari Fase 1.*
