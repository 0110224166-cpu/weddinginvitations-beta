import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-300'
  
  const variants = {
    primary: 'bg-[#5B6440] text-white hover:bg-[#000] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#5B6440]',
    secondary: 'bg-[#5B6440] text-white hover:bg-[#2c1d1a] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[#5B6440]',
    outline: 'border-2 border-[#5B6440] text-[#5B6440] hover:bg-[#5B6440] hover:text-white hover:shadow-lg focus:ring-[#5B6440]',
  }
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
