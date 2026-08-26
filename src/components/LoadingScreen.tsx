'use client'

import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        loading ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-600 [animation-delay:-0.3s]" />
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-600 [animation-delay:-0.15s]" />
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-600" />
        </div>
        <p className="mt-4 font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-black">
          PERFECT WEBCRAFT
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
