import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-[#8A9A86]/10 p-6 hover-lift hover-glow ${className}`}>
      {children}
    </div>
  )
}
