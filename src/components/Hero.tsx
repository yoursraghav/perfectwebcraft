'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'



const targetText = 'PerfectWebCraft'
const totalDurationMs = 3000

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const stepInterval = totalDurationMs / targetText.length
    let currentLength = 0

    const timer = setInterval(() => {
      currentLength += 1
      if (currentLength <= targetText.length) {
        setDisplayText(targetText.slice(0, currentLength))
      } else {
        setIsDone(true)
        clearInterval(timer)
      }
    }, stepInterval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden max-w-full border-b border-slate-200 bg-white"
    >
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      <div className="studio-glow top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 bg-red-500 opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-5xl flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:pt-32 lg:px-8">
        <h1 className="w-full font-bold tracking-tight text-black select-none text-[clamp(2.4rem,6vw,5.2rem)] leading-tight font-['Space_Grotesk',sans-serif] min-h-[1.2em] flex items-center justify-center">
          <span>{displayText}</span>
          <span className={`typewriter-cursor ${isDone ? 'opacity-70' : 'opacity-100'}`} />
        </h1>

        <p className="hero-sub-reveal mx-auto mt-6 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-slate-700 font-['Inter',sans-serif]">
          We design and build bespoke digital experiences, modern websites, and scalable
          web platforms for thoughtful, ambitious brands.
        </p>

        <div className="hero-cta-reveal mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-red-600/25 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            Start Your Project →
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-2xs transition hover:border-red-600 hover:text-red-600 hover:bg-red-50/50"
          >
            Explore Recent Work
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero
