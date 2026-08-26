import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeadingReveal } from '@/components/HeadingReveal'

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <HeadingReveal
              eyebrow="Selected Work • Coming Soon"
              title="Fresh Production Case Studies Dropping Soon."
              subtitle="We take confidentiality and pixel perfection seriously. Recent client builds are currently finishing their launch cycles before full showcase publication."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Start Your Project
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
                Want your project in our next showcase?
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Skip the agency bureaucracy. Get thoughtful design, bespoke Next.js engineering, and guaranteed 99/100 performance with zero stress.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition"
                >
                  Start Your Project Brief →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
