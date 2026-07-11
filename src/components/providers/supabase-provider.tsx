'use client'

import { ReactNode } from 'react'
import { supabase } from '@/lib/supabaseClient'

export function SupabaseProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
