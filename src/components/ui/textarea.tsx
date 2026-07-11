import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#5B6440] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 rounded-lg border border-[#8A9A86]/20 bg-white text-[#5B6440] placeholder:text-[#8A9A86]/40 focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-transparent transition-all resize-none ${error ? 'border-red-400' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
