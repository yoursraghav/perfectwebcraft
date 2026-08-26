'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  {
    label: 'Custom Web Design & Build',
    sub: 'Tailored websites & modern applications',
    href: '/services/custom-development',
  },
  {
    label: 'Design Systems & UI/UX',
    sub: 'Clean components & brand aesthetics',
    href: '/services/design-systems',
  },
  {
    label: 'Cloud Infrastructure & Hosting',
    sub: 'Fast, secure & managed deployment',
    href: '/services/cloud-hosting',
  },
  {
    label: 'Ongoing Growth & Support',
    sub: 'Regular improvements & proactive care',
    href: '/services/ongoing-maintenance',
  },
]

const pricingLinks = [
  {
    label: 'Curated Packages',
    sub: 'Launchpad, Growth & Studio tiers',
    href: '/pricing#plans',
  },
  {
    label: 'Custom Project Estimate',
    sub: 'Tailored timeline & fixed deliverables',
    href: '/pricing#custom',
  },
  {
    label: 'Frequently Asked Questions',
    sub: 'Transparent process & timeline details',
    href: '/pricing#faq',
  },
]

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/95 backdrop-blur-xl shadow-xs'
          : 'border-slate-200 bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group" aria-label="PerfectWebCraft Home">
          <div className="relative h-8 w-8 transition-transform duration-200 group-hover:scale-105 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-slate-300">
            <Image
              src="/logomain.png"
              alt="PerfectWebCraft Logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="font-['Space_Grotesk',sans-serif] text-base font-bold tracking-tight text-black select-none">
            PerfectWebCraft
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="nav-link-hover flex items-center gap-1.5 text-sm font-medium text-slate-800 transition-colors hover:text-black py-2"
            >
              Services
              <svg
                className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-red-600' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="dropdown-transition absolute left-0 top-full w-80 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl backdrop-blur-xl">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-red-50 group"
                  >
                    <div className="text-xs font-semibold text-black group-hover:text-red-600">{item.label}</div>
                    <div className="mt-0.5 text-[11px] text-slate-600">{item.sub}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setPricingOpen(true)}
            onMouseLeave={() => setPricingOpen(false)}
          >
            <Link
              href="/pricing"
              className="nav-link-hover flex items-center gap-1.5 text-sm font-medium text-slate-800 transition-colors hover:text-black py-2"
            >
              Pricing
              <svg
                className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${pricingOpen ? 'rotate-180 text-red-600' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {pricingOpen && (
              <div className="dropdown-transition absolute left-0 top-full w-72 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl backdrop-blur-xl">
                {pricingLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-red-50 group"
                  >
                    <div className="text-xs font-semibold text-black group-hover:text-red-600">{item.label}</div>
                    <div className="mt-0.5 text-[11px] text-slate-600">{item.sub}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="nav-link-hover text-sm font-medium text-slate-800 transition-colors hover:text-black"
          >
            Portfolio
          </Link>

          <Link
            href="/resources"
            className="nav-link-hover text-sm font-medium text-slate-800 transition-colors hover:text-black"
          >
            Resources
          </Link>

          <Link
            href="/contact"
            className="nav-link-hover text-sm font-medium text-slate-800 transition-colors hover:text-black"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/20 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center rounded-md p-2 text-black hover:text-red-600 focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="dropdown-transition border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            <Link
              href="/services"
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/portfolio"
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/resources"
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 shadow-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
