'use client'

import { ReactNode } from 'react'
import { getSupabase } from '@/lib/supabaseClient'

export function SupabaseProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
