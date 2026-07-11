'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 700,
  direction = 'up',
  distance = 40,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)'
    switch (direction) {
      case 'up': return `translate(0, ${distance}px)`
      case 'down': return `translate(0, ${-distance}px)`
      case 'left': return `translate(${distance}px, 0)`
      case 'right': return `translate(${-distance}px, 0)`
      default: return 'translate(0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 100,
  baseDelay = 0,
}: {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  baseDelay?: number
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Reveal key={index} delay={baseDelay + index * staggerDelay}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
