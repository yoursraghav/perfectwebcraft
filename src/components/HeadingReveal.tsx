'use client'

import { useEffect, useState } from 'react'

interface HeadingRevealProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function HeadingReveal({ eyebrow, title, subtitle, align = 'left' }: HeadingRevealProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = title.split(' ')

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className="overflow-hidden mb-3">
          <span
            className={`inline-block font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h1 className="font-['Space_Grotesk',sans-serif] text-4xl font-extrabold tracking-tight text-black sm:text-6xl flex flex-wrap gap-x-[0.3em] gap-y-1 items-baseline">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1">
            <span
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{
                transform: mounted ? 'translateY(0)' : 'translateY(110%) rotate(2deg)',
                opacity: mounted ? 1 : 0,
                transitionDelay: `${index * 55 + 100}ms`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </h1>

      {subtitle && (
        <div className="overflow-hidden mt-6">
          <p
            className={`text-lg leading-8 text-slate-700 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: `${words.length * 55 + 180}ms` }}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}

export default HeadingReveal
