export interface Guest {
  id: string
  name: string
  phone: string
  is_attending: boolean
  number_of_guests: number
  created_at: string
}

export interface Guestbook {
  id: string
  name: string
  message: string
  created_at: string
}

export interface GiftTransaction {
  id: string
  guest_name: string
  amount: number
  stripe_session_id: string
  status: string
  created_at: string
}

export interface RsvpFormData {
  name: string
  phone: string
  is_attending: boolean
  number_of_guests: number
  note: string
}

export interface GuestbookFormData {
  name: string
  message: string
}
