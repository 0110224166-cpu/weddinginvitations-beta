import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null
let missingEnvWarningShown = false

function createSupabaseClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined' && !missingEnvWarningShown) {
      missingEnvWarningShown = true
      console.warn('Supabase env vars not configured. Guestbook & RSVP features disabled.')
    }
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

export function getSupabase(): SupabaseClient | null {
  if (supabaseClient === undefined) {
    supabaseClient = createSupabaseClient()
  }
  return supabaseClient
}
